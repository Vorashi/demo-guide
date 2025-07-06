---
title: Расчет материалов для производства
sidebar_position: 2
---

## Формула расчета
```python
def calc_material(id_type, id_material, count, length, width):
    # Коэффициент типа продукции × (1 + % брака) × кол-во
    return ceil(length * width * ratio * (1 + defect_rate) * count)