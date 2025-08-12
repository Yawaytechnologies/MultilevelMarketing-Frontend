import React, { useMemo, useState } from "react";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Award, 
  Info, 
  ShoppingCart,
  Star,
  Target
} from "lucide-react";

const BRAND_COLOR = "#3B82F6";
const SECONDARY_COLOR = "#10B981";

// MLM Tier Structure
const RANK_TIERS = [
  { 
    id: "associate", 
    name: "Associate", 
    pvRequired: 100, 
    personalCommission: 0.25, 
    teamBonus: 0.02,
    levelDepth: 1,
    color: "#6B7280"
  },
  { 
    id: "consultant", 
    name: "Consultant", 
    pvRequired: 300, 
    personalCommission: 0.30, 
    teamBonus: 0.05,
    levelDepth: 2,
    color: "#8B5CF6"
  },
  { 
    id: "leader", 
    name: "Team Leader", 
    pvRequired: 750, 
    personalCommission: 0.35, 
    teamBonus: 0.08,
    levelDepth: 3,
    color: "#F59E0B"
  },
  { 
    id: "director", 
    name: "Director", 
    pvRequired: 1500, 
    personalCommission: 0.40, 
    teamBonus: 0.12,
    levelDepth: 4,
    color: "#EF4444"
  },
  { 
    id: "executive", 
    name: "Executive", 
    pvRequired: 3000, 
    personalCommission: 0.45, 
    teamBonus: 0.15,
    levelDepth: 5,
    color: "#8B5CF6"
  }
];

// Bonus Structure
const BONUS_TYPES = [
  {
    name: "Fast Start Bonus",
    description: "Earn 20% on new recruit's first order",
    rate: 0.20,
    icon: <Target className="w-5 h-5" />
  },
  {
    name: "Leadership Bonus",
    description: "Monthly bonus for qualifying leaders",
    rate: 500,
    icon: <Award className="w-5 h-5" />
  },
  {
    name: "Car Bonus",
    description: "Monthly car allowance for top performers",
    rate: 800,
    icon: <Star className="w-5 h-5" />
  }
];

export default function MLMCompensationPlan() {
  // Calculator state
  const [personalSales, setPersonalSales] = useState(500);
  const [personalVolume, setPersonalVolume] = useState(750);
  const [level1Volume, setLevel1Volume] = useState(2000);
  const [level2Volume, setLevel2Volume] = useState(1500);
  const [level3Volume, setLevel3Volume] = useState(1000);
  const [newRecruits, setNewRecruits] = useState(2);
  const [recruitFirstOrder, setRecruitFirstOrder] = useState(200);

  // Calculate current rank
  const currentRank = useMemo(() => {
    let rank = RANK_TIERS[0];
    for (const tier of RANK_TIERS) {
      if (personalVolume >= tier.pvRequired) {
        rank = tier;
      }
    }
    return rank;
  }, [personalVolume]);

  // Calculate earnings
  const calculations = useMemo(() => {
    const personalCommission = personalSales * currentRank.personalCommission;
    const level1Bonus = level1Volume * 0.10;
    const level2Bonus = level2Volume * 0.05;
    const level3Bonus = level3Volume * 0.03;
    const fastStartBonus = newRecruits * recruitFirstOrder * 0.20;
    const leadershipBonus = currentRank.name === "Team Leader" || 
                           currentRank.name === "Director" || 
                           currentRank.name === "Executive" ? 500 : 0;
    
    const totalEarnings = personalCommission + level1Bonus + level2Bonus + 
                         level3Bonus + fastStartBonus + leadershipBonus;

    return {
      personalCommission,
      level1Bonus,
      level2Bonus,
      level3Bonus,
      fastStartBonus,
      leadershipBonus,
      totalEarnings
    };
  }, [personalSales, currentRank, level1Volume, level2Volume, level3Volume, 
      newRecruits, recruitFirstOrder]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, ${BRAND_COLOR} 1px, transparent 0)`,
               backgroundSize: '20px 20px'
             }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-300"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Compensation Plan
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-300"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Build Your Empire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple income streams designed to reward your efforts and help you achieve financial freedom
          </p>
        </div>

        {/* Income Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <IncomeCard
            icon={<DollarSign className="w-8 h-8" />}
            title="Personal Sales"
            description="Earn competitive commissions on your direct sales to customers"
            percentage="25-45%"
            color={BRAND_COLOR}
          />
          <IncomeCard
            icon={<Users className="w-8 h-8" />}
            title="Team Bonuses"
            description="Earn from your team's success across multiple levels"
            percentage="2-15%"
            color={SECONDARY_COLOR}
          />
          <IncomeCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Leadership Rewards"
            description="Special bonuses and incentives for achieving leadership ranks"
            percentage="$500+"
            color="#F59E0B"
          />
        </div>

        {/* Rank Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Career Advancement Path
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {RANK_TIERS.map((tier) => (
              <RankCard
                key={tier.id}
                rank={tier}
                isActive={currentRank.id === tier.id}
              />
            ))}
          </div>
        </div>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Input Controls */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Earnings Calculator
            </h3>

            <div className="space-y-6">
              <InputField
                label="Personal Sales ($)"
                value={personalSales}
                onChange={setPersonalSales}
                type="number"
                step={50}
              />
              
              <InputField
                label="Personal Volume (PV)"
                value={personalVolume}
                onChange={setPersonalVolume}
                type="number"
                step={50}
              />

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-700 mb-3">Team Volumes</h4>
                <InputField
                  label="Level 1 Team Volume ($)"
                  value={level1Volume}
                  onChange={setLevel1Volume}
                  type="number"
                  step={100}
                />
                <InputField
                  label="Level 2 Team Volume ($)"
                  value={level2Volume}
                  onChange={setLevel2Volume}
                  type="number"
                  step={100}
                />
                <InputField
                  label="Level 3 Team Volume ($)"
                  value={level3Volume}
                  onChange={setLevel3Volume}
                  type="number"
                  step={100}
                />
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-700 mb-3">Recruiting</h4>
                <InputField
                  label="New Recruits This Month"
                  value={newRecruits}
                  onChange={setNewRecruits}
                  type="number"
                  min={0}
                />
                <InputField
                  label="Average First Order ($)"
                  value={recruitFirstOrder}
                  onChange={setRecruitFirstOrder}
                  type="number"
                  step={50}
                />
              </div>
            </div>

            {/* Current Rank Display */}
            <div className="mt-6 p-4 rounded-2xl border-2" 
                 style={{ borderColor: currentRank.color, backgroundColor: `${currentRank.color}10` }}>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6" style={{ color: currentRank.color }} />
                <div>
                  <div className="font-semibold text-gray-900">Current Rank</div>
                  <div className="text-lg font-bold" style={{ color: currentRank.color }}>
                    {currentRank.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    PV Requirement: {currentRank.pvRequired} | Commission: {Math.round(currentRank.personalCommission * 100)}%
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                This calculator provides estimates based on sample rates. Actual earnings depend on effort, market conditions, and compliance with company policies.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Monthly Income Breakdown
            </h3>

            <div className="space-y-4">
              <EarningsRow
                label="Personal Commissions"
                amount={calculations.personalCommission}
                color={BRAND_COLOR}
              />
              <EarningsRow
                label="Level 1 Team Bonus (10%)"
                amount={calculations.level1Bonus}
                color={SECONDARY_COLOR}
              />
              <EarningsRow
                label="Level 2 Team Bonus (5%)"
                amount={calculations.level2Bonus}
                color={SECONDARY_COLOR}
              />
              <EarningsRow
                label="Level 3 Team Bonus (3%)"
                amount={calculations.level3Bonus}
                color={SECONDARY_COLOR}
              />
              <EarningsRow
                label="Fast Start Bonus"
                amount={calculations.fastStartBonus}
                color="#F59E0B"
              />
              {calculations.leadershipBonus > 0 && (
                <EarningsRow
                  label="Leadership Bonus"
                  amount={calculations.leadershipBonus}
                  color="#8B5CF6"
                />
              )}
            </div>

            <div className="border-t-2 border-gray-200 mt-6 pt-6">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">Total Monthly Income</span>
                <span className="text-3xl font-bold" style={{ color: BRAND_COLOR }}>
                  ${calculations.totalEarnings.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Annual Projection */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
              <div className="text-center">
                <div className="text-sm text-gray-600">Annual Projection</div>
                <div className="text-2xl font-bold text-gray-900">
                  ${(calculations.totalEarnings * 12).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Additional Bonus Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BONUS_TYPES.map((bonus, index) => (
              <BonusCard key={index} bonus={bonus} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              className="px-8 py-4 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Start Your Journey Today
            </button>
            <button className="px-8 py-4 rounded-2xl border-2 border-gray-300 text-gray-700 font-semibold text-lg hover:bg-gray-50 transition-colors">
              Download Full Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component Helper Functions

function IncomeCard({ icon, title, description, percentage, color }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="p-3 rounded-2xl"
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold" style={{ color: color }}>
        {percentage}
      </div>
    </div>
  );
}

function RankCard({ rank, isActive }) {
  return (
    <div 
      className={`rounded-2xl p-4 text-center border-2 transition-all ${
        isActive ? 'shadow-lg scale-105' : 'shadow-sm hover:shadow-md'
      }`}
      style={{
        borderColor: isActive ? rank.color : '#E5E7EB',
        backgroundColor: isActive ? `${rank.color}10` : 'white'
      }}
    >
      <Award 
        className="w-8 h-8 mx-auto mb-2"
        style={{ color: rank.color }}
      />
      <h4 className="font-bold text-gray-900 mb-1">{rank.name}</h4>
      <div className="text-sm text-gray-600">
        PV: {rank.pvRequired}+
      </div>
      <div className="text-sm font-semibold mt-1" style={{ color: rank.color }}>
        {Math.round(rank.personalCommission * 100)}% Commission
      </div>
    </div>
  );
}

function InputField({ label, value, onChange, type = "text", step, min = 0 }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        step={step}
        min={min}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
      />
    </div>
  );
}

function EarningsRow({ label, amount, color }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-gray-700">{label}</span>
      <span className="font-bold text-lg" style={{ color: color }}>
        ${amount.toLocaleString()}
      </span>
    </div>
  );
}

function BonusCard({ bonus }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
          {bonus.icon}
        </div>
        <h4 className="font-bold text-gray-900">{bonus.name}</h4>
      </div>
      <p className="text-gray-600 text-sm mb-3">{bonus.description}</p>
      <div className="text-lg font-bold text-blue-600">
        {typeof bonus.rate === 'number' && bonus.rate < 1 
          ? `${Math.round(bonus.rate * 100)}%` 
          : `$${bonus.rate}`}
      </div>
    </div>
  );
}