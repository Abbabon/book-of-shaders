#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    float y = st.x;
    //y = step(0.5,st.x);
    // y = mod(st.x, 0.5); // return x modulo of 0.5
    // y = fract(st.x); // return only the fraction part of a number
    // y = ceil(st.x);  // nearest integer that is greater than or equal to x
    // y = floor(st.x); // nearest integer less than or equal to x
    // y = sign(st.x);  // extract the sign of x
    // y = abs(st.x);   // return the absolute value of x
    // y = clamp(st.x,0.0,1.0); // constrain x to lie between 0.0 and 1.0
    // y = min(0.0,st.x);   // return the lesser of x and 0.0
    // y = max(0.0,st.x);   // return the greater of x and 0.0 


    vec3 color = vec3(y);

    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}
