// wrapped_functions

function creating_wrapper_args() {
add_modal({
    "this_class" : "creating_wrapper_args_modal",
    "content_class" : "creating_wrapper_args_modal_content"
})
style_modal('creating_wrapper_args_modal', 1, {
    "width" : "auto",
    "height" : "auto"
})
add_text('creating_wrapper_args_modal_content', 1, {
    "this_class" : "wrapper_ex_text",
    "text" : "WRAPPER ARGUMENTS"
})
}


function creating_extra_functs() {
add_modal({
    "this_class" : "extra_functs_modal",
    "content_class" : "extra_functs_modal_content"
})
style_modal('extra_functs_modal', 1, {
    "width" : "auto",
    "height" : "auto"
})
add_text('extra_functs_modal_content', 1, {
    "this_class" : "wrapper_ex_text",
    "text" : "EXTRA FUNCTIONS"
})
}


function binding_to_ui() {
add_modal({
    "this_class" : "binding_ui_modal",
    "content_class" : "binding_ui_modal_content"
})
style_modal('binding_ui_modal', 1, {
    "width" : "auto",
    "height" : "auto"
})
add_text('binding_ui_modal_content', 1, {
    "this_class" : "wrapper_ex_text",
    "text" : "BINDING D3 TO UI ELEMENTS"
})
}

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
    "title_color" : "white",
    "chart_width" : 950
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
    style_html('slider_label', 1, {
        "display" : "none"
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


function change_width() {
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
        "text" : "CHART WIDTH<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class" : "d3_edit_slider",
        "default_value" : scatter_wrapper_args.chart_width,
        "min_value" : 500,
        "max_value" : 930
    })
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments" : scatter_wrapper_args,
        "extra_functions" : scatter_extras,
        "chart_width" : this.value
     })
    `
    })
}


function dataset1() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments" : scatter_wrapper_args,
        "extra_functions" : scatter_extras,
        "data_path" : "../data/scatter_data.tsv"
    })
    delete scatter_extras['circle_color'] // to reset original colors after using dropdown
    delete scatter_extras['legend'] // to reset original legend after using dropdown
}

function dataset2() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments" : scatter_wrapper_args,
        "extra_functions" : scatter_extras,
        "data_path" : "../data/scatter_data_b.tsv"
    })
    delete scatter_extras['circle_color'] // to reset original colors after using dropdown
    delete scatter_extras['legend'] // to reset original legend after using dropdown
}

function dataset3() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments" : scatter_wrapper_args,
        "extra_functions" : scatter_extras,
        "data_path" : "../data/scatter_data_c.tsv"
    })
    delete scatter_extras['circle_color'] // to reset original colors after using dropdown
    delete scatter_extras['legend'] // to reset original legend after using dropdown
}

function choose_class(choice) {
    if(choice == 'Setosa') {
    setosa_only()
    }
    if(choice == 'Versicolor') {
    versicolor_only()
    }
    if(choice == 'Virginica') {
    virginica_only()
    }
}

function setosa_only() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments" : scatter_wrapper_args,
        "extra_functions" : scatter_extras,
        "data_path" : "../data/scatter_data_setosa.tsv"
    })
    call_d3_extra('scatter_chart', 1, {
        "extra_functions" : scatter_extras,
        "circle_color" : "all_style_d3('dot', {'fill' : 'rgb(31, 119, 180)'})",
        "legend" : "style_d3('rect', 1, {'fill' : 'rgb(31, 119, 180)'})"
    })
}

function versicolor_only() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments" : scatter_wrapper_args,
        "extra_functions" : scatter_extras,
        "data_path" : "../data/scatter_data_versicolor.tsv"
    })
    call_d3_extra('scatter_chart', 1, {
        "extra_functions" : scatter_extras,
        "circle_color" : "all_style_d3('dot', {'fill' : 'rgb(255, 127, 14)'})",
        "legend" : "style_d3('rect', 1, {'fill' : 'rgb(255, 127, 14)'})"
    })
}

function virginica_only() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments" : scatter_wrapper_args,
        "extra_functions" : scatter_extras,
        "data_path" : "../data/scatter_data_virginica.tsv"
    })
    call_d3_extra('scatter_chart', 1, {
        "extra_functions" : scatter_extras,
        "circle_color" : "all_style_d3('dot', {'fill' : 'rgb(44, 160, 44)'})",
        "legend" : "style_d3('rect', 1, {'fill' : 'rgb(44, 160, 44)'})"
    })
}


function change_line_chart(bar_instance) {
    if(bar_instance == 1) {
    call_d3_wrapper('dual_2', 1, {
        "wrapper_arguments" : linechart_wrapper_args,
        "extra_functions" : linechart_extras,
        "data_path" : "../data/linechart_data.tsv"
    })
    }
    if(bar_instance == 2) {
    call_d3_wrapper('dual_2', 1, {
        "wrapper_arguments" : linechart_wrapper_args,
        "extra_functions" : linechart_extras,
        "data_path" : "../data/linechart_data_b.tsv"
    })
    }
    if(bar_instance == 3) {
    call_d3_wrapper('dual_2', 1, {
        "wrapper_arguments" : linechart_wrapper_args,
        "extra_functions" : linechart_extras,
        "data_path" : "../data/linechart_data_c.tsv"
    })
    }
    if(bar_instance == 4) {
    call_d3_wrapper('dual_2', 1, {
        "wrapper_arguments" : linechart_wrapper_args,
        "extra_functions" : linechart_extras,
        "data_path" : "../data/linechart_data_c.tsv"
    })
    }
    if(bar_instance == 5) {
    call_d3_wrapper('dual_2', 1, {
        "wrapper_arguments" : linechart_wrapper_args,
        "extra_functions" : linechart_extras,
        "data_path" : "../data/linechart_data_c.tsv"
    })
    }
    if(bar_instance == 6) {
    call_d3_wrapper('dual_2', 1, {
        "wrapper_arguments" : linechart_wrapper_args,
        "extra_functions" : linechart_extras,
        "data_path" : "../data/linechart_data_c.tsv"
    })
    }if(bar_instance == 7) {
    call_d3_wrapper('dual_2', 1, {
        "wrapper_arguments" : linechart_wrapper_args,
        "extra_functions" : linechart_extras,
        "data_path" : "../data/linechart_data_c.tsv"
    })
    }
}

function play_timeline() {
    style_button('run_timeline_button', 1, {
        "pointer-events" : "none"
    })
    style_layout('calendar_layout', 1, {
        "pointer-events" : "none"
    })
    call_every({
        "every" : 2000,
        "function" : `
                call_d3_extra('piechart', 1, {
                    "extra_functions" : piechart_extras,
                    "click_button" : "click_element('randomize', 1)"
                })
                all_style_layout('calendar_layout_cells', {'background' : 'transparent'})
                style_layout('calendar_layout_cells', 13 + index, {'background' : 'hotpink'})
        `
    })
    delay_event({
        "delay" : 63000,
        "function" : `
             stop_call_every();
             style_button('run_timeline_button', 1, {
                "pointer-events" : "auto"
             })
             style_layout('calendar_layout', 1, {
                "pointer-events" : "auto"
             })
             `
    })
}


go_to_circle = {
    "zoom out" : 1,
    "analytics" : 2,
    "cluster" : 3,
    "graph" : 4,
    "display" : 10
}

function click_circle_pack(use_val) {
    call_d3_extra('circlepack', 1, {
        "extra_functions" : circlepack_extras,
        "click_circle" : "click_d3('parent', " + go_to_circle[use_val] + ")"
    })
}

function click_circle_tree(use_val) {
    call_d3_extra('tree_layout', 1, {
        "extra_functions" : tree_extras,
        "click_circle" : "click_d3('node', " + go_to_circle[use_val] + ")"
        })
}


function switch_flares_tree() {

empty_contents('sectional_layout_cells', 10)
remove_element('option_drop', 1)

style_text('choose_flare', 1, {
    "color" : "white"
})

style_text('choose_flare', 2, {
    "color" : "hotpink"
})

add_dropdown('options_layout_cells', 21, {
    "this_class" : "option_drop",
    "options" : ['zoom out', 'analytics', 'cluster', 'graph', 'display'],
    "title" : "choose..."
})

add_event('option_drop', 1, {
    "type" : "change",
    "function" : "click_circle_tree(this.value)"
})

tree_wrapper_args = {
    "data_path" : "../data/flare.json"
}

tree_extras = {

}

add_d3_visual('sectional_layout_cells', 10, {
    "this_class" : "tree_layout",
    "html_path" : "visuals/tree.html",
    "wrapper_arguments" : tree_wrapper_args,
    "extra_functions" : tree_extras
})
setTimeout(function() {
style_d3_visual('tree_layout', 1, {
    "height" : "500px"
})
}, 1000)
}


function switch_flares_packing() {

empty_contents('sectional_layout_cells', 10)
remove_element('option_drop', 1)

style_text('choose_flare', 1, {
    "color" : "hotpink"
})

style_text('choose_flare', 2, {
    "color" : "white"
})

add_dropdown('options_layout_cells', 21, {
    "this_class" : "option_drop",
    "options" : ['zoom out', 'analytics', 'cluster', 'graph', 'display'],
    "title" : "choose..."
})

add_event('option_drop', 1, {
    "type" : "change",
    "function" : "click_circle_pack(this.value)"
})

circlepack_wrapper_args = {
    "data_path" : "../data/flare.json",
    "chart_width" : 600,
    "chart_height" : 600,
    "chart_radius" : 450
}

circlepack_extras = {
    "top" : "style_d3('svg', 1, {'margin-top' : '-60px'})"
}

add_d3_visual('sectional_layout_cells', 10, {
    "this_class" : "circlepack",
    "html_path" : "visuals/circlepack.html",
    "wrapper_arguments" : circlepack_wrapper_args,
    "extra_functions" : circlepack_extras
})

}

function pop_upload() {
add_modal({
    "this_class" : "upload_data_modal",
    "content_class" : "upload_data_modal_content"
})
style_modal('upload_data_modal', 1, {
    "width" : "auto",
    "height" : "auto"
})
add_text('upload_data_modal_content', 1, {
    "this_class" : "upload_text",
    "text" : "UPLOAD DATA<br><br>"
})
style_text('upload_text', 1, {
    "font-weight" : "bold"
})
add_upload_button('upload_data_modal_content', 1, {
    "this_class" : "upload_data_button"
})
style_upload_button('upload_data_button', 1, {
    "margin-left" : "70px"
})
add_event('upload_data_button', 1, {
    "type" : "upload",
    "function" : `

    `
})
}