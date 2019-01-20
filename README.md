
# Azle_D3

Azle_D3 is a demo application showing how to combine Azle with D3.js to bind visualizations to UI elements. This enables developers and data scientists to prototype *real* applications rather than isolated toy visuals disconnected from a true user experience.

You can see a preview of the application [here](https://vimeo.com/312397521):

## Getting Started

For a full tutorial, please see the following article published on Medium:
### [Graduating from Toy Visuals to Real Applications](https://towardsdatascience.com/combining-d3-with-kedion-graduating-from-toy-visuals-to-real-applications-92bf7c3cc713)

  ### Adding Libraries
  Add **Azle** to your **D3**  **HTML file**:

```
<head>
    <script src='https://azlejs.com/v2/azle.min.js'></script>
</head>

```

  ### Wrap D3 Visual
  **Wrap all D3 code** in the **draw_visual** function, and **set all arguments** to **Azle_args**:

![](https://cdn-images-1.medium.com/max/1600/1*0ycAl-B6uZbyWKL9N2o6Qw.gif)

### Find Hooks
Find places in the D3 code you want to control from your application, and add Azle_args["key"]:

![](https://cdn-images-1.medium.com/max/1600/1*IHRsssAIT7jx-utt2IzRSA.gif)

  ### Spin Up a Local Web Server

    python3 -m http.server

...and point your browser to:
[http://localhost:8000](http://localhost:8000)

### Add D3 Visual

    az.add_d3_visual('my_layout_cells', 2, {
        "this_class" : "my_barchart",
        "html_path" : "visuals/barchart.html",
        "wrapper_arguments" : barchart_wrapper_args,
        "extra_functions" : barchart_extras
    })

### Set Wrapper Arguments

    az.barchart_wrapper_args = {
        "data_choice" : "../data/bar_data.tsv",
        "y_title" : "AVG RETURN",
        "top_choice" : 30,
        "right_choice" : 30,
        "bottom_choice" : 30,
        "left_choice" : 30,
        "bar_color" : "rgb(48, 229, 255)"
    }

### Set Extra Functions

    az.barchart_extras = {
        "text_color": "az.all_style_d3('text', {'fill' : 'white'})",
        "text_size": "az.all_style_d3('text', {'font-size' : '17px'})"
    }

### Binding D3 to UI Elements

#### Create the UI element...

    az.add_slider('my_layout_cell', 1, {
        "this_class" : "my_slider",
        "default_value" : 7,
        "min_value" : 0,
        "max_value" : 30
    })
#### ...place  call_d3_wrapper  (or  call_d3_extra) inside a regular JS function:

    az.function change_bottom(passed_value) {
        call_d3_wrapper('my_barchart', 1, {
            "wrapper_arguments" : barchart_wrapper_args,
            "extra_functions" : barchart_extras,
            "bottom_choice" : passed_value
        })
    }

#### ...add an event to UI element and pass value to above function:

    az.add_event('my_slider', 1, {
        "type" : "as_change",
        "function" : change_bottom(this.value)
    })

## Authors

* **Sean McClure** - *Creator* -

## License

This project is licensed under the MIT License.
