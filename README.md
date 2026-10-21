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

完整 1:1 课程目录（含全部章节的制作状态）见 [index.html](index.html)。

## 学习路径

第 0 阶段刷完六课（约 1.5 小时）→ 按站点首页的**六阶段路径**进入上游硬核文档 → 自测四问（站点首页）：为什么 7B 训练单卡放不下 / decode 慢在带宽不在算力 / `nvidia.com/gpu` 从 Pod 到卡经过谁 / GPU-Util 90% 为什么不代表忙。

## 部署

GitHub Actions 自动部署到 Pages（`.github/workflows/pages.yml`），推送到 `main` 即发布。所有课程页为单文件 HTML，无外部依赖，本地双击也能打开。

## 说明

- 课程为原创可视化与导读；引用的上游文章版权归原作者，站内"延伸阅读"均链接回上游原文。
- 制作规范与批次进度见站点首页"完整课程目录"的状态标记（✅ / 🕐 P1-P3）。
