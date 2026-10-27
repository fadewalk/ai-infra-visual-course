/* 全站导航：站点地图唯一数据源 + 顶栏 / 面包屑 / 侧边栏 / 搜索 / 学习进度。
   新增页面只改这里的 CH（目录）与 STAGES（学习顺序），首页、侧边栏、搜索、进度自动同步。 */
(function () {
  'use strict';
  var SCRIPT = document.currentScript;
  var ROOT = SCRIPT && SCRIPT.src ? SCRIPT.src.replace(/assets\/nav\.js(\?.*)?$/, '') : '';
  var UP = 'https://github.com/ForceInjection/AI-fundamentals/blob/main/';

  function P(p, t, k, d, src) { return { p: p, t: t, k: k, d: d || '', src: src || '' }; }
  function R(t, href, d) { return { ref: true, t: t, href: href, d: d || '' }; }

  /* ---------- 课程目录（与上游章节 1:1） ---------- */
  var CH = [
    { no: '00', name: '机器学习基础（基础补全）', up: '', pages: [
      P('ml_basics/01_ml_map.html', '第 12 课 · 机器学习全景', '课', 'AI/ML/DL/RL 同心圆关系 · 三种学习范式 · 泛化与数据集三分'),
      P('ml_basics/02_neural_network.html', '第 13 课 · 神经网络与深度学习', '课', '亲手调出过拟合（真实多项式拟合）· CNN/RNN/Transformer 演化史'),
      P('ml_basics/03_rl_basics.html', '第 14 课 · 强化学习入门', '课', '浏览器真跑 Q-learning · 探索 vs 利用 · 从 Q-learning 到 GRPO 谱系')
    ]},
    { no: '01', name: '硬件架构与互连', up: UP + '01_hardware_architecture/README.md', pages: [
      P('01_hardware_architecture/01_gpu_vs_cpu.html', '第 1 课 · GPU 是什么', '课', 'CPU/GPU 赛跑动画 · SM / Warp / Tensor Core / HBM · 为何 AI 吃 GPU', '深入理解 GPU 架构'),
      P('01_hardware_architecture/02_latency_pyramid.html', '第 5 课 · 延迟金字塔', '课', '七层访存延迟交互 · "算不动 / 搬不动 / 送不到"定位法', 'AI 基础设施延迟金字塔'),
      P('01_hardware_architecture/03_pcie_cxl.html', '加餐 · PCIe 与 CXL', '加餐', 'GPU 和 CPU 之间那条"普通公路"：带宽对比 + 数据路径', 'PCIe 大全 / P2PDMA / CXL 系列'),
      P('01_hardware_architecture/05_nvlink.html', '加餐 · NVLink / NVSwitch', '加餐', '让 8 张卡变成"一张大卡"：拓扑切换图', 'NVLink / NVLink-C2C / GB300 NVL72'),
      P('01_hardware_architecture/04_gpudirect.html', '加餐 · GPUDirect', '加餐', '让数据绕开 CPU 直达显存：数据包赛跑', 'GPUDirect P2P / RDMA / Storage'),
      P('01_hardware_architecture/06_chips.html', '加餐 · TPU / GPGPU / NPU 三路线', '加餐', '三条芯片路线一张表', 'TPU 101 / GPGPU vs NPU / Ascend950')
    ]},
    { no: '02', name: '底层计算与异构编程（GPU / DPU / NPU）', up: UP + '02_gpu_programming/README.md', pages: [
      P('02_gpu_programming/01_cuda_primer.html', '加餐 · CUDA 算子开发入门', '加餐', '第一个 Kernel · 线程编号交互 · PyTorch 扩展三行骨架 · 五周路线', 'GPU 编程入门 / CUDA 核心'),
      P('02_npu_programming/01_overview.html', '导读 · NPU 与 CUDA 生态对照', '导读', '昇腾世界一页通', 'NPU 14 个子模块'),
      R('CUDA 流 / SIMT vs Tile-Based / nvbandwidth 调优', UP + '02_gpu_programming/README.md', '进阶编程向，读原文即可（第 1 课已建 SIMT 直觉；上游自带 GPU 显存可视化）'),
      R('DOCA / DPU 编程入门', UP + '02_dpu_programming/README.md', '专项方向，读原文即可')
    ]},
    { no: '03', name: 'AI 集群运维与通信', up: UP + '03_ai_cluster_ops/README.md', pages: [
      P('03_ai_cluster_ops/01_gpu_ops.html', '加餐 · 单机 GPU 运维速查', '加餐', '从 Linux 主机运维平移：nvidia-smi / nvtop / DCGM / 健康检查 / 驱动', 'GPU 运维系列'),
      P('03_ai_cluster_ops/02_gpu_troubleshoot_sim.html', '实操 · GPU 排障模拟器', '实验', '伪终端亲手修三起"生产事故"：找隐形进程 / 读 XID / 识破假忙', '健康检查实操'),
      P('03_ai_cluster_ops/03_ib_rdma.html', '加餐 · InfiniBand 与 RDMA', '加餐', '让"跨机器"像"跨房间"：TCP vs RDMA 路径', 'IB 网络理论 / 健康检查'),
      P('03_ai_cluster_ops/04_nccl_intro.html', '加餐 · NCCL 调优导读', '加餐', 'AllReduce 快不快谁说了算：环形温习 + busbw 对照法', 'NCCL 理论 / 实战'),
      R('中国数据中心模型精读（SemiAnalysis）', UP + '03_ai_cluster_ops/04_datacenter/china-dc-boom-semianalysis.md', '市场研究向，读原文即可')
    ]},
    { no: '04', name: '云原生 AI 平台', up: UP + '04_cloud_native_ai_platform/README.md', pages: [
      P('04_cloud_native_ai_platform/01_k8s_gpu.html', '第 4 课 · K8s 上跑 GPU', '课', 'GPU Pod 六步旅程 · 整卡/时间片/MPS/MIG · SRE 概念映射表 · 故障速查', 'K8s GPU 管理 / Device Plugin / Container Toolkit'),
      P('04_cloud_native_ai_platform/02_scheduling_demo.html', '实验室 · Gang 调度演示', '实验', '普通 vs 成组调度跑一遍 8 卡集群：训练作业为什么"要么全上要么全等"', 'Gang Scheduling / Volcano / Kueue'),
      P('04_cloud_native_ai_platform/03_hami_kueue.html', '加餐 · HAMi 与 Kueue', '加餐', '显存配额与作业队列的实战拼图：配额交互 + 组件对照', 'Kueue + HAMi / GPU 虚拟化四部曲 / KAI vs HAMi'),
      P('04_cloud_native_ai_platform/04_lws_llmd.html', '导读 · LWS 与 llm-d', '导读', 'K8s 上跑分布式推理的骨架', 'LWS / llm-d 分布式推理调度'),
      P('04_cloud_native_ai_platform/05_storage.html', '导读 · AI 存储三篇', '导读', 'JuiceFS / 3FS / ICMS 一页通', 'JuiceFS / 3FS / ICMS 存储三篇')
    ]},
    { no: '05', name: '模型训练与微调', up: UP + '05_model_training_and_fine_tuning/README.md', pages: [
      P('05_model_training_and_fine_tuning/01_training_loop.html', '第 2 课 · 训练是怎么回事', '课', '训练循环五步动画 · 学习率交互（会发散）· 8 卡 AllReduce · 显存账', '训练循环 / 梯度下降 / AllReduce'),
      P('05_model_training_and_fine_tuning/02_memory_calc.html', '实验室 · 训练显存对比', '实验', '全参微调 vs LoRA 显存对照，批量调节，速查表', 'SFT 实战 / 显存账'),
      P('05_model_training_and_fine_tuning/05_sft_primer.html', '加餐 · SFT 微调小白版', '加餐', '数据长什么样、坑在哪里', 'SFT 实战 / 垂域微调'),
      P('05_model_training_and_fine_tuning/03_70b_lessons.html', '导读 · 70B 从零训练复盘', '导读', '大规模训练的四份作业答案（含 RL 进阶入口）', '70B 从零训练四部曲'),
      P('05_model_training_and_fine_tuning/04_alignment.html', '第 11 课 · 对齐算法是怎么回事', '课', '亲手标注偏好对 · PPO/DPO/GRPO 显存模型数对比 · β 旋钮', 'RL 后训练 / 对齐算法'),
      P('05_model_training_and_fine_tuning/06_framework_map.html', '加餐 · 训练框架地图', '加餐', 'DDP / FSDP / DeepSpeed / Megatron 选型 · ZeRO 三档显存交互', '训练框架'),
      R('并行策略 DP / TP / PP / EP → 本站第 6 课', ROOT + '09_inference_system/02_parallelism.html', '训练与推理共用的切分思路，放在推理章讲')
    ]},
    { no: '06', name: 'LLM 理论与基础', up: UP + '06_llm_theory_and_fundamentals/README.md', pages: [
      P('06_llm_theory_and_fundamentals/01_llm_basics.html', '第 7 课 · LLM 是怎么回事', '课', '文字接龙采样动画 · 温度交互 · Embedding / Attention 图示', 'LLM 基础（token / 接龙 / 温度）'),
      P('06_llm_theory_and_fundamentals/02_transformer.html', '第 10 课 · Transformer 拆解', '课', 'token 穿层动画 · Q/K/V 角色 · FFN / 残差 / RoPE', 'Transformer 架构详解'),
      P('06_llm_theory_and_fundamentals/03_engineering_concepts.html', '加餐 · LLM 工程概念补全', '加餐', 'Scaling Laws / CoT / 幻觉 / 评估 / 文件格式 五合一', 'Scaling Laws / CoT / 幻觉 / 评估'),
      R('Tokenizer / Embedding / MoE / 量化', UP + '06_llm_theory_and_fundamentals/llm_basic_concepts/moe/mixture_of_experts_moe_visual_guide.zh-CN.md', '第 7 课已覆盖核心直觉；MoE/量化上游自带可视化指南')
    ]},
    { no: '07', name: 'RAG 与工具', up: UP + '07_rag_and_tools/README.md', pages: [
      P('07_rag_and_tools/01_rag_basics.html', '第 8 课 · RAG 是怎么回事', '课', '给大模型开卷考试：检索增强全流程步进动画 · 微调 vs RAG 选型', 'RAG 基础 / 文档解析'),
      P('07_rag_and_tools/02_graphrag.html', '加餐 · GraphRAG 小白版', '加餐', '当检索遇上知识图谱', 'GraphRAG / 知识图谱')
    ]},
    { no: '08', name: '智能体系统', up: UP + '08_agentic_system/README.md', pages: [
      P('08_agentic_system/01_agent_basics.html', '第 9 课 · Agent 是怎么回事', '课', '运维 Agent 实况推演 · ReAct 循环步进 · MCP / 上下文工程', 'Agent 理论 / MCP'),
      P('08_agentic_system/02_deep_dive.html', '加餐 · Agent 深水区一页通', '加餐', '12-Factor / 记忆 / 多智能体 / 上下文工程', '记忆系统 / 多 Agent / 上下文工程')
    ]},
    { no: '09', name: '大模型推理系统', up: UP + '09_inference_system/README.md', pages: [
      P('09_inference_system/01_inference_pipeline.html', '第 3 课 · 推理是怎么回事', '课', 'Prefill / Decode 动画 · KV Cache 开关对比 · 并发×显存红线 · TTFT/TPOT', 'Prefill / Decode / KV Cache 基础'),
      P('09_inference_system/02_parallelism.html', '第 6 课 · 并行策略', '课', '70B 怎么塞进 8 张卡 · DP/TP/PP/EP 切法动画 · 显存计算器', '并行策略系列'),
      P('09_inference_system/04_batching_attention.html', '加餐 · Continuous Batching 与 PagedAttention', '加餐', '吞吐翻倍的两根杠杆（双交互）', 'PagedAttention / Prefix Caching / Continuous Batching'),
      P('09_inference_system/09_pd_disaggregation.html', '加餐 · PD 分离小白版', '加餐', 'Prefill 与 Decode 为什么分家：负载波形交互 + KV 搬家权衡', 'PD 分离（面试高频）'),
      P('09_inference_system/10_spec_quant.html', '加餐 · 投机解码与量化', '加餐', '推理加速两大必考（双交互）', '投机解码 / 量化实战'),
      P('09_inference_system/03_kv_capacity_calc.html', '实验室 · KV Cache 容量计算器', '实验', '模型 × 会话长度 × 显存 → 并发上限，公式实时拆解', 'KV 容量规划'),
      P('09_inference_system/05_cost_calc.html', '加餐 · $/token 成本速算', '加餐', '用 CFO 的语言聊 GPU', '成本分析（$/token）'),
      P('09_inference_system/06_vllm_overview.html', '导读 · vLLM 一张图看懂', '导读', '源码系列入口', 'vLLM 源码系列'),
      P('09_inference_system/07_sglang_overview.html', '导读 · SGLang 一张图看懂', '导读', '源码系列入口', 'SGLang 源码系列'),
      P('09_inference_system/08_kv_systems.html', '导读 · KV Cache 分布式系统', '导读', 'LMCache / Mooncake / Tair 一页通（三方案对照）', 'LMCache / Mooncake / Tair / DeepInfer'),
      P('09_inference_system/11_engine_choice.html', '加餐 · 推理引擎三选一', '加餐', 'vLLM / SGLang / TensorRT-LLM：点场景看推荐 + 共同地基', '部署实践'),
      R('参考设计 15 篇 / 部署实践 / DeepSeek 专题', UP + '09_inference_system/reference_design/README.md', '工程参考文档集，概念基础各课已覆盖，读原文即可')
    ]},
    { no: '10', name: '课程与讲座', up: UP + '10_ai_related_course/README.md', pages: [
      P('10_ai_related_course/01_overview.html', '导读 · 上游课程章怎么用', '导读', '90 分钟讲座与配套课', 'AI Infra 90 分钟讲座 / Token Factory'),
      P('10_ai_related_course/02_external_courses.html', '导读 · 外部优质教程地图', '导读', 'Datawhale / ZOMI / 微软 AI-System：价值判断与接入时机', '外部教程整合'),
      P('10_ai_related_course/03_ai_compiler.html', '新课 · AI 编译器是怎么回事', '课', '从一行 PyTorch 到 GPU Kernel', 'ZOMI AI 编译器（吸收）')
    ]},
    { no: '11+', name: 'AI Native · LLM 编程 · 杂项（11 / 98 / 99）', up: UP + '11_ai_native_everything/README.md', pages: [
      P('11_ai_native_everything/01_overview.html', '导读 · AI Native 章（11）', '导读', '方法论与 FDE 实践'),
      P('98_llm_programming/01_overview.html', '导读 · LLM 编程章（98）', '导读', '应用层开发怎么切入：LangGraph / Spring AI / Harness'),
      P('99_misc/01_overview.html', '导读 · 杂项章（99）', '导读', '三张上手任务卡 + 书单'),
      R('20 Agent Skills / 21 OpenSpec', 'https://github.com/ForceInjection/AI-fundamentals', '外部生态内容，读原文即可')
    ]},
    { no: '面试', name: '面试冲刺五件套', up: '', pages: [
      P('interview/01_question_bank.html', '面试自测题库', '面试', '28 问 + 3 道系统设计 · 答题要点 + 进度追踪 · 链回对应课程'),
      P('interview/02_trends_2026.html', '2026 趋势速览', '面试', 'Agent 负载 · 线性注意力 · CSA/HCA · HBF · 昇腾 · 每条配"面试怎么聊"'),
      P('interview/03_metrics.html', '生产指标体系', '面试', '四层健康账本：$/token → TTFT/TPOT SLO → MFU/批次 → SM Active/ECC'),
      P('interview/04_jd_mapping.html', '招聘 JD 对照表', '面试', '2026 真实岗位要求逐条映射课程 · Slurm 速补 · 投递策略'),
      P('interview/05_career_paths.html', '岗位全覆盖学习路线', '面试', '14 岗 × 5 条线 · 就绪度矩阵 · 量化机构雇主池 · 投递建议')
    ]}
  ];

  /* ---------- 学习路线（推荐阅读顺序；侧边栏与进度按此组织） ---------- */
  var STAGES = [
    { n: '0', name: '建立直觉 · 十四课', goal: '3 小时看懂全景，每课 15 分钟', pages: [
      '01_hardware_architecture/01_gpu_vs_cpu.html', '05_model_training_and_fine_tuning/01_training_loop.html',
      '09_inference_system/01_inference_pipeline.html', '04_cloud_native_ai_platform/01_k8s_gpu.html',
      '01_hardware_architecture/02_latency_pyramid.html', '09_inference_system/02_parallelism.html',
      '06_llm_theory_and_fundamentals/01_llm_basics.html', '07_rag_and_tools/01_rag_basics.html',
      '08_agentic_system/01_agent_basics.html', '06_llm_theory_and_fundamentals/02_transformer.html',
      '05_model_training_and_fine_tuning/04_alignment.html', 'ml_basics/01_ml_map.html',
      'ml_basics/02_neural_network.html', 'ml_basics/03_rl_basics.html' ] },
    { n: '1', name: '硬件与芯片', goal: '看懂一块卡、它的总线和三条芯片路线', pages: [
      '01_hardware_architecture/03_pcie_cxl.html', '01_hardware_architecture/05_nvlink.html',
      '01_hardware_architecture/04_gpudirect.html', '01_hardware_architecture/06_chips.html',
      '02_gpu_programming/01_cuda_primer.html', '02_npu_programming/01_overview.html' ] },
    { n: '2', name: '单机运维', goal: 'nvidia-smi 时代基本功，亲手排障', pages: [
      '03_ai_cluster_ops/01_gpu_ops.html', '03_ai_cluster_ops/02_gpu_troubleshoot_sim.html' ] },
    { n: '3', name: '集群与云原生', goal: '你的 K8s 主场移植到 GPU：网络、调度、存储', pages: [
      '03_ai_cluster_ops/03_ib_rdma.html', '03_ai_cluster_ops/04_nccl_intro.html',
      '04_cloud_native_ai_platform/02_scheduling_demo.html', '04_cloud_native_ai_platform/03_hami_kueue.html',
      '04_cloud_native_ai_platform/04_lws_llmd.html', '04_cloud_native_ai_platform/05_storage.html' ] },
    { n: '4', name: '训练', goal: '看懂训练作业在干什么、显存花在哪', pages: [
      '05_model_training_and_fine_tuning/02_memory_calc.html', '05_model_training_and_fine_tuning/05_sft_primer.html',
      '05_model_training_and_fine_tuning/03_70b_lessons.html', '05_model_training_and_fine_tuning/06_framework_map.html' ] },
    { n: '5', name: '推理', goal: '看懂推理三大矛盾与两大引擎', pages: [
      '09_inference_system/04_batching_attention.html', '09_inference_system/09_pd_disaggregation.html',
      '09_inference_system/10_spec_quant.html', '09_inference_system/06_vllm_overview.html',
      '09_inference_system/07_sglang_overview.html', '09_inference_system/08_kv_systems.html',
      '09_inference_system/11_engine_choice.html' ] },
    { n: '6', name: '成本与容量', goal: '用 CFO 的语言说话：$/token、并发上限、四层指标', pages: [
      '09_inference_system/03_kv_capacity_calc.html', '09_inference_system/05_cost_calc.html', 'interview/03_metrics.html' ] },
    { n: '7', name: '应用层与扩展阅读', goal: 'RAG / Agent 深水区、编译器、外部教程与其他章导读', pages: [
      '07_rag_and_tools/02_graphrag.html', '08_agentic_system/02_deep_dive.html',
      '06_llm_theory_and_fundamentals/03_engineering_concepts.html', '10_ai_related_course/03_ai_compiler.html',
      '10_ai_related_course/01_overview.html', '10_ai_related_course/02_external_courses.html',
      '11_ai_native_everything/01_overview.html', '98_llm_programming/01_overview.html', '99_misc/01_overview.html' ] },
    { n: '8', name: '面试冲刺', goal: '输出检验：题库、趋势、JD 对照、投递路线', pages: [
      'interview/01_question_bank.html', 'interview/02_trends_2026.html', 'interview/04_jd_mapping.html', 'interview/05_career_paths.html' ] }
  ];

  var BY = {}, ALL = [];
  CH.forEach(function (c) { c.pages.forEach(function (x) { if (!x.ref) { x.ch = c; BY[x.p] = x; ALL.push(x); } }); });
  var ORDER = [];
  STAGES.forEach(function (s, i) { s.idx = i; s.items = s.pages.map(function (p) { var x = BY[p]; if (x) { x.stage = s; ORDER.push(x); } return x; }).filter(Boolean); });
  var TOTAL = ORDER.length;
  var EXTRA = [ { p: 'glossary.html', t: '术语图鉴', k: '参考', d: '89 个 AI Infra 黑话的一句话解释 + SRE 类比 · 可搜索 · 思维导图' },
                { p: 'changelog.html', t: '更新日志', k: '参考', d: '基于 git log 的课程更新时间线' } ];

  /* ---------- 学习进度（localStorage） ---------- */
  var KEY = 'aivc_done', done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { done = {}; }
  function isDone(p) { return !!done[p]; }
  function setDone(p, v) { if (v) done[p] = Date.now(); else delete done[p]; try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }
  function doneCount(list) { var n = 0; (list || ORDER).forEach(function (x) { if (isDone(x.p)) n++; }); return n; }
  function nextUndone() { for (var i = 0; i < ORDER.length; i++) if (!isDone(ORDER[i].p)) return ORDER[i]; return null; }

  /* ---------- 当前页 ---------- */
  var here = decodeURIComponent(location.pathname);
  var CUR = null;
  ALL.concat(EXTRA).forEach(function (x) { if (here.slice(-x.p.length - 1) === '/' + x.p) CUR = x; });
  var IS_INDEX = !CUR && (/\/$/.test(here) || /\/index\.html$/.test(here));
  var KIND_CLS = { '课': 'k-c', '实验': 'k-e', '加餐': 'k-x', '导读': 'k-r', '面试': 'k-i', '参考': 'k-r' };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function kind(k) { return '<span class="aivc-k ' + (KIND_CLS[k] || '') + '">' + esc(k) + '</span>'; }

  /* ---------- 样式 ---------- */
  var CSS = '\
:root{--aivc-top:48px;--aivc-side:272px}\
html{scroll-padding-top:72px}\
body{padding-top:var(--aivc-top)!important}\
body.aivc-has-side{padding-left:var(--aivc-side)}\
#aivc-top{position:fixed;top:0;left:0;right:0;height:var(--aivc-top);z-index:9000;display:flex;align-items:center;gap:8px;padding:0 14px;background:var(--card,#fff);border-bottom:1px solid var(--border,#e2e5ea);font:14px/1.2 system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:var(--fg,#1a1d23);box-sizing:border-box}\
#aivc-top *{box-sizing:border-box}\
#aivc-top a{color:inherit;text-decoration:none}\
#aivc-burger{display:none;border:0;background:transparent;font-size:20px;line-height:1;padding:6px 8px;cursor:pointer;color:inherit;margin-left:-6px}\
.aivc-brand{font-weight:700;white-space:nowrap;display:flex;align-items:center;gap:6px}\
.aivc-brand .lg{display:inline-flex;width:24px;height:24px;border-radius:7px;background:linear-gradient(135deg,var(--blue,#2563eb),var(--purple,#7c3aed));color:#fff;align-items:center;justify-content:center;font-size:13px}\
.aivc-links{display:flex;gap:2px;margin-left:10px;overflow:hidden}\
.aivc-links a{padding:7px 10px;border-radius:8px;color:var(--muted,#5c6470);white-space:nowrap;font-size:13.5px}\
.aivc-links a:hover,.aivc-links a.on{background:var(--chip,#eef1f5);color:var(--fg,#1a1d23)}\
.aivc-sp{flex:1}\
#aivc-sbtn{display:flex;align-items:center;gap:8px;border:1px solid var(--border,#e2e5ea);background:var(--bg,#f6f7f9);color:var(--muted,#5c6470);border-radius:8px;padding:5px 10px;font:inherit;font-size:13px;cursor:pointer;white-space:nowrap}\
#aivc-sbtn kbd{font:11px ui-monospace,Menlo,monospace;border:1px solid var(--border,#e2e5ea);border-radius:4px;padding:0 5px;color:var(--muted,#5c6470);background:var(--card,#fff)}\
.aivc-prog{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted,#5c6470);white-space:nowrap}\
.aivc-prog .bar{width:72px;height:6px;border-radius:999px;background:var(--chip,#eef1f5);overflow:hidden}\
.aivc-prog .bar i{display:block;height:100%;background:var(--green,#059669);border-radius:999px}\
#aivc-crumb{background:var(--card,#fff);border-bottom:1px solid var(--border,#e2e5ea);font:13px system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:var(--muted,#5c6470)}\
#aivc-crumb .in{max-width:1080px;margin:0 auto;padding:8px 16px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}\
#aivc-crumb a{color:var(--muted,#5c6470);text-decoration:none}#aivc-crumb a:hover{color:var(--blue,#2563eb)}\
#aivc-crumb b{color:var(--fg,#1a1d23);font-weight:600}\
#aivc-crumb .sp{flex:1}\
#aivc-crumb .pn{display:flex;gap:6px;align-items:center}\
#aivc-crumb .pn a,#aivc-crumb .pn button{border:1px solid var(--border,#e2e5ea);background:var(--bg,#f6f7f9);border-radius:7px;padding:4px 10px;font:inherit;font-size:12.5px;color:var(--fg,#1a1d23);cursor:pointer;text-decoration:none;white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis}\
#aivc-crumb .pn a.dis{opacity:.4;pointer-events:none}\
#aivc-crumb .pn button.ok{border-color:var(--green,#059669);color:var(--green,#059669);background:transparent}\
#aivc-side{position:fixed;top:var(--aivc-top);left:0;bottom:0;width:var(--aivc-side);overflow:auto;background:var(--card,#fff);border-right:1px solid var(--border,#e2e5ea);z-index:8900;font:13px/1.45 system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:var(--fg,#1a1d23);padding:10px 10px 30px;box-sizing:border-box}\
#aivc-side .hd{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--muted,#5c6470);padding:4px 8px 8px;text-transform:uppercase;letter-spacing:.5px}\
#aivc-side .hd a{color:var(--blue,#2563eb);text-decoration:none;text-transform:none;letter-spacing:0}\
#aivc-side details{border-radius:10px;margin:2px 0}\
#aivc-side details[open]{background:var(--bg,#f6f7f9)}\
#aivc-side summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:8px;padding:7px 8px;border-radius:10px;font-weight:600;font-size:13px}\
#aivc-side summary::-webkit-details-marker{display:none}\
#aivc-side summary:hover{background:var(--chip,#eef1f5)}\
#aivc-side summary .n{display:inline-flex;width:20px;height:20px;border-radius:6px;background:var(--chip,#eef1f5);color:var(--muted,#5c6470);align-items:center;justify-content:center;font-size:11px;flex:none}\
#aivc-side details[open] summary .n{background:var(--blue,#2563eb);color:#fff}\
#aivc-side summary .c{margin-left:auto;font-size:11px;color:var(--muted,#5c6470);font-weight:500}\
#aivc-side summary .c.full{color:var(--green,#059669)}\
#aivc-side .it{display:flex;align-items:flex-start;gap:7px;padding:5px 8px 5px 14px;border-radius:8px;color:var(--fg,#1a1d23);text-decoration:none;font-size:12.5px;line-height:1.4}\
#aivc-side .it:hover{background:var(--chip,#eef1f5)}\
#aivc-side .it.cur{background:var(--blue,#2563eb);color:#fff}\
#aivc-side .it.cur .aivc-k{background:rgba(255,255,255,.25);color:#fff;border-color:transparent}\
#aivc-side .it .ck{width:14px;flex:none;text-align:center;color:var(--green,#059669);font-size:12px;margin-top:1px}\
#aivc-side .it.cur .ck{color:#fff}\
#aivc-side .it .t{flex:1}\
.aivc-k{display:inline-block;font-size:10.5px;line-height:1;padding:3px 6px;border-radius:5px;border:1px solid var(--border,#e2e5ea);color:var(--muted,#5c6470);white-space:nowrap;flex:none;margin-top:1px;font-weight:500}\
.aivc-k.k-c{color:var(--blue,#2563eb);border-color:var(--blue,#2563eb)}\
.aivc-k.k-e{color:var(--green,#059669);border-color:var(--green,#059669)}\
.aivc-k.k-x{color:var(--orange,#d97706);border-color:var(--orange,#d97706)}\
.aivc-k.k-i{color:var(--red,#dc2626);border-color:var(--red,#dc2626)}\
.aivc-k.k-r{color:var(--purple,#7c3aed);border-color:var(--purple,#7c3aed)}\
#aivc-back{display:none;position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:8800}\
#aivc-search{position:fixed;inset:0;z-index:9500;background:rgba(10,12,16,.45);display:none;padding:9vh 14px 0;box-sizing:border-box}\
#aivc-search.show{display:block}\
#aivc-search .box{max-width:640px;margin:0 auto;background:var(--card,#fff);color:var(--fg,#1a1d23);border:1px solid var(--border,#e2e5ea);border-radius:14px;box-shadow:0 20px 60px rgba(0,0,0,.3);overflow:hidden;font:14px system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif}\
#aivc-search input{width:100%;border:0;outline:0;background:transparent;color:inherit;font:inherit;font-size:16px;padding:16px 18px;border-bottom:1px solid var(--border,#e2e5ea);box-sizing:border-box}\
#aivc-search .res{max-height:56vh;overflow:auto;padding:6px}\
#aivc-search .r{display:flex;gap:10px;align-items:flex-start;padding:9px 12px;border-radius:9px;cursor:pointer;text-decoration:none;color:inherit}\
#aivc-search .r.on,#aivc-search .r:hover{background:var(--chip,#eef1f5)}\
#aivc-search .r .t{font-weight:600;font-size:13.5px}\
#aivc-search .r .d{font-size:12px;color:var(--muted,#5c6470);margin-top:2px}\
#aivc-search .r .st{margin-left:auto;font-size:11px;color:var(--muted,#5c6470);white-space:nowrap;flex:none}\
#aivc-search .empty{padding:18px;color:var(--muted,#5c6470);text-align:center;font-size:13px}\
#aivc-search .ft{padding:8px 14px;border-top:1px solid var(--border,#e2e5ea);font-size:11.5px;color:var(--muted,#5c6470);display:flex;gap:14px}\
#aivc-toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:var(--fg,#1a1d23);color:var(--bg,#fff);padding:10px 16px;border-radius:10px;font:13px system-ui,sans-serif;z-index:9600;opacity:0;transition:.25s;pointer-events:none;max-width:90vw}\
#aivc-toast.show{opacity:1;transform:translateX(-50%)}\
#aivc-toast a{color:inherit;text-decoration:underline}\
@media(max-width:1079px){\
 body.aivc-has-side{padding-left:0}\
 #aivc-burger{display:inline-block}\
 #aivc-side{transform:translateX(-105%);transition:transform .22s ease;width:min(320px,86vw);box-shadow:0 0 40px rgba(0,0,0,.2)}\
 body.aivc-open #aivc-side{transform:none}\
 body.aivc-open #aivc-back{display:block}\
 .aivc-links{display:none}\
}\
@media(max-width:720px){\
 #aivc-top{padding:0 10px;gap:6px}\
 .aivc-brand span.tx{display:none}\
 #aivc-sbtn kbd{display:none}\
 .aivc-prog .bar{width:44px}\
 #aivc-crumb .in{padding:8px 12px;gap:6px}\
 #aivc-crumb .pn a{max-width:120px}\
 #aivc-crumb .hidem{display:none}\
}';

  /* ---------- 渲染 ---------- */
  function h(tag, attrs, html) { var e = document.createElement(tag); if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); }); if (html != null) e.innerHTML = html; return e; }

  function renderTop() {
    var n = doneCount(), pct = TOTAL ? Math.round(n / TOTAL * 100) : 0;
    var hash = location.hash;
    var links = [['#roadmap', '学习路线'], ['#catalog', '课程目录'], ['#interview', '面试冲刺'], ['glossary.html', '术语图鉴'], ['changelog.html', '更新日志']]
      .map(function (l) { var on = (CUR && CUR.p === l[0]) || (IS_INDEX && hash && hash === l[0]); return '<a href="' + ROOT + l[0] + '"' + (on ? ' class="on"' : '') + '>' + l[1] + '</a>'; }).join('');
    var top = h('header', { id: 'aivc-top' },
      '<button id="aivc-burger" aria-label="打开课程菜单">☰</button>' +
      '<a class="aivc-brand" href="' + ROOT + '" title="回到首页"><span class="lg">⚡</span><span class="tx">AI Infra 可视化课程</span></a>' +
      '<nav class="aivc-links">' + links + '</nav><span class="aivc-sp"></span>' +
      '<button id="aivc-sbtn" aria-label="搜索课程">🔍 <span class="hidem">搜索</span> <kbd>⌘K</kbd></button>' +
      '<a class="aivc-prog" href="' + ROOT + '#roadmap" title="已学 ' + n + ' / ' + TOTAL + ' 页（点击看路线）"><span class="bar"><i style="width:' + pct + '%"></i></span><span class="hidem">' + n + '/' + TOTAL + '</span></a>');
    document.body.insertBefore(top, document.body.firstChild);
    top.querySelector('#aivc-sbtn').addEventListener('click', openSearch);
    top.querySelector('#aivc-burger').addEventListener('click', function () { document.body.classList.toggle('aivc-open'); });
  }

  function renderCrumb() {
    if (IS_INDEX) return;
    var title = CUR ? CUR.t : (document.title.split(' · ')[0] || document.title);
    var mid = CUR && CUR.stage ? '<a class="hidem" href="' + ROOT + '#roadmap">阶段 ' + CUR.stage.n + ' · ' + esc(CUR.stage.name) + '</a><span class="hidem">›</span>' : (CUR && CUR.ch ? '<a class="hidem" href="' + ROOT + '#catalog">' + esc(CUR.ch.name) + '</a><span class="hidem">›</span>' : '');
    var i = CUR ? ORDER.indexOf(CUR) : -1, prev = i > 0 ? ORDER[i - 1] : null, next = i >= 0 && i < ORDER.length - 1 ? ORDER[i + 1] : null;
    var pn = '';
    if (CUR && i >= 0) {
      pn = '<span class="pn">' +
        '<a class="' + (prev ? '' : 'dis') + '" href="' + (prev ? ROOT + prev.p : '#') + '" title="' + (prev ? esc(prev.t) : '') + '">← <span class="hidem">' + (prev ? esc(prev.t) : '上一页') + '</span></a>' +
        '<button id="aivc-done"></button>' +
        '<a class="' + (next ? '' : 'dis') + '" href="' + (next ? ROOT + next.p : '#') + '" title="' + (next ? esc(next.t) : '') + '"><span class="hidem">' + (next ? esc(next.t) : '下一页') + '</span> →</a></span>';
    }
    var c = h('div', { id: 'aivc-crumb' }, '<div class="in"><a href="' + ROOT + '">首页</a><span>›</span>' + mid + '<b>' + esc(title) + '</b><span class="sp"></span>' + pn + '</div>');
    var top = document.getElementById('aivc-top');
    top.parentNode.insertBefore(c, top.nextSibling);
    var btn = document.getElementById('aivc-done');
    if (btn) {
      var paint = function () { var d = isDone(CUR.p); btn.textContent = d ? '✓ 已学' : '标记已学'; btn.className = d ? 'ok' : ''; btn.title = d ? '点击取消标记' : '学完这页点一下，进度会记在本机浏览器'; };
      paint();
      btn.addEventListener('click', function () {
        var now = !isDone(CUR.p); setDone(CUR.p, now); paint(); refreshProgress();
        if (now) toast('已标记为已学 ✓ ' + (next ? '下一页：<a href="' + ROOT + next.p + '">' + esc(next.t) + ' →</a>' : '这是路线最后一页，恭喜！'));
      });
    }
  }

  function renderSide() {
    if (IS_INDEX) return;
    document.body.classList.add('aivc-has-side');
    var n = doneCount();
    var html = '<div class="hd"><span>学习路线</span><a href="' + ROOT + '#catalog">按章节浏览 →</a></div>';
    STAGES.forEach(function (s) {
      var dn = doneCount(s.items), open = CUR && CUR.stage === s;
      html += '<details' + (open ? ' open' : '') + '><summary><span class="n">' + s.n + '</span><span>' + esc(s.name) + '</span><span class="c' + (dn === s.items.length && dn ? ' full' : '') + '">' + dn + '/' + s.items.length + '</span></summary>';
      s.items.forEach(function (x) {
        html += '<a class="it' + (CUR === x ? ' cur' : '') + '" href="' + ROOT + x.p + '"><span class="ck">' + (isDone(x.p) ? '✓' : '') + '</span>' + kind(x.k) + '<span class="t">' + esc(x.t) + '</span></a>';
      });
      html += '</details>';
    });
    html += '<div class="hd" style="margin-top:10px"><span>参考</span></div>' + EXTRA.map(function (x) { return '<a class="it' + (CUR === x ? ' cur' : '') + '" href="' + ROOT + x.p + '"><span class="ck"></span>' + kind(x.k) + '<span class="t">' + esc(x.t) + '</span></a>'; }).join('');
    var side = h('aside', { id: 'aivc-side', 'aria-label': '课程目录' }, html);
    var back = h('div', { id: 'aivc-back' });
    back.addEventListener('click', function () { document.body.classList.remove('aivc-open'); });
    document.body.appendChild(side); document.body.appendChild(back);
    var cur = side.querySelector('.it.cur'); if (cur) setTimeout(function () { try { cur.scrollIntoView({ block: 'center' }); } catch (e) {} }, 0);
  }

  function refreshProgress() {
    var n = doneCount(), pct = TOTAL ? Math.round(n / TOTAL * 100) : 0;
    var p = document.querySelector('.aivc-prog'); if (p) { p.querySelector('i').style.width = pct + '%'; var tx = p.querySelector('.hidem'); if (tx) tx.textContent = n + '/' + TOTAL; p.title = '已学 ' + n + ' / ' + TOTAL + ' 页'; }
    var side = document.getElementById('aivc-side'); if (side) { side.remove(); var b = document.getElementById('aivc-back'); if (b) b.remove(); renderSide(); }
    document.dispatchEvent(new CustomEvent('aivc:progress'));
  }

  /* ---------- 搜索 ---------- */
  var SEARCH, SINPUT, SRES, sel = 0, hits = [];
  function openSearch() { if (!SEARCH) buildSearch(); SEARCH.classList.add('show'); SINPUT.value = ''; runSearch(''); setTimeout(function () { SINPUT.focus(); }, 0); }
  function closeSearch() { if (SEARCH) SEARCH.classList.remove('show'); }
  function buildSearch() {
    SEARCH = h('div', { id: 'aivc-search' }, '<div class="box"><input type="search" placeholder="搜索课程 / 实验 / 导读 / 面试页 …" aria-label="搜索"><div class="res"></div><div class="ft"><span>↑↓ 选择</span><span>Enter 打开</span><span>Esc 关闭</span><span style="margin-left:auto">术语解释请去 <a href="' + ROOT + 'glossary.html" style="color:inherit">术语图鉴</a></span></div></div>');
    document.body.appendChild(SEARCH);
    SINPUT = SEARCH.querySelector('input'); SRES = SEARCH.querySelector('.res');
    SEARCH.addEventListener('click', function (e) { if (e.target === SEARCH) closeSearch(); });
    SINPUT.addEventListener('input', function () { runSearch(SINPUT.value); });
    SINPUT.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { sel = Math.min(sel + 1, hits.length - 1); paintSel(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { sel = Math.max(sel - 1, 0); paintSel(); e.preventDefault(); }
      else if (e.key === 'Enter') { if (hits[sel]) location.href = ROOT + hits[sel].p; }
      else if (e.key === 'Escape') closeSearch();
    });
  }
  function runSearch(q) {
    q = q.trim().toLowerCase(); var pool = ALL.concat(EXTRA);
    hits = !q ? (nextUndone() ? [nextUndone()] : []).concat(pool.filter(function (x) { return x.k === '课'; }).slice(0, 7)) :
      pool.map(function (x) { var s = (x.t + ' ' + x.d + ' ' + (x.src || '') + ' ' + (x.ch ? x.ch.name : '') + ' ' + x.k).toLowerCase(); var i = s.indexOf(q); var sc = i < 0 ? -1 : (x.t.toLowerCase().indexOf(q) >= 0 ? 2 : 1); return { x: x, sc: sc }; })
        .filter(function (r) { return r.sc >= 0; }).sort(function (a, b) { return b.sc - a.sc; }).map(function (r) { return r.x; }).slice(0, 12);
    sel = 0;
    SRES.innerHTML = hits.length ? (!q ? '<div class="empty" style="text-align:left;padding:8px 12px 2px">' + (nextUndone() ? '继续学习 ↓ 与正式课' : '正式课') + '</div>' : '') + hits.map(function (x, i) {
      return '<a class="r' + (i === sel ? ' on' : '') + '" href="' + ROOT + x.p + '">' + kind(x.k) + '<span><div class="t">' + esc(x.t) + '</div><div class="d">' + esc(x.d) + '</div></span><span class="st">' + (isDone(x.p) ? '✓ 已学' : (x.stage ? '阶段 ' + x.stage.n : '')) + '</span></a>';
    }).join('') : '<div class="empty">没有匹配的页面。换个关键词，或去 <a href="' + ROOT + 'glossary.html">术语图鉴</a> 查黑话。</div>';
  }
  function paintSel() { var rs = SRES.querySelectorAll('.r'); rs.forEach(function (r, i) { r.classList.toggle('on', i === sel); if (i === sel) r.scrollIntoView({ block: 'nearest' }); }); }
  document.addEventListener('keydown', function (e) {
    var inField = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || '')) || e.target.isContentEditable;
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); SEARCH && SEARCH.classList.contains('show') ? closeSearch() : openSearch(); }
    else if (e.key === '/' && !inField) { e.preventDefault(); openSearch(); }
    else if (e.key === 'Escape') { closeSearch(); document.body.classList.remove('aivc-open'); }
  });

  var TOAST, TT;
  function toast(html) { if (!TOAST) { TOAST = h('div', { id: 'aivc-toast' }); document.body.appendChild(TOAST); } TOAST.innerHTML = html; TOAST.classList.add('show'); clearTimeout(TT); TT = setTimeout(function () { TOAST.classList.remove('show'); }, 4500); }

  /* ---------- 启动 ---------- */
  var st = h('style', { id: 'aivc-style' }); st.textContent = CSS; document.head.appendChild(st);
  renderTop(); renderCrumb(); renderSide();

  window.AIVC = { ROOT: ROOT, CH: CH, STAGES: STAGES, ORDER: ORDER, ALL: ALL, EXTRA: EXTRA, TOTAL: TOTAL, BY: BY, CUR: CUR,
    isDone: isDone, setDone: function (p, v) { setDone(p, v); refreshProgress(); }, doneCount: doneCount, nextUndone: nextUndone, kind: kind, esc: esc, openSearch: openSearch, toast: toast };
  document.dispatchEvent(new CustomEvent('aivc:ready'));
})();
