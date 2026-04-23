// Green Belt mock exam question bank.
// phase: define | measure | analyze | improve | control
// Format: { id, phase, question, options: [...], answer: index, explanation }
const QUESTIONS = [
  // ================= DEFINE =================
  {
    id: 1, phase: "define",
    question: "六西格玛所追求的质量水平对应的 DPMO (每百万机会缺陷数) 约为多少？",
    options: ["66807", "6210", "233", "3.4"],
    answer: 3,
    explanation: "6σ 水平对应 3.4 DPMO（考虑 1.5σ 长期偏移）。66807 约为 3σ，6210 约为 4σ，233 约为 5σ。"
  },
  {
    id: 2, phase: "define",
    question: "SIPOC 图中，S、I、P、O、C 分别代表什么？",
    options: [
      "Supplier, Input, Process, Output, Customer",
      "System, Information, People, Operation, Control",
      "Supplier, Inventory, Production, Output, Cost",
      "Scope, Input, Plan, Outcome, Criteria"
    ],
    answer: 0,
    explanation: "SIPOC = 供应商、输入、流程、输出、客户，是 Define 阶段描绘高阶流程的工具。"
  },
  {
    id: 3, phase: "define",
    question: "下列哪一项最能体现 Problem Statement 的 SMART 原则？",
    options: [
      "我们的客户满意度需要提升",
      "过去 6 个月 A 产品的客户退货率从 2% 上升至 5.8%，对应 90 万元损失，需在 Q4 末降至 2% 以下",
      "很多员工抱怨加班太多",
      "希望改善物流"
    ],
    answer: 1,
    explanation: "SMART = 具体、可测量、可实现、相关、有时限。选项 B 同时包含了指标、数值、时间节点与影响。"
  },
  {
    id: 4, phase: "define",
    question: "Kano 模型中，\"有则满意，无则不满意，满意度随功能线性增加\" 属于哪一类需求？",
    options: ["基本型需求 (Must-be)", "期望型需求 (One-dimensional)", "兴奋型需求 (Attractive)", "无差异需求 (Indifferent)"],
    answer: 1,
    explanation: "期望型（线性需求）是满意度与功能实现程度成正比；基本型是不满足就抱怨、满足也不会加分；兴奋型是超出预期的惊喜。"
  },
  {
    id: 5, phase: "define",
    question: "CTQ (Critical to Quality) 的主要作用是？",
    options: [
      "控制项目成本",
      "将模糊的客户声音 (VOC) 转换为可测量、可改进的关键质量特性",
      "衡量员工绩效",
      "取代过程能力指数"
    ],
    answer: 1,
    explanation: "CTQ 是把 VOC 翻译成项目可量化指标的桥梁，通常通过 CTQ Tree 从需求逐层拆解。"
  },
  {
    id: 6, phase: "define",
    question: "下列哪项不属于项目章程 (Project Charter) 的标准内容？",
    options: ["项目目标与范围", "商业案例/预期收益", "团队成员与角色", "详细的控制图判异规则"],
    answer: 3,
    explanation: "控制图判异规则属于 Control 阶段的技术细节，不是 Charter 的内容。"
  },
  {
    id: 7, phase: "define",
    question: "RACI 矩阵中 'A' 代表什么？",
    options: ["Assisted 协助", "Accountable 最终负责", "Authorized 已授权", "Acknowledged 已知晓"],
    answer: 1,
    explanation: "R=Responsible 执行, A=Accountable 最终负责 (只能一人), C=Consulted 咨询, I=Informed 知会。"
  },
  {
    id: 8, phase: "define",
    question: "关于 Six Sigma 项目的财务收益，下列哪种类型通常被视作 Hard Saving？",
    options: ["员工士气提升", "客户满意度提升", "直接减少的原材料消耗", "品牌影响力提升"],
    answer: 2,
    explanation: "Hard Saving 指可直接体现在财务报表上的收益（如材料、人工、返工减少）；其他属于 Soft Saving。"
  },

  // ================= MEASURE =================
  {
    id: 9, phase: "measure",
    question: "下列哪组数据属于连续型 (Continuous) 数据？",
    options: ["产品颜色类别", "不良品数量", "零件长度 (mm)", "客户评分星级 (1-5)"],
    answer: 2,
    explanation: "长度是可以取任意小数值的连续数据；数量是离散计数；颜色是名义；评分星级是顺序型。"
  },
  {
    id: 10, phase: "measure",
    question: "关于中心极限定理 (CLT) 下列哪种描述是正确的？",
    options: [
      "样本量足够大时，样本均值的抽样分布近似正态，无论总体分布形态如何",
      "任何数据只要取对数就服从正态分布",
      "样本量越小，样本均值越接近总体均值",
      "只有总体服从正态分布时才能使用 t 检验"
    ],
    answer: 0,
    explanation: "CLT 是很多统计推断的基础，通常 n ≥ 30 时抽样分布接近正态。"
  },
  {
    id: 11, phase: "measure",
    question: "过程能力指数 Cpk 的计算公式为？",
    options: [
      "Cpk = (USL - LSL) / 6σ",
      "Cpk = min[(USL - μ)/3σ, (μ - LSL)/3σ]",
      "Cpk = (USL - LSL) / σ",
      "Cpk = σ / μ"
    ],
    answer: 1,
    explanation: "Cp 只看公差宽度与过程离散；Cpk 在此基础上考虑均值相对规格中心的偏移。"
  },
  {
    id: 12, phase: "measure",
    question: "下列关于 Gage R&R 的判定标准，通常被视为可接受的是？",
    options: ["%GR&R < 10%", "%GR&R 介于 30%-50%", "%GR&R > 50%", "只要重复性好即可"],
    answer: 0,
    explanation: "AIAG 标准：< 10% 可接受；10%-30% 视情况；> 30% 不可接受。必须同时评估重复性与再现性。"
  },
  {
    id: 13, phase: "measure",
    question: "MSA 中 Reproducibility (再现性) 是指？",
    options: [
      "同一操作员重复测量同一零件结果的变异",
      "不同操作员测量同一零件结果的变异",
      "测量系统随时间漂移",
      "测量值与真值的差异"
    ],
    answer: 1,
    explanation: "Repeatability 是同一操作员的变异；Reproducibility 是不同操作员的变异；Bias 是与真值差异；Stability 是时间漂移。"
  },
  {
    id: 14, phase: "measure",
    question: "某流程每天工作 8 小时（扣除休息 30 分钟），客户需求为 450 件/天，Takt Time 约为？",
    options: ["30 秒", "40 秒", "60 秒", "80 秒"],
    answer: 2,
    explanation: "可用时间 = (8×60 - 30) × 60 = 27000 秒；Takt = 27000/450 = 60 秒/件。"
  },
  {
    id: 15, phase: "measure",
    question: "下列哪一项不是 Lean 中衡量流程效率的指标？",
    options: ["Cycle Time", "Takt Time", "Lead Time", "RPN"],
    answer: 3,
    explanation: "RPN (Risk Priority Number) 来自 FMEA，用于风险评估，不属于流程效率指标。"
  },
  {
    id: 16, phase: "measure",
    question: "关于 Rolled Throughput Yield (RTY) 下列哪项正确？",
    options: [
      "等于各工序良率之和",
      "等于各工序良率的乘积",
      "等于最差工序的良率",
      "与良率无关"
    ],
    answer: 1,
    explanation: "RTY 是整个流程一次通过（无返工）的概率，= 各步骤 FTY 的连乘积。"
  },
  {
    id: 17, phase: "measure",
    question: "对于计数型（属性型）测量系统评价，常用的统计量是？",
    options: ["Cpk", "Kappa 一致性", "R²", "p 值"],
    answer: 1,
    explanation: "计数型 MSA 看操作员之间、与标准之间的一致性，通常以 Kappa ≥ 0.7 为良好。"
  },
  {
    id: 18, phase: "measure",
    question: "正态分布中，μ ± 2σ 范围覆盖的概率约为？",
    options: ["68.3%", "95.4%", "99.7%", "99.99%"],
    answer: 1,
    explanation: "1σ ≈ 68.3%，2σ ≈ 95.4%，3σ ≈ 99.73%。"
  },
  {
    id: 19, phase: "measure",
    question: "Little's Law 描述了？",
    options: [
      "L = λW (在制品数 = 到达率 × 平均停留时间)",
      "Cpk 的计算公式",
      "p 值与 α 的关系",
      "控制图判异规则"
    ],
    answer: 0,
    explanation: "Little's Law 连接了 WIP、吞吐率、周期时间，是 Lean 分析的基础。"
  },

  // ================= ANALYZE =================
  {
    id: 20, phase: "analyze",
    question: "鱼骨图 (Ishikawa) 的 6M 通常不包括下列哪一项？",
    options: ["Man 人", "Machine 设备", "Money 资金", "Method 方法"],
    answer: 2,
    explanation: "6M = Man, Machine, Method, Material, Measurement, Mother Nature (Environment)。Money 不在其中。"
  },
  {
    id: 21, phase: "analyze",
    question: "假设检验中 α = 0.05 表示？",
    options: [
      "在 H0 实际为真时，错误拒绝 H0 的概率为 5%",
      "在 H0 实际为假时，错误接受 H0 的概率为 5%",
      "样本量至少要 5%",
      "检验力一定为 95%"
    ],
    answer: 0,
    explanation: "α 是第一类错误（弃真）概率；β 是第二类错误（取伪）；Power = 1 - β。"
  },
  {
    id: 22, phase: "analyze",
    question: "当 p 值 = 0.03，显著性水平 α = 0.05 时，正确的做法是？",
    options: [
      "接受 H0",
      "拒绝 H0",
      "不做决定",
      "需要加大样本量"
    ],
    answer: 1,
    explanation: "p < α 拒绝原假设，认为差异显著。注意：拒绝 H0 不等于证明 H1 是对的，只是数据不支持 H0。"
  },
  {
    id: 23, phase: "analyze",
    question: "要比较 4 组均值是否存在显著差异，最合适的检验方法是？",
    options: ["1-sample t test", "2-sample t test", "ANOVA", "Chi-square test"],
    answer: 2,
    explanation: "3 组以上均值比较应使用 ANOVA；使用多次 t 检验会累积 α 错误。"
  },
  {
    id: 24, phase: "analyze",
    question: "FMEA 中 RPN 的计算方式为？",
    options: [
      "严重度 + 发生度 + 探测度",
      "严重度 × 发生度 × 探测度",
      "严重度 × 发生度",
      "(严重度 + 发生度) × 探测度"
    ],
    answer: 1,
    explanation: "RPN = S × O × D (Severity × Occurrence × Detection)，得分越高风险越需优先处理。"
  },
  {
    id: 25, phase: "analyze",
    question: "两变量的相关系数 r = -0.85，下列描述哪项正确？",
    options: [
      "两者无关",
      "两者存在强的正线性关系",
      "两者存在强的负线性关系",
      "一方一定导致另一方下降"
    ],
    answer: 2,
    explanation: "r 接近 -1 表示强负相关。注意相关 ≠ 因果。"
  },
  {
    id: 26, phase: "analyze",
    question: "Pareto 原理通常描述为？",
    options: [
      "20% 的原因造成 80% 的问题",
      "所有原因同等重要",
      "随机抽样是最优策略",
      "平均数总是比中位数有用"
    ],
    answer: 0,
    explanation: "Pareto (80/20) 原则帮助团队聚焦关键少数 (vital few) 而非次要多数 (trivial many)。"
  },
  {
    id: 27, phase: "analyze",
    question: "当数据严重偏离正态分布且样本量较小时，比较两组中心趋势应使用？",
    options: ["2-sample t test", "ANOVA", "Mann-Whitney U test", "F test"],
    answer: 2,
    explanation: "Mann-Whitney U 是两样本 t 的非参数替代；Kruskal-Wallis 对应多组。"
  },
  {
    id: 28, phase: "analyze",
    question: "回归分析中 R² = 0.82 表示？",
    options: [
      "有 82% 的数据点落在回归线上",
      "自变量能解释因变量 82% 的变异",
      "p 值为 0.82",
      "相关系数为 0.82"
    ],
    answer: 1,
    explanation: "R² (决定系数) 衡量模型对因变量变异的解释力；相关系数 r 不等同于 R²（除非简单线性回归，二者是平方关系）。"
  },
  {
    id: 29, phase: "analyze",
    question: "Chi-square (卡方) 检验最适用的场景是？",
    options: [
      "比较 2 组连续数据的方差",
      "评估两个类别型变量之间的关联性",
      "评估数据是否服从指数分布",
      "估计回归系数"
    ],
    answer: 1,
    explanation: "卡方常用于列联表分析，评估类别变量是否独立或拟合优度。"
  },
  {
    id: 30, phase: "analyze",
    question: "第二类错误 (β) 是指？",
    options: [
      "H0 为真时错误拒绝 H0",
      "H0 为假时未能拒绝 H0",
      "样本量过大",
      "α 设置过小"
    ],
    answer: 1,
    explanation: "β 是取伪（漏报）；提高样本量或增大效应量都能提高 Power = 1 - β。"
  },

  // ================= IMPROVE =================
  {
    id: 31, phase: "improve",
    question: "对一个 2^3 全因子实验，总共有多少次运行（不含重复）？",
    options: ["3", "6", "8", "9"],
    answer: 2,
    explanation: "2^k 表示 k 个因子、每个 2 水平，共 2³ = 8 次运行组合。"
  },
  {
    id: 32, phase: "improve",
    question: "DOE 三大基本原则是？",
    options: [
      "随机化、重复、区组化",
      "观察、记录、分析",
      "取样、测试、汇报",
      "假设、检验、结论"
    ],
    answer: 0,
    explanation: "Randomization、Replication、Blocking 是实验设计的基石，用以保证结果的统计有效性。"
  },
  {
    id: 33, phase: "improve",
    question: "5S 中的第三个 S 是？",
    options: ["Sort 整理", "Set in Order 整顿", "Shine 清扫", "Standardize 清洁"],
    answer: 2,
    explanation: "顺序为 Sort → Set in Order → Shine → Standardize → Sustain (整理/整顿/清扫/清洁/素养)。"
  },
  {
    id: 34, phase: "improve",
    question: "下列哪项是 Lean 定义的 8 种浪费之一？",
    options: ["快速换模", "单件流", "过度加工 (Over-processing)", "看板拉动"],
    answer: 2,
    explanation: "DOWNTIME: Defects, Overproduction, Waiting, Non-utilized talent, Transport, Inventory, Motion, Extra-processing。"
  },
  {
    id: 35, phase: "improve",
    question: "Poka-Yoke (防错) 的核心理念是？",
    options: [
      "通过奖惩制度减少员工失误",
      "通过设计使错误无法发生或立刻被发现",
      "雇佣更多检验员",
      "降低产量以减少出错"
    ],
    answer: 1,
    explanation: "Poka-Yoke 追求的是\"让错误不可能发生\"的装置或流程设计，属于预防性改进。"
  },
  {
    id: 36, phase: "improve",
    question: "SMED 主要解决什么问题？",
    options: [
      "供应链库存过多",
      "产品设计缺陷",
      "设备换模/换型时间过长",
      "员工培训不足"
    ],
    answer: 2,
    explanation: "SMED (Single Minute Exchange of Die) 是缩短换模时间的方法，目标是小批量、多品种生产。"
  },
  {
    id: 37, phase: "improve",
    question: "Theory of Constraints (约束理论) 的第一步是？",
    options: [
      "消除所有浪费",
      "识别系统瓶颈 (Constraint)",
      "增加库存缓冲",
      "雇用更多员工"
    ],
    answer: 1,
    explanation: "TOC 五步法：识别→充分利用→让其他环节迁就→扩能→回到步骤 1。"
  },
  {
    id: 38, phase: "improve",
    question: "在 DOE 中，\"交互作用 (Interaction)\" 是指？",
    options: [
      "一个因子的主效应等于零",
      "一个因子对响应的影响依赖于另一个因子的水平",
      "所有因子水平都相同",
      "实验存在系统误差"
    ],
    answer: 1,
    explanation: "当两因子共同作用时的效应≠各自主效应之和，就存在交互作用；这是 DOE 相比 OFAT 的核心优势。"
  },
  {
    id: 39, phase: "improve",
    question: "Pugh Matrix 的主要用途是？",
    options: [
      "控制图判异",
      "多备选方案的系统化评估与筛选",
      "过程能力分析",
      "测量系统评价"
    ],
    answer: 1,
    explanation: "Pugh Matrix 以基准方案为参照，将各备选方案在多个准则上做 +/−/S 对比评估。"
  },
  {
    id: 40, phase: "improve",
    question: "Kaizen 的核心精神是？",
    options: [
      "一次性巨大变革",
      "持续的、小步的改进",
      "外包给咨询公司",
      "只由管理层推动"
    ],
    answer: 1,
    explanation: "Kaizen = 改善，强调全员参与、持续的小步改进；重大变革通常叫 Kaikaku。"
  },

  // ================= CONTROL =================
  {
    id: 41, phase: "control",
    question: "控制图上 UCL 和 LCL 通常基于？",
    options: [
      "客户规格上下限 (USL / LSL)",
      "过程均值 ± 3σ (过程自身变异)",
      "过程均值 ± 2σ",
      "管理层目标值"
    ],
    answer: 1,
    explanation: "控制限反映过程自身能力 (μ ± 3σ)，和规格限 (USL/LSL，客户定义) 是两回事。"
  },
  {
    id: 42, phase: "control",
    question: "监控单件测量值（子组为 1）时，通常使用哪种控制图？",
    options: ["X̄-R", "X̄-s", "I-MR", "p 图"],
    answer: 2,
    explanation: "单值-移动极差 (I-MR) 适用于每次只取 1 个样本的情况，如化学浓度、持续数据。"
  },
  {
    id: 43, phase: "control",
    question: "监控不良品率（每批样本量不同），合适的控制图是？",
    options: ["np 图", "p 图", "c 图", "X̄-R"],
    answer: 1,
    explanation: "p 图监控不良率，允许子组大小不同；np 图要求子组大小固定；c/u 图监控缺陷数。"
  },
  {
    id: 44, phase: "control",
    question: "Western Electric 判异规则中，下列哪项提示过程出现特殊原因？",
    options: [
      "单点落在控制限内且靠近均值",
      "连续 7 点全部位于中心线同一侧",
      "点在控制限内随机分布",
      "所有点都在 1σ 带内"
    ],
    answer: 1,
    explanation: "连续 7-8 点同侧、2/3 点在 2σ 带外、明显趋势等都是特殊原因的信号。"
  },
  {
    id: 45, phase: "control",
    question: "Control Plan (控制计划) 通常不包含下列哪项？",
    options: [
      "关键特性 / 关键 X",
      "测量方法、频次与样本量",
      "超限反应计划 (Reaction Plan)",
      "项目财务收益汇总"
    ],
    answer: 3,
    explanation: "Control Plan 聚焦于持续监控，财务收益汇总属于 Define/Closure 的文件。"
  },
  {
    id: 46, phase: "control",
    question: "关于普通原因 (Common Cause) 和特殊原因 (Special Cause)，下列说法正确的是？",
    options: [
      "特殊原因是系统固有的，需要改变系统才能去除",
      "普通原因是偶发的，通常可以就地补救",
      "只有特殊原因出现在控制图上时才需要处置",
      "过程稳定但不一定有能力"
    ],
    answer: 3,
    explanation: "稳定 (In control) ≠ 有能力 (Capable)。稳定只说明无特殊原因，能力要看 Cp/Cpk 对比规格。"
  },
  {
    id: 47, phase: "control",
    question: "SOP (标准作业程序) 在 Control 阶段的作用主要是？",
    options: [
      "提高单次产量",
      "固化最佳实践，降低流程变异",
      "取代培训",
      "作为绩效考核指标"
    ],
    answer: 1,
    explanation: "SOP 让\"最佳方法\"成为默认方法，是维持改进成果的关键控制手段。"
  },
  {
    id: 48, phase: "control",
    question: "Andon 灯 (安灯) 属于下列哪类 Lean 控制工具？",
    options: ["过程能力分析", "可视化管理 (Visual Management)", "DOE", "MSA"],
    answer: 1,
    explanation: "Andon 通过颜色/声音即时传递异常信息，是可视化管理与快速反应机制。"
  },
  {
    id: 49, phase: "control",
    question: "项目收尾阶段的 Handoff (移交) 的关键动作是？",
    options: [
      "将改进后的流程及控制计划正式交还过程负责人",
      "关闭所有测量设备",
      "撤销项目章程",
      "重新评估 VOC"
    ],
    answer: 0,
    explanation: "Handoff 要确保过程负责人掌握控制计划、SOP、判异反应流程，黑/绿带方可退出。"
  },

  // More mixed questions
  {
    id: 50, phase: "define",
    question: "下列哪一项最能反映 DMAIC 方法的正确顺序？",
    options: [
      "Define → Measure → Analyze → Improve → Control",
      "Design → Measure → Analyze → Implement → Conclude",
      "Define → Monitor → Assess → Improve → Conclude",
      "Discover → Measure → Adjust → Implement → Confirm"
    ],
    answer: 0,
    explanation: "DMAIC 是 Six Sigma 改进项目的标准路径；DMADV 则是设计新流程/产品的路径。"
  },
  {
    id: 51, phase: "measure",
    question: "若某工序 Cp = 1.67 而 Cpk = 0.80，说明？",
    options: [
      "过程变异过大",
      "过程离散小但严重偏离规格中心",
      "过程能力完全达标",
      "数据不服从正态分布"
    ],
    answer: 1,
    explanation: "Cp 看宽度，Cpk 还看居中。Cp 高但 Cpk 低，典型是均值偏离中心，应先居中再评估离散。"
  },
  {
    id: 52, phase: "analyze",
    question: "使用 5 Why 方法的主要目的是？",
    options: [
      "逐层追问直到找到根本原因",
      "用 5 张图展示数据",
      "预测未来 5 期销量",
      "选择 5 名团队成员"
    ],
    answer: 0,
    explanation: "5 Why 通过反复问\"为什么\"超越表象，找到系统性根因，常与鱼骨图配合使用。"
  },
  {
    id: 53, phase: "improve",
    question: "关于 Kanban 下列哪项描述最准确？",
    options: [
      "一种推动式 (Push) 生产计划工具",
      "一种拉动式 (Pull) 信号系统，根据下游消耗触发上游供给",
      "一种控制图",
      "一种库存盘点方法"
    ],
    answer: 1,
    explanation: "Kanban 是 JIT 的核心组件，通过看板信号实现按需生产、降低库存。"
  },
  {
    id: 54, phase: "control",
    question: "如果控制图显示过程\"In Control\"，同时 Cpk = 0.5，下列结论正确的是？",
    options: [
      "过程稳定且能力充足",
      "过程稳定但能力不足，需要改进以减少变异或居中",
      "需要立即停机",
      "必须更换测量系统"
    ],
    answer: 1,
    explanation: "稳定不等于有能力。Cpk < 1 意味着过程输出大概率超出规格，需要 DMAIC 持续改进。"
  },
  {
    id: 55, phase: "define",
    question: "Stakeholder Analysis 的常见输出是？",
    options: [
      "Gantt 甘特图",
      "影响力 / 关注度矩阵 (Power/Interest Matrix)",
      "Pareto 图",
      "控制图"
    ],
    answer: 1,
    explanation: "Power/Interest Matrix 按影响力与关注度把利益相关者分四类，制定相应的沟通管理策略。"
  },
  {
    id: 56, phase: "measure",
    question: "对于高度偏态的非正态连续数据，描述中心趋势更合适使用？",
    options: ["均值 (Mean)", "中位数 (Median)", "众数 (Mode)", "极差 (Range)"],
    answer: 1,
    explanation: "中位数对极端值不敏感，对偏态数据更具代表性；极差反映离散而非中心。"
  },
  {
    id: 57, phase: "analyze",
    question: "进行 2-sample t 检验时，下列哪个前提通常需要先检查？",
    options: [
      "两样本均值完全相等",
      "两样本服从近似正态分布，且方差齐性",
      "样本量必须超过 1000",
      "两样本完全独立且无重复"
    ],
    answer: 1,
    explanation: "2-sample t 假设两组近似正态 + 独立；方差不齐时使用 Welch 的校正版本。"
  },
  {
    id: 58, phase: "improve",
    question: "价值流图 (VSM) 的典型步骤是？",
    options: [
      "只画 Future State",
      "Current State → Future State → Implementation Plan",
      "Future State → Current State → Pareto",
      "Control Plan → Gantt → Kanban"
    ],
    answer: 1,
    explanation: "VSM 先刻画当前状态、识别浪费，再设计未来状态并制定实施路径。"
  },
  {
    id: 59, phase: "control",
    question: "Layered Process Audit (分层过程审核) 的主要价值是？",
    options: [
      "只审核高层管理者",
      "由不同管理层次按不同频率持续审查关键控制点",
      "取代 SOP",
      "替代过程能力研究"
    ],
    answer: 1,
    explanation: "LPA 让高管、中层、一线按不同频率审核关键控制点，防止改进成果随时间退化。"
  },
  {
    id: 60, phase: "measure",
    question: "DPMO (Defects Per Million Opportunities) 的计算公式为？",
    options: [
      "(缺陷数 / 单位数) × 10^6",
      "(缺陷数 / 机会数 / 单位数) × 10^6",
      "良率 × 10^6",
      "不良率 / 机会数"
    ],
    answer: 1,
    explanation: "DPMO = Defects / (Units × Opportunities per unit) × 1,000,000，可跨不同复杂度产品比较。"
  },

  // ================= DEFINE (追加) =================
  {
    id: 61, phase: "define",
    question: "DMAIC 与 DMADV 的核心区别是？",
    options: [
      "DMAIC 更快速完成",
      "DMAIC 用于改进现有流程；DMADV 用于从零设计新产品/流程",
      "DMADV 只适用于软件开发",
      "两者完全相同"
    ],
    answer: 1,
    explanation: "DMADV = Define, Measure, Analyze, Design, Verify。当现有流程已无改进空间或需全新设计时选用 DMADV / DFSS。"
  },
  {
    id: 62, phase: "define",
    question: "下列哪个角色通常负责为项目扫清跨部门障碍、争取资源？",
    options: ["Green Belt", "Black Belt", "Champion / Sponsor", "Team Member"],
    answer: 2,
    explanation: "Champion/Sponsor 通常是高层，提供预算与资源、背书项目、打通部门墙。"
  },
  {
    id: 63, phase: "define",
    question: "COPQ (Cost of Poor Quality) 通常不包括下列哪项？",
    options: ["返工成本", "客户投诉处理成本", "正常的原材料采购成本", "保修成本"],
    answer: 2,
    explanation: "COPQ 覆盖预防、评价、内部失败、外部失败四类；正常采购属运营成本。"
  },
  {
    id: 64, phase: "define",
    question: "Voice of Business (VOB) 代表的是？",
    options: [
      "客户的功能需求",
      "股东/企业关注的利润、成本、市场份额、回报",
      "员工满意度",
      "生产节拍"
    ],
    answer: 1,
    explanation: "VOB 代表企业视角，与 VOC (客户)、VOP (过程) 共同构成项目平衡。"
  },
  {
    id: 65, phase: "define",
    question: "Tuckman 团队发展阶段的正确顺序是？",
    options: [
      "Forming → Storming → Norming → Performing",
      "Storming → Forming → Norming → Performing",
      "Planning → Doing → Checking → Acting",
      "Define → Execute → Review → Close"
    ],
    answer: 0,
    explanation: "Tuckman 模型：组建→冲突→规范→高效运作，有时加入 Adjourning (解散)。"
  },
  {
    id: 66, phase: "define",
    question: "亲和图 (Affinity Diagram) 最适合在什么场景使用？",
    options: [
      "需要把大量定性信息/想法按相似性归类时",
      "计算过程能力时",
      "绘制控制图时",
      "做假设检验时"
    ],
    answer: 0,
    explanation: "亲和图常用于头脑风暴后把大量 VOC / Idea 归组整理，是 KJ 法的典型应用。"
  },
  {
    id: 67, phase: "define",
    question: "Critical to Delivery (CTD) 关注？",
    options: [
      "与成本直接相关的关键特性",
      "与交付速度、准时率等相关的关键特性",
      "与质量感知相关的特性",
      "与安全相关的特性"
    ],
    answer: 1,
    explanation: "Critical To 家族包括 CTQ (质量)、CTC (成本)、CTD (交付)、CTS (安全) 等。"
  },
  {
    id: 68, phase: "define",
    question: "PICK Chart 用两个维度对改进机会分类，分别是？",
    options: [
      "收益 vs 实施难度 (Payoff vs Difficulty)",
      "成本 vs 速度",
      "内部 vs 外部",
      "质量 vs 数量"
    ],
    answer: 0,
    explanation: "PICK = Possible / Implement / Challenge / Kill，按收益与难度分四象限。"
  },
  {
    id: 69, phase: "define",
    question: "Stakeholder 分析中，对 \"影响力高 / 关注度低\" 的相关方推荐策略是？",
    options: [
      "密切管理 (Manage Closely)",
      "保持满意 (Keep Satisfied)",
      "最小努力 (Minimal Effort)",
      "定期告知 (Keep Informed)"
    ],
    answer: 1,
    explanation: "Power/Interest 矩阵：高影响低关注 → Keep Satisfied，避免激起其负面关注。"
  },
  {
    id: 70, phase: "define",
    question: "下列关于项目范围 (Scope) 的做法，最不推荐的是？",
    options: [
      "明确 In-scope / Out-of-scope 边界",
      "Sponsor 同意后冻结基本范围",
      "范围不断扩大以涵盖所有发现的问题 (Scope Creep)",
      "跨事业部扩展作为后续项目"
    ],
    answer: 2,
    explanation: "Scope Creep 是项目失败常见原因，应通过变更控制或另立项目处理。"
  },
  {
    id: 71, phase: "define",
    question: "下列哪项通常不是 Champion 的职责？",
    options: [
      "审批项目立项与范围",
      "提供资源与去障碍",
      "亲自完成所有数据分析",
      "跨部门协调"
    ],
    answer: 2,
    explanation: "Champion 是推动者与资源协调者，分析工作由 BB/GB 与团队成员完成。"
  },
  {
    id: 72, phase: "define",
    question: "问题陈述 (Problem Statement) 与目标陈述 (Goal Statement) 的区别？",
    options: [
      "问题陈述描述现状与影响；目标陈述说明改进后的期望状态与衡量指标",
      "两者完全一样",
      "问题陈述写在 Analyze 阶段",
      "目标陈述只写给客户看"
    ],
    answer: 0,
    explanation: "问题陈述回答\"现在怎么样、影响是什么\"，目标陈述回答\"改到什么程度、何时达到\"。"
  },
  {
    id: 73, phase: "define",
    question: "Project Charter 可以在项目进行中修改吗？",
    options: [
      "不可以，一经签字终生不变",
      "可以，通过正式变更控制流程由 Sponsor 审批",
      "Green Belt 随时可改",
      "只能在 Close 阶段改"
    ],
    answer: 1,
    explanation: "Charter 是活文档，重大变更 (范围/目标/资源) 需变更控制并获 Sponsor 批准。"
  },
  {
    id: 74, phase: "define",
    question: "Elevator Pitch 在 Define 阶段的作用是？",
    options: [
      "用 1-2 分钟向高管清晰说明项目目的与价值",
      "取代 Project Charter",
      "撰写详细统计报告",
      "核算项目预算"
    ],
    answer: 0,
    explanation: "Elevator Pitch 凝练项目核心要素 (背景/问题/方案/收益)，帮助获得关键支持。"
  },
  {
    id: 75, phase: "define",
    question: "Benchmarking 主要回答什么问题？",
    options: [
      "我们与行业最佳/竞争对手的差距在哪里",
      "过程能力指数是多少",
      "控制图是否稳定",
      "客户满意度是多少"
    ],
    answer: 0,
    explanation: "Benchmarking 可对内、对外、对行业最佳进行对比，发现差距与改进机会。"
  },
  {
    id: 76, phase: "define",
    question: "\"Burning Platform\" (燃烧平台) 概念通常指？",
    options: [
      "安全隐患",
      "强调变革必要性与紧迫感的表达",
      "一种新 IT 系统",
      "火灾应急预案"
    ],
    answer: 1,
    explanation: "来自 Kotter 变革模型，通过渲染紧迫感打破组织惯性，驱动变革发生。"
  },
  {
    id: 77, phase: "define",
    question: "下列哪类项目最不适合用 DMAIC 推进？",
    options: [
      "降低订单错误率",
      "提升设备良率",
      "开发一款全新产品",
      "缩短客户响应时间"
    ],
    answer: 2,
    explanation: "全新产品/流程设计应使用 DMADV / DFSS；DMAIC 聚焦现有流程改进。"
  },
  {
    id: 78, phase: "define",
    question: "良好的 Problem Statement 最应避免？",
    options: [
      "引用真实数据与影响",
      "明确问题的时间窗",
      "预先包含根因或解决方案",
      "保持客观中立"
    ],
    answer: 2,
    explanation: "问题陈述只写事实与影响，避免预设根因/方案（留给 Analyze/Improve 阶段）。"
  },
  {
    id: 79, phase: "define",
    question: "对一个小规模改进且风险低的问题，可能更适合的方法是？",
    options: [
      "标准 DMAIC",
      "Just Do It / Quick Win",
      "DMADV",
      "DOE"
    ],
    answer: 1,
    explanation: "小问题、根因清楚、风险低时可采用 Just Do It 直接解决，不必动用完整 DMAIC。"
  },
  {
    id: 80, phase: "define",
    question: "基线绩效 (Baseline Performance) 通常在哪个阶段确定？",
    options: [
      "Define 初步估计，Measure 正式量化",
      "仅在 Control 阶段",
      "仅在 Improve 阶段",
      "无需确定"
    ],
    answer: 0,
    explanation: "Define 阶段给出粗略基线以论证项目价值；Measure 阶段通过系统数据采集确认真实基线。"
  },

  // ================= MEASURE (追加) =================
  {
    id: 81, phase: "measure",
    question: "标准差与方差的关系？",
    options: ["标准差 = 方差", "标准差 = 方差的平方根", "标准差 = 方差²", "无关"],
    answer: 1,
    explanation: "σ = √(σ²)；标准差与原数据单位一致，便于直观解释离散程度。"
  },
  {
    id: 82, phase: "measure",
    question: "当总体存在明显子群差异时，最适合的抽样方法是？",
    options: ["简单随机", "系统抽样", "分层抽样 (Stratified)", "便利抽样"],
    answer: 2,
    explanation: "分层抽样先按类别分层再抽，保证各子群代表性，降低抽样误差。"
  },
  {
    id: 83, phase: "measure",
    question: "DPU 与 DPMO 的区别？",
    options: [
      "DPU = 缺陷/单位；DPMO 还需除以每单位机会数并乘 1e6",
      "DPU 按机会归一化，DPMO 按单位归一化",
      "两者完全相同",
      "DPU 仅用于连续数据"
    ],
    answer: 0,
    explanation: "DPMO = (Defects / (Units × Opps)) × 10^6，能跨复杂度产品统一比较。"
  },
  {
    id: 84, phase: "measure",
    question: "操作性定义 (Operational Definition) 的关键要素不包括？",
    options: [
      "明确测量方法与工具",
      "明确合格/不合格的判定标准",
      "团队奖金机制",
      "由谁、何时、怎么采集"
    ],
    answer: 2,
    explanation: "操作性定义消除数据歧义，重点在可测可判可复现；奖金不属其中。"
  },
  {
    id: 85, phase: "measure",
    question: "箱线图 (Box Plot) 中的\"盒子\"表示？",
    options: [
      "最大值到最小值",
      "第 25 到 75 百分位 (IQR)",
      "均值 ± 标准差",
      "控制限"
    ],
    answer: 1,
    explanation: "盒子 = Q1 到 Q3；中位线是中位数；须线延伸到 1.5×IQR 内最远点，外为离群。"
  },
  {
    id: 86, phase: "measure",
    question: "下列关于样本量决定因素的描述正确的是？",
    options: [
      "期望置信度、允许误差、总体变异",
      "仅取决于预算",
      "任意取 30 足够",
      "取决于客户数量"
    ],
    answer: 0,
    explanation: "常用 n = (Zσ/E)² 的公式族；变异越大/误差要求越小/置信度越高，需样本越大。"
  },
  {
    id: 87, phase: "measure",
    question: "描述\"固定时间区间内独立事件发生次数\"最合适的分布是？",
    options: ["正态", "二项", "泊松 (Poisson)", "均匀"],
    answer: 2,
    explanation: "Poisson 描述独立事件在固定时间/空间区间内次数；指数分布描述事件间的间隔时间。"
  },
  {
    id: 88, phase: "measure",
    question: "二项分布的典型假设不包括？",
    options: [
      "试验次数固定",
      "每次只有两种结果",
      "各次试验独立、成功概率恒定",
      "每次结果是连续值"
    ],
    answer: 3,
    explanation: "二项分布针对二元结果；结果为连续值属于正态或其他连续分布情境。"
  },
  {
    id: 89, phase: "measure",
    question: "展示数据随时间变化趋势，最直接的图形是？",
    options: ["直方图", "Pareto", "运行图 / 时间序列图", "散点图"],
    answer: 2,
    explanation: "Run Chart 按时间描点，可识别趋势、周期、异常，是控制图的前置工具。"
  },
  {
    id: 90, phase: "measure",
    question: "规格 10 ± 0.5 的测量系统分辨率经验上至少应为？",
    options: ["0.5", "0.1", "0.01", "1"],
    answer: 1,
    explanation: "经验法则：分辨率 ≤ 公差/10。公差 = 1，故分辨率 ≤ 0.1 才算可用。"
  },
  {
    id: 91, phase: "measure",
    question: "MSA 中 Stability (稳定性) 评估？",
    options: [
      "同一操作员的变异",
      "不同操作员的变异",
      "测量系统随时间的漂移",
      "与真值的偏差"
    ],
    answer: 2,
    explanation: "Stability 用一段时间的均值/离散变化（通常以控制图监控）评估测量系统。"
  },
  {
    id: 92, phase: "measure",
    question: "直方图可以帮助判断下列哪项？",
    options: [
      "正态性、偏态、多峰、异常值",
      "两变量相关性",
      "过程随时间变化",
      "分类变量独立性"
    ],
    answer: 0,
    explanation: "直方图是分布形状的直观描述，是探索性数据分析的第一步。"
  },
  {
    id: 93, phase: "measure",
    question: "短期标准差 σ_st 与长期标准差 σ_lt 的典型经验关系？",
    options: [
      "σ_lt ≈ σ_st - 1.5",
      "σ_lt 通常 ≥ σ_st (考虑长期漂移)",
      "两者完全相等",
      "σ_st = 2 × σ_lt"
    ],
    answer: 1,
    explanation: "六西格玛经典假设长期有约 1.5σ 均值漂移，故长期性能通常低于短期能力。"
  },
  {
    id: 94, phase: "measure",
    question: "对相同置信度，连续数据与计数数据所需样本量的经验对比？",
    options: [
      "连续数据样本量通常较小",
      "计数数据样本量通常较小",
      "二者总相等",
      "与数据类型无关"
    ],
    answer: 0,
    explanation: "连续数据蕴含更多信息，检验同等效应时所需样本显著少于计数数据。"
  },
  {
    id: 95, phase: "measure",
    question: "良好的 Data Collection Plan 必须包含？",
    options: [
      "Who/What/Where/When/How + 操作性定义 + MSA 验证",
      "仅样本量",
      "仅负责人",
      "仅目标值"
    ],
    answer: 0,
    explanation: "数据收集计划的 5W1H 要素缺一不可，确保数据可用、可比、可追溯。"
  },
  {
    id: 96, phase: "measure",
    question: "对计数型测量系统，常用的一致性评价统计量是？",
    options: ["Cp", "Kappa", "R²", "F 值"],
    answer: 1,
    explanation: "Kappa 衡量去除偶然一致性后的真一致性；经验上 ≥ 0.7 视为良好。"
  },

  // ================= ANALYZE (追加) =================
  {
    id: 97, phase: "analyze",
    question: "ANOVA 中 F 统计量的含义是？",
    options: [
      "组间方差 / 组内方差，越大越支持\"均值不同\"",
      "标准差 / 均值",
      "p 值倒数",
      "两样本比值"
    ],
    answer: 0,
    explanation: "F 比较组间变异 vs 组内随机变异；F 大且 p 小 → 拒绝各组均值相等。"
  },
  {
    id: 98, phase: "analyze",
    question: "Pearson 相关系数的适用前提是？",
    options: [
      "两变量近似线性、近似正态、无强离群值",
      "只适用于分类变量",
      "只适用于非正态数据",
      "与样本量无关"
    ],
    answer: 0,
    explanation: "非线性或非正态或强离群时考虑 Spearman 秩相关等更稳健方法。"
  },
  {
    id: 99, phase: "analyze",
    question: "回归模型 R² = 0.95 但残差呈现明显非随机模式，说明？",
    options: [
      "模型完美",
      "高解释度并不代表模型充分，仍可能遗漏非线性或自相关",
      "样本不足",
      "应扩大因变量"
    ],
    answer: 1,
    explanation: "残差应随机、均值为 0、无模式、同方差；违反则模型假设未满足。"
  },
  {
    id: 100, phase: "analyze",
    question: "下列哪种情境最适合使用 Paired t-test？",
    options: [
      "两独立生产线的均值比较",
      "同一批零件改进前后的测量对比",
      "比较 4 组均值",
      "单一样本与目标值比较"
    ],
    answer: 1,
    explanation: "配对 t 用于同一对象在不同条件下的测量（前/后、左/右等）。"
  },
  {
    id: 101, phase: "analyze",
    question: "在样本量固定下，α 与 β 的典型关系是？",
    options: [
      "降低 α 通常会使 β 增大",
      "两者相互独立",
      "α 减小 β 一定减小",
      "β 与样本量无关"
    ],
    answer: 0,
    explanation: "α 与 β 此消彼长；唯一能同时降低两者的办法是增大样本量或效应量。"
  },
  {
    id: 102, phase: "analyze",
    question: "多重共线性 (Multicollinearity) 指？",
    options: [
      "自变量之间高度相关",
      "残差有趋势",
      "因变量有分层",
      "样本量不足"
    ],
    answer: 0,
    explanation: "多重共线性会使回归系数估计不稳定，可用 VIF 检测（> 10 通常视为严重）。"
  },
  {
    id: 103, phase: "analyze",
    question: "Multi-Vari 分析把变异分解为？",
    options: [
      "位置内 / 位置间 / 时间",
      "均值 / 中位数 / 众数",
      "Cp / Cpk / Pp",
      "α / β / Power"
    ],
    answer: 0,
    explanation: "Multi-Vari (Positional / Cyclical / Temporal) 引导后续根因分析方向。"
  },
  {
    id: 104, phase: "analyze",
    question: "卡方检验两类经典用法？",
    options: [
      "拟合优度 + 独立性",
      "均值比较 + 方差比较",
      "回归 + 相关",
      "DOE + SPC"
    ],
    answer: 0,
    explanation: "Goodness-of-fit 检验分布；Contingency 检验两分类变量独立性。"
  },
  {
    id: 105, phase: "analyze",
    question: "比较两独立比例 (p1 vs p2) 最合适的检验是？",
    options: [
      "2-sample t test",
      "2-proportion test 或卡方",
      "Paired t",
      "ANOVA"
    ],
    answer: 1,
    explanation: "2-proportion z-test 或等价卡方适合两独立样本比例比较。"
  },
  {
    id: 106, phase: "analyze",
    question: "Power (检验力) 通常希望达到？",
    options: ["≥ 0.5", "≥ 0.8", "= α", "与效应量无关"],
    answer: 1,
    explanation: "经验上 Power ≥ 0.8 被视为可接受；Power = 1 - β，取决于 n、α、效应量、变异。"
  },
  {
    id: 107, phase: "analyze",
    question: "对偏态或含极端值数据，描述离散更稳健的指标是？",
    options: ["标准差", "方差", "IQR (四分位距)", "极差"],
    answer: 2,
    explanation: "IQR (Q3-Q1) 不受极端值影响；标准差与极差都易被离群值拉大。"
  },
  {
    id: 108, phase: "analyze",
    question: "分组回归中两条回归线斜率显著不同，提示？",
    options: [
      "自变量与分组存在交互作用",
      "无交互作用",
      "回归无效",
      "数据非线性"
    ],
    answer: 0,
    explanation: "斜率随分组而变是 interaction 的标志；若斜率相同截距不同，则是主效应差异。"
  },
  {
    id: 109, phase: "analyze",
    question: "\"相关 ≠ 因果\" 的主要启示是？",
    options: [
      "高相关不一定证明因果，需排除混杂、时间顺序、机制",
      "相关系数总是错的",
      "因果无法研究",
      "相关只能通过 ANOVA 验证"
    ],
    answer: 0,
    explanation: "因果推断还需时间顺序、机制合理性、排除混杂等条件。"
  },
  {
    id: 110, phase: "analyze",
    question: "评估正态性首选的组合是？",
    options: [
      "直方图 + 概率图 + AD/Shapiro-Wilk 检验",
      "散点图",
      "控制图",
      "Pareto 图"
    ],
    answer: 0,
    explanation: "图形法（直方图、Q-Q 图）+ 数值检验（AD、SW）结合判断；大样本数值检验过于敏感要谨慎。"
  },
  {
    id: 111, phase: "analyze",
    question: "配对 t 的非参数替代是？",
    options: [
      "Mann-Whitney U",
      "Wilcoxon Signed-Rank",
      "Kruskal-Wallis",
      "Mood's Median"
    ],
    answer: 1,
    explanation: "Wilcoxon Signed-Rank ↔ Paired t；Mann-Whitney ↔ 2-sample t；Kruskal-Wallis ↔ ANOVA。"
  },
  {
    id: 112, phase: "analyze",
    question: "样本量非常大时假设检验可能出现的问题是？",
    options: [
      "即使微小差异也会被检出显著，但可能无业务意义",
      "α 自动减小",
      "β 变得极大",
      "统计显著 = 业务显著"
    ],
    answer: 0,
    explanation: "大样本下应区分\"统计显著\"与\"实质显著\"，结合效应量与业务意义综合判断。"
  },
  {
    id: 113, phase: "analyze",
    question: "Simpson 悖论的典型表现？",
    options: [
      "总体显示 A 优于 B，但每个子群都是 B 优于 A",
      "均值与中位数相等",
      "残差正态分布",
      "两组方差相等"
    ],
    answer: 0,
    explanation: "未控制的混杂变量导致结论翻转；分层分析或引入协变量可揭示真相。"
  },
  {
    id: 114, phase: "analyze",
    question: "Y = f(X) 的含义是？",
    options: [
      "结果 Y 是过程输入 X 的函数，通过控制 X 改变 Y",
      "X 和 Y 必然线性相关",
      "只适用于连续数据",
      "只用于 Measure 阶段"
    ],
    answer: 0,
    explanation: "Y=f(X) 是 Six Sigma 的核心范式：找到并控制关键 X，才能可持续改善 Y。"
  },
  {
    id: 115, phase: "analyze",
    question: "1-sample t-test 用于？",
    options: [
      "将一个样本均值与已知/假设目标值比较",
      "比较两样本均值",
      "比较 3 组以上均值",
      "比较比例"
    ],
    answer: 0,
    explanation: "1-sample t 检验样本均值是否与目标值显著不同，假设数据近似正态。"
  },

  // ================= IMPROVE (追加) =================
  {
    id: 116, phase: "improve",
    question: "Heijunka (平准化) 的目的？",
    options: [
      "通过均衡排产降低产品类别与产量波动对下游的冲击",
      "增加库存缓冲",
      "提高单机产能",
      "减少员工"
    ],
    answer: 0,
    explanation: "Heijunka 让生产节奏与种类均匀铺开，是 Lean 减少过度生产和等待的关键做法。"
  },
  {
    id: 117, phase: "improve",
    question: "Jidoka (自働化) 的核心理念？",
    options: [
      "全自动化无人工厂",
      "机器具备异常自动停机能力，防止缺陷流入下游",
      "无限加快单机速度",
      "完全外包生产"
    ],
    answer: 1,
    explanation: "Jidoka 是 TPS 两大支柱之一（另一为 JIT），结合人工智慧与自动停机。"
  },
  {
    id: 118, phase: "improve",
    question: "Value-Added 活动需同时满足？",
    options: [
      "客户愿意付费 + 改变物料/信息 + 一次做对",
      "仅压缩成本",
      "只需提升产量",
      "只需降本"
    ],
    answer: 0,
    explanation: "VA 三要件：客户愿付钱、改变形态/属性、一次性正确完成。"
  },
  {
    id: 119, phase: "improve",
    question: "VSM 中典型的 NVA (非增值) 活动是？",
    options: [
      "等待、搬运、在制品积压、返工",
      "核心加工",
      "客户收款",
      "设计新功能"
    ],
    answer: 0,
    explanation: "NVA 是客户不愿付费的活动，Lean 目标是通过流动/拉动原则消除或压缩。"
  },
  {
    id: 120, phase: "improve",
    question: "Spaghetti Diagram (意大利面图) 的用途？",
    options: [
      "记录人员/物料实际移动路径以暴露布局浪费",
      "控制图",
      "财务分析",
      "时间节拍分析"
    ],
    answer: 0,
    explanation: "面条图揭示反复移动、绕行浪费，常用于 5S 与布局优化的前后对比。"
  },
  {
    id: 121, phase: "improve",
    question: "Pull (拉动) 系统的核心思想？",
    options: [
      "由下游实际需求触发上游补给",
      "预测后大量备货",
      "上游尽量推满产线",
      "每日巡检"
    ],
    answer: 0,
    explanation: "Pull 通过 Kanban 等信号实现按需生产，避免过剩库存与长 Lead Time。"
  },
  {
    id: 122, phase: "improve",
    question: "2^(5-1) 部分因子实验的运行次数？",
    options: ["16", "10", "5", "32"],
    answer: 0,
    explanation: "2^(5-1) = 2^4 = 16；部分因子以别名牺牲部分高阶交互换取实验成本。"
  },
  {
    id: 123, phase: "improve",
    question: "DOE 中引入 Center Points 的主要目的？",
    options: [
      "检验曲率 (curvature) 并估计纯误差",
      "减少总样本量",
      "随机化处理",
      "替代重复"
    ],
    answer: 0,
    explanation: "中心点帮助判断响应是否存在二次曲率，决定是否扩展到 RSM。"
  },
  {
    id: 124, phase: "improve",
    question: "Response Surface Methodology (响应面法) 的用途？",
    options: [
      "在已知关键因子后进一步优化最佳水平组合",
      "初步筛选因子",
      "测量系统分析",
      "控制图构建"
    ],
    answer: 0,
    explanation: "RSM (如 CCD、Box-Behnken) 建立二次模型寻找最优响应区域。"
  },
  {
    id: 125, phase: "improve",
    question: "Pilot (试点) 的核心价值？",
    options: [
      "在小范围验证方案、暴露问题，降低大规模部署风险",
      "取代正式实施",
      "取代统计验证",
      "减少文档"
    ],
    answer: 0,
    explanation: "Pilot 是 Improve 通向 Control 的关键桥梁，失败成本远低于全面铺开失败。"
  },
  {
    id: 126, phase: "improve",
    question: "Standard Work 的三要素通常是？",
    options: [
      "Takt Time、工作顺序、标准在制品",
      "库存、价格、利润",
      "工资、工时、补贴",
      "客户、订单、库存"
    ],
    answer: 0,
    explanation: "标准作业是持续改进的基线；没有标准就没有可比较的改进。"
  },
  {
    id: 127, phase: "improve",
    question: "One-Piece Flow (单件流) 最大的优势是？",
    options: [
      "显著降低 WIP、快速暴露问题",
      "提高单机速度",
      "减少员工数量",
      "保证最大批量"
    ],
    answer: 0,
    explanation: "单件流使问题无法被批量掩盖，是 Lean 流动思想的极致表达。"
  },
  {
    id: 128, phase: "improve",
    question: "头脑风暴 (Brainstorming) 的基本规则不包括？",
    options: [
      "暂缓评判",
      "鼓励大量想法",
      "即时评估每个想法可行性",
      "鼓励跨界与搭车想法"
    ],
    answer: 2,
    explanation: "生成阶段不评判；评估留给 Pugh / Impact-Effort 等筛选工具。"
  },
  {
    id: 129, phase: "improve",
    question: "Impact / Effort Matrix 中 \"高影响 + 低努力\" 象限通常称？",
    options: [
      "Quick Wins",
      "Major Projects",
      "Fill-ins",
      "Thankless Tasks"
    ],
    answer: 0,
    explanation: "Quick Wins 优先实施以快速建立势头；Major Projects 需要权衡投入资源。"
  },
  {
    id: 130, phase: "improve",
    question: "Nominal Group Technique (名义小组法) 的优点？",
    options: [
      "避免个别强势声音主导，让所有成员先独立表达",
      "只听一名专家",
      "完全一对一访谈",
      "需要大量数据清洗"
    ],
    answer: 0,
    explanation: "NGT 先独立写下想法，再轮流分享，兼顾发散与民主。"
  },
  {
    id: 131, phase: "improve",
    question: "确定最终方案后，最不推荐跳过的步骤是？",
    options: [
      "风险评估 (更新 FMEA)",
      "效益估算",
      "与过程负责人沟通",
      "直接全面部署无试点"
    ],
    answer: 3,
    explanation: "绕过 Pilot 大规模推行失败成本极高；应先小范围验证再扩展。"
  },
  {
    id: 132, phase: "improve",
    question: "Kaikaku 与 Kaizen 的主要区别？",
    options: [
      "Kaizen 渐进持续；Kaikaku 是剧烈的一次性变革",
      "完全相同",
      "Kaizen 更激进",
      "Kaikaku 仅用于 IT"
    ],
    answer: 0,
    explanation: "两者互补：Kaikaku 做大刀阔斧跳跃；Kaizen 在此基础上持续微调。"
  },
  {
    id: 133, phase: "improve",
    question: "Pugh Matrix 使用时最重要的一步？",
    options: [
      "定义评估准则 (Criteria) 与权重",
      "只按成本排序",
      "只听老板意见",
      "只评估一个方案"
    ],
    answer: 0,
    explanation: "准则不客观全面，Pugh 的结果即失真；必要时可加权评分。"
  },

  // ================= CONTROL (追加) =================
  {
    id: 134, phase: "control",
    question: "Rational Subgrouping (合理子组) 的核心思想？",
    options: [
      "使子组内仅含共同原因，组间差异反映特殊原因",
      "子组越大越好",
      "按纯随机抽样",
      "跨所有班次混合"
    ],
    answer: 0,
    explanation: "合理子组让 R-chart 捕捉组内随机变异，X-bar 捕捉组间系统差异。"
  },
  {
    id: 135, phase: "control",
    question: "I-MR 图中 MR (Moving Range) 的定义？",
    options: [
      "相邻两观测值之差的绝对值",
      "最大 - 最小",
      "标准差",
      "样本均值"
    ],
    answer: 0,
    explanation: "MR_i = |X_i - X_{i-1}|，用于估计短期变异（无子组情境下）。"
  },
  {
    id: 136, phase: "control",
    question: "当数据为不良品数且样本量固定时，最适合的控制图？",
    options: ["np 图", "p 图", "c 图", "u 图"],
    answer: 0,
    explanation: "np 图 = 固定子组大小的不良品数；p 图允许不同子组大小；c/u 针对缺陷数。"
  },
  {
    id: 137, phase: "control",
    question: "对极低不良率 (ppm 级)，传统 p 图可能失效，可考虑？",
    options: [
      "CUSUM / EWMA / g-chart / t-chart",
      "直方图替代",
      "继续用 p 图",
      "Pareto"
    ],
    answer: 0,
    explanation: "低频事件下 g-chart (事件间产品数)、t-chart (事件间时间)、CUSUM/EWMA 更有效。"
  },
  {
    id: 138, phase: "control",
    question: "CUSUM 图相对 Shewhart 图的特点？",
    options: [
      "对小幅持续漂移更敏感",
      "对大幅突变更敏感",
      "仅用于计数数据",
      "无统计意义"
    ],
    answer: 0,
    explanation: "CUSUM 累积偏差量，早期检出小漂移；Shewhart 对大幅单点异常更敏感。"
  },
  {
    id: 139, phase: "control",
    question: "EWMA 图中权重 λ 一般取？",
    options: [
      "0.05 - 0.25",
      "大于 1",
      "恰好等于 0.5",
      "取决于子组数"
    ],
    answer: 0,
    explanation: "λ 越小对远期权重越高，对小漂移敏感；常用 0.1-0.2 作为折中。"
  },
  {
    id: 140, phase: "control",
    question: "Pre-Control 的主要局限？",
    options: [
      "样本量很小，统计基础弱",
      "不能用于生产",
      "无法判异",
      "只能用于离散数据"
    ],
    answer: 0,
    explanation: "Pre-Control 基于规格区而非过程自身变异，应作为辅助而非主要 SPC 手段。"
  },
  {
    id: 141, phase: "control",
    question: "Control Plan 在改进方案部署后应？",
    options: [
      "成为活文档，随变化持续更新",
      "一次签字后永久不变",
      "由财务部管理",
      "与 FMEA 无关"
    ],
    answer: 0,
    explanation: "Control Plan 与 FMEA 双向联动，变更/纠正措施要同步更新。"
  },
  {
    id: 142, phase: "control",
    question: "控制图连续多点上升/下降趋势，最可能提示？",
    options: [
      "渐变漂移 (如刀具磨损、温度升高)",
      "纯随机",
      "无需关注",
      "必须更换测量设备"
    ],
    answer: 0,
    explanation: "Trend (连续 6-7 点同向) 通常对应系统性原因，需结合工程知识排查。"
  },
  {
    id: 143, phase: "control",
    question: "Process Capability 再验证的典型触发条件？",
    options: [
      "重大工程变更、原材料变更、设备大修后",
      "每日重新验证",
      "永远不用",
      "仅客户要求"
    ],
    answer: 0,
    explanation: "重要变更可能动摇过程分布，需重新计算 Cpk/Ppk 以确认能力。"
  },
  {
    id: 144, phase: "control",
    question: "Lessons Learned 最佳捕获时机？",
    options: [
      "每阶段结束 + 项目关闭时",
      "只有失败时",
      "永远不需要",
      "只有 MBB 可做"
    ],
    answer: 0,
    explanation: "分阶段捕获减少遗忘；关闭时统一入库，支撑横向复制。"
  },
  {
    id: 145, phase: "control",
    question: "Tollgate Review (关卡评审) 的作用？",
    options: [
      "阶段结束评估交付物质量与下一阶段准备度",
      "决定员工奖金",
      "取代 Kaizen",
      "与 DMAIC 无关"
    ],
    answer: 0,
    explanation: "Tollgate 由 Sponsor/Champion 主持，把关交付质量后再进入下一阶段。"
  },
  {
    id: 146, phase: "control",
    question: "LPA (Layered Process Audit) 的关键特征？",
    options: [
      "不同层级管理者按不同频率检查关键控制点",
      "只由基层自查",
      "仅质量部门抽查",
      "每年一次"
    ],
    answer: 0,
    explanation: "多层次频繁审核抑制控制退化，是持续性的重要保障。"
  },
  {
    id: 147, phase: "control",
    question: "将改进横向复制到其他产线/工厂通常称作？",
    options: [
      "Replication / Horizontal Deployment",
      "Scope Creep",
      "Kaizen Event",
      "VOC 采集"
    ],
    answer: 0,
    explanation: "横向展开是放大项目收益、固化最佳实践的关键。"
  },
  {
    id: 148, phase: "control",
    question: "判断过程 In Control 后，下一步最合适的问题？",
    options: [
      "过程是否具备能力满足客户规格 (Capable)？",
      "是否要增加测量频率",
      "是否关闭产线",
      "是否更换 SPC 软件"
    ],
    answer: 0,
    explanation: "In Control ≠ Capable；稳定只说明无特殊原因，能力还要看 Cpk/Ppk。"
  },
  {
    id: 149, phase: "control",
    question: "c-chart 最适合的情境？",
    options: [
      "每天对同一面积布料检查外观缺陷数",
      "检验不良率",
      "监控尺寸",
      "跟踪周期时间"
    ],
    answer: 0,
    explanation: "c 图针对\"固定检查单位内缺陷数\"（Poisson）；u 图对应单位大小可变的情境。"
  },
  {
    id: 150, phase: "control",
    question: "控制图点\"过度居中、几乎不靠近控制限\"可能提示？",
    options: [
      "子组分层 (stratification) — 不同来源数据混入一个子组",
      "过程极度稳定无需关注",
      "必须立刻更换控制图",
      "客户规格过宽"
    ],
    answer: 0,
    explanation: "点过度集中通常意味着子组内混入了本应分开的来源，应检查子组定义与抽样策略。"
  }
];
