// src/pages/distributor/Genealogy.jsx
import React, { useMemo, useRef, useState } from "react";
import {
  LayoutDashboard, Wallet, ReceiptText, Users, HelpCircle, LogOut,
  TreePine, ShoppingBag, Search, ZoomIn, ZoomOut, RotateCcw, Move,
  Plus, X, ChevronLeft, ChevronRight, Mail, Lock, Calendar, Phone, Globe
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Demo data (replace with API data)                                   */
/* ------------------------------------------------------------------ */
const initialTree = {
  id: "U1000",
  username: "demouser",
  name: "demo user",
  pv: 0,
  rank: "—",
  status: "Active",
  avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=300&auto=format&fit=crop",
  left: {
    id: "U1001",
    username: "oliviaparker",
    name: "Olivia Parker",
    pv: 0, rank: "—", status: "—",
    avatar: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=300&auto=format&fit=crop",
    left: {
      id: "U1003",
      username: "ethanmitchell",
      name: "Ethan Mitchell",
      pv: 0, rank: "—", status: "—",
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop"
    },
    right: {
      id: "U1004",
      username: "sophiaclark",
      name: "Sophia Clark",
      pv: 0, rank: "—", status: "—",
      avatar: "https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=300&auto=format&fit=crop"
    }
  },
  right: {
    id: "U1002",
    username: "emmarussell",
    name: "Emma Russell",
    pv: 0, rank: "—", status: "—",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    left: {
      id: "U1005",
      username: "isabellawhite456",
      name: "Isabella White",
      pv: 0, rank: "—", status: "—",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop"
    },
    right: {
      id: "U1006",
      username: "masonhayes789",
      name: "Mason Hayes",
      pv: 0, rank: "—", status: "—",
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop"
    }
  }
};

/* ------------------------------------------------------------------ */
/* Helpers: layout, id/password, tree ops                              */
/* ------------------------------------------------------------------ */
function depthOf(n) {
  if (!n) return 0;
  return 1 + Math.max(depthOf(n.left), depthOf(n.right));
}

/** Measure “leaf units” so single-child trees still reserve space. */
function measure(n) {
  if (!n) return 1;
  const lw = measure(n.left);
  const rw = measure(n.right);
  n._widthUnits = (n.left || n.right) ? lw + rw : 1;
  return n._widthUnits;
}

/** Assign x/y in *units* (not pixels). Later we multiply for pixels. */
function assignPositions(n, depth, leftEdge) {
  if (!n) return null;
  const lw = n.left ? n.left._widthUnits : 1;
  const rw = n.right ? n.right._widthUnits : 1;
  const width = (n.left || n.right) ? lw + rw : 1;

  const xUnits = leftEdge + width / 2;
  const y = depth;

  const left = n.left ? assignPositions(n.left, depth + 1, leftEdge) : null;
  const right = n.right ? assignPositions(n.right, depth + 1, leftEdge + lw) : null;

  return {
    ...n,
    xUnits,
    y,
    left,
    right,
  };
}

/** Build a positioned copy of the tree. */
function mapTreePositions(root) {
  const clone = JSON.parse(JSON.stringify(root));
  const totalLeaves = measure(clone);
  const tree = assignPositions(clone, 0, 0);
  return { tree, totalLeaves };
}

function collectIds(n, set = new Set()) {
  if (!n) return set;
  set.add(n.id);
  collectIds(n.left, set);
  collectIds(n.right, set);
  return set;
}

function genId(existing) {
  let id;
  do {
    id = "U" + Math.floor(100000 + Math.random() * 900000);
  } while (existing.has(id));
  return id;
}


/** Pure functional insert: add under targetId on 'left' or 'right'. */
function addUnder(root, targetId, side, node) {
  if (!root) return root;
  const r = structuredClone(root);
  (function dfs(n) {
    if (!n) return false;
    if (n.id === targetId) {
      if (side === "left") {
        if (n.left) throw new Error("Left leg already filled.");
        n.left = node;
      } else {
        if (n.right) throw new Error("Right leg already filled.");
        n.right = node;
      }
      return true;
    }
    return dfs(n.left) || dfs(n.right);
  })(r);
  return r;
}

/* ------------------------------------------------------------------ */
/* UI pieces                                                           */
/* ------------------------------------------------------------------ */
const ACCENT = "#FF6B2B";

function Sidebar() {
  // Now Item just takes children (icon) and label
  const Item = ({ label, active, children }) => (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-xl px-3 py-2 text-[15px] ${
        active ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"
      }`}
    >
      {children}
      {label}
    </a>
  );

  return (
    <aside className="sticky top-0 h-[calc(100svh-24px)] rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
      <div className="flex items-center gap-3">
        <div className="grid size-9 place-items-center rounded-md bg-orange-500 text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 10l8-6 8 6M4 16l8-6 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="font-extrabold">LAKSHRA</div>
      </div>

      <nav className="mt-6 space-y-1">
        <Item label="Dashboard" active>
          <LayoutDashboard className="h-4 w-4" />
        </Item>
        <Item label="Business">
          <ShoppingBag className="h-4 w-4" />
        </Item>
        <Item label="Genealogy">
          <TreePine className="h-4 w-4" />
        </Item>
        <Item label="Financial">
          <Wallet className="h-4 w-4" />
        </Item>
        <Item label="Reports">
          <ReceiptText className="h-4 w-4" />
        </Item>
        <Item label="Members">
          <Users className="h-4 w-4" />
        </Item>
        <Item label="Support">
          <HelpCircle className="h-4 w-4" />
        </Item>
      </nav>

      <button className="mt-6 inline-flex w-full items-center gap-2 rounded-xl bg-neutral-100 px-4 py-2.5 text-sm font-semibold hover:bg-neutral-200">
        <LogOut className="h-4 w-4" /> Sign out
      </button>
    </aside>
  );
}


function NodeCard({ node, selectedId, onSelect }) {
  const selected = selectedId === node.id;
  return (
    <div
      onClick={(e) => { e.stopPropagation(); onSelect(node.id); }}
      className={`w-[160px] rounded-xl bg-white px-3 py-2 text-center ring-1 shadow-sm cursor-pointer
                  ${selected ? "ring-neutral-900" : "ring-neutral-200 hover:ring-neutral-300"}`}
    >
      <div className="mx-auto mb-1 size-10 overflow-hidden rounded-full ring-2 ring-white shadow">
        <img src={node.avatar} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="text-sm font-semibold truncate" title={node.username}>
        {node.username}
      </div>
      <div className="text-[11px] text-neutral-500">ID: {node.id}</div>
    </div>
  );
}

/* ------------------------------ Tree canvas (SVG links) ------------------------------ */
function TreeCanvas({ data, selectedId, onSelect, onAdd }) {
  const { tree, totalLeaves } = useMemo(() => mapTreePositions(data), [data]);

  // display constants
  const unitX = 220;                 // horizontal spacing per unit
  const cardTopOffset = 60;          // top padding
  const rowY = 130;                  // vertical spacing per depth row
  const cardCenterXShift = 80;       // center of 160px card

  const W = Math.max(totalLeaves * unitX + 220, 900);
  const H = cardTopOffset + rowY * (depthOf(tree));

  const [scale, setScale]   = useState(1);
  const [pan, setPan]       = useState({ x: 0, y: 0 });
  const drag = useRef({ on:false, ox:0, oy:0, sx:0, sy:0 });

  function nodePx(n) {
    const x = 110 + n.xUnits * unitX - cardCenterXShift;
    const y = cardTopOffset + n.y * rowY;
    return { x, y };
  }

  // pan/zoom
  function startDrag(e){ drag.current={on:true, ox:e.clientX, oy:e.clientY, sx:pan.x, sy:pan.y}; }
  function moveDrag(e){ if(!drag.current.on) return; setPan({ x: drag.current.sx + (e.clientX - drag.current.ox), y: drag.current.sy + (e.clientY - drag.current.oy) }); }
  function endDrag(){ drag.current.on=false; }
  function onWheel(e){ e.preventDefault(); setScale(s => Math.min(1.4, Math.max(0.6, s + (e.deltaY < 0 ? 0.08 : -0.08)))) }

  // collect edges & nodes
  const edges = [];
  const nodeElems = (function build(n){
    if(!n) return null;
    const pos = nodePx(n);
    if (n.left) {
      const lp = nodePx(n.left);
      edges.push({ x1: pos.x + cardCenterXShift, y1: pos.y + 40, x2: lp.x + cardCenterXShift, y2: lp.y });
    }
    if (n.right) {
      const rp = nodePx(n.right);
      edges.push({ x1: pos.x + cardCenterXShift, y1: pos.y + 40, x2: rp.x + cardCenterXShift, y2: rp.y });
    }

    return (
      <React.Fragment key={n.id}>
        <div className="absolute" style={{ left: pos.x, top: pos.y }}>
          <NodeCard node={n} selectedId={selectedId} onSelect={onSelect} />
          <div className="mt-1 flex items-center justify-center gap-2">
            <button
              onClick={(e)=>{ e.stopPropagation(); onAdd(n,"left"); }}
              className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs ring-1 ring-neutral-300 hover:bg-neutral-50"
            >
              <Plus className="h-4 w-4" /> Left
            </button>
            <button
              onClick={(e)=>{ e.stopPropagation(); onAdd(n,"right"); }}
              className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs ring-1 ring-neutral-300 hover:bg-neutral-50"
            >
              <Plus className="h-4 w-4" /> Right
            </button>
          </div>
        </div>

        {build(n.left)}
        {build(n.right)}
      </React.Fragment>
    );
  })(tree);

  return (
    <div className="relative h-[680px] overflow-hidden rounded-xl ring-1 ring-neutral-200 bg-white">
      {/* toolbar */}
      <div className="absolute right-2 top-2 z-20 flex items-center gap-1 rounded-lg bg-white/90 p-1 ring-1 ring-neutral-200 shadow-sm">
        <button className="rounded p-2 hover:bg-neutral-100" onClick={()=>setScale(s=>Math.min(1.4, s+0.08))}><ZoomIn className="h-4 w-4"/></button>
        <button className="rounded p-2 hover:bg-neutral-100" onClick={()=>setScale(s=>Math.max(0.6, s-0.08))}><ZoomOut className="h-4 w-4"/></button>
        <button className="rounded p-2 hover:bg-neutral-100" onClick={()=>{ setScale(1); setPan({x:0,y:0}); }}><RotateCcw className="h-4 w-4"/></button>
        <div className="mx-1 h-5 w-px bg-neutral-200" />
        <Move className="mx-1 h-4 w-4 text-neutral-500" />
      </div>

      <div
        className="absolute inset-0 cursor-grab"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onWheel={onWheel}
        onClick={() => onSelect(null)}
      >
        <div
          className="absolute"
          style={{ left: pan.x, top: pan.y, width: W, height: H, transform: `scale(${scale})`, transformOrigin: "0 0" }}
        >
          {/* ALL links live inside this SVG so they pan/zoom with nodes */}
          <svg className="absolute left-0 top-0" width={W} height={H}>
            {edges.map((e, i) => (
              <path
                key={i}
                d={`M ${e.x1} ${e.y1} C ${e.x1} ${e.y1 + 32}, ${e.x2} ${e.y2 - 32}, ${e.x2} ${e.y2}`}
                stroke="#CBD5E1"
                strokeWidth="2"
                fill="none"
              />
            ))}
          </svg>

          {/* Nodes on top */}
          {nodeElems}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Add User Modal ------------------------------- */
function AddUserModal({ open, onClose, parent, side = "left", onCreate }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");

  if (!open) return null;

  function submit(e) {
    e.preventDefault();
    if (pass !== confirm) { alert("Passwords do not match"); return; }
    if (!username) { alert("Username is required"); return; }

    onCreate({
      username,
      name: username,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(username)}&backgroundType=gradientLinear`,
      email, pass, dob, country, mobile
    });
  }

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 p-4">
      <form onSubmit={submit} className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Add User</h3>
          <button type="button" onClick={onClose} className="rounded p-1 hover:bg-neutral-100"><X className="h-5 w-5" /></button>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Select Referral</label>
            <div className="flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 text-sm">
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium">{parent?.username}</span>
              <span className="text-neutral-500">({parent?.id})</span>
              <span className="ml-auto rounded bg-neutral-900 px-2 py-0.5 text-[11px] font-semibold text-white">{side.toUpperCase()}</span>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <div className="flex items-center rounded-lg ring-1 ring-neutral-300 px-3">
              <Mail className="mr-2 h-4 w-4 text-neutral-500" />
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@example.com" className="h-10 w-full outline-none"/>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Username</label>
            <div className="flex items-center rounded-lg ring-1 ring-neutral-300 px-3">
              <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="newuser123" className="h-10 w-full outline-none"/>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <div className="flex items-center rounded-lg ring-1 ring-neutral-300 px-3">
              <Lock className="mr-2 h-4 w-4 text-neutral-500" />
              <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="••••••••" className="h-10 w-full outline-none"/>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Confirm Password</label>
            <div className="flex items-center rounded-lg ring-1 ring-neutral-300 px-3">
              <Lock className="mr-2 h-4 w-4 text-neutral-500" />
              <input value={confirm} onChange={(e)=>setConfirm(e.target.value)} type="password" placeholder="••••••••" className="h-10 w-full outline-none"/>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Date of birth</label>
            <div className="flex items-center rounded-lg ring-1 ring-neutral-300 px-3">
              <Calendar className="mr-2 h-4 w-4 text-neutral-500" />
              <input value={dob} onChange={(e)=>setDob(e.target.value)} type="date" className="h-10 w-full outline-none"/>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Country</label>
            <div className="flex items-center rounded-lg ring-1 ring-neutral-300 px-3">
              <Globe className="mr-2 h-4 w-4 text-neutral-500" />
              <input value={country} onChange={(e)=>setCountry(e.target.value)} placeholder="India" className="h-10 w-full outline-none"/>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Mobile</label>
            <div className="flex items-center rounded-lg ring-1 ring-neutral-300 px-3">
              <Phone className="mr-2 h-4 w-4 text-neutral-500" />
              <input value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="+91 98765 43210" className="h-10 w-full outline-none"/>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-end gap-2">
          <button type="button" onClick={onClose} className="rounded-lg border border-neutral-300 px-4 py-2">Close</button>
          <button type="submit" className="rounded-lg px-4 py-2 text-white" style={{ backgroundColor: ACCENT }}>Submit</button>
        </div>
      </form>
    </div>
  );
}

/* ------------------------------ Page ---------------------------------------- */
export default function GenealogyPage() {
  const [tree, setTree] = useState(initialTree);
  const [selectedId, setSelectedId] = useState(initialTree.id);
  const [modal, setModal] = useState({ open: false, parent: null, side: "left" });
  const sel = useMemo(() => findNode(tree, selectedId), [tree, selectedId]);

  function findNode(n, id) {
    if (!n) return null;
    if (n.id === id) return n;
    return findNode(n.left, id) || findNode(n.right, id);
  }

  function openAdd(parent, side) {
    setModal({ open: true, parent, side });
  }
  function createUser(payload) {
    const ids = collectIds(tree);
    const newId = genId(ids);
    const newNode = {
      id: newId,
      username: payload.username,
      name: payload.name,
      avatar: payload.avatar,
      pv: 0, rank: "—", status: "New",
      left: null, right: null,
    };
    try {
      const updated = addUnder(tree, modal.parent.id, modal.side, newNode);
      setTree(updated);
      setSelectedId(newId);
      setModal({ open: false, parent: null, side: "left" });
      // (Optional) you can show generated password somewhere:
      // const tempPass = genPassword();
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="min-h-[100svh] bg-neutral-50 px-3 mt-20 py-3 sm:px-4 sm:py-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-[270px_minmax(0,1fr)_320px]">
        <Sidebar />

        {/* Middle column */}
        <main className="rounded-2xl bg-white p-3 ring-1 ring-neutral-200">
          <div className="flex flex-wrap items-center justify-between gap-3 px-1">
            <div>
              <h1 className="text-lg font-bold">Binary: Genealogy</h1>
              <p className="text-sm text-neutral-600">
                Click a node to view details. Use pan/zoom or the toolbar.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center rounded-xl bg-neutral-50 px-3 ring-1 ring-neutral-200">
                <Search className="mr-2 h-4 w-4 text-neutral-500" />
                <input placeholder="Search by username…" className="h-9 w-56 bg-transparent outline-none" />
                <button className="ml-2 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-semibold text-white">Search</button>
                <button className="ml-2 rounded-lg border border-neutral-300 px-2 py-1.5 text-sm">Reset</button>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <TreeCanvas
              data={tree}
              selectedId={selectedId}
              onSelect={setSelectedId}
              onAdd={openAdd}
            />
          </div>
        </main>

        {/* Right panel (details) */}
        <aside className="space-y-3">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
            <div className="flex items-center gap-3">
              <div className="size-11 overflow-hidden rounded-full ring-2 ring-white shadow">
                <img src={sel?.avatar} alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-semibold leading-tight">{sel?.username}</div>
                <div className="text-xs text-neutral-500">@{sel?.username?.split(" ").join("").toLowerCase()}</div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <Info label="ID" value={sel?.id ?? "—"} />
              <Info label="PV" value={sel?.pv ?? "—"} />
              <Info label="RANK" value={sel?.rank ?? "—"} />
              <Info label="STATUS" value={sel?.status ?? "—"} />
              <Info label="DATE OF JOIN" value="—" />
              <Info label="WEEKLY BV (LEFT)" value="—" />
              <Info label="WEEKLY BV (RIGHT)" value="—" />
              <Info label="TOTAL BV (LEFT)" value="—" />
              <Info label="TOTAL BV (RIGHT)" value="—" />
              <Info label="TOTAL LEFT USERS" value="—" />
              <Info label="TOTAL RIGHT USERS" value="—" />
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <button
                onClick={() => openAdd(sel, "left")}
                className="inline-flex items-center gap-1 rounded-lg border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50"
              >
                <ChevronLeft className="h-4 w-4" /> Add Left
              </button>
              <button
                onClick={() => openAdd(sel, "right")}
                className="inline-flex items-center gap-1 rounded-lg border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50"
              >
                Add Right <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Modal */}
      <AddUserModal
        open={modal.open}
        parent={modal.parent}
        side={modal.side}
        onClose={() => setModal({ open:false, parent:null, side:"left" })}
        onCreate={createUser}
      />
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl border border-neutral-200 px-3 py-2">
      <div className="text-[11px] text-neutral-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
