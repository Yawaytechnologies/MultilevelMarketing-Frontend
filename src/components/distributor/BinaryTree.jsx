// src/pages/distributor/components/BinaryTree.jsx
import React, { useMemo } from "react";

/** Props:
 * root: {id,name,rank,pv,status,left?,right?}
 * scale: 0.6..1.4
 * selectedId: string
 * onSelect: (id)=>void
 */
export default function BinaryTree({ root, scale = 1, selectedId, onSelect }) {
  const SLOT_X = 180;
  const LEVEL_Y = 140;

  const { nodes, links, widthUnits, depth } = useMemo(() => layoutBinary(root), [root]);

  const widthPx = Math.max(1, widthUnits) * SLOT_X;
  const heightPx = (depth + 1) * LEVEL_Y + 160;

  return (
    <div
      className="relative mx-auto my-8"
      style={{
        width: widthPx * scale,
        height: heightPx * scale,
        transformOrigin: "0 0",
      }}
    >
      {/* Links */}
      <svg width={widthPx * scale} height={heightPx * scale} style={{ position: "absolute", inset: 0 }}>
        <g transform={`scale(${scale})`}>
          {links.map((l, i) => (
            <path
              key={i}
              d={`M${l.x1},${l.y1} C ${l.x1},${(l.y1 + l.y2) / 2} ${l.x2},${(l.y1 + l.y2) / 2} ${l.x2},${l.y2}`}
              stroke="rgba(0,0,0,.22)"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </g>
      </svg>

      {/* Nodes */}
      {nodes.map((n) => {
        const sel = n.id === selectedId;
        return (
          <button
            key={n.id}
            onClick={() => onSelect?.(n.id)}
            className={`absolute -translate-x-1/2 rounded-xl bg-white px-3 py-2 ring-1 shadow-sm hover:shadow-md ${
              sel ? "ring-orange-400" : "ring-neutral-200"
            }`}
            style={{
              left: n.x * scale,
              top: n.y * scale,
              width: 200 * scale,
              transform: `translateX(-50%) scale(${scale})`,
              transformOrigin: "top center",
              textAlign: "left",
            }}
            title={`${n.name} (${n.id})`}
          >
            <div className="text-[13px] font-semibold leading-none">{n.name}</div>
            <div className="mt-1 grid grid-cols-2 gap-1 text-xs text-neutral-600">
              <div>ID: {n.id}</div>
              <div className="text-right">PV: {n.pv ?? 0}</div>
            </div>
            <div className="mt-1 text-[11px] text-neutral-500">
              Rank: {n.rank ?? "—"} · {n.status ?? "—"}
            </div>
          </button>
        );
      })}
    </div>
  );

  // ---- layout ----
  function layoutBinary(rootNode) {
    const nodes = [];
    const links = [];

    function widthUnits(n) {
      if (!n) return 0;
      const lw = widthUnits(n.left);
      const rw = widthUnits(n.right);
      n._w = Math.max(1, lw + rw || 1);
      return n._w;
    }
    const total = widthUnits(rootNode);

    let maxDepth = 0;
    function place(n, depth, startX) {
      if (!n) return;
      maxDepth = Math.max(maxDepth, depth);
      const lw = n.left? n.left._w : 0;
      const rw = n.right? n.right._w : 0;
      const xCenter = startX + (n._w * SLOT_X) / 2;
      const y = depth * LEVEL_Y + 40;

      nodes.push({ id: n.id, name: n.name, pv: n.pv, rank: n.rank, status: n.status, x: xCenter, y });

      const childY = (depth + 1) * LEVEL_Y + 40;
      if (n.left) {
        const leftStart = startX;
        const cx = leftStart + (lw * SLOT_X) / 2;
        links.push({ x1: xCenter, y1: y + 64, x2: cx, y2: childY });
        place(n.left, depth + 1, leftStart);
      }
      if (n.right) {
        const rightStart = startX + (lw * SLOT_X);
        const cx = rightStart + (rw * SLOT_X) / 2;
        links.push({ x1: xCenter, y1: y + 64, x2: cx, y2: childY });
        place(n.right, depth + 1, rightStart);
      }
    }
    place(rootNode, 0, 0);

    return { nodes, links, widthUnits: Math.max(1, total), depth: maxDepth };
  }
}
