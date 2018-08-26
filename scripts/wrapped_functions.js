// wrapped_functions

function bar_color() {
color_picker({
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
color_picker({
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
"default_value" : 10,
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
"default_value" : 0,
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
"default_value" : 0,
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
"default_value" : 0,
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
"default_value" : 0,
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