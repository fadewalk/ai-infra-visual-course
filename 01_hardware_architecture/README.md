# 第 1 章（小白版）· 硬件架构与互连

> 对应原目录：[01_hardware_architecture](https://github.com/ForceInjection/AI-fundamentals/blob/main/01_hardware_architecture/README.md)。原文讲"从芯片到机架"，本章先给你"从直觉到术语"。

## 已完成

- [第 1 课 · GPU 是什么](01_gpu_vs_cpu.html) —— CPU/GPU 赛跑动画；SM、Warp、Tensor Core、HBM、显存带宽、SIMT 六个关键词；为何 AI 吃 GPU。

## 本章一句话导读

- **芯片层**：GPU = 几百个"大核（SM）"，每个大核带一群小兵（CUDA/Tensor Core）；HBM 是焊在旁边的专属内存。
- **总线层**：卡和 CPU 之间走 PCIe（几十 GB/s 量级），卡和卡之间走 NVLink（TB/s 量级）——训练多卡并行能不能快，很大程度取决于卡间带宽。
- **直通层**：GPUDirect 让数据"绕开 CPU"直达显存（P2P / RDMA / Storage 三个变体）。
- **系统层**：GB300 NVL72 这类"超级芯片"把 72 张卡连成一台机器。

## 待制作（见[总表](../README.md#01_hardware_architecture硬件架构与互连--原目录)）

延迟金字塔分层图、PCIe/NVLink 带宽对比动画、GPUDirect 数据路径对比 —— 均 P1。

## 先读原文的顺序建议

GPU 架构 → 延迟金字塔 → NVLink → GPUDirect → PCIe/CXL → 超级芯片。
