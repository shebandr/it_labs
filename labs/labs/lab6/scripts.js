let auto_calc_side = document.getElementById('auto-calc__side'),
    auto_calc_square = document.getElementById('auto-calc__square'),

    mouse_on_side = document.getElementById('mouse-on__side'),
    mouse_on_square = document.getElementById('mouse-on__square'),

    mouse_out_side = document.getElementById('mouse-out__side'),
    mouse_out_square = document.getElementById('mouse-out__square'),

    on_select_side = document.getElementById('on-select__side'),
    on_select_square = document.getElementById('on-select__square');

auto_calc_side.addEventListener('keyup', () => auto_calc_square.value = auto_calc_side.value**2)
mouse_on_side.addEventListener('mouseover', () => mouse_on_square.value = mouse_on_side.value**2)
mouse_out_side.addEventListener('mouseout', () => mouse_out_square.value = mouse_out_side.value**2)
on_select_side.addEventListener('select', () => on_select_square.value = on_select_side.value**2)