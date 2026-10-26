# AI Infra 可视化学习课程

> **在线站点**：<https://fadewalk.github.io/ai-infra-visual-course/>
>
> 写给有 **Linux / Kubernetes / 云原生** 基础、但对 GPU 训练、推理、调度陌生的工程师（SRE、运维、平台工程）。对 [ForceInjection/AI-fundamentals](https://github.com/ForceInjection/AI-fundamentals) 知识库的**小白化、可视化重述**：目录与原仓库 1:1 对齐，每课含动画、类比、测验，课末链回硬核原文。

## 课程列表

| 课 | 内容 | 打开 |
| --- | --- | --- |
| 1 | **GPU 是什么** —— CPU/GPU 赛跑、SM/Warp/Tensor Core/HBM | [01_hardware_architecture/01_gpu_vs_cpu.html](01_hardware_architecture/01_gpu_vs_cpu.html) |
| 2 | **训练是怎么回事** —— 训练循环、学习率交互、AllReduce、显存账 | [05_model_training_and_fine_tuning/01_training_loop.html](05_model_training_and_fine_tuning/01_training_loop.html) |
| 3 | **推理是怎么回事** —— Prefill/Decode、KV Cache、并发×显存红线 | [09_inference_system/01_inference_pipeline.html](09_inference_system/01_inference_pipeline.html) |
| 4 | **K8s 上跑 GPU** —— Pod 六步旅程、MIG/MPS/时间片、SRE 概念映射 | [04_cloud_native_ai_platform/01_k8s_gpu.html](04_cloud_native_ai_platform/01_k8s_gpu.html) |
| 5 | **延迟金字塔** —— 七层访存延迟、"算不动/搬不动/送不到"定位法 | [01_hardware_architecture/02_latency_pyramid.html](01_hardware_architecture/02_latency_pyramid.html) |
| 6 | **并行策略** —— DP/TP/PP/EP 切法、显存计算器 | [09_inference_system/02_parallelism.html](09_inference_system/02_parallelism.html) |
| 加餐 | **单机 GPU 运维速查** —— nvidia-smi/XID/健康检查对照 Linux 主机运维 | [03_ai_cluster_ops/01_gpu_ops.html](03_ai_cluster_ops/01_gpu_ops.html) |
| 7 | **LLM 是怎么回事** —— 文字接龙采样动画、温度交互、Embedding/Attention 图示 | [06_llm_theory_and_fundamentals/01_llm_basics.html](06_llm_theory_and_fundamentals/01_llm_basics.html) |
| 加餐 2 | **GPU 排障模拟器** —— 伪终端亲手修三起"生产事故"（实操） | [03_ai_cluster_ops/02_gpu_troubleshoot_sim.html](03_ai_cluster_ops/02_gpu_troubleshoot_sim.html) |
| 8 | **RAG 是怎么回事** —— 检索增强全流程动画、微调 vs RAG 选型 | [07_rag_and_tools/01_rag_basics.html](07_rag_and_tools/01_rag_basics.html) |
| 9 | **Agent 是怎么回事** —— 运维 Agent 实况推演、ReAct 循环、MCP | [08_agentic_system/01_agent_basics.html](08_agentic_system/01_agent_basics.html) |
| 10 | **Transformer 拆解** —— token 穿层动画、Q/K/V、FFN/残差/RoPE | [06_llm_theory_and_fundamentals/02_transformer.html](06_llm_theory_and_fundamentals/02_transformer.html) |
| 11 | **对齐算法是怎么回事** —— 亲手标注偏好对、PPO/DPO/GRPO 显存对比、β 旋钮 | [05_model_training_and_fine_tuning/04_alignment.html](05_model_training_and_fine_tuning/04_alignment.html) |
| 12-14 | **机器学习基础模块**：AI/ML/DL/RL 关系图 · 神经网络与过拟合实验 · 浏览器真跑 Q-learning | [ml_basics/01_ml_map.html](ml_basics/01_ml_map.html) · [02_neural_network.html](ml_basics/02_neural_network.html) · [03_rl_basics.html](ml_basics/03_rl_basics.html) |
| 实验室 | **KV 容量计算器** · **训练显存对比（全参 vs LoRA）** · **Gang 调度演示** | [09_inference_system/03_kv_capacity_calc.html](09_inference_system/03_kv_capacity_calc.html) · [05_model_training_and_fine_tuning/02_memory_calc.html](05_model_training_and_fine_tuning/02_memory_calc.html) · [04_cloud_native_ai_platform/02_scheduling_demo.html](04_cloud_native_ai_platform/02_scheduling_demo.html) |
| 加餐 | **硬件与网络四页**：PCIe/CXL · GPUDirect · NVLink · IB/RDMA · **NCCL 导读** | [01_hardware_architecture/03_pcie_cxl.html](01_hardware_architecture/03_pcie_cxl.html) 等同目录 |
| 加餐 | **推理深入**：Batching/PagedAttention · $/token 成本速算 · 引擎与 KV 系统导读 | [09_inference_system/04_batching_attention.html](09_inference_system/04_batching_attention.html) 等 |
| 加餐 | **其余**：芯片三路线对比 · LWS/llm-d · 存储三篇 · 70B 复盘 · NPU 对照 · 各章导读 | [index.html](index.html) 完整目录 |
| 新课 | **AI 编译器是怎么回事** —— 算子融合动画（吸收 ZOMI/微软课程） | [10_ai_related_course/03_ai_compiler.html](10_ai_related_course/03_ai_compiler.html) |
| 导读 | **外部优质教程地图** —— Datawhale/ZOMI/微软课程的价值判断与接入时机 | [10_ai_related_course/02_external_courses.html](10_ai_related_course/02_external_courses.html) |
| 面试 | **面试自测题库** —— 28 问 + 3 道系统设计，答题要点与课程互链 | [interview/01_question_bank.html](interview/01_question_bank.html) |
| 面试 | **2026 趋势速览** —— Agent 负载/线性注意力/CSA/HCA/HBF/昇腾，每条配"面试怎么聊" | [interview/02_trends_2026.html](interview/02_trends_2026.html) |
| 加餐 | **PD 分离小白版** · **投机解码与量化小白版**（面试高频） | [09_inference_system/09_pd_disaggregation.html](09_inference_system/09_pd_disaggregation.html) · [09_inference_system/10_spec_quant.html](09_inference_system/10_spec_quant.html) |
| 参考 | **术语图鉴** —— 60+ 个黑话的一句话解释 + SRE 类比，可搜索、带思维导图 | [glossary.html](glossary.html) |

完整 1:1 课程目录（含全部章节的制作状态）见 [index.html](index.html)。

## 学习路径

第 0 阶段刷完十四课（约 3.5 小时，含机器学习基础模块）→ 玩排障模拟器、逛术语图鉴 → 按站点首页的**六阶段路径**进入上游硬核文档 → 自测四问（站点首页）：为什么 7B 训练单卡放不下 / decode 慢在带宽不在算力 / `nvidia.com/gpu` 从 Pod 到卡经过谁 / GPU-Util 90% 为什么不代表忙。

## 更新日志

更新历史见 [changelog.html](changelog.html)（由 `tools/gen_changelog.py` 从 git 提交历史生成，更新课程后运行该脚本重新生成）。

## 部署

GitHub Actions 自动部署到 Pages（`.github/workflows/pages.yml`），推送到 `main` 即发布。所有课程页为单文件 HTML，无外部依赖，本地双击也能打开。

## 说明

- 课程为原创可视化与导读；引用的上游文章版权归原作者，站内"延伸阅读"均链接回上游原文。
- 制作规范与批次进度见站点首页"完整课程目录"的状态标记（✅ / 🕐 P1-P3）。
