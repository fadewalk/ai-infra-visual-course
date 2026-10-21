# 第 2 章（小白版）· AI 集群运维与通信

> 对应原目录：[03_ai_cluster_ops](https://github.com/ForceInjection/AI-fundamentals/blob/main/03_ai_cluster_ops/README.md)。原文四条主线：看得见、连得通、通得快、调得开——这也是 AI SRE 的日常。

## 已完成

- [单机 GPU 运维小白速查](01_gpu_ops.html) —— nvidia-smi/nvtop/XID/DCGM 对照 Linux 主机运维习惯，含可直接照抄的健康检查最小集。

## 本章一句话导读

- **看得见**：GPU-Util 是个误导性指标（只说明"有 kernel 在跑"），真忙假忙看 SM Active（DCGM）。
- **连得通**：多机训练靠 InfiniBand/RoCE，μs 级延迟 + 无损传输；IB 出问题常表现为"莫名变慢"而不是报错。
- **通得快**：NCCL 把 AllReduce/AllGather 做成标准集合通信，分布式训练扩展效率的胜负手（第 2 课的环形动画就是它）。
- **调得开**：几十上百张卡时需要拓扑感知调度 + Gang Scheduling（第 4 课讲过为什么"要么全上要么不上"）。

## 待制作（见[总表](../README.md#03_ai_cluster_opsai-集群运维与通信--原目录)）

IB/RDMA 数据路径动画、NCCL 调优导读、Gang Scheduling 流程图 —— 均 P1。
