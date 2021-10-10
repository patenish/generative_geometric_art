function draw_corner_circle_with_border(
  max_size,
  diameter,
  corner,
  bdr_clr,
  bdr_stroke_clr,
  bdr_stroke_weight,
  n_bdc,
  bdc_diameter
) {
  /* Draw a corner circle
   * :param max_size: max size of canvas
   * :param diameter: radius of circle
   * :param corner: corner to draw circle in
   * :param bdc_clr: border circles' color
   * :param bdc_stroke_clr: border circles' line color
   * :param bdc_stroke_weight: border circles' line weight
   * :param n_bdc: number of border circles
   * :param bdc_diameter: diameter of border circles
   * :return: draw corner circle
   */
  let radius = diameter / 2;
  let coordinates = get_corner_circle_coordinates(max_size, radius, corner);

  circle(coordinates[0], coordinates[1], diameter);

  draw_border_circles(
    coordinates[0],
    coordinates[1],
    radius,
    bdr_clr,
    bdr_stroke_clr,
    bdr_stroke_weight,
    n_bdc,
    bdc_diameter
  );
}

function set_fill_circle_attributes(
  fill_color,
  stroke_color,
  stroke_weight_value
) {
  /* Set circle's parameters to no fill
   * :param fill_color: fill color of circle
   * :param stroke_color: line color of circle
   * :param stroke_weight_value: weight of circle
   * :return: none; set circle attributes
   */
  fill(fill_color);
  stroke(stroke_color);
  strokeWeight(stroke_weight_value);
}

function set_no_fill_circle_attributes(stroke_color, stroke_weight_value) {
  /* Set circle's parameters to no fill
   * :param stroke_color: line color of circle
   * :param stroke_weight_value: weight of circle
   * :return: none; set circle attributes
   */
  noFill();
  stroke(stroke_color);
  strokeWeight(stroke_weight_value);
}

function draw_corner_circle(max_size, diameter, corner) {
  /* Draw a corner circle
   * :param max_size: max size of canvas
   * :param diameter: radius of circle
   * :param corner: corner to draw circle in
   * :return: draw corner circle
   */
  let radius = diameter / 2;
  let coordinates = get_corner_circle_coordinates(max_size, radius, corner);

  circle(coordinates[0], coordinates[1], diameter);
}

function get_corner_circle_coordinates(canvas_max_size, radius, corner) {
  /* Return a circle's coordinates to draw a corner circle
   * :param canvas_max_size: max size of canvas
   * :param radius: radius of circle
   * :param corner: corner of canvas to draw circle in
   *.   one of ['top_left', 'top_right', 'bottom_left','bottom_right']
   *
   * :return: coordinates of the circle
   */

  if (corner == "top_left") {
    return [radius, radius];
  } else if (corner == "top_right") {
    return [canvas_max_size - radius, radius];
  } else if (corner == "bottom_left") {
    return [radius, canvas_max_size - radius];
  } else if (corner == "bottom_right") {
    return [canvas_max_size - radius, canvas_max_size - radius];
  }
}

function scatter_uniform_circles(min, max, increment, diam) {
  /* Create a scatter of uniform circles on the canvas
   * :param min: min circle coordinate
   * :param max: max circle coordinate
   * :param increment: spacing of circles
   * :param diameter: width of circles to make
   * :return: coordinates of the circle
   */
  for (var x = min; x <= max; x += increment) {
    for (var y = min; y <= max; y += increment) {
      circle(x, y, diam);
    }
  }
}

function draw_border_circles(
  x_coordinate,
  y_coordinate,
  radius,
  bdc_clr,
  bdc_stroke_clr,
  bdc_stroke_weight,
  n_bdc = 25,
  bdc_diameter = 5
) {
  /* Draw border circles for any provided base circle
   * :param x_coordinate: base circle's x coordinate
   * :param y_coordinate: base circle's y coordinate
   * :param radius: base circle's radius
   * :param bdc_clr: border circles' color
   * :param bdc_stroke_clr: border circles' line color
   * :param bdc_stroke_weight: border circles' line weight
   * :param n_bdc: number of border circles
   * :param bdc_diameter: diameter of border circles
   * :return: coordinates of the circle
   */

  fill(bdc_clr);
  stroke(bdc_stroke_clr);
  strokeWeight(bdc_stroke_weight);

  for (var i = 0; i <= n_bdc; i += 1) {
    var angle = (360 / n_bdc) * i * (Math.PI / 180);
    var x = x_coordinate + radius * cos(angle);
    var y = y_coordinate + radius * sin(angle);
    circle(x, y, bdc_diameter);
  }
}

function setup() {
  // COLORS
  const CLR_BLUE = color(50, 111, 168);
  const CLR_BLACK = color(0, 0, 0);
  const CLR_WHITE = color(255, 255, 255);
  const CLR_LIGHT_BLUE = color(83, 229, 245);

  max_size = 500;
  createCanvas(max_size, max_size);
  background(CLR_WHITE);

  // CREATE CORNERS
  set_no_fill_circle_attributes(
    (stroke_color = CLR_BLACK),
    (stroke_weight_value = 1)
  );

  let diameter = 250;

  // draw_corner_circle(max_size, diameter, "top_left"

  draw_corner_circle_with_border(
    max_size,
    diameter,
    "top_left",
    CLR_BLACK,
    CLR_BLACK,
    1,
    15,
    3
  );

  set_no_fill_circle_attributes(
    (stroke_color = CLR_BLACK),
    (stroke_weight_value = 1)
  );

  draw_corner_circle_with_border(
    max_size,
    diameter,
    "top_right",
    CLR_BLACK,
    CLR_BLACK,
    1,
    15,
    3
  );

  set_no_fill_circle_attributes(
    (stroke_color = CLR_BLACK),
    (stroke_weight_value = 1)
  );

  draw_corner_circle_with_border(
    max_size,
    diameter,
    "bottom_left",
    CLR_BLACK,
    CLR_BLACK,
    1,
    15,
    3
  );

  set_no_fill_circle_attributes(
    (stroke_color = CLR_BLACK),
    (stroke_weight_value = 1)
  );

  draw_corner_circle_with_border(
    max_size,
    diameter,
    "bottom_right",
    CLR_BLACK,
    CLR_BLACK,
    1,
    15,
    3
  );

  set_no_fill_circle_attributes(
    (stroke_color = CLR_BLACK),
    (stroke_weight_value = 1)
  );

  // setting increment = diameter gives concentrically spaced circles
  // scatter_uniform_circles(0, 400, 30, 30);

  // CENTER CIRCLE
  set_no_fill_circle_attributes(
    (stroke_color = CLR_BLACK),
    (stroke_weight_value = 1)
  );

  center_circle_x = 250;
  center_circle_y = 250;
  center_circle_diam = 450;
  center_circle_radius = center_circle_diam / 2;
  circle(center_circle_x, center_circle_y, center_circle_diam);

  draw_border_circles(
    center_circle_x,
    center_circle_y,
    center_circle_radius,
    CLR_BLACK,
    CLR_BLACK,
    1,
    25,
    5
  );
}

function draw() {}
