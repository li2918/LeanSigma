// DMAIC + Lean knowledge points. Aligned with ASQ CSSGB / IASSC Green Belt BOK.
// Each topic may include an optional `detail` block with:
//   - concept: longer HTML explanation
//   - formulas: array of key formula strings
//   - examples: array of worked examples { title, problem, solution (HTML) }
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
          "<strong>DMADV / DFSS</strong>：用于设计全新流程/产品 (Define-Measure-Analyze-Design-Verify)",
          "<strong>角色体系</strong>：Champion、MBB、BB、GB、Yellow Belt、Team Member",
          "六西格玛 vs Lean vs TQM 的区别与结合"
        ],
        detail: {
          concept: `
            <p>六西格玛是以数据驱动、以客户为中心、以减少变异为核心的管理方法论。统计上，"6σ" 指过程均值到最近规格限有 6 倍标准差距离；考虑长期 1.5σ 漂移后，每百万机会仅 3.4 个缺陷。</p>
            <p><strong>Sigma 水平与 DPMO 对照（含 1.5σ 漂移）：</strong></p>
            <ul>
              <li>2σ ≈ 308,537 DPMO（良率 ~69.1%）</li>
              <li>3σ ≈ 66,807 DPMO（良率 ~93.3%）</li>
              <li>4σ ≈ 6,210 DPMO（良率 ~99.38%）</li>
              <li>5σ ≈ 233 DPMO（良率 ~99.977%）</li>
              <li>6σ ≈ 3.4 DPMO（良率 ~99.9997%）</li>
            </ul>
            <p>Lean 聚焦"流动与浪费"，Six Sigma 聚焦"变异与缺陷"，两者互补，合称 <strong>Lean Six Sigma</strong>。</p>
          `,
          examples: [
            {
              title: "例题：DPMO → Sigma 水平",
              problem: "某仓库每月处理订单 5000 张，平均每单包含 8 个可能出错的机会点；本月共发现缺陷 120 处。求 DPMO 及近似 Sigma 水平。",
              solution: `
                <p><strong>步骤 1：计算机会数</strong><br>Opportunities = 5000 × 8 = 40,000</p>
                <p><strong>步骤 2：计算 DPMO</strong><br>DPMO = 120 / 40,000 × 1,000,000 = 3,000</p>
                <p><strong>步骤 3：查表对照</strong><br>3,000 DPMO 介于 4σ (6,210) 与 5σ (233) 之间，更接近 4σ，约 4.25σ。</p>
                <p><strong>结论：</strong>流程当前约 4.25σ 水平，距离 6σ 目标仍有显著改进空间。</p>
              `
            }
          ]
        }
      },
      {
        name: "项目立项",
        items: [
          "<strong>Project Charter 项目章程</strong>：业务背景、问题陈述、目标陈述、范围、团队、里程碑",
          "<strong>Business Case 商业案例</strong>：财务收益 (Hard Saving / Soft Saving)",
          "<strong>Problem Statement</strong>：SMART 原则（具体、可量化、可实现、相关、时限）",
          "<strong>项目选择</strong>：Pareto、优先矩阵、Pick Chart",
          "Scope 范围界定（In scope / Out of scope）",
          "<strong>Tollgate Review</strong>：每阶段结束的评审门禁"
        ],
        detail: {
          concept: `
            <p>项目立项要把模糊的"感觉有问题"变成可执行的"数据化项目"。SMART 五要素是关键：<strong>S</strong>pecific、<strong>M</strong>easurable、<strong>A</strong>chievable、<strong>R</strong>elevant、<strong>T</strong>ime-bound。</p>
            <p><strong>问题陈述 vs 目标陈述</strong>：</p>
            <ul>
              <li>问题陈述：描述"现在怎么样、影响是什么"，只陈述事实，<em>不预判根因</em>。</li>
              <li>目标陈述：描述"改到什么程度、何时达到、用什么指标衡量"。</li>
            </ul>
          `,
          examples: [
            {
              title: "例题：改写成 SMART 问题陈述",
              problem: "原始描述：\"我们的客户退货太多，需要改善。\" 请改写为符合 SMART 原则的问题陈述。",
              solution: `
                <p><strong>改写：</strong></p>
                <blockquote style="border-left:3px solid var(--define);padding-left:12px;color:var(--text)">
                  "2025 年 Q3 A 产品客户退货率由 Q2 的 2.0% 上升至 5.8%，对应每月约 90 万元退货损失与客户满意度 NPS 下降 12 点。该问题跨越包装与物流两个环节，需在 2025-12-31 前将退货率降回 2.0% 以下。"
                </blockquote>
                <p><strong>SMART 核查：</strong> Specific (A 产品、退货率)、Measurable (5.8%→2.0%、90 万元)、Achievable (历史基线)、Relevant (营收与 NPS)、Time-bound (Q4 末)。</p>
              `
            }
          ]
        }
      },
      {
        name: "客户与 VOC",
        items: [
          "<strong>VOC (Voice of Customer)</strong>：采集方式（访谈、问卷、投诉、Kano 模型）",
          "<strong>CTQ (Critical to Quality)</strong>：将 VOC 转换为可测量的关键特性",
          "<strong>CTQ Tree</strong>：Need → Driver → CTQ",
          "<strong>Kano 模型</strong>：基本型、期望型、兴奋型需求",
          "内部客户 vs 外部客户",
          "CTQ 家族：CTQ / CTC (Cost) / CTD (Delivery) / CTS (Safety)"
        ],
        detail: {
          concept: `
            <p>VOC 采集只是第一步，真正考验是把模糊的客户语言翻译成<strong>可测量的 CTQ</strong>。常用工具：<strong>CTQ Tree（关键质量树）</strong>。</p>
            <p>Kano 三类需求：</p>
            <ul>
              <li><strong>基本型 (Must-be)</strong>：没有就抱怨，有了也无加分（例：酒店有床）</li>
              <li><strong>期望型 (One-dimensional)</strong>：满意度随功能线性变化（例：Wi-Fi 速度）</li>
              <li><strong>兴奋型 (Attractive)</strong>：超出预期的惊喜（例：入住赠送礼物）</li>
            </ul>
          `,
          examples: [
            {
              title: "例题：构建 CTQ Tree",
              problem: "客户反馈：\"你们的外卖送得太慢，经常等到饭都凉了。\" 请构建 CTQ Tree。",
              solution: `
                <p><strong>Need（需求）：</strong>快速送达、食物温度合适</p>
                <p><strong>Driver（驱动因素）：</strong></p>
                <ul>
                  <li>下单到送达的总时长</li>
                  <li>食物到手温度</li>
                  <li>配送员路径效率</li>
                </ul>
                <p><strong>CTQ（可测量指标）：</strong></p>
                <ul>
                  <li>下单到送达 ≤ 30 分钟（95% 订单）</li>
                  <li>送达时食物温度 ≥ 60°C</li>
                  <li>配送员平均空驶里程 ≤ 1 km</li>
                </ul>
                <p><strong>要点：</strong>CTQ 必须"可测、有阈值、可审计"，否则无法在 Measure 阶段量化。</p>
              `
            }
          ]
        }
      },
      {
        name: "流程与利益相关者",
        items: [
          "<strong>SIPOC</strong>：Supplier、Input、Process、Output、Customer（高阶流程图）",
          "<strong>Process Map</strong>：流程图、泳道图、价值流图 (VSM)",
          "<strong>Stakeholder Analysis</strong>：影响力 / 关注度矩阵（四象限）",
          "<strong>RACI 矩阵</strong>：Responsible、Accountable、Consulted、Informed",
          "Gantt 甘特图与项目里程碑",
          "Tuckman 团队阶段：Forming → Storming → Norming → Performing"
        ],
        detail: {
          concept: `
            <p>SIPOC 的目的：在 Define 阶段用"高空视角"看清流程边界，避免过早钻进细节。</p>
            <p>Stakeholder 的影响力/关注度四象限策略：</p>
            <ul>
              <li>高影响 + 高关注 → <strong>Manage Closely</strong></li>
              <li>高影响 + 低关注 → <strong>Keep Satisfied</strong></li>
              <li>低影响 + 高关注 → <strong>Keep Informed</strong></li>
              <li>低影响 + 低关注 → <strong>Minimal Effort</strong></li>
            </ul>
          `,
          examples: [
            {
              title: "例题：绘制一个 SIPOC",
              problem: "流程：\"外卖平台订单履约\"，请列出 SIPOC。",
              solution: `
                <table style="border-collapse:collapse;width:100%;font-size:14px">
                  <thead><tr style="background:var(--bg)">
                    <th style="border:1px solid var(--border);padding:8px">Supplier</th>
                    <th style="border:1px solid var(--border);padding:8px">Input</th>
                    <th style="border:1px solid var(--border);padding:8px">Process</th>
                    <th style="border:1px solid var(--border);padding:8px">Output</th>
                    <th style="border:1px solid var(--border);padding:8px">Customer</th>
                  </tr></thead>
                  <tbody><tr style="vertical-align:top">
                    <td style="border:1px solid var(--border);padding:8px">商户、配送员、地图服务商</td>
                    <td style="border:1px solid var(--border);padding:8px">订单信息、菜品、取餐地址</td>
                    <td style="border:1px solid var(--border);padding:8px">接单→制作→取餐→配送→送达</td>
                    <td style="border:1px solid var(--border);padding:8px">送达的食物、订单完成记录</td>
                    <td style="border:1px solid var(--border);padding:8px">下单用户</td>
                  </tr></tbody>
                </table>
                <p style="margin-top:12px"><strong>技巧：</strong>SIPOC 的 Process 通常 4-7 步即可，不需要每个动作都展开。</p>
              `
            }
          ]
        }
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
          "数据优先级：Continuous > Discrete（信息量更大）",
          "比率尺度有绝对零点，区间尺度零点任意"
        ],
        detail: {
          concept: `
            <p>不同尺度决定了可做的运算：</p>
            <ul>
              <li><strong>Nominal</strong>：仅分类 (颜色、部门) — 只能计数</li>
              <li><strong>Ordinal</strong>：有顺序但差距无意义 (满意度 1-5) — 可比较大小</li>
              <li><strong>Interval</strong>：差距有意义但无绝对零点 (摄氏度) — 可加减</li>
              <li><strong>Ratio</strong>：有绝对零点 (重量、时间) — 可比值</li>
            </ul>
            <p>同等置信度下连续数据所需样本量远小于计数数据；能用连续就不要用计数。</p>
          `
        }
      },
      {
        name: "基础统计",
        items: [
          "<strong>集中趋势</strong>：均值 (Mean)、中位数 (Median)、众数 (Mode)",
          "<strong>离散程度</strong>：极差 (Range)、方差 (Variance)、标准差 (σ)、IQR",
          "<strong>偏度 Skewness</strong> 与 <strong>峰度 Kurtosis</strong>",
          "<strong>分布</strong>：正态、二项、泊松、指数、均匀",
          "中心极限定理 (CLT)：样本量足够时样本均值近似正态",
          "经验法则：μ±1σ→68.3%，μ±2σ→95.4%，μ±3σ→99.73%"
        ],
        detail: {
          concept: `
            <p>理解离散程度比理解均值更重要 —— 均值相同的两个过程可能稳定性天差地别。</p>
            <p>常用公式：</p>
          `,
          formulas: [
            "均值 x̄ = Σxᵢ / n",
            "样本方差 s² = Σ(xᵢ - x̄)² / (n - 1)",
            "样本标准差 s = √s²"
          ],
          examples: [
            {
              title: "例题：计算样本标准差",
              problem: "样本数据：[8, 10, 12, 14, 16]，求均值与样本标准差。",
              solution: `
                <p><strong>步骤 1：均值</strong><br>x̄ = (8+10+12+14+16)/5 = 60/5 = 12</p>
                <p><strong>步骤 2：离差平方和</strong><br>(8-12)² + (10-12)² + (12-12)² + (14-12)² + (16-12)² = 16+4+0+4+16 = 40</p>
                <p><strong>步骤 3：样本方差</strong><br>s² = 40/(5-1) = 10</p>
                <p><strong>步骤 4：样本标准差</strong><br>s = √10 ≈ 3.162</p>
                <p><strong>注意：</strong>样本方差除以 (n-1) 不是 n —— 这是 Bessel 校正，使估计无偏。</p>
              `
            }
          ]
        }
      },
      {
        name: "MSA 测量系统分析",
        items: [
          "<strong>准确性</strong>：Bias (偏倚)、Linearity (线性)、Stability (稳定性)",
          "<strong>精确性</strong>：Repeatability (重复性)、Reproducibility (再现性)",
          "<strong>Gage R&R</strong>：< 10% 可接受，10-30% 视情况，> 30% 不可接受",
          "<strong>计数型 MSA</strong>：Kappa 一致性分析（> 0.7 良好）",
          "分辨率：至少能分辨公差的 1/10"
        ],
        detail: {
          concept: `
            <p>MSA 回答一个关键问题：<strong>你看到的变异是来自过程，还是来自测量系统？</strong>如果测量不可信，后面一切分析都是空中楼阁。</p>
            <p><strong>准确性维度：</strong></p>
            <ul>
              <li><strong>Bias</strong>：测量均值与真值的差</li>
              <li><strong>Linearity</strong>：不同量程下的 Bias 变化</li>
              <li><strong>Stability</strong>：同一部件长期测量的漂移</li>
            </ul>
            <p><strong>精确性维度（Gage R&R）：</strong></p>
            <ul>
              <li><strong>Repeatability</strong>：同一操作员多次测量的变异（设备本身）</li>
              <li><strong>Reproducibility</strong>：不同操作员测同一部件的变异</li>
            </ul>
          `,
          examples: [
            {
              title: "例题：判定 Gage R&R 是否可接受",
              problem: "某项目 Gage R&R 研究结果：%GR&R = 18%，%Part Variation = 98%，Number of Distinct Categories (ndc) = 5。结论？",
              solution: `
                <p><strong>分析 1：%GR&R = 18%</strong> — 介于 10%-30%，按 AIAG 标准属"条件可接受"，需结合应用重要性、维修成本、客户风险综合判断。</p>
                <p><strong>分析 2：ndc = 5</strong> — AIAG 要求 ≥ 5，恰好合格，说明测量系统能区分至少 5 个不同水平的部件。</p>
                <p><strong>结论：</strong>系统可以使用，但对关键质量特性建议优化（如更换更稳定夹具、加强人员培训）。</p>
              `
            }
          ]
        }
      },
      {
        name: "过程能力",
        items: [
          "<strong>Cp</strong> = (USL - LSL) / 6σ — 短期潜在能力",
          "<strong>Cpk</strong> = min((USL-μ)/3σ, (μ-LSL)/3σ) — 考虑居中程度",
          "<strong>Pp / Ppk</strong>：长期性能指标",
          "<strong>DPMO / Sigma Level</strong>：3σ ≈ 66807 DPMO；6σ ≈ 3.4 DPMO",
          "<strong>Yield</strong>：FTY、RTY (Rolled Throughput Yield) = ΠFTYᵢ",
          "Cp = Cpk 说明过程完全居中"
        ],
        detail: {
          concept: `
            <p><strong>Cp 看宽度，Cpk 看居中 + 宽度。</strong>Cp 永远 ≥ Cpk；两者相等时均值恰好在规格中心。</p>
            <p>经验判断：</p>
            <ul>
              <li>Cpk < 1.0 → 能力不足，超差风险高</li>
              <li>1.0 ≤ Cpk < 1.33 → 基本能力，需监控</li>
              <li>1.33 ≤ Cpk < 1.67 → 良好，过程稳健</li>
              <li>Cpk ≥ 1.67 → 优秀，六西格玛级别</li>
            </ul>
          `,
          formulas: [
            "Cp = (USL - LSL) / 6σ",
            "Cpu = (USL - μ) / 3σ",
            "Cpl = (μ - LSL) / 3σ",
            "Cpk = min(Cpu, Cpl)"
          ],
          examples: [
            {
              title: "例题：计算 Cp 与 Cpk",
              problem: "某轴外径规格 USL = 10.10，LSL = 9.90。抽样得 μ = 9.97，σ = 0.02。求 Cp、Cpk，并评估。",
              solution: `
                <p><strong>Cp</strong> = (10.10 - 9.90) / (6 × 0.02) = 0.20 / 0.12 = <strong>1.67</strong></p>
                <p><strong>Cpu</strong> = (10.10 - 9.97) / (3 × 0.02) = 0.13 / 0.06 ≈ <strong>2.17</strong></p>
                <p><strong>Cpl</strong> = (9.97 - 9.90) / (3 × 0.02) = 0.07 / 0.06 ≈ <strong>1.17</strong></p>
                <p><strong>Cpk</strong> = min(2.17, 1.17) = <strong>1.17</strong></p>
                <p><strong>诊断：</strong>Cp = 1.67（能力潜力优秀）但 Cpk 仅 1.17（基本能力），差距源于均值 9.97 偏离规格中心 10.00 达 0.03。</p>
                <p><strong>改进方向：</strong>先调整过程中心值至 10.00（相对容易），再考虑降低 σ（相对困难）。</p>
              `
            },
            {
              title: "例题：计算 RTY",
              problem: "流程含 4 道工序，各道 FTY 分别为 98%、95%、97%、99%。求 RTY。",
              solution: `
                <p>RTY = 0.98 × 0.95 × 0.97 × 0.99 = <strong>0.8939 ≈ 89.4%</strong></p>
                <p><strong>对比：</strong>如果只看最后良率 99%，会严重高估流程真实水平。RTY 反映"一次性通过全流程"的概率，能揭露隐藏的返工浪费。</p>
              `
            }
          ]
        }
      },
      {
        name: "Lean 测量指标",
        items: [
          "<strong>Cycle Time 周期时间</strong>：单件生产所需时间",
          "<strong>Takt Time 节拍时间</strong> = 可用时间 / 客户需求",
          "<strong>Lead Time 交付时间</strong>：从订单到交付的总时间",
          "<strong>WIP 在制品</strong> 与 Little's Law：L = λW",
          "<strong>OEE</strong> = 可用率 × 性能率 × 质量率",
          "Cycle Time < Takt Time 才能跟上客户需求"
        ],
        detail: {
          concept: `
            <p>Lean 指标围绕"时间"与"在制品"展开。三个核心比较关系：</p>
            <ul>
              <li><strong>Takt Time</strong> 是客户的节拍（需求决定）</li>
              <li><strong>Cycle Time</strong> 是我们的节拍（流程决定）</li>
              <li>理想状态：Cycle Time ≤ Takt Time，否则就是产能瓶颈</li>
            </ul>
            <p>OEE 世界级标准约 85%（65% 可用率 × 95% 性能 × 99.9% 质量）。</p>
          `,
          formulas: [
            "Takt Time = 可用生产时间 / 客户需求量",
            "Little's Law: L = λW (WIP = 到达率 × 停留时间)",
            "OEE = Availability × Performance × Quality"
          ],
          examples: [
            {
              title: "例题：Takt Time 计算",
              problem: "每班 8 小时，含 30 分钟休息；每天 2 班；客户每天需求 720 件。求 Takt Time。",
              solution: `
                <p><strong>可用时间</strong> = (8 × 60 - 30) × 2 班 = 450 × 2 = 900 分钟 = 54,000 秒</p>
                <p><strong>Takt</strong> = 54,000 / 720 = <strong>75 秒/件</strong></p>
                <p><strong>含义：</strong>每 75 秒必须产出 1 件才能按时交付。如果当前 Cycle Time = 90 秒，就需要增加节拍或优化工艺。</p>
              `
            },
            {
              title: "例题：Little's Law",
              problem: "某装配线平均 WIP = 30 件，到达率 λ = 2 件/分钟。平均停留时间 W 是多少？",
              solution: `
                <p>由 L = λW → W = L/λ = 30/2 = <strong>15 分钟</strong></p>
                <p><strong>价值：</strong>Little's Law 把 WIP、吞吐率、Lead Time 三者绑定。降低 WIP (例如减半) 在吞吐率不变时可直接把 Lead Time 减半 — 这是 Lean 降 WIP 的数学依据。</p>
              `
            },
            {
              title: "例题：OEE 计算",
              problem: "某设备班次 8 小时 = 480 分钟。计划停机 30 分钟，实际运行 420 分钟（故障 30 分钟）。理论节拍 0.5 分钟/件，实际产出 720 件，其中 12 件不良。求 OEE。",
              solution: `
                <p><strong>可用率 (Availability)</strong><br>计划运行时间 = 480 - 30 = 450 min<br>实际运行 = 420 min<br>A = 420 / 450 = <strong>93.3%</strong></p>
                <p><strong>性能率 (Performance)</strong><br>理论最大产出 = 420 / 0.5 = 840 件<br>P = 720 / 840 = <strong>85.7%</strong></p>
                <p><strong>质量率 (Quality)</strong><br>Q = (720 - 12) / 720 = <strong>98.3%</strong></p>
                <p><strong>OEE</strong> = 0.933 × 0.857 × 0.983 ≈ <strong>78.6%</strong></p>
                <p><strong>改进切入：</strong>性能率最低（85.7%），优先排查速度损失（小停机、低速运行）。</p>
              `
            }
          ]
        }
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
          "<strong>鱼骨图 (Ishikawa)</strong>：6M — Man/Machine/Method/Material/Measurement/Mother Nature",
          "<strong>5 Why 五问法</strong>：层层追问根本原因",
          "<strong>Pareto 帕累托图</strong>：80/20 原则，聚焦关键少数",
          "<strong>FMEA</strong>：RPN = 严重度 × 发生度 × 探测度",
          "Multi-Vari 分析：位置内 / 位置间 / 时间变异",
          "Affinity Diagram 亲和图、Tree Diagram 树图"
        ],
        detail: {
          concept: `
            <p>根因分析要避免两个陷阱：<strong>浅根 (停在症状层)</strong> 与 <strong>跳跃结论 (未验证即下结论)</strong>。</p>
            <p>流程：鱼骨图枚举可能原因 → 5 Why 追到根因 → 数据验证（假设检验）。</p>
          `,
          examples: [
            {
              title: "例题：5 Why 追根溯源",
              problem: "问题：包装线上产品漏油。请用 5 Why 追到根因。",
              solution: `
                <p><strong>Why 1</strong> 为什么漏油？→ 密封圈破损</p>
                <p><strong>Why 2</strong> 为什么密封圈破损？→ 橡胶老化</p>
                <p><strong>Why 3</strong> 为什么橡胶老化？→ 近期高温环境超出密封圈耐温规格</p>
                <p><strong>Why 4</strong> 为什么选型未考虑高温？→ 采购未与工艺部门沟通使用环境</p>
                <p><strong>Why 5</strong> 为什么未沟通？→ 未建立跨部门选型评审机制</p>
                <p><strong>根因：</strong>缺少跨部门评审机制（流程问题），而非单纯换个密封圈（症状治理）。</p>
              `
            },
            {
              title: "例题：FMEA RPN 计算",
              problem: "某失效模式：严重度 S=8，发生度 O=4，探测度 D=7，求 RPN 并评估。",
              solution: `
                <p>RPN = 8 × 4 × 7 = <strong>224</strong></p>
                <p><strong>分析：</strong>RPN 较高（经验阈值常取 100 或 125），应优先制定措施。降低 D (更好的检测) 或 O (预防措施) 通常比降 S 更容易。</p>
                <p><strong>注意：</strong>即使 RPN 较低，只要 S ≥ 9（安全相关），也必须制定措施。</p>
              `
            }
          ]
        }
      },
      {
        name: "假设检验基础",
        items: [
          "<strong>H0 (原假设) vs H1 (备择假设)</strong>",
          "<strong>α 第一类错误</strong>：弃真（通常 0.05）",
          "<strong>β 第二类错误</strong>：取伪；Power = 1 - β（通常 ≥ 0.8）",
          "<strong>p 值</strong>：p < α 则拒绝 H0",
          "单侧 vs 双侧检验；样本量计算",
          "统计显著 ≠ 业务显著"
        ],
        detail: {
          concept: `
            <p>假设检验的哲学：给 H0 \"无罪推定\"。只有当证据（p 值）足够强，才拒绝 H0。</p>
            <p><strong>错误类型对照：</strong></p>
            <table style="border-collapse:collapse;width:100%;font-size:14px">
              <thead><tr style="background:var(--bg)">
                <th style="border:1px solid var(--border);padding:6px"></th>
                <th style="border:1px solid var(--border);padding:6px">H0 实际为真</th>
                <th style="border:1px solid var(--border);padding:6px">H0 实际为假</th>
              </tr></thead>
              <tbody>
                <tr><td style="border:1px solid var(--border);padding:6px"><strong>拒绝 H0</strong></td>
                  <td style="border:1px solid var(--border);padding:6px">第一类错误 α</td>
                  <td style="border:1px solid var(--border);padding:6px">正确决策 (Power)</td></tr>
                <tr><td style="border:1px solid var(--border);padding:6px"><strong>不拒绝 H0</strong></td>
                  <td style="border:1px solid var(--border);padding:6px">正确决策</td>
                  <td style="border:1px solid var(--border);padding:6px">第二类错误 β</td></tr>
              </tbody>
            </table>
          `,
          examples: [
            {
              title: "例题：假设表述",
              problem: "要验证改进后的 Lead Time 是否确实低于 10 天（原假设 = 没改善）。请写出 H0、H1 及检验类型。",
              solution: `
                <p><strong>H0：</strong> μ ≥ 10 天（没改善）</p>
                <p><strong>H1：</strong> μ < 10 天（改善了）</p>
                <p><strong>检验类型：</strong>单样本、单侧（左侧）t 检验</p>
                <p><strong>决策：</strong>若 p < 0.05 → 拒绝 H0，认为改进显著；若 p ≥ 0.05 → 证据不足，不能断言改善。</p>
              `
            }
          ]
        }
      },
      {
        name: "参数检验方法",
        items: [
          "<strong>1-sample t test</strong>：样本均值 vs 目标值",
          "<strong>2-sample t test</strong>：两组独立均值",
          "<strong>Paired t test</strong>：配对数据（前后对比）",
          "<strong>ANOVA 方差分析</strong>：≥ 3 组均值",
          "<strong>F test</strong>：比较方差",
          "<strong>Chi-square 卡方</strong>：类别变量关联 / 拟合优度",
          "<strong>2-proportion test</strong>：两比例比较"
        ],
        detail: {
          concept: `
            <p><strong>选择检验方法的思路（决策树）：</strong></p>
            <ol>
              <li>数据类型？<em>连续 vs 计数</em></li>
              <li>比较对象？<em>样本 vs 目标 / 两组 / 三组以上</em></li>
              <li>是否配对？</li>
              <li>正态性满足？<em>否则用非参数</em></li>
            </ol>
            <p><strong>常见映射：</strong></p>
            <ul>
              <li>连续 + 1 组 vs 目标 → 1-sample t</li>
              <li>连续 + 2 独立组 → 2-sample t（方差齐性时）或 Welch t</li>
              <li>连续 + 2 配对组 → Paired t</li>
              <li>连续 + ≥3 组 → ANOVA</li>
              <li>计数比例 + 1 组 → 1-proportion</li>
              <li>计数比例 + 2 组 → 2-proportion 或卡方</li>
              <li>类别 × 类别 → 卡方独立性</li>
            </ul>
          `,
          examples: [
            {
              title: "例题：2-sample t 判读",
              problem: "对两条产线产出的零件直径做 2-sample t-test：均值 A=10.05，B=10.02，p 值 = 0.032，α = 0.05。结论？",
              solution: `
                <p>p = 0.032 < α = 0.05 → <strong>拒绝 H0</strong>，认为两条产线均值存在统计显著差异。</p>
                <p><strong>延伸：</strong>差异 ≈ 0.03 mm，业务是否显著取决于公差。若公差 ±0.05 mm，这 0.03 mm 差异已接近半个公差带，需追查；若公差 ±0.5 mm，则差异可忽略 — 这就是"统计显著 ≠ 业务显著"。</p>
              `
            }
          ]
        }
      },
      {
        name: "相关与回归",
        items: [
          "<strong>散点图 Scatter Plot</strong>：可视化 X-Y 关系",
          "<strong>Pearson 相关系数 r</strong>：线性强度 [-1, +1]",
          "<strong>R²</strong>：决定系数，解释变异的比例",
          "<strong>简单线性回归</strong>：Y = b0 + b1·X + ε",
          "<strong>多元回归</strong>：多 X 对 Y；注意多重共线性 (VIF)",
          "<strong>Spearman 相关</strong>：非线性/非正态的稳健替代",
          "相关 ≠ 因果"
        ],
        detail: {
          concept: `
            <p><strong>r 的直观解读：</strong></p>
            <ul>
              <li>|r| 0.0-0.3：弱</li>
              <li>|r| 0.3-0.7：中等</li>
              <li>|r| 0.7-1.0：强</li>
            </ul>
            <p><strong>R² 在简单线性回归里 = r²。</strong>如 r = 0.8 → R² = 0.64，即自变量解释了 64% 的因变量变异。</p>
            <p>残差诊断是回归不可省略的一步：残差应随机、均值 0、同方差、无模式。</p>
          `,
          formulas: [
            "Y = b0 + b1·X (简单线性)",
            "b1 = Σ(xᵢ-x̄)(yᵢ-ȳ) / Σ(xᵢ-x̄)²",
            "R² = 1 - SS_res / SS_tot"
          ],
          examples: [
            {
              title: "例题：解读回归结果",
              problem: "对某烘烤工艺做简单线性回归：温度 X → 强度 Y，得 Y = 2.1 + 0.35·X，R² = 0.82，p (斜率) = 0.003。请解读。",
              solution: `
                <p><strong>斜率：</strong>温度每增加 1 单位，强度平均增加 0.35 单位。</p>
                <p><strong>R² = 0.82：</strong>温度能解释强度 82% 的变异，模型解释力强。</p>
                <p><strong>p = 0.003：</strong>斜率显著不为 0，温度是真正的影响因素。</p>
                <p><strong>注意事项：</strong>① 不要在实验温度范围之外外推；② 相关性强不代表只有温度，可能还有其他共变因子；③ 建议查残差图确认无模式。</p>
              `
            }
          ]
        }
      },
      {
        name: "非参数与其他",
        items: [
          "<strong>Mann-Whitney U</strong>：非正态 2 样本独立",
          "<strong>Wilcoxon Signed-Rank</strong>：配对 t 的非参数替代",
          "<strong>Kruskal-Wallis</strong>：非参数 ANOVA",
          "<strong>Mood's Median</strong>：中位数检验",
          "正态性检验：Anderson-Darling、Shapiro-Wilk",
          "Box Plot、Q-Q Plot 辅助判断"
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
          "<strong>术语</strong>：Factor、Level、Response、Replicate、Block",
          "<strong>Full Factorial 全因子</strong>：2^k 实验",
          "<strong>Fractional Factorial 部分因子</strong>：2^(k-p)，筛选因子",
          "<strong>Main Effect 主效应</strong> 与 <strong>Interaction 交互作用</strong>",
          "随机化、重复、区组（DOE 三大原则）",
          "Center Points 检验曲率；RSM (CCD/Box-Behnken) 优化"
        ],
        detail: {
          concept: `
            <p>DOE 比 OFAT（一次一因子）效率高得多，且能识别<strong>交互作用</strong>—— 这是 OFAT 完全无法发现的。</p>
            <p><strong>三大基本原则：</strong></p>
            <ul>
              <li><strong>Randomization 随机化</strong>：消除批次、时间等未控因子的系统性偏差</li>
              <li><strong>Replication 重复</strong>：估计纯误差、提升检验力</li>
              <li><strong>Blocking 区组化</strong>：将已知变异源（如班次、原料批）纳入模型而非混入误差</li>
            </ul>
          `,
          examples: [
            {
              title: "例题：2³ 全因子实验主效应",
              problem: "三因子 A、B、C，两水平 (-/+)。响应值：(−,−,−)=50，(+,−,−)=62，(−,+,−)=54，(+,+,−)=66，(−,−,+)=55，(+,−,+)=67，(−,+,+)=58，(+,+,+)=70。求 A 的主效应。",
              solution: `
                <p><strong>公式</strong>：主效应 A = ȳ(A+) - ȳ(A−)</p>
                <p>A+ 水平的平均 = (62+66+67+70)/4 = 265/4 = 66.25</p>
                <p>A− 水平的平均 = (50+54+55+58)/4 = 217/4 = 54.25</p>
                <p><strong>主效应 A = 66.25 - 54.25 = 12</strong></p>
                <p><strong>含义：</strong>把 A 从低水平改为高水平，响应值平均增加 12；类似可算 B、C 和交互效应 AB、AC、BC、ABC。</p>
              `
            },
            {
              title: "例题：部分因子 2^(5-1) 运行次数",
              problem: "5 个因子的 1/2 部分因子实验运行多少次？",
              solution: `
                <p>2^(5-1) = 2^4 = <strong>16 次</strong>（不含重复与中心点）。</p>
                <p><strong>权衡：</strong>相比全因子 2^5 = 32 次，节省一半成本，但会产生 "别名 (aliasing)"，即某些高阶交互无法独立估计。常用于<strong>因子筛选</strong>阶段。</p>
              `
            }
          ]
        }
      },
      {
        name: "解决方案生成与筛选",
        items: [
          "<strong>Brainstorming</strong>、SCAMPER、Nominal Group Technique",
          "<strong>Pugh Matrix</strong>：方案两两对比评分 (+/-/S)",
          "<strong>Impact / Effort Matrix</strong>：Quick Wins 优先",
          "<strong>Benchmarking 标杆分析</strong>",
          "Pilot 试点运行与效果验证",
          "Cost-Benefit Analysis 成本效益分析"
        ],
        detail: {
          concept: `
            <p>发散 → 收敛两阶段：先充分生成再筛选。</p>
            <p><strong>Pugh Matrix 步骤：</strong>① 设立基准方案；② 列出评估准则（可加权）；③ 每个备选方案逐项与基准比较，记 +（更好）、−（更差）、S（相同）；④ 累计得分；⑤ 可多轮迭代融合优点。</p>
          `,
          examples: [
            {
              title: "例题：简版 Pugh Matrix",
              problem: "三个方案 A / B / C，准则：成本、实施难度、预期效果（各权 1）。以 A 为基准。B 在 3 项为 (-, +, +)，C 在 3 项为 (S, S, +)。请计算净分。",
              solution: `
                <p><strong>A（基准）：</strong>0</p>
                <p><strong>B：</strong>-1 + 1 + 1 = <strong>+1</strong></p>
                <p><strong>C：</strong>0 + 0 + 1 = <strong>+1</strong></p>
                <p><strong>结论：</strong>B、C 并列第一。进一步决策应看重哪一准则，或考虑将 B 的优点与 C 的优点融合成新方案。</p>
              `
            }
          ]
        }
      },
      {
        name: "Lean 核心工具",
        items: [
          "<strong>5S</strong>：Sort / Set in Order / Shine / Standardize / Sustain",
          "<strong>Kaizen 改善</strong>：持续改进；Kaizen Event 改善周",
          "<strong>Kanban 看板</strong>：拉动式信号",
          "<strong>Poka-Yoke 防错</strong>：设计避免人为错误",
          "<strong>SMED 快速换模</strong>、<strong>TPM</strong> 全员生产维护",
          "<strong>Heijunka 平准化</strong>、<strong>Jidoka 自働化</strong>",
          "Standard Work 三要素：Takt / Sequence / Standard WIP"
        ],
        detail: {
          concept: `
            <p>Lean 工具互相支撑：5S 打基础 → 标准作业固化 → Kanban 拉动 → Poka-Yoke 防错 → Kaizen 持续优化。</p>
          `,
          formulas: [
            "Kanban 数量 = (日需求 × Lead Time × (1 + 安全系数)) / 容器容量"
          ],
          examples: [
            {
              title: "例题：计算 Kanban 卡数",
              problem: "零件日均需求 800 件，上游补货 Lead Time = 0.5 天，安全系数 20%，容器容量 100 件。所需 Kanban 卡数？",
              solution: `
                <p>Kanban = (800 × 0.5 × (1 + 0.20)) / 100 = (800 × 0.5 × 1.2) / 100 = 480 / 100 = <strong>4.8 → 向上取整 5 张</strong></p>
                <p><strong>含义：</strong>系统中始终保持 5 张流通的 Kanban 卡，对应 500 件缓冲上限，可在需求波动 20% 内避免缺料。</p>
              `
            },
            {
              title: "例题：5S 流程",
              problem: "在维修工作站推行 5S，请按顺序说明每个 S 的关键动作。",
              solution: `
                <p><strong>1S 整理 (Sort)</strong>：红牌作战，移除非必需物品。</p>
                <p><strong>2S 整顿 (Set in Order)</strong>：为每样工具标定位置（"一物一位，物归其位"）。</p>
                <p><strong>3S 清扫 (Shine)</strong>：清洁设备与区域，清扫即点检。</p>
                <p><strong>4S 清洁 (Standardize)</strong>：把前三步的做法标准化、可视化，形成点检表与标准照片。</p>
                <p><strong>5S 素养 (Sustain)</strong>：通过定期审核、培训、激励让行为固化成习惯。</p>
              `
            }
          ]
        }
      },
      {
        name: "浪费与流程改造",
        items: [
          "<strong>八大浪费 (DOWNTIME)</strong>：Defects、Overproduction、Waiting、Non-utilized talent、Transport、Inventory、Motion、Extra-processing",
          "<strong>VSM 价值流图</strong>：Current State → Future State",
          "<strong>Theory of Constraints 约束理论</strong>：识别瓶颈 (DBR 鼓-缓冲-绳)",
          "<strong>Flow 流动</strong>、<strong>Pull 拉动</strong>、<strong>Perfection 尽善尽美</strong>",
          "One-Piece Flow 单件流 vs 批量生产",
          "Spaghetti Diagram 面条图揭示布局浪费"
        ],
        detail: {
          concept: `
            <p><strong>DOWNTIME 记忆法：</strong></p>
            <ul>
              <li><strong>D</strong>efects 缺陷 — 返工、报废</li>
              <li><strong>O</strong>verproduction 过度生产 — 生产未被需要的东西</li>
              <li><strong>W</strong>aiting 等待 — 人员/物料空闲</li>
              <li><strong>N</strong>on-utilized talent 未发挥的人才 — 员工智慧未用</li>
              <li><strong>T</strong>ransport 运输 — 不必要的物料搬运</li>
              <li><strong>I</strong>nventory 库存 — 超量的原料/半成品</li>
              <li><strong>M</strong>otion 动作 — 人员多余的弯腰、走动</li>
              <li><strong>E</strong>xtra-processing 过度加工 — 超出客户要求的多做</li>
            </ul>
          `,
          examples: [
            {
              title: "例题：识别浪费",
              problem: "场景：操作员每做完 10 件产品，需要走到 5 米外的料架取下一批原料；期间设备空转等料。请识别涉及哪些浪费。",
              solution: `
                <p><strong>Motion 动作浪费</strong>：5 米往返走动</p>
                <p><strong>Waiting 等待浪费</strong>：设备空转等料</p>
                <p><strong>Transport 运输浪费</strong>：物料从料架搬运到工位</p>
                <p><strong>改善方向：</strong>① 将料架移到工位旁（降低 Motion/Transport）；② 改为自动补料或 Kanban 信号（消除 Waiting）。</p>
              `
            }
          ]
        }
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
          "<strong>连续型控制图</strong>：X̄-R (子组 2-9)、X̄-s (≥10)、I-MR (单值)",
          "<strong>计数型控制图</strong>：p 图、np 图（不良率/数）、c 图、u 图（缺陷数）",
          "<strong>Western Electric 判异规则</strong>",
          "In Control ≠ Capable"
        ],
        detail: {
          concept: `
            <p><strong>控制限 vs 规格限（最常考）：</strong></p>
            <ul>
              <li><strong>控制限 (UCL/LCL)</strong>：来自过程自身变异（μ ± 3σ），反映"过程能做到什么"</li>
              <li><strong>规格限 (USL/LSL)</strong>：来自客户/设计要求，反映"必须做到什么"</li>
              <li><strong>绝不能把 USL/LSL 画到控制图上当判异依据！</strong></li>
            </ul>
            <p><strong>Western Electric 判异规则：</strong></p>
            <ol>
              <li>1 点超出 3σ 控制限</li>
              <li>连续 2/3 点在 2σ 带外（同侧）</li>
              <li>连续 4/5 点在 1σ 带外（同侧）</li>
              <li>连续 8 点在中心线同侧</li>
              <li>连续 6 点单调递增/递减（Trend）</li>
              <li>连续 14 点交替上下</li>
              <li>连续 15 点在 1σ 带内（分层/过度居中）</li>
            </ol>
          `,
          formulas: [
            "X̄ 图: UCL = X̄̄ + A₂·R̄;  LCL = X̄̄ - A₂·R̄",
            "R 图: UCL = D₄·R̄;  LCL = D₃·R̄",
            "p 图: UCL/LCL = p̄ ± 3·√(p̄(1-p̄)/n)"
          ],
          examples: [
            {
              title: "例题：X̄-R 图控制限",
              problem: "连续 20 组样本，每组 n=5，X̄̄ = 10.02，R̄ = 0.12。查表 n=5 时 A₂ = 0.577，D₃ = 0，D₄ = 2.114。求 X̄ 图与 R 图控制限。",
              solution: `
                <p><strong>X̄ 图：</strong></p>
                <p>UCL = 10.02 + 0.577 × 0.12 = 10.02 + 0.0692 = <strong>10.0892</strong></p>
                <p>LCL = 10.02 - 0.577 × 0.12 = 10.02 - 0.0692 = <strong>9.9508</strong></p>
                <p><strong>R 图：</strong></p>
                <p>UCL = 2.114 × 0.12 = <strong>0.2537</strong></p>
                <p>LCL = 0 × 0.12 = <strong>0</strong></p>
                <p><strong>使用方式：</strong>继续画新子组的 X̄ 和 R 点。任何点超出限值或触发 WE 规则即提示特殊原因。</p>
              `
            },
            {
              title: "例题：p 图控制限",
              problem: "每天抽检 200 件，30 天平均不良率 p̄ = 0.04。求 p 图的控制限。",
              solution: `
                <p><strong>UCL</strong> = 0.04 + 3·√(0.04 × 0.96 / 200) = 0.04 + 3 × 0.01386 = 0.04 + 0.0416 = <strong>0.0816</strong></p>
                <p><strong>LCL</strong> = 0.04 - 0.0416 = -0.0016 → <strong>0</strong>（不良率不能为负）</p>
                <p><strong>含义：</strong>日不良率超过 8.16% 即视为特殊原因，需调查。</p>
              `
            }
          ]
        }
      },
      {
        name: "控制计划与标准化",
        items: [
          "<strong>Control Plan 控制计划</strong>：关键 X、测量方法、频次、反应计划",
          "<strong>SOP 标准作业程序</strong>、<strong>Work Instruction</strong>",
          "<strong>Visual Management 可视化管理</strong>：Andon 灯、看板",
          "<strong>Reaction Plan 反应计划</strong>：OOC 时的处置步骤",
          "Training Plan 培训计划与技能矩阵",
          "Layered Process Audit 分层审核"
        ],
        detail: {
          concept: `
            <p><strong>Control Plan 要素（考试常考）：</strong></p>
            <ul>
              <li>关键过程步骤 / 关键 X</li>
              <li>规格或目标值</li>
              <li>测量系统与方法</li>
              <li>样本量与抽样频次</li>
              <li>使用的控制方法（X̄-R / SPC / 防错）</li>
              <li><strong>Reaction Plan 反应计划</strong>：异常时"谁做什么、何时上报"</li>
            </ul>
            <p>Control Plan 应与 FMEA 双向联动：FMEA 识别的高风险项必须进入 Control Plan；Control Plan 监控发现的新问题应反向更新 FMEA。</p>
          `
        }
      },
      {
        name: "成果移交与持续改进",
        items: [
          "<strong>Project Closure 项目收尾</strong>：财务验证、经验教训",
          "<strong>Handoff 移交</strong>：将流程所有权交还过程负责人",
          "<strong>Audit 审核</strong>：Layered Process Audit、内审",
          "<strong>Sustainability 可持续性</strong>：定期审视 KPI",
          "Replication 横向展开到其他流程/工厂",
          "Lessons Learned 经验教训入库"
        ],
        detail: {
          concept: `
            <p>项目收尾常被忽视，却是"改进不反弹"的关键。标准清单：</p>
            <ul>
              <li>✓ Control Plan 签字生效</li>
              <li>✓ SOP / WI 更新并培训</li>
              <li>✓ FMEA 更新</li>
              <li>✓ 财务收益由 Finance 正式确认（通常需跟踪 3-6 个月）</li>
              <li>✓ 过程所有权正式移交给 Process Owner</li>
              <li>✓ Lessons Learned 归档</li>
              <li>✓ 复制机会清单 → 横向展开</li>
            </ul>
          `
        }
      }
    ]
  }
];
