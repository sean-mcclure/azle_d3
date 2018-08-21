// wrapped_functions

function style_options_a() {
color_picker({
"function" : `
    style_visual('my_d3', 1, {
        "bar_color" : global_current_color
    })
    `
})
}

function style_options_b() {
color_picker({
"function" : `
    style_visual('my_d3', 1, {
        "text_color" : global_current_color
    })
    `
})
}

function style_options_c() {
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
style_visual('my_d3', 1, {
        "text_size" : this.value
    })
`
})
}

function style_options_d() {
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
"text" : "PADDING-LEFT<br><br>"
})
add_slider('text_size_modal_content', 1, {
"this_class" : "d3_edit_slider",
"default_value" : 0,
"min_value" : 0,
"max_value" : 200
})
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
style_visual('my_d3', 1, {
        "padding-left" : this.value
    })
`
})
}

function style_options_e() {
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
"text" : "CUTOFF<br><br>"
})
add_slider('text_size_modal_content', 1, {
"this_class" : "d3_edit_slider",
"default_value" : 700,
"min_value" : 0,
"max_value" : 900
})
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
style_visual('my_d3', 1, {
        "cutoff" : this.value
    })
`
})
}


function style_options_f() {
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
"text" : "HEIGHT<br><br>"
})
add_slider('text_size_modal_content', 1, {
"this_class" : "d3_edit_slider",
"default_value" : 700,
"min_value" : 0,
"max_value" : 900
})
add_event('d3_edit_slider', 1, {
"type" : "as_change",
"function" : `
style_visual('my_d3', 1, {
        "height" : this.value
    })
`
})
}




/*
empty_contents('section_1_layout_cells', 2)
add_visual('section_1_layout_cells', 2, {
    "this_class" : "my_d3",
    "html_path" : "visuals/barchart.html",
    "wrapper_arguments" : ["../data/bar_data.tsv", "hello there"],
    "kedion_functions" : `

	    all_apply_id('bar')

	    all_style_d3('.bar', {
	    "fill" : "pink",
	    "cursor" : "pointer"
	    })

	    all_style_d3('text', {
	    "fill" : "white",
	    "font-size" : "17px"
	    })

	    style_d3('svg', 1, {
	    "padding-left" : "20px"
	    })

	    all_add_event('bar', {
	    "type" : "hover",
	    "function" : "style_d3('.bar', get_target_instance(this.id), {'fill' : 'limegreen'})"
	    })

	    all_add_event('bar', {
	    "type" : "unhover",
	    "function" : "style_d3('.bar', get_target_instance(this.id), {'fill' : 'pink'});"
	    })

        draw_visual(y_title='hello there')

    `

    */


function animate_bars_b() {
    empty_contents('section_1_layout_cells', 2)
    add_visual('section_1_layout_cells', 2, {
        "this_class": "my_d3",
        "html_path": "visuals/barchart.html",
        "wrapper_arguments" : ["../data/bar_data.tsv", "hello there"],
        "kedion_functions": `

	    all_apply_id('bar')

	    all_style_d3('.bar', {
	    "fill" : "pink",
	    "cursor" : "pointer"
	    })

	    all_style_d3('text', {
	    "fill" : "white",
	    "font-size" : "17px"
	    })

	    style_d3('svg', 1, {
	    "padding-left" : "20px"
	    })

	    all_add_event('bar', {
	    "type" : "hover",
	    "function" : "animate_element('bar', get_target_instance(this.id), {'type' : 'fadeInDown'})"
	    })

    `
    })
    style_visual('my_d3', 1, {
        "width": "100%",
        "height": "600px",
        "align": "center"
    })

    
}

function animate_bars_c() {
    empty_contents('section_1_layout_cells', 2)
    add_visual('section_1_layout_cells', 2, {
        "this_class": "my_d3",
        "html_path": "visuals/barchart.html",
        "wrapper_arguments" : ["../data/bar_data.tsv", "hello there"],
        "kedion_functions": `

	    all_apply_id('bar')

	    all_style_d3('.bar', {
	    "fill" : "pink",
	    "cursor" : "pointer"
	    })

	    all_style_d3('text', {
	    "fill" : "white",
	    "font-size" : "17px"
	    })

	    style_d3('svg', 1, {
	    "padding-left" : "20px"
	    })

	    all_add_event('bar', {
	    "type" : "hover",
	    "function" : "animate_element('bar', get_target_instance(this.id), {'type' : 'zoomOutUp'})"
	    })

    `
    })
    style_visual('my_d3', 1, {
        "width": "100%",
        "height": "600px",
        "align": "center"
    })

    
}


function animate_bars_d() {
    empty_contents('section_1_layout_cells', 2)
    add_visual('section_1_layout_cells', 2, {
        "this_class": "my_d3",
        "html_path": "visuals/barchart.html",
        "wrapper_arguments" : ["../data/bar_data.tsv", "hello there"],
        "kedion_functions": `

	    all_apply_id('bar')

	    all_style_d3('.bar', {
	    "fill" : "pink",
	    "cursor" : "pointer"
	    })

	    all_style_d3('text', {
	    "fill" : "white",
	    "font-size" : "17px"
	    })

	    style_d3('svg', 1, {
	    "padding-left" : "20px"
	    })

	    all_add_event('bar', {
	    "type" : "hover",
	    "function" : "animate_element('bar', get_target_instance(this.id), {'type' : 'spin', 'speed' : 800})"
	    })

    `
    })
    style_visual('my_d3', 1, {
        "width": "100%",
        "height": "600px",
        "align": "center"
    })

    
}

function change_font_size() {
    empty_contents('section_1_layout_cells', 2)
    add_visual('section_1_layout_cells', 2, {
        "this_class": "my_d3",
        "html_path": "visuals/barchart.html",
        "wrapper_arguments" : ["../data/bar_data.tsv", "hello there"],
        "kedion_functions": `

	    all_apply_id('bar')

	    all_style_d3('.bar', {
	    "fill" : "pink",
	    "cursor" : "pointer"
	    })

	    all_style_d3('text', {
	    "fill" : "white",
	    "font-size" : "24px"
	    })

	    style_d3('svg', 1, {
	    "padding-left" : "20px"
	    })

    `
    })
    style_visual('my_d3', 1, {
        "width": "100%",
        "height": "600px",
        "align": "center"
    })

    
}