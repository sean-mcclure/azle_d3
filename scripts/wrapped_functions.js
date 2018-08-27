// wrapped_functions

function bar_color() {
add_color_picker({
"this_class" : "bar_color_picker",
"function" : `
    call_d3_wrapper('my_d3', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "bar_color" : global_current_color
    })
    `
})
}

function text_color() {
add_color_picker({
"this_class" : "text_color_picker",
"function" : `
    call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "text_color" : "all_style_d3('text', {'fill' : '" + global_current_color + "'})"
    })
    `
})
}

function text_size() {
add_modal({
"this_class" : "text_size_modal",
"content_class" : "text_size_modal_content"
})
style_modal('text_size_modal', 1, {
"width" : "auto",
"height" : "auto"
})
add_text('text_size_modal_content', 1, {
"this_class" : "text_size_title",
"text" : "TEXT SIZE<br><br>"
})
add_slider('text_size_modal_content', 1, {
"this_class" : "d3_edit_slider",
"default_value" : current_d3_extras_value(barchart_extras, 'text_size', 'font-size'),
"min_value" : 10,
"max_value" : 30
})
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
    call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "text_size" : "all_style_d3('text', {'font-size' : '" + this.value + "'})"
    })
`
})
}

function change_hover_color() {
call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "hover_color" : `
        all_apply_id('bar')
        current_color=''
        all_add_event('bar', {
        "type" : "hover",
        "function" : "current_color = $(this).css('fill'); $('#' + this.id).css('fill', 'pink')"
        })
        all_add_event('bar', {
        "type" : "unhover",
        "function" : "$('#' + this.id).css('fill', '" + current_color + "')"
        })
    `
    })
}

function bottom() {
add_modal({
"this_class" : "text_size_modal",
"content_class" : "text_size_modal_content"
})
style_modal('text_size_modal', 1, {
"width" : "auto",
"height" : "auto"
})
add_text('text_size_modal_content', 1, {
"this_class" : "text_size_title",
"text" : "BOTTOM<br><br>"
})
add_slider('text_size_modal_content', 1, {
"this_class" : "d3_edit_slider",
"default_value" : barchart_wrapper_args.bottom_choice,
"min_value" : 0,
"max_value" : 500
})
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
    call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras,
        "bottom_choice" : this.value
        })
    `
})
}

function top() {
add_modal({
"this_class" : "text_size_modal",
"content_class" : "text_size_modal_content"
})
style_modal('text_size_modal', 1, {
"width" : "auto",
"height" : "auto"
})
add_text('text_size_modal_content', 1, {
"this_class" : "text_size_title",
"text" : "TOP<br><br>"
})
add_slider('text_size_modal_content', 1, {
"this_class" : "d3_edit_slider",
"default_value" : barchart_wrapper_args.top_choice,
"min_value" : 0,
"max_value" : 500
})
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
    call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras,
        "top_choice" : this.value
        })
    `
})
}

function left() {
add_modal({
"this_class" : "text_size_modal",
"content_class" : "text_size_modal_content"
})
style_modal('text_size_modal', 1, {
"width" : "auto",
"height" : "auto"
})
add_text('text_size_modal_content', 1, {
"this_class" : "text_size_title",
"text" : "LEFT<br><br>"
})
add_slider('text_size_modal_content', 1, {
"this_class" : "d3_edit_slider",
"default_value" : barchart_wrapper_args.left_choice,
"min_value" : 0,
"max_value" : 500
})
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
    call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras,
        "left_choice" : this.value
    })
    `
})
}

function right() {
add_modal({
"this_class" : "text_size_modal",
"content_class" : "text_size_modal_content"
})
style_modal('text_size_modal', 1, {
"width" : "auto",
"height" : "auto"
})
add_text('text_size_modal_content', 1, {
"this_class" : "text_size_title",
"text" : "RIGHT<br><br>"
})
add_slider('text_size_modal_content', 1, {
"this_class" : "d3_edit_slider",
"default_value" : barchart_wrapper_args.right_choice,
"min_value" : 0,
"max_value" : 500
})
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
    call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras,
        "right_choice" : this.value
    })
    `
})
}

function animate_rubberBand() {
     call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "animate_rubber" : `
            all_apply_id('bar')
            all_add_event('bar', {
                "type" : "hover",
                "function" : "animate_element('bar', get_target_instance(this.id), {'type' : 'rubberBand'})"
            })
            `
     })
}

function animate_zoomOutUp() {
    call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "animate_rubber" : `
            all_apply_id('bar')
            all_add_event('bar', {
                "type" : "hover",
                "function" : "animate_element('bar', get_target_instance(this.id), {'type' : 'zoomOutUp'})"
            })
            `
     })
}

function click_and_get_data() {
    call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "click_data" : `
            all_apply_id('bar')
            all_add_event('bar', {
                "type" : "click",
                "function" : "alert($('#' + this.id).attr('height'))"
            })
            `
     })
}


function update_data_a() {
    call_d3_wrapper('my_d3', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "data_path" : "../data/bar_data.tsv"
    })
}

function update_data_b() {
    call_d3_wrapper('my_d3', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "data_path" : "../data/bar_data_b.tsv"
    })
}

function update_data_full() {
    toggle_functions('update_data_b()', 'update_data_a()')
}

function start_over() {
barchart_wrapper_args = {
    "data_path" : "../data/bar_data.tsv",
    "y_title" : "AVG RETURN",
    "top_choice" : 30,
    "right_choice" : 30,
    "bottom_choice" : 30,
    "left_choice" : 60,
    "bar_color" : "rgb(48, 229, 255)",
    "title_color" : "white"
}

barchart_extras = {
    "text_color" : "all_style_d3('text', {'fill' : 'white'})",
    "text_size" : "all_style_d3('text', {'font-size' : '17px'})"
}
call_d3_wrapper('my_d3', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras
    })
}

function circle_size() {
    add_modal({
        "this_class" : "text_size_modal",
        "content_class" : "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width" : "auto",
        "height" : "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class" : "text_size_title",
        "text" : "CIRCLE SIZE<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class" : "d3_edit_slider",
        "default_value" : current_d3_extras_value(scatter_extras, 'circle_size', 'r'),
        "min_value" : 0,
        "max_value" : 30
    })
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
    call_d3_extra('scatter_chart', 1, {
        "extra_functions" : scatter_extras,
        "circle_size" : "all_style_d3('dot', {'r' : " + this.value + "})"
    })
    `
    })
}

hold_op_val={'scatter_dot' : 0}
function circle_opacity() {
    add_modal({
        "this_class" : "text_size_modal",
        "content_class" : "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width" : "auto",
        "height" : "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class" : "text_size_title",
        "text" : "OPACITY<br><br>"
    })

    add_slider('text_size_modal_content', 1, {
        "this_class" : "d3_edit_slider",
        "default_value" : hold_op_val.scatter_dot,
        "min_value" : 0,
        "max_value" : 100,
        "label_multiplier" : 1/100
    })

add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
    hold_op_val['scatter_dot'] = this.value
    call_d3_extra('scatter_chart', 1, {
        "extra_functions" : scatter_extras,
        "circle_opacity" : "all_style_d3('dot', {'opacity' : " + this.value/100 + "})"
    })
    `
    })
}

function rotate_out_change_data() {
    /*
    call_d3_extra('scatter_chart', 1, {
        "extra_functions" : scatter_extras,
        "circle_spin" : "all_animate_element('dot', {'type' : 'rotateOut'})"
    })
    */
    setTimeout(function(){
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments" : scatter_wrapper_args,
        "extra_functions" : scatter_extras,
        "data_path" : "../data/scatter_data_b.tsv"
     })
     },1000)
}

function start_over_b() {

}