// wrapped_functions

function bar_color() {
color_picker({
"function" : `
    style_d3_visual('my_d3', 1, {
        "bar_color" : global_current_color
    })
    `
})
}

function text_color() {
color_picker({
"function" : `
    style_d3_visual('my_d3', 1, {
        "text_color" : global_current_color
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
style_d3_visual('my_d3', 1, {
        "text_size" : this.value
    })
`
})
}

function padding_left() {
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
style_d3_visual('my_d3', 1, {
        "padding-left" : this.value
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
"text" : "CUTOFF<br><br>"
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
    "wrapper_arguments" : ["../data/bar_data.tsv", "hello there", this.value]
})
`
})
}