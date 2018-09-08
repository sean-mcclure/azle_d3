function pop_code_modal(id) {
    button_txt = $('#' + id).parent().parent().find('button').text().split(' ').join('_')
    add_modal({
        "this_class": "code_modal",
        "content_class": "code_modal_content"
    })
    style_modal('code_modal', 1, {
        "width": "auto",
        "height": "auto"
    })
    add_text('code_modal_content', 1, {
        "this_class": "code_title",
        "text": "Kedion-D3 Code"
    })
    style_text('code_title', 1, {
        "color": "#33AADE",
        "font-weight": "bold",
        "font-size": "20px"
    })
    add_code("code_modal_content", 1, {
        "this_class": "kedion_d3_code",
        "code": all_code[button_txt]
    })
    style_code('kedion_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    style_word('kedion_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": button_txt,
        "color": "yellow",
        "font-weight": "bold"
    })
}
all_code = {
    "bar_color": `
call_d3_wrapper('my_barchart', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "bar_color" : "skyblue"
})
`,
    "text_color": `
call_d3_extra('my_barchart', 1, {
    "extra_functions" : barchart_extras,
    "text_color" : "all_style_d3('text', {'fill' : 'white'})"
})
`,
    "text_size": `
call_d3_extra('my_barchart', 1, {
    "extra_functions" : barchart_extras,
    "text_size" : "all_style_d3('text', {'font-size' : '17px'})"
})
`,
    "bottom": `
call_d3_wrapper('my_barchart', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "bottom" : 200
})
`,
    "top": `
call_d3_wrapper('my_barchart', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "top" : 100
})
`,
    "left": `
call_d3_wrapper('my_barchart', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "left" : 50
})
`,
    "right": `
call_d3_wrapper('my_barchart', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "right" : 400
})
`,
    "fly_away_animation": `
call_d3_extra('my_barchart', 1, {
    "extra_functions" : barchart_extras,
    "animate_rubber" :
         all_apply_id('bar')
         all_add_event('bar', {
             "type" : "hover",
             "function" : "animate_element('bar', get_target_instance(this.id), {'type' : 'rubberBand'})"
     })
})
`,
    "change_data": `
call_d3_wrapper('my_barchart', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "data_path" : "../data/bar_data_b.tsv"
    })
`,
    "circle_size": `
call_d3_extra('scatter_chart', 1, {
    "extra_functions" : scatter_extras,
    "circle_size" : "all_style_d3('dot', {'r' : 20})"
})
`,
    "circle_opacity": `
call_d3_extra('scatter_chart', 1, {
    "extra_functions" : scatter_extras,
    "circle_opacity" : "all_style_d3('dot', {'opacity' : 0.7})"
})
`,
    "chart_width": `
call_d3_wrapper('scatter_chart', 1, {
    "wrapper_arguments" : scatter_wrapper_args,
    "extra_functions" : scatter_extras,
    "chart_width" : 700
})
`
}