function pop_code_modal(id) {
    button_txt = $('#' + id).parent().parent().find('button').text().split(' ').join('_')
    add_modal({
        "this_class" : "code_modal",
        "content_class" : "code_modal_content"
    })
    style_modal('code_modal', 1, {
        "width" : "auto",
        "height" : "auto"
    })
    add_text('code_modal_content', 1, {
        "this_class" : "code_title",
        "text" : "Kedion-D3 Code"
    })
    style_text('code_title', 1, {
        "color" : "#33AADE",
        "font-weight" : "bold",
        "font-size" : "20px"
    })
    add_code("code_modal_content", 1, {
        "this_class" : "kedion_d3_code",
        "code" : all_code[button_txt]
    })
    style_code('kedion_d3_code', 1, {
        "text-align" : "left",
        "width" : "auto",
        "padding" : "14px"
    })
    style_word('kedion_d3_code', 1, {
        "this_class" : "highlighted_code",
        "word" : button_txt,
        "color" : "yellow",
        "font-weight" : "bold"
    })

}


all_code = {
"bar_color" : `
call_d3_wrapper('my_barchart', 1, {
    "wrapper_arguments" : barchart_wrapper_args,
    "extra_functions" : barchart_extras,
    "bar_color" : "skyblue"
})
`
}