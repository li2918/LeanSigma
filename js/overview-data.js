// DMAIC + Lean knowledge points. Content aligned with ASQ CSSGB / IASSC Green Belt BOK.
const OVERVIEW_DATA = [
  {
    id: "define",
    letter: "D",
    phaseClass: "phase-define",
    title: "Define 定义",
    subtitle: "明确项目目标、范围、客户需求与价值",
    topics: [
      {
        name: "六西格玛基础",
        items: [
          "<strong>六西格玛哲学</strong>：追求 3.4 DPMO (每百万机会缺陷数) 的质量水平",
          "<strong>Y = f(X)</strong>：Y 是输出（关键指标），X 是输入（流程变量）",
          "<strong>DMAIC</strong>：Define → Measure → Analyze → Improve → Control",
          "<strong>角色体系</strong>：Champion、MBB、BB、GB、Team Member",
          "六西格玛 vs Lean vs TQM 的区别与结合"
        ]
      },
      {
        name: "项目立项",
        items: [
          "<strong>Project Charter 项目章程</strong>：业务背景、问题陈述、目标陈述、范围、团队、里程碑",
          "<strong>Business Case 商业案例</strong>：财务收益 (Hard Saving / Soft Saving)",
          "<strong>Problem Statement</strong>：SMART 原则（具体、可量化、可实现、相关、时限）",
          "<strong>项目选择</strong>：Pareto、优先矩阵、Pick Chart",
          "Scope 范围界定（In scope / Out of scope）"
        ]
      },
      {
        name: "客户与 VOC",
        items: [
          "<strong>VOC (Voice of Customer)</strong>：采集方式（访谈、问卷、投诉、Kano 模型）",
          "<strong>CTQ (Critical to Quality)</strong>：将 VOC 转换为可测量的关键特性",
          "<strong>CTQ Tree</strong>：Need → Driver → CTQ",
          "<strong>Kano 模型</strong>：基本型、期望型、兴奋型需求",
          "内部客户 vs 外部客户"
        ]
      },
      {
        name: "流程与利益相关者",
        items: [
          "<strong>SIPOC</strong>：Supplier、Input、Process、Output、Customer（高阶流程图）",
          "<strong>Process Map</strong>：流程图、泳道图、价值流图 (VSM)",
          "<strong>Stakeholder Analysis 利益相关者分析</strong>：影响力 / 关注度矩阵",
          "<strong>RACI 矩阵</strong>：Responsible、Accountable、Consulted、Informed",
          "Gantt 甘特图与项目里程碑"
        ]
      }
    ]
  },
  {
    id: "measure",
    letter: "M",
    phaseClass: "phase-measure",
    title: "Measure 测量",
    subtitle: "建立基线，量化当前流程绩效",
    topics: [
      {
        name: "数据类型与测量尺度",
        items: [
          "<strong>连续型数据 (Continuous)</strong>：长度、时间、温度",
          "<strong>离散型数据 (Discrete / Attribute)</strong>：计数、良/不良",
          "<strong>测量尺度</strong>：名义 (Nominal)、顺序 (Ordinal)、区间 (Interval)、比率 (Ratio)",
          "数据优先级：Continuous > Discrete（信息量更大）"
        ]
      },
      {
        name: "基础统计",
        items: [
          "<strong>集中趋势</strong>：均值 (Mean)、中位数 (Median)、众数 (Mode)",
          "<strong>离散程度</strong>：极差 (Range)、方差 (Variance)、标准差 (σ)",
          "<strong>偏度 Skewness</strong> 与 <strong>峰度 Kurtosis</strong>",
          "<strong>分布</strong>：正态、二项、泊松、指数、均匀",
          "中心极限定理 (CLT)"
        ]
      },
      {
        name: "MSA 测量系统分析",
        items: [
          "<strong>准确性</strong>：Bias (偏倚)、Linearity (线性)、Stability (稳定性)",
          "<strong>精确性</strong>：Repeatability (重复性)、Reproducibility (再现性)",
          "<strong>Gage R&R</strong>：< 10% 可接受，10-30% 视情况，> 30% 不可接受",
          "<strong>计数型 MSA</strong>：Kappa 一致性分析（> 0.7 良好）",
          "分辨率：至少能分辨公差的 1/10"
        ]
      },
      {
        name: "过程能力",
        items: [
          "<strong>Cp</strong> = (USL - LSL) / 6σ — 短期潜在能力",
          "<strong>Cpk</strong> = min((USL-μ)/3σ, (μ-LSL)/3σ) — 考虑居中程度",
          "<strong>Pp / Ppk</strong>：长期性能指标",
          "<strong>DPMO / Sigma Level</strong>：3σ ≈ 66807 DPMO；6σ ≈ 3.4 DPMO",
          "<strong>Yield</strong>：FTY、RTY (Rolled Throughput Yield)"
        ]
      },
      {
        name: "Lean 测量指标",
        items: [
          "<strong>Cycle Time 周期时间</strong>：单件生产所需时间",
          "<strong>Takt Time 节拍时间</strong> = 可用时间 / 客户需求",
          "<strong>Lead Time 交付时间</strong>：从订单到交付的总时间",
          "<strong>WIP 在制品</strong> 与 Little's Law：L = λW",
          "<strong>OEE</strong> = 可用率 × 性能率 × 质量率"
        ]
      }
    ]
  },
  {
    id: "analyze",
    letter: "A",
    phaseClass: "phase-analyze",
    title: "Analyze 分析",
    subtitle: "识别根本原因，验证关键 X",
    topics: [
      {
        name: "根因分析工具",
        items: [
          "<strong>鱼骨图 (Ishikawa / Fishbone)</strong>：6M — Man/Machine/Method/Material/Measurement/Environment",
          "<strong>5 Why 五问法</strong>：层层追问根本原因",
          "<strong>Pareto 帕累托图</strong>：80/20 原则，聚焦关键少数",
          "<strong>FMEA 失效模式与影响分析</strong>：RPN = 严重度 × 发生度 × 探测度",
          "Affinity Diagram 亲和图、Tree Diagram 树图"
        ]
      },
      {
        name: "假设检验基础",
        items: [
          "<strong>H0 (原假设) vs H1 (备择假设)</strong>",
          "<strong>α 第一类错误</strong>：弃真（通常 0.05）",
          "<strong>β 第二类错误</strong>：取伪；Power = 1 - β",
          "<strong>p 值</strong>：p < α 拒绝 H0",
          "单侧 vs 双侧检验；样本量计算"
        ]
      },
      {
        name: "参数检验方法",
        items: [
          "<strong>1-sample t test</strong>：比较样本均值与目标值",
          "<strong>2-sample t test</strong>：比较两组均值",
          "<strong>Paired t test</strong>：配对数据（前后对比）",
          "<strong>ANOVA 方差分析</strong>：比较 3 组以上均值",
          "<strong>F test</strong>：比较方差；<strong>Chi-square 卡方</strong>：计数型数据关联性"
        ]
      },
      {
        name: "相关与回归",
        items: [
          "<strong>散点图 Scatter Plot</strong>：可视化 X-Y 关系",
          "<strong>Pearson 相关系数 r</strong>：线性强度，-1 到 +1",
          "<strong>R²</strong>：决定系数，解释变异的比例",
          "<strong>简单线性回归</strong>：Y = b0 + b1·X + ε",
          "<strong>多元回归</strong>：多个 X 对 Y 的影响；注意多重共线性"
        ]
      },
      {
        name: "非参数与其他",
        items: [
          "<strong>Mann-Whitney U</strong>：非正态 2 样本检验",
          "<strong>Kruskal-Wallis</strong>：非参数 ANOVA",
          "<strong>Mood's Median</strong>：中位数检验",
          "<strong>Multi-Vari Analysis</strong>：位置内、位置间、时间变异分析",
          "正态性检验：Anderson-Darling、Shapiro-Wilk"
        ]
      }
    ]
  },
  {
    id: "improve",
    letter: "I",
    phaseClass: "phase-improve",
    title: "Improve 改进",
    subtitle: "设计并验证解决方案",
    topics: [
      {
        name: "DOE 实验设计",
        items: [
          "<strong>术语</strong>：Factor (因子)、Level (水平)、Response (响应)、Replicate、Block",
          "<strong>Full Factorial 全因子</strong>：2^k 实验，研究主效应与交互作用",
          "<strong>Fractional Factorial 部分因子</strong>：2^(k-p)，筛选关键因子",
          "<strong>Main Effect 主效应</strong> 与 <strong>Interaction 交互作用</strong>",
          "随机化、重复、区组（DOE 三大原则）"
        ]
      },
      {
        name: "解决方案生成与筛选",
        items: [
          "<strong>Brainstorming</strong>、SCAMPER、Nominal Group Technique",
          "<strong>Pugh Matrix</strong>：方案两两对比评分",
          "<strong>Impact / Effort Matrix</strong>：优先级矩阵",
          "<strong>Benchmarking 标杆分析</strong>",
          "Pilot 试点运行与效果验证"
        ]
      },
      {
        name: "Lean 核心工具",
        items: [
          "<strong>5S</strong>：Sort、Set in Order、Shine、Standardize、Sustain（整理/整顿/清扫/清洁/素养）",
          "<strong>Kaizen 改善</strong>：小步快跑的持续改进；Kaizen Event 改善周",
          "<strong>Kanban 看板</strong>：拉动式生产信号",
          "<strong>Poka-Yoke 防错</strong>：设计避免人为错误",
          "<strong>SMED 快速换模</strong>：缩短换型时间；<strong>TPM</strong> 全员生产维护"
        ]
      },
      {
        name: "浪费与流程改造",
        items: [
          "<strong>八大浪费 (DOWNTIME)</strong>：Defects、Overproduction、Waiting、Non-utilized talent、Transport、Inventory、Motion、Extra-processing",
          "<strong>VSM 价值流图</strong>：Current State → Future State",
          "<strong>Theory of Constraints 约束理论</strong>：识别瓶颈（DBR 鼓-缓冲-绳）",
          "<strong>Flow 流动</strong>、<strong>Pull 拉动</strong>、<strong>Perfection 尽善尽美</strong>",
          "One-Piece Flow 单件流 vs 批量生产"
        ]
      }
    ]
  },
  {
    id: "control",
    letter: "C",
    phaseClass: "phase-control",
    title: "Control 控制",
    subtitle: "固化改进成果，持续监控",
    topics: [
      {
        name: "SPC 统计过程控制",
        items: [
          "<strong>控制图</strong>：识别普通原因 vs 特殊原因变异",
          "<strong>UCL / LCL</strong>：μ ± 3σ 控制限（非规格限）",
          "<strong>连续型控制图</strong>：X̄-R (子组 2-9)、X̄-s (子组 ≥10)、I-MR (单值)",
          "<strong>计数型控制图</strong>：p 图、np 图（不良率/数）、c 图、u 图（缺陷数）",
          "<strong>Western Electric 判异规则</strong>：连续 7 点同侧、2σ 带外 2/3 点等"
        ]
      },
      {
        name: "控制计划与标准化",
        items: [
          "<strong>Control Plan 控制计划</strong>：关键 X、测量方法、频次、反应计划",
          "<strong>SOP 标准作业程序</strong>、<strong>Work Instruction</strong>",
          "<strong>Visual Management 可视化管理</strong>：Andon 灯、看板",
          "<strong>Reaction Plan 反应计划</strong>：OOC 超出控制时的处置步骤",
          "Training Plan 培训计划与技能矩阵"
        ]
      },
      {
        name: "成果移交与持续改进",
        items: [
          "<strong>Project Closure 项目收尾</strong>：财务验证、经验教训",
          "<strong>Handoff 移交</strong>：将流程所有权交还过程负责人",
          "<strong>Audit 审核</strong>：Layered Process Audit、内审",
          "<strong>Sustainability 可持续性</strong>：定期审视 KPI",
          "横向展开 (Replication) 到其他流程/工厂"
        ]
      }
    ]
  }
];
