// wrapped_functions
function adding_d3_visuals() {
    add_modal({
        "this_class": "adding_visual_modal",
        "content_class": "adding_visual_modal_content"
    })
    style_modal('adding_visual_modal', 1, {
        "width": "560px",
        "height": "auto"
    })
    add_text('adding_visual_modal_content', 1, {
        "this_class": "wrapper_ex_text",
        "text": "ADDING D3 VISUALS"
    })
    style_text('wrapper_ex_text', 1, {
        "font-weight": "bold"
    })
    style_text('explain_wraps', 1, {
        "text-align": "left"
    })
    add_code("adding_visual_modal_content", 1, {
        "this_class": "kedion_d3_code",
        "code": `
add_d3_visual('my_layout_cell', 1, {
    "this_class" : "my_barchart",
    "html_path" : "visuals/barchart.html",
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras
})
`
    })
    style_code('kedion_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    style_word('kedion_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": "add_d3_visual",
        "color": "yellow",
        "font-weight": "bold"
    })
}

function creating_wrapper_args() {
    add_modal({
        "this_class": "creating_wrapper_args_modal",
        "content_class": "creating_wrapper_args_modal_content"
    })
    style_modal('creating_wrapper_args_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('creating_wrapper_args_modal_content', 1, {
        "this_class": "wrapper_ex_text",
        "text": "WRAPPER ARGUMENTS"
    })
    style_text('wrapper_ex_text', 1, {
        "font-weight": "bold"
    })
    add_code("creating_wrapper_args_modal_content", 1, {
        "this_class": "kedion_d3_code",
        "code": `
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
`
    })
    style_code('kedion_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    style_word('kedion_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": "barchart_wrapper_args",
        "color": "yellow",
        "font-weight": "bold"
    })
}

function creating_extra_functs() {
    add_modal({
        "this_class": "extra_functs_modal",
        "content_class": "extra_functs_modal_content"
    })
    style_modal('extra_functs_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('extra_functs_modal_content', 1, {
        "this_class": "wrapper_ex_text",
        "text": "EXTRA FUNCTIONS"
    })
    style_text('wrapper_ex_text', 1, {
        "font-weight": "bold"
    })
    add_code("extra_functs_modal_content", 1, {
        "this_class": "kedion_d3_code",
        "code": `
barchart_extras = {
    "text_color" : "all_style_d3('text', {'fill' : 'white'})",
    "text_size" : "all_style_d3('text', {'font-size' : '17px'})"
}
`
    })
    style_code('kedion_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    style_word('kedion_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": "barchart_extras",
        "color": "yellow",
        "font-weight": "bold"
    })
}

function bind_to_element() {
    add_modal({
        "this_class": "bind_modal",
        "content_class": "bind_modal_content"
    })
    style_modal('bind_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('bind_modal_content', 1, {
        "this_class": "wrapper_ex_text",
        "text": "BINDING D3 TO UI ELEMENTS"
    })
    style_text('wrapper_ex_text', 1, {
        "font-weight": "bold"
    })
    add_text('bind_modal_content', 1, {
        "this_class": "explain_wraps",
        "text": "<br>Create the UI element..."
    })
    add_code("bind_modal_content", 1, {
        "this_class": "kedion_d3_code",
        "code": `
add_slider('my_layout_cell', 1, {
    "this_class" : "my_slider",
    "default_value" : 7,
    "min_value" : 0,
    "max_value" : 30
})
`
    })
    add_text('bind_modal_content', 1, {
        "this_class": "explain_wraps",
        "text": "...place call_d3_wrapper (or call_d3_extra) inside a regular JS function:"
    })
    add_code("bind_modal_content", 1, {
        "this_class": "kedion_d3_code",
        "code": `
function change_bottom(passed_value) {
    call_d3_wrapper('my_barchart', 1, {
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras,
        "bottom_choice" : passed_value
        })
}
`
    })
    style_word('kedion_d3_code', 2, {
        "this_class": "highlighted_code",
        "word": "call_d3_wrapper",
        "color": "yellow",
        "font-weight": "bold"
    })
    style_word('bind_modal_content', 1, {
        "this_class": "highlighted_code",
        "word": "call_d3_wrapper",
        "font-weight": "bold"
    })
    style_word('bind_modal_content', 1, {
        "this_class": "highlighted_code",
        "word": "call_d3_extra",
        "font-weight": "bold"
    })
    style_code('kedion_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    style_word('kedion_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": "add_slider",
        "color": "yellow",
        "font-weight": "bold"
    })
     add_text('bind_modal_content', 1, {
        "this_class": "explain_wraps",
        "text": "...add an event to UI element and pass value to above function:"
    })
    add_code("bind_modal_content", 1, {
        "this_class": "kedion_d3_code",
        "code": `
add_event('my_slider', 1, {
    "type" : "as_change",
    "function" : change_bottom(this.value)
})
`
})
style_word('kedion_d3_code', 3, {
        "this_class": "highlighted_code",
        "word": "add_event",
        "color": "yellow",
        "font-weight": "bold"
    })
}

function bar_color() {
    add_color_picker({
        "this_class": "bar_color_picker",
        "function": `
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
        "this_class": "text_color_picker",
        "function": `
    call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "text_color" : "all_style_d3('text', {'fill' : '" + global_current_color + "'})"
    })
    `
    })
}

function text_size() {
    add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "TEXT SIZE<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": current_d3_extras_value(barchart_extras, 'text_size', 'font-size'),
        "min_value": 10,
        "max_value": 30
    })
    add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
    call_d3_extra('my_d3', 1, {
       "extra_functions" : barchart_extras,
       "text_size" : "all_style_d3('text', {'font-size' : '" + this.value + "'})"
    })
`
    })
}

function bottom() {
    add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "BOTTOM<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": barchart_wrapper_args.bottom_choice,
        "min_value": 0,
        "max_value": 500
    })
    add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
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
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "TOP<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": barchart_wrapper_args.top_choice,
        "min_value": 0,
        "max_value": 500
    })
    add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
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
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "LEFT<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": barchart_wrapper_args.left_choice,
        "min_value": 0,
        "max_value": 500
    })
    add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
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
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "RIGHT<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": barchart_wrapper_args.right_choice,
        "min_value": 0,
        "max_value": 500
    })
    add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
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
        "extra_functions": barchart_extras,
        "animate_rubber": `
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
        "extra_functions": barchart_extras,
        "animate_rubber": `
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
        "extra_functions": barchart_extras,
        "click_data": `
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
        "wrapper_arguments": barchart_wrapper_args,
        "extra_functions": barchart_extras,
        "data_path": "../data/bar_data.tsv"
    })
}

function update_data_b() {
    call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments": barchart_wrapper_args,
        "extra_functions": barchart_extras,
        "data_path": "../data/bar_data_b.tsv"
    })
}

function update_data_full() {
    toggle_functions('update_data_b()', 'update_data_a()')
}

function start_over() {
    barchart_wrapper_args = {
        "data_path": "../data/bar_data.tsv",
        "y_title": "AVG RETURN",
        "top_choice": 30,
        "right_choice": 30,
        "bottom_choice": 30,
        "left_choice": 60,
        "bar_color": "rgb(48, 229, 255)",
        "title_color": "white",
        "chart_width": 950
    }
    barchart_extras = {
        "text_color": "all_style_d3('text', {'fill' : 'white'})",
        "text_size": "all_style_d3('text', {'font-size' : '17px'})"
    }
    call_d3_wrapper('my_d3', 1, {
        "wrapper_arguments": barchart_wrapper_args,
        "extra_functions": barchart_extras
    })
}

function circle_size() {
    add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "CIRCLE SIZE<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": current_d3_extras_value(scatter_extras, 'circle_size', 'r'),
        "min_value": 0,
        "max_value": 30
    })
    add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
    call_d3_extra('scatter_chart', 1, {
        "extra_functions" : scatter_extras,
        "circle_size" : "all_style_d3('dot', {'r' : " + this.value + "})"
    })
    `
    })
}
hold_op_val = {
    'scatter_dot': 0
}

function circle_opacity() {
    add_modal({
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "OPACITY<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": hold_op_val.scatter_dot,
        "min_value": 0,
        "max_value": 100,
        "label_multiplier": 1 / 100
    })
    style_html('slider_label', 1, {
        "display": "none"
    })
    add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
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
        "this_class": "text_size_modal",
        "content_class": "text_size_modal_content"
    })
    style_modal('text_size_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('text_size_modal_content', 1, {
        "this_class": "text_size_title",
        "text": "CHART WIDTH<br><br>"
    })
    add_slider('text_size_modal_content', 1, {
        "this_class": "d3_edit_slider",
        "default_value": scatter_wrapper_args.chart_width,
        "min_value": 500,
        "max_value": 930
    })
    add_event('d3_edit_slider', 1, {
        "type": "as_change",
        "function": `
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
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data.tsv"
    })
    delete scatter_extras['circle_color'] // to reset original colors after using dropdown
    delete scatter_extras['legend'] // to reset original legend after using dropdown
}

function dataset2() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_b.tsv"
    })
    delete scatter_extras['circle_color'] // to reset original colors after using dropdown
    delete scatter_extras['legend'] // to reset original legend after using dropdown
}

function dataset3() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_c.tsv"
    })
    delete scatter_extras['circle_color'] // to reset original colors after using dropdown
    delete scatter_extras['legend'] // to reset original legend after using dropdown
}

function choose_class(choice) {
    if (choice == 'Setosa') {
        setosa_only()
    }
    if (choice == 'Versicolor') {
        versicolor_only()
    }
    if (choice == 'Virginica') {
        virginica_only()
    }
}

function setosa_only() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_setosa.tsv"
    })
    call_d3_extra('scatter_chart', 1, {
        "extra_functions": scatter_extras,
        "circle_color": "all_style_d3('dot', {'fill' : 'rgb(31, 119, 180)'})",
        "legend": "style_d3('rect', 1, {'fill' : 'rgb(31, 119, 180)'})"
    })
}

function versicolor_only() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_versicolor.tsv"
    })
    call_d3_extra('scatter_chart', 1, {
        "extra_functions": scatter_extras,
        "circle_color": "all_style_d3('dot', {'fill' : 'rgb(255, 127, 14)'})",
        "legend": "style_d3('rect', 1, {'fill' : 'rgb(255, 127, 14)'})"
    })
}

function virginica_only() {
    call_d3_wrapper('scatter_chart', 1, {
        "wrapper_arguments": scatter_wrapper_args,
        "extra_functions": scatter_extras,
        "data_path": "../data/scatter_data_virginica.tsv"
    })
    call_d3_extra('scatter_chart', 1, {
        "extra_functions": scatter_extras,
        "circle_color": "all_style_d3('dot', {'fill' : 'rgb(44, 160, 44)'})",
        "legend": "style_d3('rect', 1, {'fill' : 'rgb(44, 160, 44)'})"
    })
}

function change_line_chart(bar_instance) {
    if (bar_instance == 1) {
        call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_a.tsv"
        })
    }
    if (bar_instance == 2) {
        call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_b.tsv"
        })
    }
    if (bar_instance == 3) {
        call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_c.tsv"
        })
    }
    if (bar_instance == 4) {
        call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_d.tsv"
        })
    }
    if (bar_instance == 5) {
        call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_e.tsv"
        })
    }
    if (bar_instance == 6) {
        call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_f.tsv"
        })
    }
    if (bar_instance == 7) {
        call_d3_wrapper('dual_2', 1, {
            "wrapper_arguments": linechart_wrapper_args,
            "extra_functions": linechart_extras,
            "data_path": "../data/linechart_data_g.tsv"
        })
    }
}

function play_timeline() {
    style_button('run_timeline_button', 1, {
        "pointer-events": "none"
    })
    style_layout('calendar_layout', 1, {
        "pointer-events": "none"
    })
    animate_element('run_timeline_button', 1, {
        'type': 'spin',
        'speed': 2000
    })
    call_every({
        "every": 2000,
        "function": `
                call_d3_extra('piechart', 1, {
                    "extra_functions" : piechart_extras,
                    "click_button" : "click_element('randomize', 1)"
                })
                all_style_layout('calendar_layout_cells', {'background' : 'transparent'})
                style_layout('calendar_layout_cells', 13 + index, {'background' : 'hotpink'})
        `
    })
    delay_event({
        "delay": 63000,
        "function": `
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
    "analytics": 2,
    "cluster": 3,
    "graph": 4,
    "scale": 15,
    "controls": 22,
    "label": 31,
    "display": 10
}

function click_circle_pack(use_val) {
    call_d3_extra('circlepack', 1, {
        "extra_functions": circlepack_extras,
        "click_circle": "click_d3('parent', " + go_to_circle[use_val] + ")"
    })
}

function click_circle_tree(choice) {
    if (choice == 'data_cleaning') {
        call_d3_extra('tree_layout', 1, {
            "extra_functions": tree_extras,
            "click_circle": "click_d3('node', 6)"
        })
    }
    if (choice == 'centroid_models') {
        call_d3_extra('tree_layout', 1, {
            "extra_functions": tree_extras,
            "click_circle": "click_d3('node', 5)"
        })
    }
    if (choice == 'model_performance') {
        call_d3_extra('tree_layout', 1, {
            "extra_functions": tree_extras,
            "click_circle": "click_d3('node', 1)"
        })
    }
}

function click_circle_map(use_val) {
    call_d3_extra('map', 1, {
        "extra_functions": map_extras,
        "click_circle": "click_d3('click_state', " + states_and_positions[use_val] + ")"
    })
}

function pop_upload() {
    add_modal({
        "this_class": "upload_data_modal",
        "content_class": "upload_data_modal_content"
    })
    style_modal('upload_data_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('upload_data_modal_content', 1, {
        "this_class": "upload_text",
        "text": "UPLOAD DATA<br><br>"
    })
    style_text('upload_text', 1, {
        "font-weight": "bold"
    })
    add_upload_button('upload_data_modal_content', 1, {
        "this_class": "upload_data_button"
    })
    style_upload_button('upload_data_button', 1, {
        "margin-left": "70px"
    })
    add_event('upload_data_button', 1, {
        "type": "upload",
        "function": `
    call_d3_wrapper('chord_chart', 1, {
        "wrapper_arguments" : chord_wrapper_args,
        "extra_functions" : chord_extras,
        "data_choice" : data['data']
    })
    close_modal()
    `
    })
}
all_chord_data = {
    "data_choice_1": [
        [11975, 5871, 8916, 2868],
        [1951, 10048, 2060, 6171],
        [8010, 16145, 8090, 8045],
        [1013, 990, 940, 6907]
    ],
    "data_choice_2": [
        [2000, 5871, 8916, 1868],
        [1951, 1048, 2060, 4171],
        [8010, 1645, 8090, 1045],
        [1013, 990, 1940, 6907]
    ],
    "data_choice_3": [
        [1975, 5871, 1916, 2868],
        [2951, 13048, 4060, 171],
        [3010, 1145, 8090, 4045],
        [113, 2990, 940, 6907]
    ]
}

function switch_client_side(data_choice) {
    call_d3_wrapper('chord_chart', 1, {
        "wrapper_arguments": chord_wrapper_args,
        "extra_functions": chord_extras,
        "data_choice": all_chord_data[data_choice]
    })
}

function pop_api_modal() {
    add_modal({
        "this_class": "api_modal",
        "content_class": "api_modal_content"
    })
    style_modal('api_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('api_modal_content', 1, {
        "this_class": "api_ex_text",
        "text": "CALL REST API ENDPOINT"
    })
    style_text('api_ex_text', 1, {
        "font-weight": "bold"
    })
    add_code("api_modal_content", 1, {
        "this_class": "kedion_d3_code",
        "code": "http://104.236.231.30:3333/api"
    })
    style_code('kedion_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    add_button('api_modal_content', 1, {
        "this_class": "fetch_data_button",
        "text": "FETCH DATA"
    })
    style_button('fetch_data_button', 1, {
        "background": "rgb(254, 225, 180)",
        "color": "black",
        "border": "1px solid black"
    })
    add_event('fetch_data_button', 1, {
        "type": "click",
        "function": "fetch_chord_data()"
    })
}

function fetch_chord_data() {
    animate_element('fetch_data_button', 1, {
        'type': 'spin'
    })
    call_api({
        "url": listen_for_value('kedion_d3_code', 1),
        "parameters": '{"choice" : "fetch_data"}',
        "done": `

        call_d3_wrapper('chord_chart', 1, {
        "wrapper_arguments" : chord_wrapper_args,
        "extra_functions" : chord_extras,
        "data_choice" : data['response']['data']
        })

        close_modal()

        `
    })
}