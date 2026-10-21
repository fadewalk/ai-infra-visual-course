# 第 5 章（小白版）· 大模型推理

> 对应原目录：[09_inference_system](https://github.com/ForceInjection/AI-fundamentals/blob/main/09_inference_system/README.md)。原文把推理系统的矛盾总结为三个数字：显存不够、算力空转、延迟抖动——第 3 课让你亲眼看到这三个数字。

## 已完成

- [第 3 课 · 推理是怎么回事](01_inference_pipeline.html) —— Prefill/Decode 两阶段动画、KV Cache 开关对比、并发×显存红线（超限告警）、TTFT/TPOT/吞吐模拟。

## 本章一句话导读

- **Prefill** 读整个 prompt：并行、compute-bound，决定 TTFT。
- **Decode** 一个 token 一个 token 吐：每步重读全部权重，memory-bound，决定 TPOT 和吞吐——7B 模型单请求理论上限约 240 token/s，先撞带宽不撞算力（估算口径）。
- **KV Cache** 拿显存换计算：显存占用随上下文线性涨，所以"能同时服务几个用户"由显存决定；PagedAttention（≈OS 分页）治碎片。
- **Continuous Batching** 让请求随到随进批，吞吐差数倍。
- 进阶主线（原文极为丰富）：KV 分层缓存（LMCache/HiCache）→ PD 分离 → 并行策略（DP/TP/PP/EP）→ 成本与容量（$/token）。

## 待制作（见[总表](../README.md#09_inference_system推理系统--原目录)）

并行策略小白导读、PagedAttention/Prefix Caching 深入版、并发-显存计算器 —— P1；引擎系列导读 —— P2。
