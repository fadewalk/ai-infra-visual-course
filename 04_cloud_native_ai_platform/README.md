# 第 3 章（小白版）· 云原生 AI 平台

> 对应原目录：[04_cloud_native_ai_platform](https://github.com/ForceInjection/AI-fundamentals/blob/main/04_cloud_native_ai_platform/README.md)。一句话：**当 K8s 撞上 GPU 这种昂贵、独占、无硬隔离的硬件，要补哪些课。**

## 已完成

- [第 4 课 · K8s 上跑 GPU](01_k8s_gpu.html) —— GPU Pod 六步旅程（声明资源 → Device Plugin 上报 → 调度 → 领设备 ID → Container Toolkit 注入 → 跑起来）；整卡/时间切片/MPS/MIG 四模式；SRE 概念映射表；故障速查四连卡。

## 本章一句话导读

- K8s 只认识"数量"（nvidia.com/gpu: 1），具体分哪张卡是 kubelet 问 Device Plugin 要的。
- 原生 K8s 对 GPU **没有 cgroup 式硬隔离**——HAMi/vGPU 就是在补这一课（显存配额、算力切分）。
- 训练作业要 Gang Scheduling（Volcano/Kueue）：8 卡作业要么全员到位要么全部等待。
- 推理作业还有一层：LWS / llm-d 管多机多卡推理的编排骨架。
- 存储是隐形短板：训练读海量小文件、推理要 KV Cache 分层存储（JuiceFS / 3FS / ICMS）。

## 待制作（见[总表](../README.md#04_cloud_native_ai_platform云原生-ai-平台--原目录)）

HAMi/Kueue 切分交互（P1）、LWS/llm-d 导读（P2）、存储三篇导读（P2）。
