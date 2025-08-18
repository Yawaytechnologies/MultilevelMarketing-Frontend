// src/pages/distributor/Dashboard.jsx
import React, { useMemo, useState } from "react";
import {
  LayoutDashboard, TreePine, ShoppingBag, Wallet, ReceiptText,
  Users, HelpCircle, LogOut, ArrowLeftRight, Crown, Zap, TrendingUp, X, Copy
} from "lucide-react";
import BinaryTree from "../components/distributor/BinaryTree";

const ACCENT = "#FF6B2B";

/* Initial demo tree (you can replace with API data later) */
const initialTree = {
  id: "U1001",
  name: "You",
  rank: "Silver",
  pv: 320,
  status: "Active",
  left: {
    id: "U1012",
    name: "Anika",
    rank: "Bronze",
    pv: 180,
    status: "Active",
    left: { id: "U1030", name: "Ravi", rank: "—", pv: 40, status: "New" },
    right: { id: "U1031", name: "Sam", rank: "—", pv: 20, status: "Inactive" },
  },
  right: {
    id: "U1013",
    name: "Dev",
    rank: "Bronze",
    pv: 200,
    status: "Active",
    left: { id: "U1032", name: "Maya", rank: "—", pv: 60, status: "Active" },
    right: { id: "U1033", name: "Irfan", rank: "—", pv: 35, status: "New" },
  },
};

export default function DistributorDashboard() {
  const [tree, setTree] = useState(initialTree);
  const [selectedId, setSelectedId] = useState(tree.id);
  const [scale, setScale] = useState(1);

  // add-member dialog state
  const [showAdd, setShowAdd] = useState(false);
  const [candidateName, setCandidateName] = useState("");
  const [leg, setLeg] = useState("Left"); // Left / Right
  const [credentials, setCredentials] = useState(null); // {id, password}

  const stats = useMemo(() => ([
    { label: "Personal PV", value: "320", icon: Zap, tone: "bg-orange-100 text-orange-700" },
    { label: "Team PV", value: "1,240", icon: TrendingUp, tone: "bg-emerald-100 text-emerald-700" },
    { label: "Active Legs", value: "2", icon: ArrowLeftRight, tone: "bg-sky-100 text-sky-700" },
    { label: "Rank", value: "Silver", icon: Crown, tone: "bg-amber-100 text-amber-700" },
  ]), []);

  // -------- utilities --------
  const allIds = useMemo(() => {
    const ids = new Set();
    (function walk(n){ if(!n) return; ids.add(n.id); walk(n.left); walk(n.right); })(tree);
    return ids;
  }, [tree]);

  function genId() {
    // Unique-ish U + 6 digits; ensure not colliding with existing IDs
    let id;
    do { id = "U" + Math.floor(100000 + Math.random() * 900000); } while (allIds.has(id));
    return id;
  }
  function genPassword(len = 10) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$";
    return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }
  function findNode(n, id) {
    if (!n) return null;
    if (n.id === id) return n;
    return findNode(n.left, id) || findNode(n.right, id);
  }
  function clone(n) {
    if (!n) return n;
    return {
      ...n,
      left: clone(n.left),
      right: clone(n.right),
    };
  }
  function addUnder(root, targetId, side, newNode) {
    if (!root) return root;
    const r = clone(root);
    (function dfs(n) {
      if (!n) return false;
      if (n.id === targetId) {
        if (side === "Left") {
          if (n.left) throw new Error("Left leg already occupied.");
          n.left = newNode;
        } else {
          if (n.right) throw new Error("Right leg already occupied.");
          n.right = newNode;
        }
        return true;
      }
      return dfs(n.left) || dfs(n.right);
    })(r);
    return r;
  }

  const selectedNode = useMemo(() => findNode(tree, selectedId), [tree, selectedId]);
  const leftFree  = !selectedNode?.left;
  const rightFree = !selectedNode?.right;

  function openAddDialog(whichLeg = "Left") {
    setLeg(whichLeg);
    setCandidateName("");
    setShowAdd(true);
  }

  function handleAddSubmit(e) {
    e?.preventDefault?.();
    if (!candidateName.trim()) return;

    const newID = genId();
    const password = genPassword();

    const newNode = {
      id: newID,
      name: candidateName.trim(),
      pv: 0,
      rank: "—",
      status: "New",
      left: null,
      right: null,
    };

    try {
      const updated = addUnder(tree, selectedId, leg, newNode);
      setTree(updated);
      setShowAdd(false);
      setCredentials({ id: newID, password });
    } catch (err) {
      alert(err.message);
    }
  }

  function copy(t) {
    navigator.clipboard?.writeText(t);
  }

  return (
    <div className="min-h-[100svh] bg-neutral-50 text-neutral-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200 h-fit">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-md bg-orange-500 text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 10l8-6 8 6M4 16l8-6 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="font-extrabold">LAKSHRA</div>
          </div>

          <nav className="mt-6 space-y-1 text-[15px]">
            <NavItem icon={LayoutDashboard} label="Overview" active />
            <NavItem icon={TreePine} label="Genealogy Tree" />
            <NavItem icon={ShoppingBag} label="Orders" />
            <NavItem icon={Wallet} label="Wallet & Payouts" />
            <NavItem icon={ReceiptText} label="Reports" />
            <NavItem icon={Users} label="My Team" />
            <NavItem icon={HelpCircle} label="Support" />
          </nav>

          <button className="mt-6 inline-flex w-full items-center gap-2 rounded-xl bg-neutral-100 px-4 py-2.5 text-sm font-semibold hover:bg-neutral-200">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </aside>

        {/* Main */}
        <section>
          <header className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-xl font-bold">Dashboard</h1>
                <p className="text-sm text-neutral-600">
                  Select a member on the tree, then add a recruit under Left or Right.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => openAddDialog("Left")}
                  disabled={!leftFree}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold border ${leftFree ? "bg-white border-neutral-300 hover:bg-neutral-50" : "bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed"}`}
                >
                  Add to Left
                </button>
                <button
                  onClick={() => openAddDialog("Right")}
                  disabled={!rightFree}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold border ${rightFree ? "bg-white border-neutral-300 hover:bg-neutral-50" : "bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed"}`}
                >
                  Add to Right
                </button>
                <div className="rounded-xl bg-white px-3 py-2 ring-1 ring-neutral-200">
                  <span className="mr-2 text-sm font-semibold">Zoom:</span>
                  <input
                    type="range"
                    min="0.6"
                    max="1.4"
                    step="0.02"
                    value={scale}
                    onChange={(e) => setScale(parseFloat(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-4 ring-1 ring-neutral-200 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className={`grid size-8 place-items-center rounded-lg ${s.tone}`}>
                    <s.icon className="h-4 w-4" />
                  </span>
                  <div className="text-sm text-neutral-600">{s.label}</div>
                </div>
                <div className="mt-1 text-2xl font-bold">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Tree */}
          <div className="mt-6 rounded-2xl bg-white p-3 ring-1 ring-neutral-200 shadow-sm">
            <h2 className="px-2 pt-2 text-lg font-semibold">Binary Genealogy</h2>
            <p className="px-2 pb-2 text-sm text-neutral-600">
              Click a node to select it. Selected: <span className="font-semibold">{selectedNode?.name}</span>
            </p>
            <div className="relative h-[520px] overflow-auto rounded-xl bg-neutral-50 ring-1 ring-neutral-200">
              <BinaryTree
                root={tree}
                scale={scale}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Add Member Dialog */}
      {showAdd && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 p-4">
          <form
            onSubmit={handleAddSubmit}
            className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Add Member under {selectedNode?.name}</h3>
              <button type="button" onClick={() => setShowAdd(false)} className="p-1 rounded hover:bg-neutral-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <label className="mt-4 block">
              <span className="mb-1 block text-sm font-medium">Full name</span>
              <input
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none"
                placeholder="Enter name"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                autoFocus
              />
            </label>

            <div className="mt-4">
              <span className="mb-1 block text-sm font-medium">Placement leg</span>
              <div className="flex items-center gap-2">
                <button type="button"
                  onClick={() => setLeg("Left")}
                  className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${leg==="Left"?"bg-neutral-900 text-white":"bg-neutral-100 hover:bg-neutral-200"}`}
                  disabled={!leftFree}
                >
                  Left {leftFree ? "" : " (filled)"}
                </button>
                <button type="button"
                  onClick={() => setLeg("Right")}
                  className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${leg==="Right"?"bg-neutral-900 text-white":"bg-neutral-100 hover:bg-neutral-200"}`}
                  disabled={!rightFree}
                >
                  Right {rightFree ? "" : " (filled)"}
                </button>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button type="button" onClick={() => setShowAdd(false)} className="rounded-lg border border-neutral-300 px-3 py-2">
                Cancel
              </button>
              <button type="submit" className="rounded-lg px-4 py-2 text-white" style={{ backgroundColor: ACCENT }}>
                Add Member
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Credentials modal */}
      {credentials && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Login credentials generated</h3>
              <button className="p-1 rounded hover:bg-neutral-100" onClick={() => setCredentials(null)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Share these with the new distributor. (You can change password after first login.)</p>

            <div className="mt-4 rounded-xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-neutral-500">Login ID</div>
                  <div className="font-mono text-lg">{credentials.id}</div>
                </div>
                <button className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 ring-1 ring-neutral-300"
                        onClick={() => copy(credentials.id)}>
                  <Copy className="h-4 w-4" /> Copy
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-neutral-500">Temporary password</div>
                  <div className="font-mono text-lg">{credentials.password}</div>
                </div>
                <button className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 ring-1 ring-neutral-300"
                        onClick={() => copy(credentials.password)}>
                  <Copy className="h-4 w-4" /> Copy
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="rounded-lg px-4 py-2 text-white" style={{ backgroundColor: ACCENT }}
                      onClick={() => setCredentials(null)}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- helpers ---------- */
function NavItem({ icon: Icon, label, active }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
        active ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"
      }`}
    >
      <Icon className="h-4 w-4" /> {label}
    </a>
  );
}
