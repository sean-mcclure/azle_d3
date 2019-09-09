function pop_code_modal(id) {
    button_txt = $('#' + id).parent().parent().find('button').text().split(' ').join('_')
    az.add_overlay({
        "this_class": "code_modal_content",
        "center_screen" : true,
        "outside_close" : true
    })
    az.style_overlay('code_modal_content', 1, {
        "width": "auto",
        "height": "auto",
        "border-radius" : "4px",
        "padding" : "20px"
    })
    az.add_text('code_modal_content', 1, {
        "this_class": "code_title",
        "text": "Azle-D3 Code"
    })
    az.style_text('code_title', 1, {
        "color": "#33AADE",
        "font-weight": "bold",
        "font-size": "20px"
    })
    az.add_code("code_modal_content", 1, {
        "this_class": "azle_d3_code",
        "code": all_code[button_txt]
    })
    az.style_code('azle_d3_code', 1, {
        "text-align": "left",
        "width": "auto",
        "padding": "14px"
    })
    az.style_word('azle_d3_code', 1, {
        "this_class": "highlighted_code",
        "word": button_txt,
        "color": "yellow",
        "font-weight": "bold"
    })
}
all_code = {
    "bar_color": 'az.call_d3_wrapper("my_barchart", 1, {<div>&nbsp; &nbsp; "wrapper_arguments" : barchart_wrapper_args,</div><div>&nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; "bar_color" : "skyblue"</div><div>})</div>',
    "text_color": 'az.call_d3_extra("my_barchart", 1, {<div>&nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; "text_color" : "az.all_style_d3("text", {"fill" : "white"})"</div><div>})</div>',
    "text_size": 'az.call_d3_extra("my_barchart", 1, {<div>&nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; "text_size" : "az.all_style_d3("text", {"font-size" : "17px"})"</div><div>})</div>',
    "bottom": 'az.call_d3_wrapper("my_barchart", 1, {<div>&nbsp; &nbsp; "wrapper_arguments" : barchart_wrapper_args,</div><div>&nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; "bottom" : 200</div><div>})</div>',
    "top": 'az.call_d3_wrapper("my_barchart", 1, {<div>&nbsp; &nbsp; "wrapper_arguments" : barchart_wrapper_args,</div><div>&nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; "top" : 100</div><div>})</div>',
    "left": 'az.call_d3_wrapper("my_barchart", 1, {<div>&nbsp; &nbsp; "wrapper_arguments" : barchart_wrapper_args,</div><div>&nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; "left" : 50</div><div>})</div>',
    "right": 'az.call_d3_wrapper("my_barchart", 1, {<div>&nbsp; &nbsp; "wrapper_arguments" : barchart_wrapper_args,</div><div>&nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; "right" : 400</div><div>})</div>',
    "fly_away_animation": 'az.call_d3_extra("my_barchart", 1, {<div>&nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; "animate_rubber" :</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;all_apply_id("bar")</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;all_az.add_event("bar", {</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"type" : "hover",</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"function" : "az.animate_element("bar", az.get_target_instance(this.id), {"type" : "rubberBand"})"</div><div>&nbsp; &nbsp; &nbsp;})</div><div>})</div>',
    "change_data": 'az.call_d3_wrapper("my_barchart", 1, {<div>&nbsp; &nbsp; "wrapper_arguments" : barchart_wrapper_args,</div><div>&nbsp; &nbsp; "extra_functions" : barchart_extras,</div><div>&nbsp; &nbsp; "data_path" : "../data/bar_data_b.tsv"</div><div>&nbsp; &nbsp; })</div>',
    "circle_size": 'az.call_d3_extra("scatter_chart", 1, {<div>&nbsp; &nbsp; "extra_functions" : scatter_extras,</div><div>&nbsp; &nbsp; "circle_size" : "az.all_style_d3("dot", {"r" : 20})"</div><div>})</div>',
    "circle_opacity": 'az.call_d3_extra("scatter_chart", 1, {<div>&nbsp; &nbsp; "extra_functions" : scatter_extras,</div><div>&nbsp; &nbsp; "circle_opacity" : "az.all_style_d3("dot", {"opacity" : 0.7})"</div><div>})</div>',
    "chart_width": 'az.call_d3_wrapper("scatter_chart", 1, {<div>&nbsp; &nbsp; "wrapper_arguments" : scatter_wrapper_args,</div><div>&nbsp; &nbsp; "extra_functions" : scatter_extras,</div><div>&nbsp; &nbsp; "chart_width" : 700</div><div>})</div>'
}