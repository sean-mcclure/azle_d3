
# Kedion_D3

Kedion_D3 is an example application showing how to combine Kedion.js with D3.js to bind visualizations to UI elements. This enables developers and data scientists to prototype *real* applications rather than isolated toy visuals disconnected from a true user experience.

You can see a preview of the application [here](https://vimeo.com/288840384):

## Getting Started

For a full tutorial, please see the following article published on Medium:
### [Combining D3 with Kedion: Graduating from Toy Visuals to Real Applications](https://medium.com/p/92bf7c3cc713/)
 ![enter image description here](http://collaboratescience.com/kedion_d3/img/medium_banner.png)

  ### Adding Libraries
  **Add** jQuery and Kedion to your **D3**  **HTML file**:

  ![enter image description here](http://collaboratescience.com/kedion_d3/GIFs/adding_libs.gif)

  ### Wrap D3 Visual
  **Wrap all D3 code** in the **draw_visual** function, and **set all arguments** to **kedion_args**:

![](http://collaboratescience.com/kedion_d3/GIFs/wrapping_d3.gif)

### Find Hooks
Find places in the D3 code you want to control from your application, and add kedion_args["key"]:

![](http://collaboratescience.com/kedion_d3/GIFs/hooks.gif)

  ### Spin Up a Local Web Server

    python3 -m http.server

...and point your browser to:
[http://localhost:8000](http://localhost:8000)

### Add D3 Visual

    add_d3_visual('my_layout_cells', 2, {
        "this_class" : "my_barchart",
        "html_path" : "visuals/barchart.html",
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras
    })

### Set Wrapper Arguments

    barchart_wrapper_args = {
        "data_choice" : "../data/bar_data.tsv",
        "y_title" : "AVG RETURN",
        "top_choice" : 30,
        "right_choice" : 30,
        "bottom_choice" : 30,
        "left_choice" : 30,
        "bar_color" : "rgb(48, 229, 255)"
    }

### Set Extra Functions

    barchart_extras = {
        "text_color": "all_style_d3('text', {'fill' : 'white'})",
        "text_size": "all_style_d3('text', {'font-size' : '17px'})"
    }

### Binding D3 to UI Elements

#### Create the UI element...

    add_slider('my_layout_cell', 1, {
        "this_class" : "my_slider",
        "default_value" : 7,
        "min_value" : 0,
        "max_value" : 30
    })
#### ...place  call_d3_wrapper  (or  call_d3_extra) inside a regular JS function:

    function change_bottom(passed_value) {
        call_d3_wrapper('my_barchart', 1, {
            "wrapper_arguments" : barchart_wrapper_args,
            "extra_functions" : barchart_extras,
            "bottom_choice" : passed_value
        })
    }

#### ...add an event to UI element and pass value to above function:

    add_event('my_slider', 1, {
        "type" : "as_change",
        "function" : change_bottom(this.value)
    })

## Authors

* **Sean McClure** - *Creator* - [World of Data Science](http://worldofdatascience.com)

## License

This project is licensed under the MIT License.