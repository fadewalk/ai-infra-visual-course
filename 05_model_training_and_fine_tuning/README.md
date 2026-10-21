# 第 4 章（小白版）· 模型训练与微调

> 对应原目录：[05_model_training_and_fine_tuning](https://github.com/ForceInjection/AI-fundamentals/blob/main/05_model_training_and_fine_tuning/README.md)。

## 已完成

- [第 2 课 · 训练是怎么回事](01_training_loop.html) —— 训练循环五步动画、loss 曲线、梯度下降与学习率交互（含发散演示）、8 卡环形 AllReduce、7B 模型显存账（为什么单卡放不下）。

## 本章一句话导读

- 训练 = "预测 → 对答案 → 找差距（梯度）→ 改参数"的循环，重复几十万次。
- 多卡训练最常见的是数据并行：每卡完整模型 + 不同数据，每步 AllReduce 同步梯度；模型太大单卡装不下时才上 TP/PP（切模型），见原仓库[并行策略可视化](https://github.com/ForceInjection/AI-fundamentals/blob/main/09_inference_system/parallelism/parallelism_visual.html)。
- 混合精度 + Adam 的显存口径：约 16 字节/参数 → 7B ≈ 112GB，还没算激活值——所以有了 ZeRO / LoRA / 梯度检查点。
- SRE 在训练里管什么：作业起得来（调度/配额）、跑得稳（断点续训 checkpoint）、不互相踩（隔离）、坏得知道（NCCL/IB 监控）。

## 待制作（见[总表](../README.md#05_model_training_and_fine_tuning训练与微调--原目录)）

SFT/LoRA 显存对比计算器（P1）、70B 训练复盘导读、RL 后训练导读（P2）。
