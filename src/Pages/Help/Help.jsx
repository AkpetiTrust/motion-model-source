import { React, useState } from "react";
import Logo from "../../Components/Logo/Logo";
import Section from "./Components/Section/Section";
import Copyright from "../../Components/Copyright/Copyright";

function Help() {
  const [sections, setSections] = useState([
    {
      title: "GRAPH",
      text: "Over here all you do is insert an equation and the graph is plotted. It is shown above the input for the equation.",
      svg: (
        <svg
          width="462"
          height="349"
          viewBox="0 0 462 349"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M362.839 33.2205C362.839 33.2205 336.127 -3.49813 290.046 0.375109C243.965 4.24835 234.057 53.4474 203.133 76.086C186.962 87.9412 149.514 76.8168 131.622 84.7744C74.4409 110.239 63.9492 192.77 95.2622 231.43C122.356 264.917 162.862 276.479 220.644 268.424C278.426 260.369 319.314 256.862 364.754 208.109C410.194 159.357 394.923 82.176 362.839 33.2205Z"
            fill="#FFC100"
          />
          <path
            opacity="0.8"
            d="M362.839 33.2205C362.839 33.2205 336.127 -3.49813 290.046 0.375109C243.965 4.24835 234.057 53.4474 203.133 76.086C186.962 87.9412 149.514 76.8168 131.622 84.7744C74.4409 110.239 63.9492 192.77 95.2622 231.43C122.356 264.917 162.862 276.479 220.644 268.424C278.426 260.369 319.314 256.862 364.754 208.109C410.194 159.357 394.923 82.176 362.839 33.2205Z"
            fill="white"
          />
          <path
            d="M437.515 218.966C437.239 208.824 438.026 191.528 429.141 184.407C421.335 178.154 415.266 186.64 413.075 193.485C407.768 210.09 410.259 228.401 410.275 245.542C410.275 245.802 410.275 246.062 410.275 246.354C409.862 258.973 408.344 272.622 409.724 285.217C409.724 285.217 408.369 272.598 398.469 278.006C388.57 283.414 403.419 311.793 403.419 311.793C403.419 311.793 391.718 303.235 386.314 310.445C380.91 317.656 393.065 325.76 393.065 325.76C393.065 325.76 381.811 322.609 381.811 325.76C381.811 328.91 385.413 331.614 395.767 332.97H451.577C451.577 332.97 460.584 328.009 458.783 322.609C456.981 317.209 447.52 320.319 447.52 320.319C447.52 320.319 461.931 302.748 461.03 295.091C460.13 287.433 441.67 296.447 441.67 296.447C441.67 296.447 456.073 259.955 453.37 243.74C451.245 230.967 441.337 239.68 435.941 244.617C437.211 236.128 437.738 227.545 437.515 218.966Z"
            fill="#FFC100"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.5"
            d="M437.515 218.966C437.239 208.824 438.026 191.528 429.141 184.407C421.335 178.154 415.266 186.64 413.075 193.485C407.768 210.09 410.259 228.401 410.275 245.542C410.275 245.802 410.275 246.062 410.275 246.354C409.862 258.973 408.344 272.622 409.724 285.217C409.724 285.217 408.369 272.598 398.469 278.006C388.57 283.414 403.419 311.793 403.419 311.793C403.419 311.793 391.718 303.235 386.314 310.445C380.91 317.656 393.065 325.76 393.065 325.76C393.065 325.76 381.811 322.609 381.811 325.76C381.811 328.91 385.413 331.614 395.767 332.97H451.577C451.577 332.97 460.584 328.009 458.783 322.609C456.981 317.209 447.52 320.319 447.52 320.319C447.52 320.319 461.931 302.748 461.03 295.091C460.13 287.433 441.67 296.447 441.67 296.447C441.67 296.447 456.073 259.955 453.37 243.74C451.245 230.967 441.337 239.68 435.941 244.617C437.211 236.128 437.738 227.545 437.515 218.966Z"
            fill="white"
          />
          <path
            d="M419.607 332.483L423.665 208.596"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M421.862 280.678L443.016 260.857"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M431.762 271.664L436.265 259.054"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M404.304 295.992L420.508 313.564"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M447.52 305.906L420.508 319.873"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M433.117 314.01L443.017 313.564"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M419.607 332.483L423.665 208.596"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M421.862 280.678L443.016 260.857"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M431.762 271.664L436.265 259.054"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M404.304 295.992L420.508 313.564"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M447.52 305.906L420.508 319.873"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M433.117 314.01L443.017 313.564"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.8">
            <path
              opacity="0.8"
              d="M419.607 332.483L423.665 208.596"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M421.863 280.678L443.017 260.857"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M431.763 271.664L436.266 259.054"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M404.304 295.992L420.508 313.564"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M447.52 305.906L420.508 319.873"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M433.117 314.01L443.017 313.564"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M342.277 307.449C342.277 320.043 352.25 330.258 352.25 330.258C352.25 330.258 362.222 320.043 362.222 307.449C362.222 294.855 352.25 284.64 352.25 284.64C352.25 284.64 342.277 294.847 342.277 307.449Z"
            fill="#FFC100"
          />
          <path
            d="M335.365 326.88C340.233 332.345 348.461 332.938 348.461 332.938C348.461 332.938 348.859 324.664 344.023 319.199C339.187 313.734 330.926 313.141 330.926 313.141C330.926 313.141 330.521 321.416 335.365 326.88Z"
            fill="#FFC100"
          />
          <path
            d="M360.779 319.012C355.691 324.249 355.724 332.532 355.724 332.532C355.724 332.532 363.992 332.313 369.072 327.067C374.151 321.822 374.135 313.547 374.135 313.547C374.135 313.547 365.858 313.767 360.779 319.012Z"
            fill="#FFC100"
          />
          <g opacity="0.5">
            <path
              opacity="0.5"
              d="M342.278 307.449C342.278 320.043 352.251 330.258 352.251 330.258C352.251 330.258 362.223 320.043 362.223 307.449C362.223 294.855 352.251 284.64 352.251 284.64C352.251 284.64 342.278 294.847 342.278 307.449Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M352.251 330.258V284.64"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M352.251 300.856L346.668 295.976"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M352.34 308.391L359.253 298.371"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M352.251 312.735L344.007 305.379"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M352.34 318.59L360.495 311.322"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M352.34 323.649L345.954 318.59"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M335.365 326.88C340.233 332.345 348.461 332.938 348.461 332.938C348.461 332.938 348.859 324.664 344.023 319.199C339.187 313.734 330.926 313.141 330.926 313.141C330.926 313.141 330.521 321.416 335.365 326.88Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M348.462 332.938L330.927 313.141"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M337.158 320.181L332.857 320.214"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M340.095 323.413L339.243 316.406"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M341.726 325.338L335.324 325.313"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M344.015 327.838L344.753 321.545"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M345.962 330.031L341.248 330.299"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M360.779 319.012C355.691 324.249 355.724 332.532 355.724 332.532C355.724 332.532 363.992 332.313 369.072 327.067C374.151 321.822 374.135 313.547 374.135 313.547C374.135 313.547 365.858 313.767 360.779 319.012Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M355.724 332.532L374.135 313.547"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M367.586 320.295L367.237 316.008"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M364.584 323.47L371.505 322.09"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M362.791 325.24L362.337 318.85"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M360.462 327.709L366.791 327.985"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M358.425 329.812L357.809 325.135"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M352.25 330.258V284.64"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M352.251 300.856L346.668 295.976"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M352.34 308.391L359.253 298.371"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M352.25 312.735L344.006 305.379"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M352.34 318.59L360.495 311.322"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M352.339 323.649L345.953 318.59"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.7">
            <path
              opacity="0.7"
              d="M352.25 330.258V284.64"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M352.25 300.856L346.667 295.976"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M352.339 308.391L359.252 298.371"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M352.25 312.735L344.006 305.379"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M352.339 318.59L360.494 311.322"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M352.339 323.649L345.953 318.59"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M348.461 332.938L330.926 313.141"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M337.158 320.181L332.857 320.214"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M340.095 323.413L339.243 316.406"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M341.726 325.338L335.324 325.313"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M344.015 327.838L344.753 321.545"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M345.961 330.031L341.247 330.299"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.7">
            <path
              opacity="0.7"
              d="M348.461 332.938L330.926 313.141"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M337.158 320.181L332.857 320.214"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M340.095 323.413L339.243 316.406"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M341.726 325.338L335.324 325.313"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M344.014 327.838L344.752 321.545"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M345.961 330.031L341.247 330.299"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M355.724 332.532L374.135 313.547"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M367.586 320.295L367.237 316.008"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M364.584 323.47L371.505 322.09"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M362.79 325.24L362.336 318.85"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M360.462 327.709L366.791 327.985"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M358.425 329.812L357.809 325.135"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.7">
            <path
              opacity="0.7"
              d="M355.724 332.532L374.135 313.547"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M367.587 320.295L367.238 316.008"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M364.584 323.47L371.505 322.09"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M362.791 325.24L362.337 318.85"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M360.463 327.709L366.792 327.985"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M358.425 329.812L357.809 325.135"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M24.92 218.966C25.1878 208.824 24.4088 191.528 33.2939 184.407C41.0999 178.154 47.1694 186.64 49.3521 193.485C54.667 210.09 52.1678 228.401 52.1597 245.542C52.1597 245.802 52.1597 246.062 52.1597 246.354C52.5816 258.973 54.0909 272.622 52.7195 285.217C52.7195 285.217 54.0665 272.598 63.9741 278.006C73.8816 283.414 59.0162 311.793 59.0162 311.793C59.0162 311.793 70.7251 303.235 76.1293 310.445C81.5334 317.656 69.3944 325.727 69.3944 325.727C69.3944 325.727 80.6489 322.577 80.6489 325.727C80.6489 328.878 77.0462 331.582 66.6923 332.938H10.8579C10.8579 332.938 1.8511 327.977 3.65247 322.577C5.45384 317.177 14.907 320.319 14.907 320.319C14.907 320.319 0.504121 302.748 1.40481 295.091C2.30549 287.433 20.7655 296.447 20.7655 296.447C20.7655 296.447 6.35452 259.955 9.05658 243.764C11.1825 230.991 21.0982 239.704 26.4861 244.641C25.2172 236.145 24.6931 227.553 24.92 218.966Z"
            fill="#FFC100"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.5"
            d="M24.92 218.966C25.1878 208.824 24.4088 191.528 33.2939 184.407C41.0999 178.154 47.1694 186.64 49.3521 193.485C54.667 210.09 52.1678 228.401 52.1597 245.542C52.1597 245.802 52.1597 246.062 52.1597 246.354C52.5816 258.973 54.0909 272.622 52.7195 285.217C52.7195 285.217 54.0665 272.598 63.9741 278.006C73.8816 283.414 59.0162 311.793 59.0162 311.793C59.0162 311.793 70.7251 303.235 76.1293 310.445C81.5334 317.656 69.3944 325.727 69.3944 325.727C69.3944 325.727 80.6489 322.577 80.6489 325.727C80.6489 328.878 77.0462 331.582 66.6923 332.938H10.8579C10.8579 332.938 1.8511 327.977 3.65247 322.577C5.45384 317.177 14.907 320.319 14.907 320.319C14.907 320.319 0.504121 302.748 1.40481 295.091C2.30549 287.433 20.7655 296.447 20.7655 296.447C20.7655 296.447 6.35452 259.955 9.05658 243.764C11.1825 230.991 21.0982 239.704 26.4861 244.641C25.2172 236.145 24.6931 227.553 24.92 218.966Z"
            fill="white"
          />
          <path
            d="M42.8205 332.483L38.7715 208.596"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.5722 280.678L19.4102 260.857"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.6646 271.664L26.1611 259.054"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58.1242 295.992L41.9199 313.564"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9072 305.906L41.9197 319.873"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.3177 314.01L19.4102 313.564"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.8205 332.483L38.7715 208.596"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.5722 280.678L19.4102 260.857"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.6646 271.664L26.1611 259.054"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58.1242 295.992L41.9199 313.564"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9072 305.906L41.9197 319.873"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.3177 314.01L19.4102 313.564"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.8">
            <path
              opacity="0.8"
              d="M42.8205 332.483L38.7715 208.596"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M40.5722 280.678L19.4102 260.857"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M30.6655 271.664L26.1621 259.054"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M58.1242 295.992L41.9199 313.564"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M14.9072 305.906L41.9197 319.873"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.8"
              d="M29.3177 314.01L19.4102 313.564"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M121.78 307.449C121.78 320.043 111.808 330.258 111.808 330.258C111.808 330.258 101.852 320.043 101.852 307.449C101.852 294.855 111.824 284.64 111.824 284.64C111.824 284.64 121.78 294.847 121.78 307.449Z"
            fill="#FFC100"
          />
          <path
            d="M128.685 326.88C123.817 332.345 115.589 332.938 115.589 332.938C115.589 332.938 115.191 324.664 120.036 319.199C124.88 313.734 133.132 313.141 133.132 313.141C133.132 313.141 133.497 321.416 128.685 326.88Z"
            fill="#FFC100"
          />
          <path
            d="M103.28 319.012C108.359 324.249 108.335 332.532 108.335 332.532C108.335 332.532 100.067 332.313 94.979 327.067C89.8914 321.822 89.9238 313.547 89.9238 313.547C89.9238 313.547 98.1923 313.767 103.28 319.012Z"
            fill="#FFC100"
          />
          <g opacity="0.5">
            <path
              opacity="0.5"
              d="M121.78 307.449C121.78 320.043 111.808 330.258 111.808 330.258C111.808 330.258 101.852 320.043 101.852 307.449C101.852 294.855 111.824 284.64 111.824 284.64C111.824 284.64 121.78 294.847 121.78 307.449Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M111.808 330.258V284.64"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M111.808 300.856L117.39 295.976"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M111.719 308.391L104.806 298.371"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M111.808 312.735L120.052 305.379"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M111.718 318.59L103.563 311.322"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M111.719 323.649L118.097 318.59"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M128.685 326.88C123.817 332.345 115.589 332.938 115.589 332.938C115.589 332.938 115.191 324.664 120.036 319.199C124.88 313.734 133.132 313.141 133.132 313.141C133.132 313.141 133.497 321.416 128.685 326.88Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M115.589 332.938L133.132 313.141"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M126.9 320.181L131.193 320.214"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M123.963 323.413L124.815 316.406"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M122.324 325.338L128.735 325.313"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M120.036 327.838L119.298 321.545"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M118.097 330.031L122.811 330.299"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M103.28 319.012C108.359 324.249 108.335 332.532 108.335 332.532C108.335 332.532 100.067 332.313 94.979 327.067C89.8914 321.822 89.9238 313.547 89.9238 313.547C89.9238 313.547 98.1923 313.767 103.28 319.012Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M108.335 332.532L89.9238 313.547"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M96.4639 320.295L96.8209 316.008"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M99.4742 323.47L92.5527 322.09"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M101.26 325.24L101.722 318.85"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M103.588 327.709L97.2588 327.985"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M105.633 329.812L106.241 325.135"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M111.808 330.258V284.64"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M111.808 300.856L117.39 295.976"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M111.718 308.391L104.805 298.371"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M111.808 312.735L120.052 305.379"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M111.718 318.59L103.563 311.322"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M111.719 323.649L118.097 318.59"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.7">
            <path
              opacity="0.7"
              d="M111.808 330.258V284.64"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M111.808 300.856L117.39 295.976"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M111.718 308.391L104.805 298.371"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M111.808 312.735L120.052 305.379"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M111.718 318.59L103.563 311.322"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M111.719 323.649L118.097 318.59"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M115.589 332.938L133.132 313.141"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M126.9 320.181L131.193 320.214"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M123.963 323.413L124.815 316.406"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M122.324 325.338L128.735 325.313"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120.035 327.838L119.297 321.545"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M118.097 330.031L122.811 330.299"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.7">
            <path
              opacity="0.7"
              d="M115.589 332.938L133.132 313.141"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M126.9 320.181L131.193 320.214"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M123.963 323.413L124.815 316.406"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M122.324 325.338L128.735 325.313"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M120.035 327.838L119.297 321.545"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M118.097 330.031L122.811 330.299"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M108.335 332.532L89.9238 313.547"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M96.4639 320.295L96.8209 316.008"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M99.4742 323.47L92.5527 322.09"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M101.259 325.24L101.721 318.85"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M103.588 327.709L97.2588 327.985"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.633 329.812L106.241 325.135"
            stroke="#FFC100"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.7">
            <path
              opacity="0.7"
              d="M108.335 332.532L89.9238 313.547"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M96.4639 320.295L96.8209 316.008"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M99.4742 323.47L92.5527 322.09"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M101.26 325.24L101.722 318.85"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M103.588 327.709L97.2588 327.985"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M105.633 329.812L106.241 325.135"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M346.4 91.6114H127.047C126.981 91.6125 126.916 91.6005 126.855 91.5761C126.794 91.5517 126.739 91.5154 126.692 91.4693C126.645 91.4232 126.608 91.3682 126.582 91.3076C126.557 91.2469 126.544 91.1818 126.544 91.1161C126.544 90.9826 126.597 90.8545 126.691 90.7601C126.786 90.6657 126.914 90.6127 127.047 90.6127H346.4C346.466 90.6127 346.531 90.6257 346.592 90.6511C346.652 90.6765 346.707 90.7138 346.753 90.7606C346.799 90.8075 346.836 90.863 346.86 90.9241C346.885 90.9851 346.897 91.0504 346.895 91.1161C346.895 91.2475 346.843 91.3735 346.751 91.4664C346.658 91.5592 346.532 91.6114 346.4 91.6114Z"
            fill="#FFC100"
          />
          <g opacity="0.3">
            <path
              opacity="0.3"
              d="M346.4 91.6114H127.047C126.981 91.6125 126.916 91.6005 126.855 91.5761C126.794 91.5517 126.739 91.5154 126.692 91.4693C126.645 91.4232 126.608 91.3682 126.582 91.3076C126.557 91.2469 126.544 91.1818 126.544 91.1161C126.544 90.9826 126.597 90.8545 126.691 90.7601C126.786 90.6657 126.914 90.6127 127.047 90.6127H346.4C346.466 90.6127 346.531 90.6257 346.592 90.6511C346.652 90.6765 346.707 90.7138 346.753 90.7606C346.799 90.8075 346.836 90.863 346.86 90.9241C346.885 90.9851 346.897 91.0504 346.895 91.1161C346.895 91.2475 346.843 91.3735 346.751 91.4664C346.658 91.5592 346.532 91.6114 346.4 91.6114Z"
              fill="white"
            />
          </g>
          <path
            d="M345.962 178.674H126.609C126.543 178.675 126.478 178.663 126.417 178.639C126.356 178.614 126.3 178.578 126.253 178.532C126.206 178.486 126.169 178.431 126.144 178.37C126.119 178.31 126.105 178.244 126.105 178.179C126.105 178.045 126.158 177.917 126.253 177.823C126.347 177.728 126.475 177.675 126.609 177.675H345.962C346.028 177.675 346.093 177.688 346.153 177.714C346.214 177.739 346.269 177.776 346.315 177.823C346.361 177.87 346.397 177.926 346.422 177.987C346.446 178.048 346.458 178.113 346.457 178.179C346.457 178.244 346.444 178.308 346.419 178.368C346.394 178.428 346.358 178.483 346.312 178.529C346.266 178.575 346.212 178.611 346.151 178.636C346.091 178.661 346.027 178.674 345.962 178.674Z"
            fill="#FFC100"
          />
          <g opacity="0.3">
            <path
              opacity="0.3"
              d="M345.962 178.674H126.609C126.543 178.675 126.478 178.663 126.417 178.639C126.356 178.614 126.3 178.578 126.253 178.532C126.206 178.486 126.169 178.431 126.144 178.37C126.119 178.31 126.105 178.244 126.105 178.179C126.105 178.045 126.158 177.917 126.253 177.823C126.347 177.728 126.475 177.675 126.609 177.675H345.962C346.028 177.675 346.093 177.688 346.153 177.714C346.214 177.739 346.269 177.776 346.315 177.823C346.361 177.87 346.397 177.926 346.422 177.987C346.446 178.048 346.458 178.113 346.457 178.179C346.457 178.244 346.444 178.308 346.419 178.368C346.394 178.428 346.358 178.483 346.312 178.529C346.266 178.575 346.212 178.611 346.151 178.636C346.091 178.661 346.027 178.674 345.962 178.674Z"
              fill="white"
            />
          </g>
          <path
            d="M345.962 249.846H126.609C126.475 249.846 126.347 249.793 126.253 249.698C126.158 249.604 126.105 249.476 126.105 249.342C126.105 249.277 126.119 249.212 126.144 249.151C126.169 249.09 126.206 249.035 126.253 248.989C126.3 248.943 126.356 248.907 126.417 248.882C126.478 248.858 126.543 248.846 126.609 248.847H345.962C346.027 248.847 346.091 248.86 346.151 248.885C346.212 248.91 346.266 248.946 346.312 248.992C346.358 249.038 346.394 249.093 346.419 249.153C346.444 249.213 346.457 249.277 346.457 249.342C346.458 249.408 346.446 249.473 346.422 249.534C346.397 249.595 346.361 249.651 346.315 249.698C346.269 249.745 346.214 249.782 346.153 249.807C346.093 249.833 346.028 249.846 345.962 249.846Z"
            fill="#FFC100"
          />
          <g opacity="0.3">
            <path
              opacity="0.3"
              d="M345.962 249.846H126.609C126.475 249.846 126.347 249.793 126.253 249.698C126.158 249.604 126.105 249.476 126.105 249.342C126.105 249.277 126.119 249.212 126.144 249.151C126.169 249.09 126.206 249.035 126.253 248.989C126.3 248.943 126.356 248.907 126.417 248.882C126.478 248.858 126.543 248.846 126.609 248.847H345.962C346.027 248.847 346.091 248.86 346.151 248.885C346.212 248.91 346.266 248.946 346.312 248.992C346.358 249.038 346.394 249.093 346.419 249.153C346.444 249.213 346.457 249.277 346.457 249.342C346.458 249.408 346.446 249.473 346.422 249.534C346.397 249.595 346.361 249.651 346.315 249.698C346.269 249.745 346.214 249.782 346.153 249.807C346.093 249.833 346.028 249.846 345.962 249.846Z"
              fill="white"
            />
          </g>
          <path
            d="M173.241 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M183.814 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M194.387 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M204.96 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M215.533 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M226.105 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M236.679 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M247.252 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M257.824 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M268.397 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M278.971 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M289.543 261.888V335.958"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M173.769 268.765H289.016"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M173.769 278.818H289.016"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M173.769 288.871H289.016"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M173.769 298.923H289.016"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M173.769 308.976H289.016"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M173.769 319.028H289.016"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M173.769 329.081H289.016"
            stroke="#263238"
            strokeWidth="0.265171"
            strokeMiterlimit="10"
          />
          <path
            d="M197.981 287.872L182.516 335.585H214.908L199.434 287.872C199.385 287.718 199.288 287.584 199.157 287.488C199.027 287.393 198.869 287.342 198.708 287.342C198.546 287.342 198.389 287.393 198.258 287.488C198.128 287.584 198.031 287.718 197.981 287.872Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M227.469 272.07L206.883 335.585H249.531L228.921 272.07C228.872 271.916 228.775 271.782 228.644 271.687C228.514 271.592 228.357 271.54 228.195 271.54C228.033 271.54 227.876 271.592 227.746 271.687C227.615 271.782 227.518 271.916 227.469 272.07Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M254.603 298.785L242.667 335.585H267.984L256.023 298.785C255.967 298.642 255.869 298.52 255.743 298.433C255.616 298.347 255.466 298.301 255.313 298.301C255.16 298.301 255.01 298.347 254.883 298.433C254.757 298.52 254.659 298.642 254.603 298.785Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M270.953 311.42L263.123 335.585H280.236L272.406 311.42C272.356 311.266 272.259 311.132 272.129 311.036C271.998 310.941 271.841 310.89 271.68 310.89C271.518 310.89 271.361 310.941 271.23 311.036C271.1 311.132 271.003 311.266 270.953 311.42Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M171.845 238.478C167.206 238.478 162.67 237.101 158.812 234.522C154.955 231.942 151.948 228.276 150.172 223.986C148.397 219.697 147.932 214.977 148.837 210.423C149.743 205.87 151.977 201.687 155.258 198.404C158.538 195.121 162.718 192.885 167.269 191.979C171.819 191.073 176.536 191.538 180.822 193.315C185.109 195.092 188.772 198.101 191.35 201.961C193.928 205.821 195.304 210.36 195.304 215.003C195.297 221.227 192.824 227.194 188.426 231.595C184.028 235.996 178.065 238.471 171.845 238.478ZM171.845 198.422C168.568 198.424 165.366 199.397 162.642 201.22C159.918 203.043 157.796 205.633 156.543 208.663C155.29 211.693 154.963 215.027 155.603 218.243C156.243 221.459 157.822 224.412 160.14 226.73C162.457 229.048 165.41 230.627 168.624 231.266C171.838 231.905 175.169 231.576 178.196 230.321C181.223 229.066 183.81 226.941 185.631 224.214C187.451 221.487 188.423 218.282 188.423 215.003C188.418 210.605 186.67 206.389 183.562 203.28C180.454 200.171 176.24 198.424 171.845 198.422Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M171.845 238.478C168.679 238.488 165.544 237.851 162.632 236.607C159.72 235.363 157.093 233.538 154.91 231.243L159.884 226.477C161.425 228.098 163.281 229.387 165.338 230.265C167.394 231.144 169.609 231.592 171.845 231.584C174.021 231.584 176.175 231.155 178.185 230.322C180.196 229.489 182.022 228.267 183.561 226.728C185.1 225.188 186.32 223.36 187.153 221.348C187.985 219.337 188.414 217.18 188.414 215.003C188.414 212.825 187.985 210.669 187.153 208.658C186.32 206.646 185.1 204.818 183.561 203.278C182.022 201.739 180.196 200.517 178.185 199.684C176.175 198.851 174.021 198.422 171.845 198.422V191.528C174.925 191.528 177.976 192.135 180.822 193.315C183.668 194.495 186.254 196.224 188.432 198.404C190.611 200.584 192.339 203.171 193.517 206.02C194.696 208.868 195.303 211.92 195.303 215.003C195.303 218.086 194.696 221.138 193.517 223.986C192.339 226.835 190.611 229.422 188.432 231.602C186.254 233.782 183.668 235.511 180.822 236.691C177.976 237.871 174.925 238.478 171.845 238.478Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M229.7 238.478C225.06 238.479 220.524 237.104 216.665 234.526C212.806 231.947 209.798 228.281 208.021 223.992C206.245 219.703 205.779 214.982 206.683 210.428C207.587 205.874 209.821 201.69 213.101 198.407C216.382 195.123 220.562 192.886 225.112 191.98C229.663 191.073 234.38 191.538 238.667 193.314C242.954 195.091 246.618 198.1 249.196 201.96C251.774 205.821 253.15 210.36 253.15 215.003C253.144 221.226 250.671 227.191 246.275 231.592C241.879 235.993 235.918 238.469 229.7 238.478ZM229.7 198.422C226.424 198.425 223.222 199.4 220.499 201.224C217.776 203.048 215.655 205.639 214.403 208.669C213.152 211.699 212.826 215.032 213.467 218.248C214.108 221.463 215.688 224.416 218.006 226.733C220.323 229.051 223.276 230.628 226.49 231.267C229.703 231.905 233.034 231.576 236.061 230.32C239.087 229.065 241.674 226.94 243.494 224.213C245.314 221.487 246.286 218.282 246.286 215.003C246.279 210.605 244.529 206.388 241.42 203.28C238.31 200.171 234.095 198.424 229.7 198.422Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M238.829 236.626L236.151 230.285C239.67 228.792 242.565 226.129 244.347 222.745C246.129 219.361 246.688 215.466 245.929 211.717C245.17 207.969 243.14 204.598 240.183 202.175C237.225 199.752 233.522 198.426 229.7 198.422V191.528C235.113 191.529 240.359 193.402 244.549 196.831C248.739 200.26 251.615 205.034 252.689 210.343C253.764 215.651 252.971 221.169 250.445 225.959C247.918 230.749 243.815 234.518 238.829 236.626Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M287.546 238.478C282.907 238.478 278.371 237.101 274.514 234.522C270.656 231.942 267.649 228.276 265.874 223.986C264.098 219.697 263.633 214.977 264.539 210.423C265.444 205.87 267.678 201.687 270.959 198.404C274.239 195.121 278.419 192.885 282.97 191.979C287.52 191.073 292.237 191.538 296.523 193.315C300.81 195.092 304.474 198.101 307.051 201.961C309.629 205.821 311.005 210.36 311.005 215.003C310.998 221.227 308.525 227.194 304.127 231.595C299.729 235.996 293.766 238.471 287.546 238.478ZM287.546 198.422C284.269 198.422 281.066 199.394 278.341 201.216C275.616 203.038 273.492 205.628 272.238 208.658C270.984 211.687 270.656 215.021 271.295 218.238C271.935 221.454 273.513 224.409 275.83 226.728C278.147 229.046 281.1 230.626 284.314 231.265C287.528 231.905 290.859 231.577 293.887 230.322C296.915 229.067 299.503 226.942 301.323 224.215C303.144 221.488 304.116 218.282 304.116 215.003C304.111 210.607 302.364 206.392 299.258 203.283C296.151 200.175 291.939 198.426 287.546 198.422Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M303.791 211.698C303.021 207.957 300.988 204.594 298.032 202.177C295.077 199.759 291.38 198.433 287.562 198.422V191.528C292.969 191.542 298.206 193.418 302.392 196.842C306.579 200.265 309.46 205.027 310.55 210.326L303.791 211.698Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M181.201 165.536H291.369"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M181.201 165.536V163.189"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M203.231 165.536V163.189"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M225.27 165.536V163.189"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M247.3 165.536V163.189"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M269.33 165.536V163.189"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M291.369 165.536V163.189"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M200.148 134.201H184.284V152.999H200.148V134.201Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M222.178 112.269H206.314V156.133H222.178V112.269Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M244.217 81.567H228.354V130.449H244.217V81.567Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M266.247 127.315H250.384V136.718H266.247V127.315Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M288.278 121.672H272.414V146.113H288.278V121.672Z"
            fill="#FFC100"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M200.148 153.007H184.284V165.544H200.148V153.007Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M222.178 156.141H206.314V165.544H222.178V156.141Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M244.217 130.441H228.354V165.536H244.217V130.441Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M266.247 136.71H250.384V165.536H266.247V136.71Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M288.278 146.113H272.414V165.536H288.278V146.113Z"
            fill="#263238"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
          />
          <path
            d="M320.727 72.6919C320.536 72.6932 320.348 72.6472 320.18 72.5579C320.011 72.4686 319.867 72.3389 319.761 72.1803L285.633 22.3722L251.009 59.3182L215.655 36.2574L181.453 44.1988L146.716 72.432C146.475 72.628 146.166 72.7201 145.857 72.6882C145.548 72.6562 145.265 72.5027 145.069 72.2615C144.873 72.0203 144.781 71.7111 144.813 71.402C144.845 71.0929 144.998 70.8091 145.239 70.6131L180.398 42.0389L216.101 33.7483L250.652 56.2895L285.925 18.6451L321.692 70.8567C321.814 71.032 321.885 71.237 321.898 71.4498C321.911 71.6625 321.866 71.8748 321.768 72.0638C321.669 72.2527 321.521 72.4111 321.339 72.5218C321.157 72.6325 320.948 72.6913 320.735 72.6919H320.727Z"
            fill="#263238"
          />
          <path
            d="M148.915 71.5226C148.915 72.0959 148.745 72.6564 148.426 73.1331C148.108 73.6098 147.656 73.9813 147.126 74.2007C146.597 74.4201 146.015 74.4775 145.453 74.3657C144.891 74.2538 144.375 73.9778 143.97 73.5723C143.564 73.1669 143.289 72.6504 143.177 72.0881C143.065 71.5258 143.122 70.9429 143.342 70.4132C143.561 69.8835 143.932 69.4308 144.409 69.1123C144.885 68.7937 145.445 68.6237 146.018 68.6237C146.786 68.6237 147.523 68.9291 148.066 69.4728C148.609 70.0164 148.915 70.7537 148.915 71.5226Z"
            fill="#FFC100"
          />
          <path
            d="M180.925 46.0176C182.525 46.0176 183.822 44.7198 183.822 43.1188C183.822 41.5178 182.525 40.22 180.925 40.22C179.325 40.22 178.028 41.5178 178.028 43.1188C178.028 44.7198 179.325 46.0176 180.925 46.0176Z"
            fill="#FFC100"
          />
          <path
            d="M215.873 37.8977C217.473 37.8977 218.77 36.5998 218.77 34.9988C218.77 33.3978 217.473 32.1 215.873 32.1C214.273 32.1 212.977 33.3978 212.977 34.9988C212.977 36.5998 214.273 37.8977 215.873 37.8977Z"
            fill="#FFC100"
          />
          <path
            d="M250.822 60.6986C252.421 60.6986 253.718 59.4008 253.718 57.7998C253.718 56.1988 252.421 54.9009 250.822 54.9009C249.222 54.9009 247.925 56.1988 247.925 57.7998C247.925 59.4008 249.222 60.6986 250.822 60.6986Z"
            fill="#FFC100"
          />
          <path
            d="M288.667 20.5127C288.667 21.0861 288.497 21.6465 288.178 22.1232C287.86 22.6 287.408 22.9715 286.878 23.1909C286.349 23.4103 285.767 23.4677 285.205 23.3559C284.643 23.244 284.127 22.9679 283.721 22.5625C283.316 22.1571 283.04 21.6406 282.929 21.0783C282.817 20.5159 282.874 19.9331 283.094 19.4034C283.313 18.8737 283.684 18.421 284.16 18.1024C284.637 17.7839 285.197 17.6139 285.77 17.6139C286.538 17.6139 287.275 17.9193 287.818 18.4629C288.361 19.0066 288.667 19.7439 288.667 20.5127Z"
            fill="#FFC100"
          />
          <path
            d="M323.615 71.5226C323.615 72.0959 323.445 72.6564 323.127 73.1331C322.808 73.6098 322.356 73.9813 321.827 74.2007C321.297 74.4201 320.715 74.4775 320.153 74.3657C319.591 74.2538 319.075 73.9778 318.67 73.5723C318.265 73.1669 317.989 72.6504 317.877 72.0881C317.765 71.5258 317.823 70.9429 318.042 70.4132C318.261 69.8835 318.632 69.4308 319.109 69.1123C319.585 68.7937 320.145 68.6237 320.718 68.6237C321.486 68.6237 322.223 68.9291 322.766 69.4728C323.31 70.0164 323.615 70.7537 323.615 71.5226Z"
            fill="#FFC100"
          />
          <path
            d="M383.19 347.814C414.121 347.814 439.195 344.444 439.195 340.286C439.195 336.129 414.121 332.759 383.19 332.759C352.26 332.759 327.186 336.129 327.186 340.286C327.186 344.444 352.26 347.814 383.19 347.814Z"
            fill="#FFC100"
          />
          <path
            opacity="0.7"
            d="M383.19 347.814C414.121 347.814 439.195 344.444 439.195 340.286C439.195 336.129 414.121 332.759 383.19 332.759C352.26 332.759 327.186 336.129 327.186 340.286C327.186 344.444 352.26 347.814 383.19 347.814Z"
            fill="white"
          />
          <path
            d="M76.3566 347.814C104.899 347.814 128.037 344.444 128.037 340.286C128.037 336.129 104.899 332.759 76.3566 332.759C47.8146 332.759 24.6768 336.129 24.6768 340.286C24.6768 344.444 47.8146 347.814 76.3566 347.814Z"
            fill="#FFC100"
          />
          <path
            opacity="0.7"
            d="M76.3566 347.814C104.899 347.814 128.037 344.444 128.037 340.286C128.037 336.129 104.899 332.759 76.3566 332.759C47.8146 332.759 24.6768 336.129 24.6768 340.286C24.6768 344.444 47.8146 347.814 76.3566 347.814Z"
            fill="white"
          />
          <path
            d="M367.384 75.1116C367.384 75.1116 388.659 73.0491 389.876 76.5976C391.094 80.146 390.688 88.2498 390.688 88.2498C391.76 88.5286 392.805 88.9008 393.812 89.3622C394.096 89.6383 397.244 91.7008 394.307 95.0868C393.54 95.9454 392.61 96.6436 391.572 97.1412C390.277 97.715 389.045 98.4225 387.897 99.2524L383.628 104.1L384.44 110.344C384.44 110.344 386.347 111.725 388.675 116.54C388.675 116.54 394.177 119.788 397.406 121.631C400.062 123.027 402.824 124.211 405.667 125.171C405.667 125.171 407.144 125.65 407.038 126.714C406.933 127.778 399.687 151.886 399.687 151.886L395.873 164.066C395.8 165.563 395.605 167.051 395.289 168.516C394.745 171.139 392.7 172.86 390.582 172.324L390.793 181.256C390.793 181.256 380.845 186.234 364.438 185.389C364.438 185.389 356.713 184.642 351.001 180.412L350.895 159.543L324.573 154.444C324.573 154.444 321.238 153.738 322.95 150.733C324.662 147.729 330.415 140.275 330.415 140.275L348.907 117.636C348.907 117.636 350.181 116.134 350.652 115.655C351.123 115.176 352.275 114.843 356.843 114.461C361.411 114.079 366.532 113.194 366.532 113.194C366.532 113.194 369.307 110.807 369.704 110.807C370.102 110.807 370.183 107.234 370.183 107.234C368.78 106.221 367.613 104.915 366.762 103.407C365.912 101.898 365.399 100.223 365.258 98.4972C364.86 92.6995 367.4 79.1148 367.4 79.1148L367.384 75.1116Z"
            fill="white"
          />
          <path
            d="M351.325 180.331C351.325 180.331 349.086 213.623 349.086 229.554C349.086 245.485 350.084 258.388 350.579 269.578C351.074 280.767 349.086 288.473 350.822 296.674C352.559 304.875 356.543 328.748 356.543 328.748L361.225 331.574C361.225 331.574 362.036 312.581 363.74 305.874C365.444 299.167 365.98 270.82 366.986 262.115C367.992 253.411 371.214 222.587 371.214 222.587C371.214 222.587 383.637 254.905 386.631 267.588C389.625 280.272 399.8 308.854 402.048 315.813C404.296 322.772 407.76 333.084 407.76 333.084C408.813 333.392 409.919 333.475 411.006 333.328C411.476 333.29 411.928 333.133 412.32 332.871C412.712 332.61 413.03 332.253 413.246 331.834C413.246 331.834 409.943 311.014 408.491 300.896C406.697 288.383 403.776 269.577 401.999 262.619C400.222 255.66 397.528 244.714 397.528 239.493C397.528 234.272 390.826 181.841 390.826 181.841C390.826 181.841 367.473 192.015 351.325 180.331Z"
            fill="#263238"
          />
          <path
            d="M371.197 222.587L361.232 210.959"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M358.685 211.812L366.888 219.453"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M376.22 212.664C378.32 207.346 382.224 202.936 387.247 200.208"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M387.807 184.65C387.807 184.65 386.679 188.889 388.091 191.439C389.502 193.988 390.922 193.988 390.922 193.988C390.922 193.988 393.462 207.849 393.462 215.774C393.462 223.699 391.766 224.544 393.462 233.314C395.158 242.083 396.294 244.917 396.294 250.008C396.294 255.1 398.55 258.502 400.53 261.612C402.51 264.722 403.078 273.792 403.078 277.454C403.078 281.116 404.206 285.095 405.342 288.773C405.342 288.773 405.609 297.023 407.037 298.956C408.466 300.888 408.733 307.449 408.733 307.449"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M369.152 221.434C369.152 221.434 369.712 227.93 367.732 239.257C365.752 250.585 364.341 253.687 364.057 266.703C363.773 279.719 364.909 281.985 364.341 288.773C363.773 295.561 360.381 306.288 360.381 311.16C360.381 316.032 360.9 331.606 360.9 331.606"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M362.929 186.347L363.497 188.613L367.172 189.457L366.605 186.632"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M367.188 189.457C367.188 189.457 373.972 189.173 377.364 188.045L376.552 185.779"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M379.611 185.211L380.423 188.045C380.423 188.045 385.851 187.736 386.663 186.924"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M363.497 188.613C361.621 188.554 359.784 188.068 358.125 187.192L355.577 185.779L356.389 183.798"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M356.543 328.748C356.543 328.748 344.371 336.697 342.627 340.424C340.882 344.152 347.844 342.666 352.81 340.676C357.776 338.687 360.924 331.574 360.924 331.574L356.543 328.748Z"
            fill="white"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M408.149 333.19C408.763 336.595 409.972 339.866 411.72 342.852C414.397 347.018 419.453 350.591 419.453 344.038C419.453 337.485 413.213 331.858 413.213 331.858C413.213 331.858 410.113 333.539 408.149 333.19Z"
            fill="white"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M367.31 79.6101C367.31 79.6101 364.673 95.98 365.565 100.04C367.602 109.126 374.751 108.737 379.222 106.999C383.401 105.375 387.571 99.634 388.107 98.8789C388.145 98.8256 388.199 98.7857 388.261 98.7652C388.926 98.5784 393.057 97.263 394.874 94.0718C396.862 90.5883 393.138 89.1024 393.138 89.1024"
            fill="white"
          />
          <g style={{ mixBlendMode: "multiply" }} opacity="0.5">
            <path
              d="M384.228 103.093L388.172 98.757C388.172 98.757 392.837 97.3198 394.874 94.0312C396.067 92.1068 395.41 90.4259 394.687 89.9712C393.698 89.4351 392.676 88.9605 391.628 88.5502L390.306 91.4653L389.178 91.6602C389.178 91.6602 389.648 88.6558 388.285 86.8775C386.922 85.0992 386.614 79.9511 386.614 79.9511C386.614 79.9511 384.707 90.2148 384.472 94.5103C384.411 96.9008 383.665 99.2234 382.321 101.201C382.321 101.201 382.565 103.824 383.035 106.447C383.092 106.755 383.149 107.218 383.206 107.795L383.855 106.755L384.212 107.746C383.806 106.041 383.62 104.23 384.228 103.093Z"
              fill="#FFC100"
            />
          </g>
          <path
            d="M367.31 79.6101C367.31 79.6101 364.673 95.98 365.565 100.04C367.602 109.126 374.751 108.737 379.222 106.999C383.401 105.375 387.571 99.634 388.107 98.8789C388.145 98.8256 388.199 98.7857 388.261 98.7652C388.926 98.5784 393.057 97.263 394.874 94.0718C396.862 90.5883 393.138 89.1024 393.138 89.1024"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M377.404 87.9331C377.25 88.5827 377.404 89.1673 377.705 89.2404C378.005 89.3135 378.411 88.8588 378.565 88.2173C378.719 87.5758 378.565 86.9912 378.264 86.91C377.964 86.8288 377.559 87.2916 377.404 87.9331Z"
            fill="#263238"
          />
          <path
            d="M370.435 86.236C370.28 86.8856 370.435 87.4702 370.735 87.5433C371.035 87.6164 371.441 87.1617 371.595 86.5202C371.749 85.8787 371.595 85.286 371.295 85.2129C370.995 85.1398 370.581 85.5864 370.435 86.236Z"
            fill="#263238"
          />
          <path
            d="M381.729 85.0911C381.346 84.4159 380.8 83.8475 380.141 83.4376C379.482 83.0277 378.731 82.7894 377.956 82.7444"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M372.617 82.8662C371.978 82.5868 371.27 82.5087 370.586 82.6421C369.902 82.7756 369.274 83.1143 368.787 83.6133"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M373.088 85.8219C373.103 86.9096 373.021 87.9966 372.844 89.0699C372.576 90.4259 371.521 90.6939 371.789 91.7414C372.057 92.7889 373.412 92.8944 373.412 92.8944"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M374.824 97.1249C375.399 97.308 376.006 97.3643 376.604 97.29C377.202 97.2157 377.777 97.0126 378.289 96.6946"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M387.677 68.1771C387.677 68.1771 382.216 63.4513 376.999 63.4513C371.781 63.4513 367.554 66.4395 364.324 66.6993C361.095 66.9591 358.863 63.9629 356.875 67.9417C354.887 71.9205 362.344 78.6357 367.31 79.6263C372.276 80.617 379.23 79.131 381.218 78.8793C383.123 78.7486 385.034 78.7486 386.939 78.8793C386.939 78.8793 385.446 83.6051 386.939 85.0992C388.432 86.5933 388.675 87.5839 388.675 88.5746C388.76 89.6679 388.926 90.7535 389.17 91.8226L390.663 92.326L391.41 89.5896C393.424 87.44 394.801 84.7718 395.386 81.8837C396.124 77.4096 392.4 72.9517 392.4 72.9517L387.677 68.1771Z"
            fill="#263238"
          />
          <path
            d="M366.759 77.5882C366.759 77.5882 375.254 79.2122 381.908 76.4433C388.562 73.6744 382.825 68.1771 382.825 68.1771"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M384.229 67.7143C384.918 67.7143 390.655 72.0747 389.503 75.2903C388.351 78.5058 386.062 78.7413 386.062 78.7413"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M383.287 166.348L376.114 162.564C374.27 162.462 372.437 162.223 370.629 161.849C368.957 161.37 351.804 159.73 351.804 159.73L351.544 163.79C351.544 163.79 371.107 166.421 375.156 166.9C379.206 167.379 382.792 169.287 383.506 170.481C384.22 171.675 385.656 172.868 384.942 176.165C384.228 179.462 379.457 184.285 379.457 184.285C379.23 183.944 390.931 183.099 390.817 181.849C390.566 179.364 389.243 172.105 389.243 172.105L383.287 166.348Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M383.287 166.348L376.114 162.564C374.27 162.462 372.437 162.223 370.629 161.849C368.957 161.37 351.804 159.73 351.804 159.73L351.544 163.79C351.544 163.79 371.108 166.421 375.157 166.9C379.206 167.379 382.792 169.287 383.506 170.481C384.22 171.675 385.656 172.868 384.942 176.165C384.228 179.462 379.457 184.285 379.457 184.285C379.27 183.92 390.955 183.091 390.817 181.849C390.436 178.682 389.243 172.105 389.243 172.105L383.287 166.348Z"
            fill="white"
          />
          <path
            d="M406.948 126.625C406.315 123.653 401.593 124.051 398.745 122.402C395.896 120.754 389.007 116.938 389.007 116.938L385.673 111.92C385.071 110.567 384.585 109.165 384.22 107.73L383.863 106.739L383.214 107.778C383.628 112.228 384.025 123.62 384.025 123.62L385.453 130.782C385.453 130.782 390.947 154.412 392.375 159.665C393.803 164.919 393.803 168.492 392.854 170.164C391.904 171.837 392.221 172.6 392.221 172.6C392.221 172.6 395.945 169.718 395.718 166.859C395.418 163.498 407.394 128.639 406.948 126.625Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M406.948 126.625C406.624 123.604 401.593 124.051 398.745 122.402C395.897 120.754 389.007 116.938 389.007 116.938L385.673 111.92C385.071 110.567 384.585 109.165 384.22 107.73L383.863 106.739L383.214 107.778C383.628 112.228 384.025 123.62 384.025 123.62L385.453 130.782C385.453 130.782 390.947 154.412 392.375 159.665C393.803 164.919 393.803 168.492 392.854 170.164C391.904 171.837 392.221 172.6 392.221 172.6C392.221 172.6 396.051 169.71 395.718 166.859C395.337 163.798 407.24 129.134 406.948 126.625Z"
            fill="white"
          />
          <path
            d="M386.102 123.645C386.102 123.645 384.609 110.223 383.863 106.739C383.116 103.256 383.619 101.274 380.39 101.274C377.161 101.274 373.185 100.771 373.899 102.517C374.613 104.262 379.579 102.76 380.39 103.507C381.201 104.254 380.633 105.992 380.633 105.992C380.633 105.992 374.142 106.495 374.142 108.233C374.142 109.971 374.393 114.729 375.635 115.192C376.876 115.655 377.371 112.959 377.371 112.959C377.371 112.959 377.623 118.643 378.865 120.665C379.655 121.914 380.571 123.078 381.599 124.14L386.102 123.645Z"
            fill="white"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M381.632 127.372C381.632 127.372 380.885 158.228 382.127 163.173C383.368 168.118 390.079 174.858 393.552 171.626C397.025 168.394 395.296 161.435 395.296 158.204C395.296 154.972 387.344 131.107 387.344 129.361C387.226 127.912 386.889 126.488 386.346 125.139"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M382.127 131.107L387.093 130.604"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M350.367 146.535L351.325 119.081C351.325 119.081 350.132 118.367 349.653 120.99C349.174 123.612 348.939 128.874 348.939 128.874C348.939 128.874 343.21 125.293 344.647 127.437C346.083 129.581 348.46 134.363 348.46 134.363L339.6 143.19L343.657 144.862L350.367 146.535Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M350.367 146.535L351.325 119.081C351.325 119.081 350.132 118.367 349.653 120.99C349.174 123.612 348.939 128.874 348.939 128.874C348.939 128.874 343.21 125.293 344.647 127.437C346.083 129.581 348.46 134.363 348.46 134.363L339.6 143.19L343.657 144.862L350.367 146.535Z"
            fill="white"
          />
          <path
            d="M362.247 125.212C362.247 125.212 361.792 126.836 363.699 126.836C365.606 126.836 368.957 125.48 368.957 125.48L368.714 122.784C368.714 122.784 364.129 125.017 362.247 125.212Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M362.247 125.212C362.247 125.212 361.792 126.836 363.699 126.836C365.606 126.836 368.957 125.48 368.957 125.48L368.714 122.784C368.714 122.784 364.129 125.017 362.247 125.212Z"
            fill="white"
          />
          <path
            d="M370.435 107.056C370.435 107.056 367.952 121.672 369.445 124.92C370.938 128.168 373.169 127.404 374.905 125.918C376.642 124.433 378.881 120.697 378.881 120.697"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M350.822 159.941L351.325 180.331C351.325 180.331 357.005 185.795 367.968 185.795C378.93 185.795 390.826 181.817 390.826 181.817V174.606"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M384.366 109.971C384.366 109.971 388.837 114.445 388.837 118.675C388.837 122.906 388.091 123.897 388.091 123.897"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M388.334 116.191C388.334 116.191 395.044 120.161 398.769 122.402C402.493 124.644 406.973 124.635 406.973 126.625C406.973 128.614 396.538 162.426 396.538 162.426"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M392.562 127.372L390.079 137.319"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M350.887 133.21L346.87 124.782"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M350.887 135.622L344.866 132.008"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M370.532 154.477L369.331 160.502"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M403.014 126.389C403.014 126.389 397.001 127.591 391.386 134.412"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M399.005 126.024C399.005 126.024 397.382 125.618 391.791 130.433"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M370.532 127.997L368.13 146.852L370.134 147.258L371.741 141.241"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M372.138 177.351C364.917 183.376 354.896 182.97 354.896 182.97"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M341.62 144.603C341.62 144.603 336.711 140.104 329.757 145.829"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M369.956 110.718C369.956 110.718 367.968 111.213 365.728 114.697C363.489 118.18 360.762 124.14 362.75 124.635C364.738 125.131 368.43 122.898 368.43 122.898"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M377.656 123.897L380.139 126.13"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M366.474 113.203C366.474 113.203 357.281 114.445 353.556 114.697C349.832 114.948 350.554 116.321 349.337 117.181C347.373 118.554 324.848 147.128 323.371 149.864C321.895 152.601 322.13 153.843 324.613 154.59C327.096 155.337 351.828 159.69 351.828 159.69L373.68 161.931L375.416 156.458C375.416 156.458 380.496 157.132 381.388 157.132"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M372.933 154.444C368.111 153.044 363.449 151.139 359.025 148.76"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M357.038 148.257C357.038 148.257 349.735 145.544 345.783 145.049C341.832 144.554 335.778 144.391 335.778 144.391"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M350.327 145.025L351.074 125.383"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M373.68 161.931C375.384 162.788 377.17 163.474 379.011 163.977"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M48.5652 146.105L51.4945 130.084L70.0356 122.776C70.0356 122.776 70.9363 117.798 71.8451 117.579C72.7539 117.36 73.6465 115.314 73.6465 115.314L73.2002 111.213C73.2002 111.213 74.8961 104.717 83.4242 109.776C83.4242 109.776 80.8439 111.497 81.2901 112.212C81.7364 112.926 80.7952 115.2 81.923 115.2C83.0509 115.2 85.331 116.637 86.4833 117.798C87.2897 118.665 88.0023 119.615 88.6092 120.632L98.2084 121.185C99.1924 121.193 100.171 121.326 101.121 121.582C101.284 116.889 100.708 113.308 99.5716 110.523C95.4414 100.47 87.9114 96.8813 86.8322 91.8469C85.753 86.8125 86.2966 86.2847 86.2966 86.2847C87.394 85.1682 88.1974 83.7968 88.635 82.2932C89.0726 80.7896 89.1306 79.2009 88.804 77.6694C87.7329 72.2859 83.6027 68.5101 68.713 67.7955C53.8233 67.0809 55.9817 77.304 55.9817 77.304L56.1602 78.0186C56.1602 78.0186 46.6503 81.2666 48.4516 93.2761C50.253 105.286 55.4461 110.507 55.2676 114.274C55.0891 118.042 49.5227 119.479 41.6275 128.078C33.7323 136.677 32.1257 149.613 35.3552 158.049C36.978 162.199 40.1507 165.658 44.1348 168.24L48.5652 146.105Z"
            fill="#263238"
          />
          <path
            d="M60.9958 147.688V151.31L54.123 172.56C58.4177 173.697 62.9215 173.791 67.2601 172.836C69.7091 172.197 72.0499 171.198 74.2059 169.872L60.9958 147.688Z"
            fill="#263238"
          />
          <path
            d="M80.7549 112.082L81.5663 115.736C81.5663 115.736 84.0006 113.3 88.7556 120.697C88.7556 120.697 98.6388 120.462 101.333 121.81C101.333 121.81 101.893 121.972 103.718 123.913C105.544 125.854 112.409 132.033 112.409 132.033C112.409 132.033 121.221 140.218 122.097 140.851C122.974 141.485 126.26 144.627 128.718 145.723L135.307 130.709L138.245 123.279L139.867 117.165H140.387L140.5 112.236L140.103 106.357C140.167 106.058 140.304 105.78 140.5 105.545C141.181 104.602 141.704 103.554 142.05 102.444C142.05 101.891 141.49 98.6271 141.49 98.6271C141.49 98.6271 141.214 97.8151 141.815 97.7177C142.415 97.6203 144.631 98.3917 144.906 99.9426L145.718 99.6665C146.39 98.0598 147.227 96.5277 148.217 95.0949C149.532 93.3897 150.879 92.3179 151.714 92.8701C151.944 93.0283 152.109 93.2634 152.18 93.5329C152.252 93.8024 152.225 94.0886 152.104 94.3398L149.491 99.1468C149.491 99.1468 148.339 100.698 149.767 101.25C149.767 101.25 152.858 103.239 153.061 104.985C153.264 106.731 152.144 108.233 151.154 109.516C150.164 110.799 148.42 113.576 148.42 113.576L146.391 115.371L145.58 118.464L146.537 119.658L145.109 125.853L144.079 130.498L143.559 133.316L140.314 144.44L137.068 154.135C137.068 154.135 135.396 159.69 131.347 159.535C127.298 159.381 122.86 157.189 121.424 156.474C119.987 155.759 108.149 149.572 108.149 149.572L105.714 148.419C106.039 149.528 106.179 150.683 106.128 151.837C106.088 153.981 103.783 158.707 103.11 159.779L102.712 168.159C102.555 169.612 102.582 171.08 102.793 172.527C103.15 174.712 104.976 187.07 105.374 188.613C105.374 188.613 101.43 192.186 89.6806 193.883C77.9311 195.58 72.4296 192.827 72.4296 192.827L67.1959 189.75L73.6468 176.993C73.6468 176.993 75.2696 173.201 75.1073 172.202C74.9451 171.204 72.17 166.9 72.17 166.9L61.9865 148.76L61.5078 148.922L59.9255 154.217L54.2049 172.17L46.6749 194.581C46.6749 194.581 44.6139 200.265 43.7619 201.946L41.3844 209.197C41.5164 210.493 41.8362 211.762 42.3337 212.965L36.3535 209.092L37.4165 203.408L38.7391 194.93L40.362 185.714L41.7901 178.089L44.0702 167.923L44.8816 165.114L46.5045 157.172L49.3607 142.767L51.795 130.433L68.835 123.653L69.898 122.841C70.1343 121.271 70.7103 119.772 71.5857 118.448C72.1933 117.577 72.9168 116.793 73.736 116.118C73.736 116.118 73.6549 115.054 73.5981 114.047C73.5413 113.04 73.2816 111.189 73.2816 111.189C73.2816 111.189 78.5478 113.454 80.7549 112.082Z"
            fill="white"
          />
          <path
            d="M57.9287 79.4477C57.9287 79.4477 61.0852 72.4564 67.3981 72.4564C73.711 72.4564 86.7831 84.8637 86.7831 84.8637"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M60.6309 80.552C60.6309 80.552 64.4608 76.492 69.1995 78.0673C73.9383 79.6426 74.6118 85.286 74.6118 85.286"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M57.4744 81.2503C57.4744 81.2503 51.8431 84.409 51.3887 90.2798C50.9343 96.1505 59.2758 103.134 60.4036 111.034C61.5315 118.935 55.673 120.73 46.2036 127.274C36.7343 133.819 38.3166 148.476 40.3451 151.634"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M41.4736 153.445C41.4736 153.445 42.8206 156.377 44.8492 157.278"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M58.1568 96.589C57.8901 97.162 57.7705 97.7926 57.8087 98.4235C57.847 99.0544 58.0419 99.6659 58.3759 100.202C59.5037 102.232 68.113 112.382 67.3989 117.124C66.6849 121.867 62.2139 124.79 62.2139 124.79"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M62.4328 81.2503C62.4328 81.2503 57.2478 83.5077 57.475 88.6964C57.7022 93.8851 58.8301 95.2411 58.8301 95.2411"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M86.7832 98.416C88.3943 102.066 90.6049 105.42 93.3233 108.339C97.3805 112.399 97.8268 118.269 97.8268 118.269"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M91.5137 111.254C91.5137 111.254 93.5422 115.996 93.5422 118.927"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M80.2919 112.512L73.9222 118.253C73.9222 118.253 73.2406 119.991 71.9585 122.776C70.6765 125.561 70.8874 130.896 70.8874 130.896L74.8148 138.716C74.8148 138.716 67.2604 130.043 66.8303 128.972C66.4002 127.9 58.4969 129.832 57.0039 130.474C55.5109 131.115 53.5797 132.398 54.0097 134.323C54.4398 136.247 56.3629 138.805 55.5028 139.235C54.6426 139.666 52.2976 138.594 52.2976 139.877C52.2976 141.16 55.0808 146.08 53.7988 147.786C52.5167 149.491 44.3943 177.083 44.3943 177.083C44.3943 177.083 49.5225 172.803 48.2405 174.517C46.9584 176.23 40.7672 190.123 40.7672 190.123L38.4141 198.243L43.9723 169.385L48.6705 145.025L51.4943 130.084C54.2207 129.175 70.0354 122.776 70.0354 122.776C70.0354 122.776 71.285 117.514 73.6463 115.314L73.2 111.213C73.2 111.213 77.5087 112.723 80.2919 112.512Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M80.2919 112.512L73.9222 118.253C73.9222 118.253 73.2406 119.991 71.9585 122.776C70.6765 125.561 70.8874 130.896 70.8874 130.896L74.8148 138.716C74.8148 138.716 67.2604 130.043 66.8303 128.972C66.4002 127.9 58.4969 129.832 57.0039 130.474C55.5109 131.115 53.5797 132.398 54.0097 134.323C54.4398 136.247 56.3629 138.805 55.5028 139.235C54.6426 139.666 52.2976 138.594 52.2976 139.877C52.2976 141.16 55.0808 146.08 53.7988 147.786C52.5167 149.491 44.3943 177.083 44.3943 177.083C44.3943 177.083 49.5225 172.803 48.2405 174.517C46.9584 176.23 40.7672 190.123 40.7672 190.123L38.4141 198.243L43.9723 169.385L48.6705 145.025L51.4943 130.084C54.2207 129.175 70.0354 122.776 70.0354 122.776C70.0354 122.776 70.3762 117.904 73.6544 116.199L73.2 111.213C73.2 111.213 77.5087 112.723 80.2919 112.512Z"
            fill="white"
          />
          <path
            d="M104.002 141.371C104.002 141.371 107.848 134.964 108.278 136.458C108.708 137.952 107.207 143.076 107.207 143.076C107.207 143.076 111.264 141.582 110.842 142.865C110.42 144.148 109.56 144.789 109.771 145.431C109.982 146.072 123.874 153.34 125.586 154.192C127.298 155.045 131.355 150.132 133.278 151.626C135.201 153.12 133.278 158.244 129.432 158.252C125.586 158.26 114.477 153.38 114.477 153.38L105.73 148.289"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M104.002 141.371C104.002 141.371 107.848 134.964 108.278 136.458C108.708 137.952 107.207 143.076 107.207 143.076C107.207 143.076 111.264 141.582 110.842 142.865C110.42 144.148 109.56 144.789 109.771 145.431C109.982 146.072 123.874 153.34 125.586 154.192C127.298 155.045 131.355 150.132 133.278 151.626C135.201 153.12 133.278 158.244 129.432 158.252C125.586 158.26 114.477 153.38 114.477 153.38L105.763 148.305"
            fill="white"
          />
          <path
            d="M80.9336 167.241C80.9336 167.241 105.909 153.989 101.852 158.902C97.7951 163.814 84.3497 169.385 80.9336 167.241Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M80.9336 167.241C80.9336 167.241 105.909 153.989 101.852 158.902C97.7951 163.814 84.3497 169.385 80.9336 167.241Z"
            fill="white"
          />
          <path
            d="M73.2002 111.254C73.2002 111.254 73.3787 114.664 73.9224 118.253C74.466 121.842 74.2794 121.842 77.6874 126.146C81.0954 130.449 84.6819 134.047 85.2174 133.332"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M85.3963 132.073C85.3963 132.073 85.7533 125.789 84.5037 121.664C83.2541 117.539 81.4527 116.093 81.4527 115.168C81.3921 114.203 81.2728 113.243 81.0957 112.293"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M73.2004 116.459C71.7671 117.75 70.7645 119.451 70.3279 121.331C69.7924 124.197 69.2568 127.607 69.2568 127.607L74.8151 138.74C75.2991 136.801 76.0213 134.93 76.9654 133.17C77.433 132.301 78.0386 131.514 78.7587 130.839"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M86.6532 129.02C87.0456 128.922 87.4537 128.903 87.8536 128.964C88.2534 129.026 88.6371 129.166 88.982 129.378C90.4182 130.1 93.2907 133.868 93.2907 133.868C93.2907 133.868 91.3189 124.53 87.9109 119.69C84.5029 114.851 82.166 115.2 82.166 115.2"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M68.7134 123.458L51.4949 130.084C51.4949 130.084 45.2225 164.367 42.8856 173.518C40.5487 182.669 36.6133 208.523 36.6133 208.523L41.2709 209.416L42.8937 204.756"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.7861 202.076C43.7861 202.076 44.8572 200.452 47.7297 191.52C50.6021 182.588 58.2782 160.664 59.5684 156.336C60.8586 152.008 61.8972 149.158 61.8972 149.158"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M58.8457 143.888C58.8457 143.888 73.3703 169.872 74.628 170.993C75.8857 172.113 74.0924 175.118 73.7273 176.733"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M72.1215 179.998L67.4639 189.693C67.4639 189.693 70.5148 194.362 83.4247 194.362C91.1075 194.385 98.6802 192.535 105.487 188.97C105.487 188.97 102.436 172.82 102.615 169.945C102.793 167.071 103.159 159.535 103.159 159.535C103.159 159.535 106.404 154.663 106.023 150.92C105.642 147.177 104.051 142.841 104.051 142.126C104.051 141.411 103.694 133.689 103.694 133.689"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M83.3994 164.042L96.2524 156.149"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M90.167 161.565L97.1534 157.505"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M128.629 145.894L126.008 152.317"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M127.582 148.703L125.107 151.188"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M54.3181 171.496C54.3181 171.496 50.0337 176.457 47.1045 178.487"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M51.8437 172.844C51.8437 172.844 44.4029 178.707 42.6016 180.063"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M53.166 131.107C55.409 134.281 57.442 137.598 59.2517 141.038"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M59.958 142.613L61.5322 145.317"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M104.051 142.126L106.023 132.073"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M104.772 142.841L107.815 138.537"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M61.8973 149.125L53.2881 144.456"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M85.0391 134.225C85.0391 134.225 88.2848 140.721 89.3478 145.358"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M138.31 122.914C139.168 122.851 140.031 122.962 140.845 123.241C141.659 123.52 142.409 123.961 143.048 124.538"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M39.7285 204.065L41.9518 204.894"
            stroke="#263238"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M36.5561 208.848C36.584 211.935 36.4214 215.021 36.0692 218.089C35.5337 221.864 35.7122 230.48 36.4262 233.167C37.1403 235.855 37.5054 236.415 38.2195 234.791C38.9335 233.167 41.0919 223.667 41.0919 223.667C41.0919 223.667 41.449 229.944 43.0637 229.408C44.6785 228.872 43.7859 225.819 43.7859 223.123C43.7859 220.427 43.9644 219.534 43.7859 217.382C43.6074 215.23 41.2137 209.912 41.2137 209.912"
            fill="white"
          />
          <path
            d="M36.5561 208.848C36.584 211.935 36.4214 215.021 36.0692 218.089C35.5337 221.864 35.7122 230.48 36.4262 233.167C37.1403 235.855 37.5054 236.415 38.2195 234.791C38.9335 233.167 41.0919 223.667 41.0919 223.667C41.0919 223.667 41.449 229.944 43.0637 229.408C44.6785 228.872 43.7859 225.819 43.7859 223.123C43.7859 220.427 43.9644 219.534 43.7859 217.382C43.6074 215.23 41.2137 209.912 41.2137 209.912"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M140.403 117.027C140.321 115.439 140.321 113.848 140.403 112.261C140.549 110.767 139.956 108.534 140.102 106.577C140.249 104.62 142.188 103.897 141.888 101.364C141.587 98.8301 140.995 98.5297 141.441 97.9369C141.888 97.3442 144.687 98.2293 144.866 99.8695C145.025 101.557 145.025 103.257 144.866 104.944C144.72 105.391 145.758 108.192 145.166 109.41C144.826 110.07 144.575 110.772 144.419 111.497"
            stroke="#263238"
            strokeWidth="0.880843"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M145.466 99.7396C145.466 99.7396 148.89 92.8863 150.829 92.732C152.769 92.5777 152.168 94.356 151.568 95.2655C150.967 96.1749 149.036 99.4391 148.89 100.787C148.744 102.135 146.951 106.593 146.951 106.593"
            stroke="#263238"
            strokeWidth="0.880843"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M148.914 100.787C148.914 100.787 154.132 103.913 152.971 106.471C151.811 109.029 151.178 110.052 150.286 109.719C149.494 109.314 148.787 108.763 148.2 108.095"
            stroke="#263238"
            strokeWidth="0.880843"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M150.829 109.727C150.829 109.727 149.482 111.96 148.444 113.308C147.846 114.087 147.138 114.773 146.342 115.346L145.709 117.547"
            stroke="#263238"
            strokeWidth="0.880843"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M88.2686 120.584C88.2686 120.584 100.643 120.405 102.258 122.378C103.872 124.351 123.428 142.305 125.789 143.92C128.15 145.536 128.661 145.894 128.661 145.894C128.661 145.894 138.342 123.97 138.342 122.914C138.342 121.858 139.965 116.995 139.965 116.995C139.965 116.995 143.016 117.352 143.738 117.352C144.46 117.352 146.424 119.69 146.424 119.69C146.424 119.69 143.738 130.636 143.738 131.87C143.738 133.105 138.715 150.181 136.378 155.418C134.041 160.656 130.82 159.901 125.619 158.285C120.417 156.669 106.25 148.598 106.25 148.598"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M67.4638 189.693C67.4638 189.693 60.2826 207.671 58.3433 219.907C56.404 232.144 57.2317 260.759 56.6718 263.82C56.1119 266.882 48.3384 281.327 48.3384 288.278C48.3384 295.229 44.1758 331.078 44.1758 331.078L46.9509 332.743C46.9509 332.743 56.688 302.699 60.2826 294.944C63.8773 287.19 68.8919 268.822 70.2794 265.209C71.667 261.596 81.396 232.688 81.9478 229.075C82.4996 225.462 85.8345 216.57 85.8345 216.57C85.8345 216.57 93.0562 260.759 94.4438 269.935C95.8313 279.11 105.552 328.854 105.552 328.854C106.191 329.01 106.843 329.102 107.5 329.13C108.311 329.13 108.611 327.741 108.611 327.741C108.611 327.741 112.498 292.443 111.386 282.992C110.275 273.54 106.948 261.88 106.948 258.534C106.948 255.189 111.946 226.298 111.946 216.31C111.946 206.323 105.455 188.986 105.455 188.986C105.455 188.986 82.4184 200.614 67.4638 189.693Z"
            fill="#263238"
          />
          <path
            d="M106.842 260.369C106.842 260.369 104.367 270.974 100.983 276.609"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M106.169 271.201C106.169 271.201 104.14 278.867 100.083 282.48"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M58.1562 267.815C58.1562 267.815 59.7304 277.064 61.5318 280.897"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M57.7021 273.232C57.7021 273.232 59.0572 279.776 61.5321 283.609"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M86.5566 216.611L95.5716 209.165"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M90.8408 213.452L101.438 208.71"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M67.6172 200.817C67.6172 200.817 74.6117 205.324 78.6689 209.165"
            stroke="white"
            strokeWidth="0.530341"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M44.4675 331.054C44.4675 331.054 33.9189 339.986 33.9189 344.42C33.9189 348.853 38.0816 348.585 42.5282 344.42C46.9748 340.254 47.202 331.671 47.202 331.671L44.4675 331.054Z"
            fill="white"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M105.552 328.853C105.552 328.853 109.163 337.745 113.057 341.642C116.952 345.54 119.168 346.92 119.168 342.747C119.168 338.573 116.668 333.855 108.619 327.741C108.611 327.741 110.834 329.406 105.552 328.853Z"
            fill="white"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M68.291 82.7444C67.5688 82.4765 66.8872 82.1517 66.1813 81.8512C65.4753 81.5508 64.1852 81.3884 63.6983 83.6051C62.9761 86.8531 67.9989 89.5327 66.3841 92.2205C65.3796 93.8555 63.8698 95.1184 62.0836 95.8176C61.7928 95.9176 61.4898 95.9777 61.1829 95.9963C59.7467 96.1749 57.4179 95.9963 58.1319 98.5053C58.846 101.014 61.1829 103.174 62.6191 103.174H64.0553C64.0553 103.174 65.6782 108.046 71.7639 110.71C77.8496 113.373 81.9879 113.227 83.4242 109.816C84.8604 106.406 85.9396 103.532 85.9396 99.0413C85.9396 94.5509 84.3167 87.0155 84.3167 87.0155C84.3167 87.0155 82.8805 88.9968 77.3222 86.4796C73.6464 84.815 70.206 83.4671 68.291 82.7444Z"
            fill="white"
          />
          <g style={{ mixBlendMode: "multiply" }} opacity="0.5">
            <path
              d="M77.3307 86.4796C77.3307 86.4796 68.7539 86.0005 67.4718 86.2117C66.1897 86.4228 67.6828 90.2717 67.2608 94.1205C66.8389 97.9694 67.0417 104.173 68.7539 106.098C70.7742 108.082 72.9151 109.939 75.1641 111.66C75.1641 111.66 68.5835 110.596 66.1897 107.811C63.796 105.026 63.4147 103.532 63.4147 103.532C63.4147 103.532 57.8564 100.284 57.4263 97.7583C56.9962 95.233 60.672 96.5728 62.4328 95.3223C63.4228 94.6402 67.5205 93.3573 66.49 89.9387C65.4594 86.5202 63.796 85.8787 63.7311 83.5889C63.6824 81.9649 65.1105 81.4939 65.9869 81.3478C66.382 81.2812 66.7879 81.3409 67.1472 81.5183L77.3307 86.4796Z"
              fill="#FFC100"
            />
          </g>
          <path
            d="M68.291 82.7444C67.5688 82.4765 66.8872 82.1517 66.1813 81.8512C65.4753 81.5508 64.1852 81.3884 63.6983 83.6051C62.9761 86.8531 67.9989 89.5327 66.3841 92.2205C65.3796 93.8555 63.8698 95.1184 62.0836 95.8176C61.7928 95.9176 61.4898 95.9777 61.1829 95.9963C59.7467 96.1749 57.4179 95.9963 58.1319 98.5053C58.846 101.014 61.1829 103.174 62.6191 103.174H64.0553C64.0553 103.174 65.6782 108.046 71.7639 110.71C77.8496 113.373 81.9879 113.227 83.4242 109.816C84.8604 106.406 85.9396 103.532 85.9396 99.0413C85.9396 94.5509 84.3167 87.0155 84.3167 87.0155C84.3167 87.0155 82.8805 88.9968 77.3222 86.4796C73.6464 84.815 70.206 83.4671 68.291 82.7444Z"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M74.628 93.3816C74.7416 94.0637 74.555 94.6646 74.2061 94.7214C73.8572 94.7782 73.5002 94.2667 73.3947 93.5846C73.2892 92.9025 73.4758 92.2935 73.8166 92.2367C74.1574 92.1799 74.5144 92.732 74.628 93.3816Z"
            fill="#263238"
          />
          <path
            d="M82.0527 92.1393C82.1581 92.8213 81.9715 93.4222 81.6307 93.479C81.2899 93.5359 80.9248 93.0243 80.8193 92.3423C80.7138 91.6602 80.8923 91.0593 81.2331 91.0025C81.5739 90.9456 81.9391 91.4572 82.0527 92.1393Z"
            fill="#263238"
          />
          <path
            d="M70.3281 90.0686C70.7821 89.3933 71.398 88.8425 72.1195 88.4666C72.841 88.0907 73.6451 87.9017 74.4583 87.9169"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M80.0166 88.4528C80.7059 88.2117 81.452 88.1859 82.1563 88.3787C82.8605 88.5716 83.4896 88.974 83.9601 89.5327"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M79.3021 91.5059C79.2029 92.6406 79.2029 93.7817 79.3021 94.9163C79.4806 96.3535 80.5516 96.7108 80.1946 97.7908C79.8376 98.8707 78.4014 98.8626 78.4014 98.8626"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M76.608 103.174C75.9934 103.32 75.3548 103.33 74.7358 103.206C74.1167 103.081 73.532 102.824 73.0215 102.452"
            stroke="#263238"
            strokeWidth="1.06068"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "PROJECTILE",
      text: "This section gives you the graph of a projectile, and information like time of flight etc. All you have to do is insert the required parameters like the projection angle and initial velocity.",
      svg: (
        <svg
          width="501"
          height="499"
          viewBox="0 0 501 499"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.70612 275.456C-1.87356 249.706 0.524933 222.866 10.5821 198.514C24.3341 164.454 53.9582 140.251 87.1235 126.132C135.255 105.607 182.631 105.218 221.801 65.0045C233.915 52.6048 244.057 38.3944 256.376 26.2468C292.785 -9.5886 346.062 -5.2338 385.874 23.1755C468.867 82.4467 498.721 199.82 494.114 296.863C492.04 340.411 471.251 380.957 438.338 409.527C363.905 474.138 237.524 463.274 152.09 429.547C88.2924 404.392 18.6843 345.706 3.70612 275.456Z"
            fill="#FFC100"
          />
          <path
            opacity="0.7"
            d="M3.70612 275.456C-1.87356 249.706 0.524933 222.866 10.5821 198.514C24.3341 164.454 53.9582 140.251 87.1235 126.132C135.255 105.607 182.631 105.218 221.801 65.0045C233.915 52.6048 244.057 38.3944 256.376 26.2468C292.785 -9.5886 346.062 -5.2338 385.874 23.1755C468.867 82.4467 498.721 199.82 494.114 296.863C492.04 340.411 471.251 380.957 438.338 409.527C363.905 474.138 237.524 463.274 152.09 429.547C88.2924 404.392 18.6843 345.706 3.70612 275.456Z"
            fill="white"
          />
          <path
            d="M489.461 225.674L483.731 229.57C481.737 227.484 479.732 225.399 477.715 223.313L483.926 219.027L489.301 224.654C489.232 224.069 489.175 223.508 489.106 222.889L484.831 218.408C485.978 217.606 487.124 216.804 488.35 216.013C488.35 215.543 488.247 215.073 488.189 214.603L483.949 217.503L477.921 211.246L484.132 206.96L487.651 210.638C487.502 209.962 487.364 209.286 487.215 208.61L485.038 206.318L486.47 205.344L486.161 204.049L484.155 205.412C482.154 203.311 480.144 201.226 478.127 199.155C480.03 197.834 481.94 196.52 483.857 195.213C483.525 194.067 483.181 192.921 482.826 191.775L478.345 187.134L480.889 185.38C480.763 184.956 480.649 184.544 480.534 184.12L477.554 186.194L471.504 179.994C473.578 178.539 475.652 177.106 477.726 175.662L478.574 176.533L477.921 174.012L477.761 174.127L471.698 167.915L475.675 165.165C475.56 164.741 475.457 164.305 475.343 163.881L470.77 167.01L464.696 160.822L469.979 157.131C470.038 157.089 470.086 157.034 470.119 156.971C470.153 156.907 470.172 156.837 470.174 156.765L471.675 156.994C471.678 157.154 471.744 157.306 471.859 157.418L474.22 159.825C474.025 159.103 473.818 158.381 473.624 157.659L473.211 157.235H473.52L473.211 156.157C354.546 138.024 233.658 140.245 115.739 162.724C117.267 239.33 118.822 315.944 120.403 392.566C121.286 392.44 122.168 392.325 123.062 392.222L121.985 391.488L127.875 385.105L133.984 389.334L132.012 391.443L133.548 391.351L134.866 389.941L136.711 391.225H138.82L135.726 389.07C137.689 386.962 139.656 384.861 141.627 382.767L146.521 386.205L147.529 385.403C145.845 384.257 144.172 383.031 142.487 381.862L148.4 375.605L154.325 379.776L155.299 378.951L149.271 374.7L155.196 368.477L161.304 372.832L155.987 378.367C158.095 376.579 160.193 374.78 162.267 372.946C162.416 372.419 162.576 371.892 162.725 371.365L162.175 371.938L156.067 367.56L162.003 361.372L165.178 363.664L165.625 362.518L162.863 360.524L168.822 354.381L169.246 354.679C169.441 354.324 169.636 353.957 169.842 353.602L169.681 353.487L170.277 352.88C171.476 350.868 172.828 348.952 174.323 347.15L168.799 352.811C166.759 351.329 164.715 349.862 162.668 348.41L168.639 342.256L174.724 346.668C174.987 346.348 175.274 346.061 175.549 345.752L169.498 341.374C171.492 339.334 173.486 337.294 175.48 335.277L181.6 339.735L178.941 342.451C180.608 341.025 182.39 339.741 184.27 338.612L189.358 333.489L191.524 335.105C191.983 334.933 192.452 334.784 192.911 334.624L190.229 332.63L196.234 326.636L202.297 331.22C202.526 330.888 202.755 330.556 202.973 330.212C201.025 328.734 199.065 327.267 197.117 325.811C199.111 323.817 201.116 321.846 203.122 319.875L207.098 322.866C207.282 322.499 207.465 322.133 207.637 321.72L203.947 318.935C205.952 316.953 207.969 314.993 209.975 313.022L210.64 313.526L211.029 312.311L210.846 312.174C210.951 312.061 211.062 311.954 211.178 311.853C211.419 311.085 211.659 310.34 211.912 309.561L209.963 311.463C207.916 309.935 205.865 308.388 203.809 306.822C205.815 304.839 207.832 302.88 209.849 300.909L214.009 304.083C214.181 303.705 214.364 303.338 214.536 302.937L210.72 300.026C212.729 298.063 214.742 296.111 216.759 294.17L219.051 295.946C219.326 295.648 219.613 295.362 219.899 295.076L217.607 293.311L223.658 287.489L227.027 290.113L227.44 289.907L228.276 289.552L224.541 286.652C226.557 284.727 228.574 282.79 230.603 280.922L236.757 285.724L235.267 287.134L237.639 286.435L239.049 286.022L238.51 285.61L244.584 279.88L248.458 282.951C248.882 282.79 249.294 282.607 249.718 282.435L245.466 279.054C247.499 277.167 249.531 275.28 251.563 273.393L257.293 277.977C257.603 277.714 257.923 277.473 258.221 277.198L252.491 272.614L258.588 266.998L263.08 270.62C263.252 270.253 263.413 269.875 263.585 269.474L259.471 266.15L265.579 260.569L266.645 261.44C266.794 261.051 266.942 260.661 267.103 260.294L266.473 259.779L267.882 258.507C268.355 257.457 268.903 256.442 269.521 255.47L265.567 259.057C263.512 257.384 261.457 255.722 259.402 254.072L265.521 248.491L271.251 253.166C271.515 252.868 271.79 252.593 272.077 252.307L266.404 247.723C268.428 245.866 270.468 244.017 272.524 242.176L278.689 247.23L276.271 249.522C277.267 249.039 278.298 248.629 279.354 248.296L279.64 248.032L279.801 248.158C280.259 248.032 280.717 247.895 281.187 247.78L280.534 247.241C282.574 245.415 284.618 243.597 286.665 241.786L292.819 246.932L292.716 247.024C293.449 247.024 294.171 247.092 294.893 247.138L294.607 246.898C296.647 245.098 298.698 243.299 300.738 241.523C302.801 243.25 304.856 244.988 306.904 246.737L305.689 247.792H307.408L307.786 247.459L308.199 247.803C308.806 247.803 309.413 247.803 310.032 247.803L308.691 246.657L314.834 241.374C316.885 243.127 318.937 244.904 320.976 246.668L319.624 247.814H321.423L321.87 247.425L322.317 247.814H324.071L322.776 246.668L328.93 241.454L335.061 246.84L333.915 247.757H335.725L335.897 247.608L336.069 247.757H337.811L336.78 246.852L342.945 241.729L347.736 246.004C348.24 245.924 348.744 245.866 349.248 245.82L343.851 240.984C345.906 239.288 347.961 237.596 350.016 235.908C352.056 237.73 354.096 239.575 356.136 241.42L350.898 245.706C351.54 245.706 352.171 245.706 352.801 245.706L357.03 242.268L363.149 247.814L362.931 247.998L363.447 248.238L365.487 248.399L364.937 247.906L371.114 242.944C373.154 244.812 375.182 246.691 377.222 248.582L375.95 249.591L377.577 249.82L378.116 249.396L378.746 249.992L380.717 250.278L378.998 248.685L385.187 243.815L389.771 248.147C390.172 247.998 390.573 247.872 390.917 247.734L385.978 243.15L392.166 238.314L398.251 244.044L394.721 246.783C395.524 246.634 396.337 246.519 397.14 246.439L399.145 244.881L400.612 246.279C401.185 246.279 401.758 246.279 402.331 246.359L400.039 244.182L406.216 239.437L412.301 245.27L409.195 247.643C409.654 247.78 410.124 247.941 410.582 248.112L413.184 246.13C415.109 247.986 417.019 249.847 418.914 251.711L419.131 251.825C420.277 252.49 421.423 253.097 422.501 253.659L420.988 252.192L427.188 247.608L433.239 253.579L431.416 254.931L433.25 255.069L434.11 254.438L434.877 255.195L436.562 255.321L435.015 253.785L441.192 249.201L447.243 255.252L446.257 255.963L449.695 256.192L448.996 255.481L455.173 251.023L460.903 256.856L463.55 256.982L469.154 253.029C470.575 254.496 471.996 255.974 473.429 257.441L475.262 257.544C473.62 255.833 471.973 254.129 470.323 252.433L476.512 248.101L482.528 254.358L477.807 257.636L479.881 257.704L483.284 255.252C484.121 256.134 484.958 257.005 485.783 257.888H486.608L486.883 257.452C485.978 256.513 485.084 255.561 484.19 254.622L489.106 251.241C489.037 250.783 488.991 250.313 488.934 249.854L483.319 253.716C481.313 251.631 479.319 249.545 477.314 247.471L483.502 243.173L488.831 248.766C488.774 248.193 488.728 247.62 488.694 247.058L484.43 242.543L488.797 239.552C488.797 239.013 488.877 238.486 488.934 237.947L483.559 241.638L477.554 235.38L483.743 231.094L489.072 236.675C489.072 236.217 489.175 235.759 489.244 235.289L484.66 230.475L489.61 227.095C489.564 226.602 489.507 226.155 489.461 225.674ZM483.101 218.122L476.89 222.408L470.862 216.196C472.925 214.741 474.999 213.308 477.062 211.876C479.079 213.954 481.092 216.036 483.101 218.122ZM140.722 332.951C138.682 331.53 136.638 330.12 134.591 328.722L140.539 322.408L146.67 326.682L140.722 332.951ZM140.722 334.475L146.853 338.75L140.905 345.018L134.786 340.789C136.78 338.681 138.77 336.576 140.756 334.475H140.722ZM443.094 188.177L449.317 183.696L455.391 189.77L449.179 194.228L443.094 188.177ZM455.219 201.848L449.008 206.306C446.979 204.289 444.962 202.261 442.934 200.255L449.156 195.775L455.219 201.848ZM448.263 194.881L442.028 199.385L435.966 193.368L442.189 188.784L448.263 194.881ZM441.157 200.038L434.923 204.622C432.906 202.628 430.878 200.637 428.838 198.651L435.061 194.067C437.089 196.027 439.129 198.032 441.157 200.038ZM435.084 192.497L428.987 186.492L435.21 181.908L441.318 187.902L435.084 192.497ZM434.19 193.173C432.115 194.686 430.041 196.222 427.967 197.757L421.859 191.821L428.093 187.237C430.121 189.185 432.161 191.168 434.19 193.173ZM427.062 198.41L420.85 202.994L414.754 197.104C416.816 195.576 418.887 194.025 420.965 192.451L427.062 198.41ZM420.976 190.961C418.952 188.99 416.916 187.027 414.868 185.071L421.102 180.418L427.199 186.332L420.976 190.961ZM420.071 191.638L413.86 196.302L407.752 190.457L413.963 185.759C416.003 187.707 418.039 189.666 420.071 191.638ZM406.858 189.609L400.772 183.799L406.995 179.066L413.115 184.899L406.858 189.609ZM405.952 190.297L399.73 195.053L393.61 189.323L399.833 184.532L405.952 190.297ZM392.75 188.452C390.711 186.538 388.659 184.624 386.619 182.722L392.842 177.897L398.973 183.627L392.75 188.452ZM391.857 189.151L385.645 193.987L379.503 188.257L385.714 183.386L391.857 189.151ZM384.728 194.686L378.517 199.568C376.477 197.681 374.434 195.801 372.386 193.93L378.597 189.025L384.728 194.686ZM378.609 187.478L372.455 181.839L378.678 176.934L384.82 182.664L378.609 187.478ZM377.703 188.2C375.629 189.827 373.555 191.477 371.492 193.116L365.338 187.523L371.549 182.561L377.703 188.2ZM370.587 193.826L364.387 198.789L358.233 193.23L364.433 188.245L370.587 193.826ZM364.444 186.71C362.393 184.842 360.341 182.997 358.29 181.152C360.353 179.478 362.423 177.813 364.501 176.155L370.656 181.748C368.558 183.386 366.496 185.048 364.421 186.71H364.444ZM363.539 187.432L357.339 192.44C355.291 190.599 353.236 188.757 351.174 186.916L357.385 181.885C359.413 183.719 361.465 185.575 363.516 187.432H363.539ZM350.28 186.114L344.114 180.647L350.314 175.571L356.491 181.071L350.28 186.114ZM349.386 186.859C347.311 188.543 345.249 190.297 343.174 191.947C341.119 190.129 339.064 188.318 337.009 186.515C339.083 184.796 341.146 183.077 343.22 181.392C345.268 183.203 347.315 185.025 349.363 186.859H349.386ZM342.326 192.68C340.252 194.376 338.189 196.118 336.127 197.803C334.071 196.008 332.016 194.212 329.961 192.417L336.149 187.26L342.326 192.68ZM336.161 185.724L329.984 180.327C332.047 178.608 334.113 176.892 336.184 175.181L342.361 180.59L336.161 185.724ZM335.256 186.469L329.056 191.649C327.004 189.85 324.942 188.073 322.89 186.297L329.079 181.083L335.256 186.469ZM328.162 192.394C326.099 194.124 324.036 195.832 321.973 197.608L315.796 192.291L321.985 187.054L328.162 192.394ZM321.985 185.518L315.796 180.212L321.996 174.975C324.059 176.74 326.118 178.516 328.173 180.304L321.985 185.518ZM321.08 186.286L314.822 191.534C312.775 189.77 310.716 188.012 308.645 186.263L314.834 180.98L321.08 186.286ZM313.997 192.291L307.82 197.585L301.632 192.36L307.809 187.042L313.997 192.291ZM307.809 185.506C305.746 183.757 303.683 182.015 301.62 180.281L307.809 174.952C309.872 176.705 311.934 178.39 313.997 180.212L307.809 185.506ZM306.926 186.274L300.727 191.615L294.538 186.435L300.715 181.06L306.926 186.274ZM299.844 192.382C297.781 194.17 295.726 195.966 293.679 197.769C291.616 196.05 289.549 194.334 287.479 192.623L293.656 187.214L299.844 192.382ZM293.644 185.678L287.433 180.533L293.633 175.135L299.821 180.304L293.644 185.678ZM292.75 186.469C290.688 188.272 288.632 190.079 286.585 191.89L280.385 186.79C282.44 184.972 284.495 183.153 286.551 181.335C288.556 183.054 290.63 184.75 292.693 186.492L292.75 186.469ZM285.68 192.669L279.526 198.135L273.326 193.07L279.48 187.581L285.68 192.669ZM279.48 186.045C277.405 184.349 275.343 182.607 273.268 180.991L279.445 175.502C281.508 177.186 283.582 178.94 285.645 180.59L279.48 186.045ZM278.574 186.847C276.523 188.669 274.472 190.514 272.42 192.348L266.221 187.329L272.375 181.793C274.414 183.467 276.462 185.151 278.517 186.847H278.574ZM250.291 200.244L244.16 205.974C242.097 204.347 240.023 202.731 237.96 201.126C240 199.216 242.044 197.306 244.091 195.396L250.291 200.244ZM244.916 194.514L251.07 188.853L257.282 193.769L251.139 199.407C249.111 197.803 247.036 196.164 244.916 194.514ZM222.111 214.397C220.071 216.33 218.039 218.274 216.014 220.23L209.814 215.543L215.9 209.676L222.111 214.397ZM216.794 208.828C218.826 206.879 220.862 204.939 222.902 203.006L229.102 207.762L222.993 213.492L216.794 208.828ZM194.103 229.329C192.086 231.312 190.057 233.318 188.04 235.323L181.886 230.842L187.949 224.803L194.103 229.329ZM188.785 223.897C190.814 221.892 192.831 219.898 194.859 217.915L201.059 222.499L194.985 228.459C192.968 226.957 190.905 225.456 188.831 223.932L188.785 223.897ZM167.137 245.671L173.326 250.095L167.286 256.215L161.144 251.814C163.153 249.759 165.166 247.711 167.183 245.671H167.137ZM167.137 244.147C165.063 242.669 163 241.213 160.926 239.758L166.988 233.593C169.051 235.071 171.125 236.538 173.188 238.028C171.183 240.056 169.166 242.096 167.16 244.147H167.137ZM168.02 244.789L174.059 238.669L180.248 243.139L174.208 249.224C172.161 247.734 170.105 246.256 168.043 244.789H168.02ZM174.896 237.787C176.913 235.759 178.918 233.73 180.935 231.713L187.135 236.217L181.084 242.256L174.896 237.787ZM180.924 230.189L174.724 225.708L180.775 219.646C182.838 221.136 184.912 222.637 186.975 224.15C185.026 226.155 183.032 228.161 180.993 230.189H180.924ZM180.041 231.071L173.99 237.145L167.802 232.71C169.811 230.67 171.824 228.634 173.841 226.602L180.041 231.071ZM166.897 232.068L160.697 227.679L166.748 221.537L172.948 225.949L166.897 232.068ZM166.026 232.962C164.009 235.017 161.999 237.073 159.998 239.128C157.935 237.669 155.868 236.217 153.798 234.773L159.826 228.585L166.026 232.962ZM160.112 240.652L166.301 245.041L160.284 251.195L154.096 246.852L160.112 240.652ZM160.307 252.719L166.484 257.109C164.482 259.148 162.477 261.2 160.468 263.263C158.42 261.811 156.361 260.363 154.291 258.919L160.307 252.719ZM160.491 264.798C162.553 266.254 164.616 267.709 166.668 269.187C164.662 271.227 162.668 273.279 160.662 275.33L154.497 270.987C156.468 268.912 158.474 266.85 160.468 264.798H160.491ZM161.362 263.893L167.378 257.739L173.566 262.174C171.549 264.198 169.54 266.238 167.538 268.293L161.362 263.893ZM168.238 256.856L174.265 250.748L180.454 255.218L174.414 261.28L168.238 256.856ZM175.114 249.854C177.119 247.826 179.136 245.809 181.153 243.781L187.341 248.296L181.302 254.335L175.114 249.854ZM181.99 242.91L188.04 236.882L194.229 241.466L188.178 247.471L181.99 242.91ZM188.866 236.034L194.928 230.04L201.116 234.624L195.054 240.572L188.866 236.034ZM195.81 229.158C197.839 227.164 199.856 225.181 201.884 223.21L208.084 227.794L202.01 233.707L195.81 229.158ZM202.755 222.339L208.852 216.437C210.93 217.965 212.996 219.52 215.052 221.101L208.966 226.98L202.755 222.339ZM208.84 214.901L202.618 210.317L208.726 204.415L214.937 209.08L208.84 214.901ZM207.946 215.761L201.861 221.674C199.798 220.146 197.732 218.618 195.661 217.09C197.694 215.096 199.722 213.114 201.747 211.142L207.946 215.761ZM194.756 216.414L188.556 211.83L194.63 205.848L200.841 210.432L194.756 216.414ZM193.874 217.285L187.8 223.279L181.6 218.763L187.662 212.735C189.908 214.237 191.937 215.761 194 217.285H193.874ZM180.695 218.11C178.632 216.609 176.557 215.119 174.495 213.641C176.512 211.609 178.532 209.584 180.557 207.567L186.757 212.071L180.695 218.11ZM179.812 218.993C177.795 221.01 175.778 223.038 173.761 225.078L167.561 220.643C169.571 218.603 171.588 216.563 173.612 214.523L179.812 218.993ZM166.668 220.001L160.445 215.612L166.507 209.458L172.718 213.881C170.785 215.906 168.811 217.946 166.794 220.001H166.668ZM165.785 220.895L159.746 227.049L153.546 222.706C155.551 220.631 157.568 218.569 159.574 216.506L165.785 220.895ZM152.64 222.041C150.578 220.597 148.503 219.164 146.441 217.743C148.45 215.658 150.459 213.58 152.469 211.509L158.68 215.841C156.747 217.927 154.776 220.005 152.767 222.075L152.64 222.041ZM152.64 223.577L158.84 227.908L152.824 234.108L146.624 229.811L152.64 223.577ZM152.847 235.644C154.91 237.076 156.972 238.532 159.035 239.987C157.03 242.039 155.024 244.113 153.019 246.187L146.83 241.878C148.985 239.827 150.944 237.741 152.996 235.678L152.847 235.644ZM153.042 247.711L159.23 252.055C157.228 254.117 155.227 256.184 153.225 258.255L147.037 253.946L153.042 247.711ZM153.248 259.779L159.425 264.122C157.423 266.185 155.421 268.251 153.42 270.322C151.372 268.878 149.313 267.442 147.243 266.013L153.248 259.779ZM153.443 271.846L159.62 276.189C157.618 278.252 155.62 280.319 153.626 282.389L147.61 278.172L153.443 271.846ZM153.649 283.913L159.803 288.268L153.821 294.457L147.667 290.148L153.649 283.913ZM154.52 283.02L160.513 276.831C162.576 278.283 164.631 279.746 166.679 281.22L160.685 287.363L154.52 283.02ZM161.396 275.937L167.412 269.783L173.589 274.207C171.584 276.247 169.578 278.275 167.584 280.326L161.396 275.937ZM168.272 268.901C170.277 266.85 172.283 264.821 174.288 262.781C176.351 264.271 178.41 265.765 180.465 267.262C178.46 269.268 176.454 271.296 174.449 273.324L168.272 268.901ZM175.148 261.899L181.176 255.825L187.364 260.34C185.347 262.346 183.33 264.351 181.325 266.38L175.148 261.899ZM182.024 254.954L188.063 248.926L194.252 253.51L188.201 259.492L182.024 254.954ZM188.9 248.078C190.917 246.084 192.934 244.078 194.962 242.096C197.025 243.62 199.088 245.144 201.151 246.68C199.118 248.651 197.098 250.634 195.088 252.628L188.9 248.078ZM195.845 241.202L201.907 235.243L208.095 239.884L202.033 245.798L195.845 241.202ZM202.778 234.326L208.875 228.413L215.063 233.1L208.989 238.967L202.778 234.326ZM209.746 227.565L215.831 221.697L222.042 226.419L216.175 232.332L209.746 227.565ZM216.725 220.849L222.822 215.027L229.021 219.783L223.142 225.662L216.725 220.849ZM223.704 214.179C225.744 212.254 227.772 210.317 229.812 208.449C231.886 210.042 233.949 211.635 236.012 213.251L229.904 218.981L223.704 214.179ZM230.706 207.555L236.826 201.825L243.025 206.65L236.906 212.38C235.084 210.844 233.009 209.24 230.947 207.647L230.706 207.555ZM236.814 200.278L230.603 195.477L236.734 189.747L242.945 194.583L236.814 200.278ZM235.92 201.115L229.801 206.845L223.601 202.078C225.625 200.145 227.661 198.235 229.709 196.348L235.92 201.115ZM222.695 201.413L216.713 196.806L222.833 190.984L229.044 195.729L222.695 201.413ZM221.802 202.261L215.693 208.094C213.631 206.52 211.56 204.958 209.482 203.407L215.59 197.539L221.802 202.261ZM208.588 202.731L202.365 198.09L208.474 192.188L214.696 196.852L208.588 202.731ZM207.706 203.59L201.609 209.504L195.398 204.92C197.43 202.926 199.462 200.943 201.494 198.972L207.706 203.59ZM194.492 204.244L188.281 199.66L194.366 193.677L200.589 198.261L194.492 204.244ZM193.61 205.115C191.578 207.109 189.553 209.106 187.536 211.108L181.325 206.593C183.342 204.576 185.366 202.567 187.399 200.565L193.61 205.115ZM180.42 205.94L174.208 201.47C176.225 199.438 178.246 197.417 180.271 195.408L186.493 199.9L180.42 205.94ZM179.537 206.822L173.475 212.907L167.263 208.472L173.314 202.364L179.537 206.822ZM166.37 207.831L160.147 203.453C162.164 201.39 164.185 199.339 166.209 197.299C168.287 198.766 170.358 200.236 172.42 201.711L166.37 207.831ZM165.487 208.724L159.436 214.89L153.236 210.547C155.246 208.468 157.259 206.402 159.276 204.347L165.487 208.724ZM152.331 209.87L146.36 205.699L152.388 199.476C154.466 200.913 156.541 202.356 158.611 203.808C156.594 205.859 154.577 207.934 152.572 210.008L152.331 209.87ZM151.449 210.776C149.432 212.854 147.422 214.936 145.421 217.021L139.484 212.85L145.512 206.57L151.449 210.776ZM145.444 218.546L151.643 222.843L145.627 229.089L139.427 224.826L145.444 218.546ZM145.65 230.613L151.85 234.922L145.833 241.156L139.645 236.893C141.891 234.933 143.885 232.836 145.891 230.751L145.65 230.613ZM145.868 242.68L152.056 246.989C150.054 249.067 148.053 251.146 146.051 253.224L139.863 248.96C142.017 246.959 144.099 244.911 146.108 242.818L145.868 242.68ZM146.074 254.759C148.137 256.18 150.188 257.613 152.251 259.057C150.257 261.131 148.251 263.205 146.257 265.291C144.194 263.858 142.143 262.437 140.08 261.028C142.235 259.019 144.328 256.975 146.36 254.897L146.074 254.759ZM146.28 266.827C148.343 268.248 150.394 269.68 152.457 271.124C150.455 273.195 148.458 275.273 146.464 277.358C144.412 275.926 142.349 274.505 140.298 273.095L146.28 266.827ZM146.486 278.894C148.549 280.315 150.601 281.759 152.652 283.191L146.67 289.426C144.622 287.997 142.571 286.576 140.516 285.163C142.655 283.153 144.725 281.11 146.727 279.031L146.486 278.894ZM146.704 290.961L152.858 295.27C150.864 297.333 148.874 299.407 146.888 301.493L140.734 297.219C142.922 295.27 144.951 293.173 146.945 291.099L146.704 290.961ZM146.91 303.029C148.966 304.45 151.013 305.882 153.053 307.326C151.07 309.4 149.076 311.475 147.094 313.56L140.951 309.286C143.174 307.338 145.214 305.241 147.151 303.166L146.91 303.029ZM147.781 302.112C149.764 300.038 151.758 297.952 153.752 295.889L159.906 300.232C157.912 302.295 155.922 304.362 153.935 306.432L147.781 302.112ZM154.657 294.995C156.651 292.921 158.657 290.858 160.651 288.795L166.805 293.185L160.811 299.339C158.966 298.021 156.915 296.565 154.864 295.133L154.657 294.995ZM161.533 287.902L167.55 281.748C169.597 283.214 171.649 284.693 173.704 286.183C171.702 288.207 169.701 290.243 167.699 292.291L161.533 287.902ZM168.409 280.865L174.426 274.757L180.74 279.318L174.724 285.38L168.409 280.865ZM175.285 273.874C177.291 271.835 179.296 269.818 181.313 267.801L187.479 272.316L181.451 278.344C179.533 276.93 177.543 275.487 175.48 274.012L175.285 273.874ZM182.161 266.93C184.178 264.913 186.184 262.896 188.201 260.902L194.378 265.486L188.338 271.468C186.436 270.024 184.45 268.557 182.379 267.067L182.161 266.93ZM189.037 260.054L195.088 254.06L201.265 258.644L195.214 264.592L189.037 260.054ZM195.971 253.178L202.022 247.23L208.21 251.871C206.185 253.827 204.165 255.794 202.148 257.773L195.971 253.178ZM202.847 246.37L208.932 240.457L215.12 245.144L209.047 251.012C207.19 249.537 205.227 248.032 203.156 246.497L202.847 246.37ZM209.803 239.609L215.888 233.742L222.077 238.463L216.266 244.422L209.803 239.609ZM216.771 232.894L222.856 227.072L229.056 231.828L222.959 237.615L216.771 232.894ZM223.75 226.235C225.778 224.299 227.818 222.362 229.846 220.505C231.925 222.094 233.991 223.695 236.046 225.307L229.938 231.037C228.185 229.524 226.122 227.943 224.059 226.361L223.75 226.235ZM230.74 219.6L236.849 213.87C238.927 215.474 240.993 217.086 243.048 218.706L236.929 224.436L230.74 219.6ZM237.742 213.033L243.862 207.303L250.062 212.197L243.942 217.858L237.742 213.033ZM244.744 206.501C246.784 204.606 248.832 202.723 250.887 200.851C252.95 202.479 255.024 204.117 257.087 205.768C255.032 207.632 252.988 209.507 250.956 211.395L244.744 206.501ZM251.769 200.026L257.912 194.399L264.123 199.373L257.969 204.966L251.769 200.026ZM258.806 193.586L264.948 188.016L271.16 193.013L265.006 198.559L258.806 193.586ZM264.948 186.481L258.737 181.507L264.891 175.937C266.962 177.595 269.032 179.261 271.102 180.934L264.948 186.481ZM264.066 187.294L257.901 192.875L251.689 187.947L257.843 182.321L264.066 187.294ZM250.795 187.225L244.916 182.458L251.07 176.808L257.293 181.725L250.795 187.225ZM249.901 188.051C247.862 189.93 245.81 191.821 243.77 193.723L237.559 188.876C239.599 186.966 241.643 185.056 243.69 183.146C245.975 184.865 248.148 186.542 250.211 188.177L249.901 188.051ZM236.654 188.165L230.431 183.363C232.471 181.438 234.522 179.524 236.562 177.633L242.785 182.47C241.043 184.475 239.003 186.389 236.963 188.291L236.654 188.165ZM235.76 189.002L229.629 194.732L223.417 189.964L229.537 184.234L235.76 189.002ZM222.512 189.3L216.289 184.578L222.409 178.757L228.632 183.501L222.512 189.3ZM221.618 190.148L215.499 195.981C213.436 194.415 211.365 192.852 209.287 191.294L215.395 185.426L221.618 190.148ZM208.393 190.618L202.514 186.102L208.634 180.2L214.857 184.865L208.393 190.618ZM207.499 191.477L201.403 197.39L195.191 192.806C197.22 190.824 199.248 188.83 201.277 186.859L207.499 191.477ZM194.275 192.13C192.212 190.602 190.141 189.074 188.063 187.546L194.149 181.553L200.371 186.137L194.275 192.13ZM193.392 193.001L187.616 199.098L181.394 194.583L187.479 188.543L193.392 193.001ZM180.179 193.838C178.101 192.31 176.027 190.82 173.956 189.368L180.041 183.295L186.264 187.787L180.179 193.838ZM179.296 194.72L173.223 200.794L167.011 196.371L173.074 190.251L179.296 194.72ZM166.117 195.729L159.883 191.34C161.9 189.292 163.925 187.245 165.957 185.197L172.18 189.598C170.426 191.764 168.444 193.803 166.427 195.855L166.117 195.729ZM165.235 196.623L159.184 202.788L153.236 198.571C155.253 196.497 157.27 194.422 159.287 192.371L165.235 196.623ZM152.056 197.769L145.833 193.46L151.884 187.237L158.107 191.557L152.056 197.769ZM151.174 198.674L145.146 204.92L138.923 200.657C140.94 198.559 142.945 196.462 144.962 194.376C147.346 195.969 149.409 197.402 151.483 198.846L151.174 198.674ZM138.338 200.244L132.127 196.027L138.155 189.712L144.378 193.964C142.349 196.015 140.344 198.112 138.338 200.244ZM138.338 201.78L144.55 206.031L138.522 212.311L132.322 208.094C134.339 205.974 136.344 203.854 138.338 201.745V201.78ZM138.556 213.847L144.756 218.099L138.762 224.31C136.7 222.904 134.633 221.498 132.563 220.093L138.556 213.847ZM138.774 225.914L144.974 230.166L138.957 236.446L132.769 232.229C134.778 230.097 136.787 227.981 138.797 225.88L138.774 225.914ZM138.992 237.97L145.18 242.233C143.175 244.319 141.18 246.416 139.175 248.514L132.998 244.296C135.015 242.142 137.009 240.045 139.015 237.936L138.992 237.97ZM139.209 250.038L145.386 254.301L139.393 260.581L133.216 256.364C135.233 254.209 137.192 252.112 139.232 250.003L139.209 250.038ZM139.484 262.128L145.661 266.391C143.66 268.477 141.662 270.57 139.668 272.671L133.502 268.442L139.484 262.128ZM139.702 274.195L145.868 278.458L139.885 284.739L133.754 280.464C135.703 278.348 137.674 276.239 139.668 274.138L139.702 274.195ZM139.92 286.263L146.074 290.526C144.08 292.612 142.097 294.709 140.103 296.806L133.949 292.577C135.909 290.411 137.891 288.303 139.885 286.194L139.92 286.263ZM140.138 298.33L146.292 302.593C144.298 304.679 142.315 306.776 140.321 308.873L134.178 304.645C136.142 302.498 138.117 300.374 140.103 298.273L140.138 298.33ZM140.355 310.398L146.498 314.661L140.539 320.941C138.499 319.52 136.447 318.11 134.408 316.712C136.344 314.546 138.338 312.437 140.321 310.34L140.355 310.398ZM141.433 321.548L147.392 315.291C149.443 316.712 151.483 318.144 153.534 319.588C151.552 321.663 149.558 323.737 147.575 325.823C145.512 324.348 143.453 322.904 141.398 321.491L141.433 321.548ZM148.309 314.374L154.279 308.151L160.422 312.495L154.382 318.637L148.309 314.374ZM155.185 307.246C157.179 305.183 159.161 303.12 161.167 301.069L167.309 305.447C165.315 307.487 163.321 309.538 161.327 311.601L155.185 307.246ZM162.061 300.164C164.055 298.116 166.052 296.069 168.054 294.021L174.22 298.445C172.214 300.485 170.22 302.513 168.226 304.564L162.061 300.164ZM168.937 293.139C170.931 291.087 172.936 289.059 174.942 287.031L181.096 291.5L175.091 297.562L168.937 293.139ZM182.001 292.142L188.155 296.657L182.139 302.685L175.984 298.216L182.001 292.142ZM182.001 290.618L175.836 286.137L181.852 280.063L188.017 284.578L182.001 290.618ZM182.734 279.158L188.762 273.13L194.928 277.714C192.911 279.7 190.902 281.694 188.9 283.696L182.734 279.158ZM189.61 272.282C191.62 270.28 193.633 268.282 195.65 266.288L201.815 270.872C199.798 272.851 197.785 274.837 195.776 276.831L189.61 272.282ZM196.486 265.406L202.537 259.458L208.714 264.099L202.514 269.978L196.486 265.406ZM203.362 258.598L209.436 252.685C211.499 254.213 213.558 255.775 215.613 257.372L209.482 263.274L203.362 258.598ZM210.307 251.837L216.381 245.981L222.581 250.691C220.541 252.624 218.513 254.564 216.496 256.513L210.307 251.837ZM217.275 245.121C219.292 243.173 221.316 241.233 223.349 239.3L229.537 244.056L223.452 249.854L217.275 245.121ZM224.243 238.463L230.328 232.676L236.516 237.478L230.419 243.208L224.243 238.463ZM237.422 238.177L243.598 243.013L237.502 248.743L231.325 243.941C233.311 241.985 235.321 240.056 237.353 238.154L237.422 238.177ZM237.422 236.641L231.233 231.839C233.258 229.914 235.294 228.004 237.341 226.109L243.53 230.957L237.422 236.641ZM238.224 225.261L244.343 219.531L250.532 224.413C248.492 226.293 246.452 228.203 244.412 230.143L238.224 225.261ZM245.214 218.729L251.357 213.079L257.545 217.996L251.426 223.622L245.214 218.729ZM252.239 212.254L258.37 206.639L264.57 211.601L258.428 217.193L252.239 212.254ZM259.264 205.825C261.304 203.961 263.352 202.104 265.407 200.255C267.47 201.906 269.532 203.579 271.595 205.252L265.453 210.799L259.264 205.825ZM266.301 199.442L272.455 193.895L278.643 198.949L272.42 204.438C270.35 202.758 268.283 201.084 266.221 199.419L266.301 199.442ZM279.549 199.694C281.611 201.375 283.674 203.071 285.737 204.782L279.583 210.237L273.394 205.183L279.549 199.694ZM280.442 198.892L286.608 193.437L292.796 198.571L286.642 203.991L280.442 198.892ZM293.702 199.327C295.764 201.046 297.823 202.769 299.879 204.496L293.725 209.87L287.525 204.736L293.702 199.327ZM294.584 198.536L300.761 193.162L306.949 198.387L300.692 203.682C298.629 201.963 296.567 200.244 294.504 198.514L294.584 198.536ZM307.843 199.155C309.906 200.897 311.957 202.593 314.02 204.404C311.957 206.157 309.906 207.922 307.843 209.699C305.796 207.949 303.737 206.207 301.666 204.473L307.843 199.155ZM308.737 198.376L314.914 193.082C316.977 194.846 319.036 196.615 321.091 198.387L314.822 203.682C312.783 201.879 310.727 200.103 308.657 198.353L308.737 198.376ZM321.996 199.167L328.162 204.496L321.985 209.71L315.819 204.404C317.813 202.639 319.846 200.87 321.916 199.098L321.996 199.167ZM322.902 198.399C324.949 196.657 327.008 194.923 329.079 193.196L335.256 198.582L329.067 203.751L322.902 198.399ZM336.149 199.373L342.303 204.782L336.127 209.916C334.079 208.121 332.024 206.325 329.961 204.53L336.149 199.373ZM337.043 198.617L343.232 193.494L349.397 198.96L343.197 204.049L337.043 198.617ZM344.137 192.749L350.337 187.684L356.491 193.185L350.291 198.227L344.137 192.749ZM357.385 193.987L363.539 199.533C361.468 201.191 359.402 202.861 357.339 204.542L351.185 199.029L357.385 193.987ZM364.433 200.347L370.575 205.928L364.375 210.89C362.336 209.034 360.288 207.185 358.233 205.344L364.433 200.347ZM365.338 199.625L371.538 194.663L377.68 200.301L371.481 205.229L365.338 199.625ZM378.574 201.126L384.694 206.788L378.414 211.704L372.294 205.974C374.357 204.362 376.424 202.738 378.494 201.104L378.574 201.126ZM379.457 200.416L385.68 195.545C387.719 197.436 389.771 199.35 391.811 201.275C389.736 202.88 387.674 204.484 385.599 206.112C383.491 204.186 381.416 202.28 379.377 200.393L379.457 200.416ZM386.573 194.835L392.785 190.01L398.904 195.74L392.705 200.531L386.573 194.835ZM399.798 196.6L405.918 202.398L399.626 207.12L393.507 201.39L399.798 196.6ZM400.704 195.912L406.926 191.168L413.035 197.001L406.823 201.711L400.704 195.912ZM413.917 197.86C415.957 199.809 417.985 201.768 420.025 203.739C417.951 205.286 415.888 206.845 413.814 208.415C411.789 206.459 409.753 204.507 407.706 202.559L413.917 197.86ZM420.908 204.599L427.004 210.512L420.793 215.096L414.708 209.206L420.908 204.599ZM421.801 203.923L428.024 199.339L434.121 205.298L427.91 209.882L421.801 203.923ZM434.992 206.134L441.077 212.139C438.999 213.667 436.925 215.195 434.854 216.723L428.781 210.753L434.992 206.134ZM435.897 205.47L442.109 200.886L448.182 206.937C446.108 208.426 444.045 209.928 441.971 211.44L435.897 205.47ZM449.065 207.865C451.082 209.893 453.11 211.91 455.127 213.95C453.053 215.429 450.99 216.907 448.916 218.408C446.899 216.376 444.878 214.359 442.854 212.357L449.065 207.865ZM449.97 207.212L456.181 202.765C458.198 204.805 460.227 206.845 462.244 208.896C460.173 210.363 458.103 211.834 456.033 213.308C453.935 211.246 451.907 209.217 449.89 207.189L449.97 207.212ZM457.087 202.112L463.31 197.711L469.361 203.877C467.29 205.328 465.22 206.788 463.149 208.255C461.079 206.192 459.031 204.137 457.007 202.089L457.087 202.112ZM456.204 201.241C454.187 199.201 452.159 197.161 450.142 195.144L456.365 190.686L462.427 196.817L456.204 201.241ZM450.234 183.054L456.457 178.608L462.53 184.739L456.308 189.151L450.234 183.054ZM449.34 182.172L443.255 176.121L449.489 171.628L455.574 177.725L449.34 182.172ZM448.435 182.825L442.212 187.317C440.18 185.315 438.147 183.314 436.115 181.312C438.189 179.788 440.275 178.275 442.349 176.728C444.382 178.76 446.41 180.789 448.435 182.813V182.825ZM435.233 180.441L429.124 174.47L435.359 169.886L441.467 175.892C439.393 177.404 437.307 178.905 435.233 180.43V180.441ZM434.339 181.106C432.264 182.619 430.179 184.154 428.104 185.69L421.996 179.754L428.231 175.17L434.339 181.106ZM421.114 178.894C419.074 176.923 417.034 174.963 414.994 173.015L421.228 168.351L427.348 174.276L421.114 178.894ZM420.254 179.616L413.986 184.2L407.866 178.355L414.089 173.657C416.129 175.62 418.184 177.607 420.254 179.616ZM407.018 177.588L400.887 171.789L407.075 167.01L413.195 172.855L407.018 177.588ZM406.113 178.275L399.89 183.031L393.759 177.301L399.982 172.511L406.113 178.275ZM392.865 176.43L386.722 170.7L392.945 165.875L399.088 171.605L392.865 176.43ZM391.971 177.129C389.885 178.734 387.807 180.346 385.737 181.965L379.594 176.235C381.672 174.608 383.75 172.984 385.829 171.365L391.971 177.129ZM378.712 175.456L372.558 169.829C374.628 168.179 376.703 166.54 378.781 164.913L384.923 170.586L378.712 175.456ZM377.795 176.167L371.584 181.094C369.529 179.215 367.477 177.347 365.43 175.49L371.641 170.54C373.673 172.373 375.709 174.23 377.749 176.109L377.795 176.167ZM364.536 174.677L358.37 169.073C360.433 167.4 362.504 165.734 364.582 164.076C366.645 165.933 368.7 167.797 370.747 169.669L364.536 174.677ZM363.631 175.41L357.408 180.407L351.242 174.894L357.465 169.852L363.631 175.41ZM350.348 174.035C348.297 172.201 346.234 170.391 344.171 168.569L350.383 163.492C352.446 165.314 354.508 167.159 356.56 169.004L350.348 174.035ZM349.455 174.768L343.255 179.857L337.066 174.425L343.266 169.302L349.455 174.768ZM336.172 173.622L329.995 168.248L336.195 163.079C338.258 164.875 340.321 166.685 342.384 168.511L336.172 173.622ZM335.267 174.379L329.021 179.616L322.844 174.207L329.044 169.004L335.267 174.379ZM321.985 173.416L315.739 168.156L321.951 162.907L328.139 168.259C326.065 169.955 323.99 171.697 321.939 173.428L321.985 173.416ZM321.08 174.184L314.891 179.433L308.691 174.173C310.754 172.396 312.817 170.643 314.891 168.878L321.08 174.184ZM307.786 173.405C305.723 171.663 303.657 169.925 301.586 168.19L307.786 162.861C309.849 164.603 311.923 166.357 313.986 168.122L307.786 173.405ZM306.904 174.184C304.829 175.949 302.766 177.737 300.704 179.524C298.641 177.782 296.567 176.086 294.504 174.333L300.692 168.958L306.904 174.184ZM293.61 173.588L287.318 168.465L293.495 163.045L299.707 168.225L293.61 173.588ZM292.716 174.367L286.539 179.788L280.328 174.688L286.505 169.233L292.716 174.367ZM279.422 173.955C277.36 172.259 275.285 170.586 273.211 168.901L279.388 163.4L285.599 168.5L279.422 173.955ZM278.529 174.746L272.363 180.258L266.152 175.238C268.199 173.382 270.254 171.537 272.317 169.703L278.529 174.746ZM265.246 174.505L259.024 169.543L265.189 163.962L271.412 168.97L265.246 174.505ZM264.353 175.319L258.187 180.911L251.976 175.972C254.016 174.092 256.067 172.22 258.13 170.356L264.353 175.319ZM251.082 175.319L244.802 170.448C246.849 168.561 248.904 166.674 250.967 164.787C253.042 166.414 255.116 168.064 257.19 169.715C255.127 171.514 253.076 173.393 251.036 175.273L251.082 175.319ZM250.177 176.144L244.034 181.805L237.811 176.957L243.954 171.227L250.177 176.144ZM236.894 176.178L230.672 171.376L236.814 165.646L243.037 170.482L236.894 176.178ZM236.001 177.015L229.869 182.745L223.647 177.977L229.778 172.19L236.001 177.015ZM222.741 177.313C220.663 175.731 218.585 174.161 216.507 172.602L222.638 166.769L228.872 171.594L222.741 177.313ZM221.847 178.161L215.728 183.994L209.505 179.307C211.545 177.347 213.573 175.387 215.625 173.439L221.847 178.161ZM208.611 178.63L202.365 174.046L208.497 168.133L214.719 172.809L208.611 178.63ZM207.717 179.49L201.609 185.403L195.386 180.819L201.483 174.872C203.546 176.422 205.612 177.973 207.683 179.524L207.717 179.49ZM194.481 180.143L188.247 175.559C190.275 173.554 192.315 171.548 194.343 169.566L200.578 174.15L194.481 180.143ZM193.587 181.014L187.49 187.019L181.268 182.504L187.353 176.465L193.587 181.014ZM180.362 181.851C178.292 180.361 176.214 178.875 174.128 177.393L180.213 171.319C182.299 172.847 184.377 174.348 186.447 175.823L180.362 181.851ZM179.468 182.733L173.395 188.818L167.172 184.395C169.2 182.343 171.217 180.304 173.246 178.275L179.468 182.733ZM166.278 183.742C164.192 182.286 162.118 180.819 160.032 179.375L166.117 173.21L172.352 177.633C170.304 179.719 168.268 181.767 166.243 183.776L166.278 183.742ZM165.395 184.647C163.367 186.687 161.35 188.75 159.333 190.801L153.076 186.492L159.127 180.292L165.395 184.647ZM152.205 185.793C150.131 184.349 148.045 182.916 145.971 181.495L152.022 175.25L158.256 179.593L152.205 185.793ZM151.323 186.698L145.214 193.024L139.015 188.784L145.054 182.504C147.14 183.91 149.218 185.335 151.288 186.779L151.323 186.698ZM138.144 188.062L131.921 183.856L137.96 177.53L144.183 181.793L138.144 188.062ZM137.273 188.99C135.256 191.091 133.246 193.2 131.245 195.316L125.022 191.145C127.031 189.013 129.04 186.889 131.05 184.773L137.273 188.99ZM131.268 196.84L137.49 201.058C135.473 203.159 133.468 205.267 131.474 207.384L125.263 203.201L131.268 196.84ZM131.497 208.908C133.571 210.306 135.634 211.704 137.708 213.125C135.706 215.218 133.701 217.327 131.692 219.451L125.492 215.268C127.463 213.228 129.457 211.097 131.462 208.988L131.497 208.908ZM131.726 220.975L137.926 225.181L131.921 231.507L125.732 227.416C127.692 225.284 129.686 223.164 131.692 221.055L131.726 220.975ZM131.955 233.043L138.144 237.248L132.15 243.574L125.962 239.403C127.933 237.325 129.919 235.231 131.921 233.123L131.955 233.043ZM132.173 245.098L138.361 249.316L132.379 255.642L126.191 251.459L132.173 245.098ZM132.402 257.166L138.579 261.383L132.608 267.778L126.443 263.606L132.402 257.166ZM132.631 269.233L138.797 273.45C136.803 275.548 134.82 277.656 132.826 279.765L126.661 275.593C128.62 273.588 130.603 271.422 132.608 269.313L132.631 269.233ZM132.861 281.301L139.015 285.518L133.055 291.832L126.878 287.73C128.849 285.613 130.832 283.497 132.826 281.381L132.861 281.301ZM133.078 293.368L139.232 297.574L133.285 303.9L127.131 299.717L133.078 293.368ZM133.307 305.435L139.461 309.641C137.467 311.742 135.481 313.847 133.502 315.956L127.36 311.773L133.307 305.435ZM133.537 317.491L139.679 321.709L133.754 328.103L127.623 323.92C129.556 321.804 131.516 319.688 133.502 317.571L133.537 317.491ZM133.766 329.559L139.897 333.776C137.911 335.877 135.932 337.982 133.961 340.09L127.83 335.896L133.766 329.559ZM133.984 341.626C136.039 343.024 138.082 344.43 140.115 345.843C138.128 347.944 136.153 350.049 134.19 352.158C132.15 350.748 130.11 349.361 128.07 347.963L133.984 341.626ZM134.213 353.682L140.332 357.911C138.361 360.008 136.379 362.116 134.419 364.225C132.379 362.812 130.339 361.414 128.299 360.031L134.213 353.682ZM135.084 352.765C137.055 350.668 139.026 348.559 141.009 346.462L147.128 350.737L141.192 357.005L135.084 352.765ZM141.868 345.545L147.816 339.277L153.935 343.586C151.949 345.664 149.97 347.742 147.999 349.82L141.868 345.545ZM147.781 337.753L141.65 333.478L147.598 327.221L153.741 331.518C151.724 333.65 149.726 335.755 147.747 337.833L147.781 337.753ZM148.469 326.293C150.452 324.207 152.446 322.133 154.428 320.058L160.571 324.413C158.577 326.464 156.594 328.527 154.6 330.601L148.469 326.293ZM155.345 319.153C157.339 317.09 159.322 315.027 161.316 312.976C163.371 314.435 165.418 315.895 167.458 317.354L161.488 323.508L155.345 319.153ZM162.221 312.082C164.227 310.019 166.221 307.968 168.226 305.928L174.369 310.363L168.387 316.471L162.221 312.082ZM169.097 305.034C171.091 302.994 173.089 300.962 175.091 298.938L181.245 303.407L175.24 309.469L169.097 305.034ZM182.139 304.06L188.293 308.575C186.291 310.585 184.289 312.594 182.287 314.603L175.996 310.26L182.139 304.06ZM183.021 303.178C185.015 301.161 187.017 299.155 189.026 297.161L195.18 301.745L189.163 307.727L183.021 303.178ZM189.003 295.626L182.849 291.11L188.866 285.082C190.928 286.61 192.983 288.138 195.031 289.666C192.888 291.729 190.871 293.723 188.866 295.729L189.003 295.626ZM189.748 284.166L195.776 278.172C197.839 279.7 199.894 281.228 201.941 282.756L195.913 288.715C193.725 287.34 191.662 285.827 189.61 284.315L189.748 284.166ZM196.624 277.29L202.675 271.342L208.84 275.983L202.789 281.885C200.673 280.464 198.584 278.989 196.521 277.461L196.624 277.29ZM203.5 270.482L209.574 264.569L215.739 269.256L209.688 275.124C207.58 273.68 205.494 272.19 203.431 270.654L203.5 270.482ZM210.445 263.721L216.507 257.865L222.684 262.586C220.656 264.512 218.627 266.46 216.61 268.397L210.445 263.721ZM217.389 257.005L223.463 251.184C225.526 252.765 227.585 254.35 229.64 255.94L223.566 261.738L217.389 257.005ZM224.357 250.347C226.374 248.414 228.403 246.485 230.442 244.56L236.551 249.522L230.454 255.252L224.357 250.347ZM237.513 250.061C239.576 251.665 241.627 253.281 243.69 254.908C241.662 256.799 239.622 258.701 237.593 260.638C235.538 259.026 233.483 257.422 231.428 255.825L237.513 250.061ZM238.407 249.235L244.504 243.506L250.681 248.399L244.573 254.049L238.407 249.235ZM244.492 242.004C242.43 240.377 240.367 238.761 238.304 237.157L244.412 231.427L250.601 236.309L244.492 242.004ZM245.295 230.624C247.334 228.737 249.378 226.85 251.426 224.963C253.488 226.591 255.54 228.241 257.603 229.891C255.563 231.759 253.523 233.627 251.483 235.518L245.295 230.624ZM252.297 224.15C254.337 222.27 256.38 220.394 258.428 218.523L264.616 223.496L258.485 229.077L252.297 224.15ZM259.322 217.709L265.453 212.139L271.641 217.136L265.51 222.683L259.322 217.709ZM266.347 211.326L272.42 205.974C274.483 207.647 276.546 209.332 278.609 211.028C276.557 212.85 274.518 214.684 272.466 216.529L266.347 211.326ZM279.583 211.578L285.76 216.666C283.708 218.477 281.669 220.299 279.617 222.133L273.44 217.067L279.583 211.578ZM280.477 210.787L286.631 205.332C288.694 207.044 290.753 208.755 292.808 210.466L286.654 215.887C284.553 214.298 282.482 212.655 280.442 210.959L280.477 210.787ZM293.713 211.211L299.89 216.38L293.736 221.766L287.559 216.62L293.713 211.211ZM294.595 210.432L300.761 205.057L306.949 210.271L300.772 215.612L294.595 210.432ZM307.832 211.039L314.009 216.288L307.843 221.583L301.678 216.357L307.832 211.039ZM308.737 210.271C310.788 208.495 312.851 206.73 314.903 204.977L321.08 210.283L314.822 215.704C312.783 213.996 310.72 212.185 308.668 210.443L308.737 210.271ZM321.973 211.051L328.139 216.391L321.962 221.605L315.808 216.288L321.973 211.051ZM322.879 210.294L329.056 205.08L335.21 210.466L329.033 215.646L322.879 210.294ZM336.115 211.257L342.258 216.678L336.012 222.018L329.869 216.632L336.115 211.257ZM336.997 210.512C339.06 208.793 341.123 207.086 343.186 205.39L349.351 210.856C347.281 212.544 345.214 214.24 343.152 215.944L336.997 210.512ZM344.08 204.645C346.143 202.949 348.209 201.256 350.28 199.568L356.422 205.069L350.234 210.111L344.08 204.645ZM357.224 206.043L363.367 211.601C361.304 213.263 359.241 214.924 357.179 216.609L351.036 211.085L357.224 206.043ZM364.261 212.415L370.392 217.996L364.215 222.958L358.095 217.434C360.158 215.738 362.221 214.065 364.284 212.415H364.261ZM365.246 211.704L371.446 206.753L377.577 212.392C375.507 214.019 373.44 215.658 371.377 217.308L365.246 211.704ZM378.471 213.205C380.511 215.096 382.551 216.976 384.591 218.935C382.528 220.551 380.454 222.178 378.391 223.817L372.271 218.167L378.471 213.205ZM379.354 212.495L385.565 207.624L391.685 213.354L385.485 218.19L379.354 212.495ZM386.459 206.914L392.659 202.089L398.778 207.819L392.578 212.609L386.459 206.914ZM399.626 208.667C401.666 210.592 403.695 212.518 405.735 214.466C403.66 216.036 401.598 217.629 399.535 219.21L393.427 213.48C395.478 211.853 397.541 210.249 399.626 208.667ZM400.532 207.968L406.732 203.235C408.771 205.168 410.808 207.109 412.84 209.057L406.64 213.767L400.532 207.968ZM413.734 209.916L419.819 215.795C417.756 217.342 415.682 218.901 413.619 220.471L407.522 214.615L413.734 209.916ZM420.713 216.655L426.787 222.568L420.598 227.152L414.524 221.307L420.713 216.655ZM421.607 215.979C423.669 214.451 425.74 212.923 427.818 211.395L433.903 217.354L427.692 221.938L421.607 215.979ZM434.774 218.19C436.799 220.184 438.823 222.182 440.848 224.184L434.637 228.768L428.574 222.797C430.626 221.227 432.688 219.726 434.763 218.19H434.774ZM435.68 217.526L441.879 212.942C443.904 214.951 445.925 216.968 447.942 218.993C445.879 220.482 443.805 221.984 441.742 223.496C439.736 221.525 437.685 219.52 435.668 217.526H435.68ZM448.824 219.921C450.849 221.938 452.866 223.962 454.875 225.995L448.687 230.453L442.624 224.402L448.824 219.921ZM449.73 219.268L455.941 214.81C457.958 216.85 459.971 218.893 461.98 220.941L455.78 225.364L449.73 219.268ZM462.863 221.835C464.88 223.882 466.893 225.937 468.902 228C466.839 229.444 464.765 230.911 462.702 232.378C460.701 230.33 458.687 228.283 456.663 226.235L462.863 221.835ZM456.846 214.168C458.909 212.693 460.979 211.226 463.057 209.767L469.097 215.921L462.886 220.299C460.876 218.251 458.859 216.208 456.835 214.168H456.846ZM463.94 209.126C466.014 207.659 468.1 206.203 470.174 204.759L476.214 210.971C474.143 212.407 472.073 213.851 470.002 215.302C467.978 213.24 465.953 211.181 463.928 209.126H463.94ZM464.146 197.058L470.369 192.68L476.408 198.903C474.334 200.336 472.271 201.78 470.197 203.235C468.169 201.161 466.152 199.098 464.135 197.058H464.146ZM463.264 196.153C461.247 194.101 459.218 192.062 457.201 190.022C459.28 188.54 461.354 187.073 463.424 185.621C465.441 187.672 467.47 189.724 469.487 191.787C467.401 193.23 465.327 194.697 463.252 196.153H463.264ZM457.373 177.954L463.608 173.554C465.632 175.601 467.653 177.656 469.67 179.719L463.447 184.085C461.392 182.038 459.364 179.994 457.362 177.954H457.373ZM456.491 177.06L450.406 170.975L456.651 166.517L462.725 172.648L456.491 177.06ZM449.523 170.081C447.499 168.064 445.466 166.051 443.427 164.042L449.672 159.55L455.78 165.635L449.523 170.081ZM448.618 170.735C446.532 172.263 444.454 173.764 442.384 175.238L436.298 169.222L442.533 164.638L448.618 170.735ZM435.393 168.351L429.273 162.426L435.508 157.842C437.548 159.836 439.587 161.842 441.627 163.859C439.542 165.325 437.444 166.827 435.382 168.351H435.393ZM434.499 169.016L428.265 173.6C426.225 171.621 424.181 169.642 422.134 167.663L428.391 163.079L434.499 169.016ZM421.263 166.804C419.223 164.833 417.179 162.873 415.132 160.925L421.377 156.261L427.497 162.185L421.263 166.804ZM420.346 167.48L414.123 172.144L407.992 166.299L414.226 161.601C416.259 163.549 418.295 165.509 420.335 167.48H420.346ZM407.098 165.451L400.956 159.653L407.201 154.908C409.241 156.845 411.293 158.793 413.333 160.753L407.098 165.451ZM406.193 166.139L399.959 170.895C397.919 168.958 395.867 167.044 393.816 165.165C395.902 163.561 397.976 161.956 400.05 160.375L406.193 166.139ZM392.922 164.283L386.78 158.553C388.858 156.933 390.936 155.321 393.014 153.716L399.157 159.446L392.922 164.283ZM392.028 164.993L385.806 169.829L379.64 164.099L385.863 159.229L392.028 164.993ZM378.758 163.32L372.592 157.682C374.67 156.039 376.748 154.404 378.827 152.777C380.878 154.656 382.929 156.558 384.98 158.449L378.758 163.32ZM377.841 164.03L371.618 168.947L365.464 163.354L371.687 158.392L377.841 164.03ZM364.559 162.541C362.511 160.684 360.452 158.835 358.382 156.994C360.468 155.321 362.542 153.648 364.616 151.997L370.782 157.59L364.559 162.541ZM363.653 163.263L357.431 168.271L351.265 162.747C353.328 161.058 355.398 159.381 357.477 157.716L363.653 163.263ZM350.348 161.945L344.16 156.49L350.383 151.401L356.571 156.914L350.348 161.945ZM349.455 162.69L343.232 167.778L337.043 162.346L343.255 157.223C345.333 159.034 347.399 160.856 349.455 162.69ZM336.149 161.544C334.098 159.744 332.024 157.945 329.961 156.157L336.184 151L342.372 156.421L336.149 161.544ZM335.244 162.288L329.044 167.457L322.856 162.117L329.056 156.902L335.244 162.288ZM321.951 161.337L315.751 156.043C317.813 154.278 319.888 152.536 321.951 150.794L328.15 156.134L321.951 161.337ZM321.045 162.094L314.822 167.365L308.623 162.094C310.685 160.329 312.752 158.568 314.822 156.811L321.045 162.094ZM307.74 161.326C305.666 159.572 303.603 157.888 301.529 156.112L307.729 150.771L313.94 156.031C311.866 157.842 309.803 159.561 307.74 161.337V161.326ZM306.846 162.094L300.646 167.434L294.435 162.254L300.623 156.879L306.846 162.094ZM293.541 161.498L287.318 156.375L293.518 150.966C295.593 152.685 297.667 154.404 299.73 156.146C297.667 157.918 295.604 159.706 293.541 161.509V161.498ZM292.636 162.288L286.459 167.709L280.248 162.609C282.299 160.776 284.362 158.965 286.424 157.154C288.464 158.862 290.573 160.581 292.636 162.3V162.288ZM279.296 161.876L273.085 156.834C275.133 154.985 277.192 153.151 279.262 151.333L285.485 156.421L279.296 161.876ZM278.403 162.678C276.34 164.5 274.288 166.345 272.226 168.179L266.003 163.159L272.18 157.624L278.403 162.678ZM265.132 162.426L258.909 157.464C260.964 155.6 263.023 153.739 265.086 151.883L271.309 156.891C269.246 158.736 267.195 160.581 265.132 162.426ZM264.249 163.24C262.187 165.096 260.128 166.957 258.072 168.821L251.85 163.893C253.905 162.013 255.96 160.138 258.015 158.266L264.249 163.24ZM250.956 163.171L244.71 158.3L250.887 152.628L257.121 157.556L250.956 163.171ZM250.05 163.996L243.896 169.726L237.674 164.878L243.828 159.148L250.05 163.996ZM236.768 164.122L230.534 159.32L236.688 153.59L242.922 158.426L236.768 164.122ZM235.874 164.959C233.823 166.861 231.772 168.786 229.732 170.689C227.658 169.084 225.583 167.503 223.498 165.921L229.64 160.134C231.714 161.761 233.8 163.354 235.874 164.97V164.959ZM222.592 165.257C220.518 163.675 218.432 162.105 216.358 160.547C218.398 158.587 220.449 156.65 222.489 154.713L228.735 159.469C226.687 161.44 224.64 163.373 222.592 165.268V165.257ZM221.698 166.105L215.567 171.938L209.39 167.262L215.521 161.395L221.698 166.105ZM208.439 166.575L202.194 161.991L208.325 156.077L214.57 160.753C212.515 162.678 210.471 164.623 208.439 166.586V166.575ZM207.545 167.434L201.437 173.359C199.363 171.812 197.277 170.288 195.203 168.775L201.311 162.816C203.397 164.351 205.475 165.895 207.545 167.445V167.434ZM194.298 168.087L188.052 163.503L194.16 157.51L200.406 162.094L194.298 168.087ZM193.404 168.958C191.364 170.952 189.332 172.954 187.307 174.963L181.073 170.448L187.169 164.42L193.404 168.958ZM180.156 169.795L173.922 165.337C175.946 163.305 177.979 161.28 180.018 159.263C182.093 160.753 184.178 162.254 186.253 163.767L180.156 169.795ZM179.274 170.689L173.188 176.762C171.11 175.28 169.032 173.806 166.954 172.339L173.039 166.219C175.114 167.709 177.199 169.199 179.274 170.7V170.689ZM166.06 171.697L159.814 167.319C161.843 165.268 163.871 163.205 165.9 161.165L172.145 165.578L166.06 171.697ZM165.178 172.591L159.104 178.757L152.87 174.413L158.943 168.213L165.178 172.591ZM151.964 173.737C149.894 172.308 147.816 170.88 145.73 169.451C147.747 167.365 149.768 165.283 151.792 163.205L158.027 167.549L151.964 173.737ZM151.082 174.654L145.031 180.9L138.808 176.636C140.818 174.543 142.831 172.45 144.848 170.356C146.933 171.816 149.011 173.267 151.082 174.711V174.654ZM137.891 176.018L131.669 171.823C133.678 169.707 135.691 167.598 137.708 165.497L143.942 169.737L137.891 176.018ZM137.009 176.946C135.004 179.043 132.987 181.152 130.981 183.272L124.758 179.1C126.768 176.969 128.777 174.845 130.786 172.729L137.009 176.946ZM123.853 178.493L117.619 174.379C119.624 172.236 121.63 170.093 123.647 167.973L129.892 172.133C127.875 174.299 125.858 176.43 123.853 178.55V178.493ZM123.853 180.029L130.087 184.2C128.082 186.309 126.065 188.429 124.059 190.56C121.985 189.174 119.911 187.81 117.836 186.435L123.853 180.029ZM124.094 192.096C126.172 193.471 128.246 194.858 130.316 196.256C128.311 198.365 126.305 200.496 124.3 202.628L118.077 198.491C120.125 196.39 122.138 194.277 124.117 192.153L124.094 192.096ZM124.323 204.163L130.546 208.312L124.586 214.741C122.524 213.354 120.449 211.979 118.387 210.615C120.358 208.476 122.344 206.345 124.346 204.221L124.323 204.163ZM124.586 216.288L130.798 220.448C128.796 222.564 126.794 224.688 124.793 226.82L118.593 222.683L124.586 216.288ZM124.816 228.355C126.89 229.731 128.953 231.117 131.027 232.515L125.022 238.887L118.856 234.739L124.816 228.355ZM125.056 240.411L131.256 244.583L125.263 250.943L119.074 246.806C121.068 244.663 123.062 242.52 125.056 240.354V240.411ZM125.285 252.479C127.348 253.854 129.423 255.252 131.485 256.65C129.484 258.759 127.486 260.879 125.492 263.01C123.444 261.628 121.385 260.249 119.315 258.873C121.309 256.719 123.291 254.587 125.285 252.467V252.479ZM125.526 264.535L131.703 268.717C129.709 270.826 127.719 272.946 125.732 275.078L119.567 270.929L125.526 264.535ZM125.755 276.602C127.818 277.985 129.877 279.375 131.932 280.773L125.962 287.134L119.808 282.997L125.755 276.602ZM125.996 288.669L132.161 292.841L126.202 299.201L120.002 295.053L125.996 288.669ZM126.225 300.725C128.288 302.108 130.343 303.502 132.391 304.908C130.408 307.017 128.414 309.137 126.431 311.268L120.289 307.12L126.225 300.725ZM126.466 312.793L132.62 316.976L126.672 323.336C124.621 321.938 122.581 320.563 120.53 319.187C122.512 317.033 124.483 314.901 126.466 312.781V312.793ZM126.695 324.86C128.746 326.247 130.798 327.633 132.849 329.043L126.878 335.38C124.838 333.99 122.795 332.607 120.747 331.232L126.695 324.86ZM126.936 336.916L133.078 341.099L127.142 347.459L121.022 343.311L126.936 336.916ZM127.165 348.983L133.307 353.166L127.371 359.538C125.343 358.14 123.303 356.765 121.263 355.389C123.234 353.224 125.194 351.092 127.165 348.972V348.983ZM127.406 361.051L133.525 365.268L127.612 371.617L121.504 367.468C123.44 365.268 125.434 363.159 127.406 361.039V361.051ZM134.408 365.841C136.447 367.239 138.476 368.649 140.516 370.07L134.602 376.384C132.574 374.975 130.534 373.576 128.506 372.19C130.465 370.047 132.436 367.938 134.408 365.83V365.841ZM135.267 364.924C137.238 362.816 139.213 360.715 141.192 358.621C143.232 360.042 145.268 361.467 147.3 362.896L141.375 369.164C139.351 367.736 137.315 366.318 135.267 364.913V364.924ZM142.051 357.704L147.988 351.436L154.107 355.756C152.125 357.819 150.142 359.905 148.171 361.979L142.051 357.704ZM148.847 350.542L154.795 344.319L160.926 348.662C158.932 350.725 156.946 352.792 154.967 354.862C152.927 353.395 150.944 351.963 148.847 350.53V350.542ZM154.772 342.783L148.652 338.463C150.631 336.377 152.618 334.299 154.612 332.229L160.743 336.584L154.772 342.783ZM155.471 331.323C157.457 329.261 159.444 327.202 161.43 325.147C163.478 326.598 165.521 328.061 167.561 329.536C165.579 331.576 163.585 333.627 161.602 335.69L155.471 331.323ZM162.347 324.253L168.341 318.099L174.472 322.534L168.49 328.653C166.412 327.179 164.345 325.712 162.29 324.253H162.347ZM169.223 317.216C171.217 315.176 173.211 313.136 175.205 311.119L181.348 315.577L175.354 321.651C173.234 320.161 171.183 318.683 169.143 317.216H169.223ZM182.253 316.231L188.384 320.815C186.39 322.809 184.385 324.826 182.391 326.843L176.156 322.304C178.166 320.28 180.171 318.255 182.173 316.231H182.253ZM183.124 315.348L189.129 309.343C191.18 310.844 193.22 312.369 195.272 313.927C193.27 315.921 191.268 317.919 189.267 319.921L183.124 315.348ZM190 308.472L196.017 302.49L202.171 307.074L196.154 313.022L190 308.472ZM196.005 300.966L189.851 296.382L195.868 290.4L202.033 294.984L196.005 300.966ZM196.75 289.506C198.756 287.512 200.772 285.541 202.789 283.558L208.943 288.142L202.904 294.044L196.75 289.506ZM203.626 282.699L209.688 276.785L215.854 281.472L209.746 287.34C207.698 285.812 205.639 284.284 203.569 282.756L203.626 282.699ZM210.559 275.937L216.61 270.081C218.673 271.64 220.724 273.221 222.776 274.803L216.725 280.613L210.559 275.937ZM217.504 269.222L223.566 263.4C225.629 264.982 227.684 266.571 229.732 268.167L223.67 273.955L217.504 269.222ZM224.449 262.563L230.534 256.776C232.585 258.381 234.648 259.974 236.7 261.589L230.626 267.319L224.449 262.563ZM237.605 262.277L243.759 267.125C241.731 269.015 239.714 270.918 237.685 272.855L231.52 268.041L237.605 262.277ZM238.487 261.452L244.573 255.722C246.635 257.338 248.687 258.965 250.75 260.604C248.71 262.483 246.677 264.37 244.653 266.265C242.544 264.706 240.481 263.091 238.43 261.486L238.487 261.452ZM245.455 254.92L251.563 249.258L257.729 254.186L251.575 259.836L245.455 254.92ZM251.552 247.734L245.363 242.841L251.483 237.18C253.546 238.822 255.605 240.465 257.66 242.107L251.552 247.734ZM252.365 236.366L258.485 230.751L264.673 235.713L258.542 241.305L252.365 236.366ZM259.379 229.925C261.419 228.069 263.459 226.201 265.499 224.356L271.675 229.364L265.544 234.945L259.379 229.925ZM266.392 223.554L272.535 218.007L278.712 223.061L272.569 228.573C270.484 226.915 268.406 225.254 266.335 223.588L266.392 223.554ZM279.617 223.794L285.783 228.894L279.652 234.349C277.589 232.653 275.538 230.968 273.475 229.295C275.476 227.5 277.505 225.678 279.56 223.829L279.617 223.794ZM280.511 223.004L286.654 217.549L292.831 222.683L286.677 228.103L280.511 223.004ZM293.725 223.428C295.787 225.147 297.842 226.873 299.89 228.607L293.747 233.982L287.525 228.894L293.725 223.428ZM294.607 222.648C296.658 220.861 298.71 219.061 300.761 217.285L306.949 222.499L300.784 227.84L294.607 222.648ZM307.832 223.256C309.883 224.998 311.946 226.694 313.997 228.516C311.942 230.273 309.891 232.038 307.843 233.81C305.792 232.057 303.729 230.372 301.678 228.585C303.687 226.82 305.719 225.055 307.774 223.29L307.832 223.256ZM308.726 222.488L314.891 217.205C316.942 218.958 319.005 220.723 321.057 222.499C318.994 224.253 316.942 225.995 314.891 227.759L308.726 222.488ZM321.951 223.267L328.105 228.607L321.939 233.822C319.899 232.042 317.848 230.273 315.785 228.516L321.951 223.267ZM322.856 222.511L329.021 217.308L335.175 222.694L329.01 227.863L322.856 222.511ZM336.069 223.473L342.212 228.894L336.046 234.028L329.904 228.642L336.069 223.473ZM336.963 222.729L343.129 217.606L349.202 223.164L343.014 228.252L336.963 222.729ZM344.034 216.861L350.222 211.796L356.365 217.296L350.176 222.339C348.098 220.528 346.032 218.714 343.977 216.895L344.034 216.861ZM357.224 218.133L363.355 223.68L357.179 228.688L351.013 223.164L357.224 218.133ZM364.249 224.482L370.369 230.074L364.192 235.037L358.072 229.49L364.249 224.482ZM365.155 223.771C367.21 222.113 369.269 220.459 371.332 218.809L377.463 224.448L371.274 229.364L365.155 223.771ZM378.357 225.261C380.397 227.141 382.425 229.032 384.465 230.934C382.402 232.546 380.339 234.173 378.276 235.816C376.244 233.929 374.208 232.049 372.168 230.178C374.216 228.558 376.271 226.919 378.334 225.261H378.357ZM379.239 224.551L385.416 219.726L391.536 225.456L385.347 230.292L379.239 224.551ZM386.333 218.97L392.533 214.156C394.573 216.059 396.601 217.984 398.641 219.886L392.441 224.688L386.333 218.97ZM399.535 220.746L405.631 226.545C403.569 228.115 401.494 229.708 399.432 231.301C397.403 229.364 395.375 227.45 393.335 225.571L399.535 220.746ZM400.429 220.047L406.628 215.314L412.725 221.136L406.537 225.846L400.429 220.047ZM413.619 221.995C415.644 223.943 417.672 225.903 419.704 227.874C417.641 229.421 415.567 230.98 413.504 232.55C411.48 230.594 409.451 228.646 407.419 226.705C409.467 225.108 411.526 223.546 413.596 222.018L413.619 221.995ZM420.587 228.722C422.619 230.693 424.644 232.668 426.661 234.647L420.472 239.231L414.398 233.34L420.587 228.722ZM421.481 228.057C423.543 226.529 425.614 225.001 427.692 223.473L433.754 229.433L427.566 234.017L421.481 228.057ZM434.637 230.258L440.699 236.263L434.499 240.847C432.482 238.841 430.465 236.859 428.437 234.876L434.637 230.258ZM435.531 229.605L441.73 225.021C443.755 227.03 445.776 229.043 447.793 231.06L441.593 235.564C439.591 233.593 437.563 231.606 435.508 229.605H435.531ZM448.675 231.988C450.692 234.005 452.698 236.034 454.715 238.073L448.526 242.531C446.509 240.503 444.492 238.497 442.475 236.481C444.523 234.983 446.582 233.486 448.652 231.988H448.675ZM449.569 231.346L455.769 226.888C457.786 228.917 459.803 230.968 461.808 233.008L455.62 237.432L449.569 231.346ZM462.656 233.902C464.673 235.957 466.683 238.012 468.684 240.067L462.496 244.445C460.49 242.394 458.473 240.354 456.468 238.314L462.656 233.902ZM463.55 233.272C465.613 231.805 467.684 230.346 469.762 228.894L475.778 235.105L469.59 239.437L463.55 233.272ZM463.745 221.193L469.956 216.827L475.984 223.038L469.785 227.37C467.779 225.307 465.773 223.244 463.802 221.193H463.745ZM483.284 206.054C481.199 207.475 479.124 208.896 477.05 210.34C475.045 208.255 473.028 206.192 471.022 204.117C473.085 202.674 475.155 201.237 477.234 199.809C479.285 201.883 481.302 203.957 483.284 206.054ZM483.491 193.987C481.416 195.408 479.331 196.829 477.256 198.273C475.255 196.187 473.242 194.113 471.217 192.05L477.44 187.73L483.491 193.987ZM476.615 186.824L470.392 191.156C468.363 189.093 466.347 187.031 464.318 184.979L470.564 180.613L476.615 186.824ZM476.81 174.757L470.587 179.089L464.501 172.912C466.587 171.445 468.673 169.99 470.759 168.546L476.81 174.757ZM469.865 167.652L463.63 172.007C461.614 169.967 459.585 167.915 457.557 165.887L463.791 161.475C465.816 163.53 467.836 165.589 469.853 167.652H469.865ZM468.719 156.558L463.871 159.996C462.297 158.4 460.723 156.814 459.15 155.241C462.305 155.653 465.472 156.092 468.65 156.558H468.719ZM456.113 154.771L457.625 154.977C457.627 155.054 457.644 155.131 457.676 155.202C457.707 155.273 457.752 155.336 457.809 155.39L462.966 160.581L456.72 164.993L450.635 158.896L455.918 155.126C455.964 155.08 456 155.024 456.021 154.963C456.043 154.901 456.051 154.836 456.044 154.771H456.113ZM454.589 154.564C452.977 155.71 451.364 156.856 449.752 158.002L445.008 153.304C448.163 153.716 451.334 154.137 454.52 154.564H454.589ZM441.983 152.937L443.507 153.132C443.506 153.21 443.521 153.287 443.553 153.358C443.585 153.43 443.632 153.493 443.69 153.545C445.409 155.241 447.128 156.948 448.847 158.667L442.613 163.159L436.505 157.143L441.799 153.304C441.843 153.255 441.875 153.196 441.893 153.132C441.911 153.069 441.914 153.002 441.902 152.937H441.983ZM440.458 152.754L435.611 156.272L430.878 151.688C434.006 151.997 437.181 152.376 440.378 152.754H440.458ZM427.852 151.31L429.365 151.47C429.366 151.548 429.383 151.624 429.414 151.695C429.446 151.766 429.492 151.83 429.548 151.883L434.74 156.937L428.494 161.521C426.454 159.534 424.411 157.556 422.363 155.584L427.658 151.677C427.698 151.625 427.727 151.566 427.743 151.503C427.759 151.44 427.761 151.374 427.749 151.31H427.852ZM426.317 151.138L421.4 154.725C419.819 153.197 418.234 151.669 416.645 150.141C419.819 150.473 423.016 150.806 426.214 151.138H426.317ZM413.711 149.866L415.235 150.015C415.237 150.166 415.299 150.31 415.407 150.416L420.61 155.401L414.364 160.065L408.233 154.221L413.527 150.244C413.567 150.182 413.592 150.111 413.6 150.037C413.608 149.964 413.599 149.889 413.573 149.82L413.711 149.866ZM412.187 149.728C410.574 150.935 408.959 152.15 407.339 153.373L402.572 148.869C405.643 149.144 408.794 149.419 412.049 149.728H412.187ZM399.581 148.582L401.105 148.708C401.105 148.784 401.122 148.859 401.154 148.929C401.185 148.998 401.231 149.059 401.288 149.109L406.491 154.026L400.245 158.77L394.103 153.04L399.397 148.995C399.428 148.889 399.424 148.777 399.386 148.674L399.581 148.582ZM398.045 148.456L393.209 152.169L388.441 147.734C391.444 147.998 394.653 148.239 397.85 148.491L398.045 148.456ZM385.187 147.528L386.711 147.631C386.709 147.708 386.725 147.783 386.756 147.853C386.788 147.922 386.835 147.984 386.894 148.032C388.636 149.637 390.374 151.253 392.109 152.88L385.874 157.739L379.72 152.009L385.003 147.895C385.06 147.852 385.107 147.797 385.138 147.733C385.17 147.669 385.187 147.599 385.187 147.528ZM383.651 147.425C382.031 148.67 380.423 149.927 378.827 151.195L374.036 146.829C377.245 147.047 380.442 147.242 383.651 147.459V147.425ZM370.976 146.691L372.501 146.772C372.5 146.848 372.517 146.923 372.548 146.992C372.58 147.062 372.626 147.123 372.684 147.173L377.91 151.952C375.839 153.579 373.765 155.218 371.687 156.868L365.51 151.264L370.782 147.07C370.84 147.025 370.888 146.968 370.922 146.903C370.956 146.837 370.974 146.765 370.976 146.691ZM369.452 146.611L364.616 150.45C363.012 149.018 361.419 147.574 359.814 146.153C363.023 146.306 366.236 146.458 369.452 146.611ZM356.755 146.015L358.29 146.084C358.291 146.16 358.307 146.235 358.339 146.304C358.371 146.373 358.416 146.435 358.474 146.485L363.699 151.184L357.477 156.18L351.3 150.668C353.053 149.236 354.818 147.815 356.571 146.405C356.629 146.358 356.675 146.298 356.707 146.231C356.738 146.163 356.755 146.09 356.755 146.015ZM355.23 145.958L350.348 149.82L345.558 145.58C348.797 145.702 352.022 145.828 355.23 145.958ZM342.544 145.534H344.057C344.059 145.609 344.077 145.683 344.111 145.75C344.145 145.818 344.193 145.877 344.252 145.924L349.5 150.508L343.266 155.596L337.078 150.164L342.349 145.832C342.448 145.759 342.517 145.653 342.544 145.534ZM340.997 145.534L336.184 149.499L331.371 145.328C334.579 145.351 337.788 145.408 340.997 145.5V145.534ZM328.311 145.236H329.835C329.838 145.31 329.856 145.382 329.888 145.449C329.919 145.516 329.964 145.576 330.018 145.626L335.278 150.21L329.056 155.378C326.993 153.59 324.926 151.806 322.856 150.026L328.116 145.614C328.175 145.57 328.223 145.513 328.256 145.447C328.29 145.382 328.309 145.31 328.311 145.236ZM326.775 145.236L321.962 149.27L317.114 145.144C320.358 145.156 323.566 145.236 326.775 145.236ZM314.077 145.156H315.602C315.604 145.23 315.621 145.303 315.653 145.37C315.684 145.437 315.729 145.497 315.785 145.545L321.057 150.038L314.822 155.275C312.748 153.522 310.685 151.757 308.611 150.015L313.883 145.534C313.941 145.487 313.989 145.427 314.022 145.36C314.056 145.293 314.075 145.219 314.077 145.144V145.156ZM312.542 145.156L307.729 149.258L302.915 145.213C306.124 145.175 309.329 145.152 312.53 145.144L312.542 145.156ZM299.856 145.247H301.38C301.379 145.322 301.395 145.396 301.427 145.463C301.458 145.531 301.505 145.59 301.563 145.637C303.328 147.104 305.085 148.579 306.835 150.061C304.76 151.826 302.698 153.613 300.623 155.39L294.412 150.21L299.672 145.626C299.73 145.578 299.776 145.519 299.808 145.451C299.839 145.384 299.856 145.31 299.856 145.236V145.247ZM298.32 145.247L293.518 149.407L288.694 145.431C291.902 145.362 295.111 145.297 298.32 145.236V145.247ZM285.622 145.511H287.158C287.158 145.586 287.174 145.659 287.206 145.726C287.238 145.794 287.284 145.853 287.341 145.901L292.613 150.244L286.424 155.665L280.202 150.565L285.439 145.981C285.508 145.928 285.562 145.858 285.594 145.777C285.626 145.696 285.636 145.608 285.622 145.523V145.511ZM284.098 145.511C282.494 146.917 280.893 148.33 279.296 149.751C277.681 148.433 276.076 147.127 274.46 145.832C277.669 145.752 280.889 145.649 284.098 145.557V145.511ZM271.4 145.947H272.925C272.927 146.019 272.944 146.09 272.976 146.155C273.008 146.22 273.053 146.278 273.108 146.325L278.391 150.599C276.328 152.433 274.269 154.27 272.214 156.112C270.14 154.427 268.054 152.754 265.98 151.092L271.274 146.382C271.363 146.272 271.408 146.133 271.4 145.992V145.947ZM269.865 146.015C268.272 147.436 266.667 148.869 265.075 150.313L260.238 146.451C263.447 146.321 266.656 146.191 269.865 146.061V146.015ZM257.19 146.611L258.714 146.531C258.714 146.604 258.731 146.676 258.762 146.741C258.794 146.807 258.84 146.864 258.898 146.909L264.192 151.115L258.004 156.707C255.929 155.057 253.844 153.407 251.769 151.78C253.511 150.191 255.257 148.601 257.007 147.012C257.111 146.922 257.177 146.795 257.19 146.657V146.611ZM255.654 146.703L250.876 151.058C249.26 149.797 247.655 148.525 246.039 147.276C249.241 147.1 252.446 146.924 255.654 146.749V146.703ZM242.98 147.471L244.504 147.368C244.504 147.44 244.52 147.512 244.552 147.578C244.584 147.643 244.63 147.701 244.687 147.746L249.982 151.883C247.919 153.762 245.864 155.653 243.816 157.556C241.742 155.928 239.656 154.312 237.582 152.708L242.796 147.872C242.898 147.784 242.964 147.661 242.98 147.528V147.471ZM241.455 147.574C239.851 149.052 238.258 150.519 236.677 151.997L231.829 148.284C235.038 148.063 238.254 147.841 241.478 147.62L241.455 147.574ZM228.781 148.525L230.293 148.399C230.299 148.472 230.318 148.543 230.352 148.608C230.385 148.673 230.432 148.731 230.488 148.777L235.771 152.834C233.716 154.752 231.669 156.662 229.629 158.564L223.383 153.808L228.597 148.903C228.697 148.818 228.762 148.7 228.781 148.571V148.525ZM227.245 148.651L222.478 153.132L217.63 149.476L227.245 148.651ZM214.639 149.797L216.152 149.66C216.153 149.732 216.171 149.803 216.205 149.866C216.239 149.93 216.288 149.985 216.347 150.026L221.63 154.014C219.578 155.963 217.538 157.899 215.499 159.859L209.253 155.172L214.456 150.21C214.547 150.101 214.596 149.962 214.593 149.82L214.639 149.797ZM213.103 149.946L208.359 154.53L203.466 150.966C206.651 150.592 209.849 150.255 213.058 149.958L213.103 149.946ZM200.497 151.23L202.022 151.069C202.021 151.14 202.037 151.211 202.069 151.275C202.101 151.339 202.147 151.394 202.205 151.436L207.499 155.355L201.3 161.28C199.214 159.733 197.14 158.209 195.054 156.696L200.234 151.654C200.29 151.6 200.335 151.537 200.367 151.466C200.398 151.395 200.416 151.319 200.417 151.241L200.497 151.23ZM198.973 151.39L194.229 155.974L189.381 152.444C192.521 152.101 195.692 151.753 198.893 151.401L198.973 151.39ZM186.367 152.857L187.891 152.674C187.891 152.745 187.907 152.815 187.939 152.879C187.97 152.943 188.017 152.998 188.075 153.04L193.369 156.891C191.329 158.885 189.293 160.883 187.261 162.884C185.187 161.383 183.101 159.87 181.015 158.381L186.195 153.269C186.231 153.21 186.254 153.143 186.264 153.075C186.274 153.006 186.27 152.936 186.253 152.868L186.367 152.857ZM184.843 153.04L180.11 157.727L175.263 154.289C178.345 153.854 181.531 153.441 184.728 153.052L184.843 153.04ZM172.237 154.668L173.738 154.461C173.741 154.533 173.759 154.604 173.793 154.667C173.827 154.731 173.875 154.786 173.933 154.828L179.216 158.61L173.016 164.718L166.771 160.294L171.939 155.103C171.997 155.049 172.043 154.983 172.074 154.91C172.106 154.837 172.122 154.758 172.122 154.679L172.237 154.668ZM170.701 154.874L165.842 159.63L160.995 156.192C164.215 155.779 167.401 155.321 170.587 154.885L170.701 154.874ZM158.095 156.673L159.608 156.455C159.606 156.527 159.623 156.597 159.657 156.659C159.692 156.722 159.742 156.774 159.803 156.811L165.097 160.524L158.966 166.701L152.732 162.357L157.866 157.109C157.958 156.992 158.003 156.844 157.992 156.696L158.095 156.673ZM156.583 156.902L151.873 161.715L147.025 158.392C150.142 157.888 153.294 157.395 156.48 156.914L156.583 156.902ZM143.977 158.873L145.478 158.633C145.48 158.703 145.499 158.772 145.533 158.834C145.567 158.895 145.615 158.948 145.673 158.988L150.967 162.621C148.939 164.707 146.922 166.781 144.905 168.878L138.671 164.615C140.382 162.842 142.093 161.07 143.805 159.297C143.88 159.174 143.912 159.029 143.896 158.885L143.977 158.873ZM142.453 159.126C140.882 160.741 139.324 162.369 137.754 163.996L132.918 160.741C136.046 160.203 139.198 159.664 142.372 159.137L142.453 159.126ZM129.847 161.269L131.359 161.005C131.36 161.076 131.379 161.145 131.413 161.207C131.447 161.269 131.495 161.321 131.554 161.36L136.826 164.924C134.809 167.021 132.803 169.142 130.786 171.25L124.552 167.079L129.675 161.693C129.765 161.574 129.813 161.429 129.812 161.28L129.847 161.269ZM128.334 161.532L123.647 166.471L118.822 163.274C121.951 162.69 125.125 162.117 128.299 161.544L128.334 161.532ZM117.023 163.572H117.263C117.263 163.643 117.28 163.713 117.314 163.775C117.348 163.837 117.398 163.89 117.458 163.927L122.741 167.423C120.896 169.371 119.063 171.342 117.218 173.302C117.149 170.081 117.092 166.85 117.023 163.572ZM117.263 175.651L122.993 179.433L117.458 185.346L117.263 175.651ZM117.504 187.707L123.234 191.5L117.71 197.425C117.649 194.208 117.581 190.984 117.504 187.753V187.707ZM117.756 199.774L123.486 203.567C121.653 205.516 119.819 207.475 117.985 209.446L117.756 199.774ZM117.997 211.842C119.899 213.091 121.79 214.363 123.727 215.623L118.226 221.514C118.123 218.328 118.066 215.142 117.997 211.887V211.842ZM118.238 223.897L123.968 227.691L118.478 233.57C118.375 230.395 118.306 227.164 118.238 223.943V223.897ZM118.478 235.965L124.208 239.758C122.375 241.706 120.552 243.666 118.719 245.637C118.627 242.436 118.547 239.227 118.478 236.011V235.965ZM118.73 248.021L124.46 251.814L118.982 257.693C118.898 254.538 118.814 251.329 118.73 248.067V248.021ZM118.971 260.088C120.858 261.349 122.745 262.613 124.632 263.881L119.166 269.749L118.971 260.088ZM119.212 272.144L124.873 275.949L119.406 281.816C119.338 278.63 119.28 275.41 119.212 272.19V272.144ZM119.452 284.211L125.114 288.005L119.647 293.872C119.586 290.679 119.521 287.474 119.452 284.257V284.211ZM119.704 296.279L125.343 300.072L119.899 305.94C119.83 302.746 119.766 299.541 119.704 296.325V296.279ZM119.945 308.335L125.583 312.128C123.765 314.076 121.951 316.032 120.14 317.995C120.048 314.81 120.002 311.605 120.002 308.381L119.945 308.335ZM120.381 330.109C120.312 326.888 120.255 323.668 120.186 320.448C122.065 321.697 123.945 322.969 125.813 324.241L120.381 330.109ZM120.381 332.504L126.007 336.297L120.575 342.165C120.552 338.948 120.503 335.728 120.426 332.504H120.381ZM120.621 344.56L126.248 348.364L120.816 354.232L120.621 344.56ZM120.873 356.616L126.477 360.432C124.678 362.38 122.867 364.328 121.068 366.288L120.873 356.616ZM121.148 368.706L126.752 372.511C124.942 374.459 123.139 376.415 121.343 378.378L121.148 368.706ZM121.584 390.48L121.389 380.808L126.993 384.612C125.19 386.522 123.391 388.478 121.595 390.48H121.584ZM127.83 383.684L121.733 379.547C123.704 377.404 125.664 375.284 127.635 373.164L133.743 377.347L127.83 383.684ZM134.82 388.486L128.723 384.292C130.679 382.168 132.647 380.055 134.625 377.954C136.654 379.352 138.694 380.762 140.722 382.183L134.82 388.486ZM141.582 381.266C139.553 379.845 137.513 378.447 135.485 377.037L141.398 370.734L147.506 375.009C145.535 377.049 143.564 379.115 141.593 381.209L141.582 381.266ZM148.366 374.092L142.258 369.818C144.229 367.72 146.211 365.635 148.183 363.549L154.291 367.869L148.366 374.092ZM155.162 366.964L149.053 362.655C151.025 360.569 153.003 358.495 154.99 356.432L161.098 360.787C159.127 362.781 157.156 364.844 155.173 366.907L155.162 366.964ZM167.928 353.739C165.934 355.779 163.948 357.827 161.969 359.882L155.849 355.527L161.797 349.339C163.86 350.79 165.907 352.238 167.94 353.682L167.928 353.739ZM161.774 347.814L155.654 343.46C157.637 341.385 159.62 339.334 161.614 337.283L167.745 341.66L161.774 347.814ZM168.65 340.778L162.519 336.377C164.505 334.322 166.499 332.275 168.501 330.235L174.632 334.67L168.65 340.778ZM175.526 333.787L169.28 329.284L175.263 323.187L181.405 327.656C179.445 329.673 177.451 331.69 175.457 333.73L175.526 333.787ZM182.551 338.91L176.351 334.326L182.333 328.264L188.464 332.779L182.551 338.91ZM189.427 332.034C187.387 330.506 185.343 328.997 183.296 327.507L189.301 321.491L195.432 326.075L189.427 332.034ZM196.303 325.158L190.172 320.574C192.177 318.568 194.172 316.574 196.177 314.592L202.32 319.176L196.303 325.158ZM209.218 312.437C207.217 314.393 205.211 316.364 203.202 318.351L197.059 313.767L203.076 307.83L209.218 312.437ZM203.053 306.272C201.013 304.744 198.966 303.216 196.91 301.688C198.92 299.709 200.929 297.73 202.938 295.752L209.092 300.336C206.984 302.238 204.978 304.232 202.961 306.215L203.053 306.272ZM209.929 299.511C207.881 297.983 205.826 296.435 203.764 294.869L209.814 288.956L215.98 293.643L209.929 299.511ZM216.805 292.795L210.651 288.108L216.702 282.252L222.879 286.973L216.805 292.795ZM223.738 286.125L217.584 281.392L223.647 275.571L229.801 280.338L223.738 286.125ZM230.695 279.49L224.506 274.734C226.523 272.793 228.548 270.883 230.58 269.004L236.734 273.806L230.695 279.49ZM237.742 285.002L231.588 280.189L237.662 274.459L243.816 279.307L237.742 285.002ZM244.699 278.47L238.522 273.588L244.607 267.858L250.761 272.751C248.733 274.631 246.704 276.522 244.676 278.413L244.699 278.47ZM251.678 271.995L245.501 267.102L251.609 261.44L257.775 266.368C255.719 268.194 253.679 270.051 251.655 271.938L251.678 271.995ZM264.765 259.974L258.668 265.497L252.503 260.569C254.543 258.69 256.571 256.811 258.611 254.954L264.765 259.974ZM258.577 253.464C256.525 251.814 254.463 250.175 252.411 248.548L258.519 242.921L264.696 247.895C262.634 249.682 260.594 251.55 258.554 253.407L258.577 253.464ZM265.579 247.081L259.413 242.107C261.438 240.243 263.474 238.383 265.521 236.526L271.698 241.534L265.579 247.081ZM272.592 240.744L266.415 235.724L272.546 230.189C274.609 231.862 276.661 233.547 278.723 235.243C276.653 237.031 274.602 238.845 272.569 240.686L272.592 240.744ZM279.652 246.531L273.486 241.466L279.617 235.976C281.68 237.657 283.735 239.353 285.783 241.065L279.652 246.531ZM286.677 240.285L280.442 235.128L286.585 229.673L292.75 234.807L286.677 240.285ZM293.736 246.164L287.571 241.019L293.713 235.61C295.776 237.329 297.827 239.048 299.879 240.789C297.804 242.508 295.764 244.308 293.713 246.084L293.736 246.164ZM300.761 240.01C298.713 238.276 296.658 236.549 294.595 234.83L300.75 229.456L306.926 234.681C304.841 236.389 302.789 238.177 300.738 239.953L300.761 240.01ZM307.809 245.992L301.655 240.767L307.809 235.426L313.963 240.686L307.809 245.992ZM308.703 234.67L314.857 229.375L321.011 234.681L314.822 239.873C312.783 238.119 310.731 236.354 308.68 234.624L308.703 234.67ZM321.905 246.004C319.853 244.227 317.802 242.451 315.751 240.698C317.802 238.933 319.853 237.191 321.905 235.449C323.956 237.214 326.007 239.002 328.059 240.789C325.981 242.486 323.922 244.205 321.882 245.946L321.905 246.004ZM322.844 234.624L328.998 229.421C331.05 231.209 333.101 232.997 335.152 234.807C333.09 236.515 331.038 238.245 328.987 239.976L322.844 234.624ZM336.023 246.141C333.972 244.331 331.932 242.531 329.881 240.744L336.046 235.575L342.177 241.007L336.023 246.141ZM343.071 240.274C341.02 238.452 338.98 236.641 336.929 234.842C338.98 233.123 341.043 231.404 343.094 229.719C345.149 231.53 347.201 233.352 349.248 235.186C347.147 236.882 345.069 238.582 343.014 240.285L343.071 240.274ZM344 228.974C346.051 227.267 348.114 225.536 350.176 223.886L356.308 229.398L350.131 234.441L344 228.974ZM351.025 235.243L357.201 230.2L363.333 235.759C361.27 237.42 359.207 239.082 357.156 240.767C355.078 238.964 353.015 237.126 350.967 235.254L351.025 235.243ZM364.1 247.127L357.981 241.569L364.146 236.572C366.186 238.429 368.226 240.285 370.266 242.165L364.1 247.127ZM365.052 235.85C367.114 234.2 369.166 232.538 371.229 230.899L377.348 236.526C375.285 238.169 373.226 239.812 371.171 241.454L365.052 235.85ZM378.162 247.895L372.122 242.256L378.311 237.34L384.408 243.013L378.162 247.895ZM385.244 242.325L379.124 236.595C381.187 234.968 383.254 233.344 385.324 231.725L391.421 237.455L385.244 242.325ZM386.207 231.06L392.395 226.224L398.503 231.954L392.315 236.756L386.207 231.06ZM399.294 243.379C397.262 241.454 395.23 239.544 393.197 237.649L399.386 232.859C401.426 234.784 403.458 236.717 405.482 238.658L399.294 243.379ZM400.291 232.126L406.479 227.381L412.576 233.214L406.376 237.936C404.359 235.988 402.335 234.051 400.303 232.126H400.291ZM407.27 238.784C409.333 237.203 411.396 235.632 413.459 234.074C415.491 236.022 417.515 237.982 419.532 239.953C417.47 241.481 415.407 243.039 413.344 244.629C411.335 242.673 409.314 240.725 407.282 238.784H407.27ZM420.3 251.39L414.238 245.5L420.415 240.835C422.447 242.806 424.472 244.781 426.489 246.76L420.3 251.39ZM421.309 240.171L427.509 235.587C429.541 237.565 431.562 239.556 433.571 241.557C431.508 243.085 429.449 244.613 427.394 246.141L421.309 240.171ZM434.316 252.914L428.265 246.955C430.32 245.427 432.379 243.899 434.442 242.371L440.516 248.376C438.453 249.843 436.39 251.367 434.327 252.88L434.316 252.914ZM435.347 241.718C437.41 240.19 439.473 238.662 441.536 237.134L447.586 243.173L441.398 247.677L435.347 241.718ZM448.32 254.645C446.318 252.62 444.305 250.603 442.281 248.594C444.343 247.081 446.406 245.591 448.469 244.09L454.508 250.175L448.32 254.645ZM449.374 243.448L455.563 238.99C457.58 241.03 459.589 243.074 461.591 245.121C459.528 246.588 457.465 248.055 455.402 249.545C453.408 247.471 451.391 245.442 449.386 243.414L449.374 243.448ZM462.313 256.547C460.311 254.492 458.302 252.448 456.285 250.416L462.473 246.004L468.49 252.169L462.313 256.547ZM469.395 251.55L463.367 245.373C465.43 243.907 467.496 242.451 469.567 241.007L475.583 247.207L469.395 251.55ZM482.666 242.291L476.466 246.577C474.472 244.499 472.466 242.428 470.449 240.365L476.649 236.034L482.666 242.291ZM476.672 234.509C474.67 232.431 472.661 230.361 470.644 228.298C472.718 226.843 474.781 225.399 476.855 223.966C478.861 226.04 480.878 228.126 482.883 230.223L476.672 234.509Z"
            fill="#FFC100"
          />
          <path
            d="M469.246 143.952L468.673 142.405C461.201 138.967 454.554 140.113 450.933 142.348C450.619 142.536 450.316 142.742 450.027 142.967C446.846 139.418 442.89 136.649 438.466 134.874C434.043 133.1 429.27 132.367 424.518 132.733C421.031 132.995 417.603 133.767 414.341 135.025C410.181 131.026 402.755 127.702 393.484 128.149C385.095 128.573 378.827 131.828 375.446 135.426C368.702 131.79 361.184 129.826 353.523 129.696C344.813 129.696 339.461 131.564 337.192 133.948C332.869 131.181 327.953 129.476 322.844 128.974C316.565 128.469 310.272 129.777 304.715 132.745C302.577 130.294 299.881 128.395 296.853 127.209C290.39 124.631 283.823 125.021 278.849 128.264C275.822 130.228 273.573 133.186 272.489 136.63C271.301 133.822 269.307 131.429 266.759 129.754C258.955 124.631 244.687 127.599 238.109 133.478C236.302 134.921 235.051 136.946 234.568 139.208C231.846 136.314 228.537 134.036 224.861 132.527C217.527 129.478 210.319 129.845 205.059 133.535C202.963 135.007 201.266 136.976 200.119 139.265C198.719 137.541 196.994 136.108 195.043 135.048C186.47 130.269 177.062 133.776 171.572 138.234C169.735 139.697 168.158 141.46 166.908 143.448C165.233 142.364 163.378 141.588 161.43 141.156C152.136 138.864 142.922 142.531 137.651 146.966C136.554 145.747 135.172 144.818 133.628 144.262C131.584 143.493 129.368 143.301 127.222 143.705C125.076 144.109 123.082 145.095 121.458 146.554C117.596 149.831 115.567 154.931 116.427 159.252L117.573 159.022C116.794 155.103 118.719 150.439 122.214 147.425C123.685 146.098 125.493 145.201 127.439 144.832C129.385 144.462 131.395 144.633 133.25 145.328C134.619 145.81 135.842 146.635 136.803 147.723C135.842 148.607 134.995 149.608 134.282 150.702C132.964 152.8 132.838 154.691 133.915 155.997C134.224 156.499 134.691 156.884 135.243 157.091C135.795 157.299 136.4 157.317 136.963 157.143C138.487 156.604 139.565 154.564 139.588 152.181C139.605 150.653 139.171 149.153 138.338 147.872C143.45 143.597 152.503 140.159 161.155 142.256C163.003 142.664 164.759 143.41 166.335 144.457C165.037 146.679 164.674 149.325 165.327 151.814C166.312 154.885 167.756 155.172 168.513 155.069C169.876 154.897 170.954 153.212 171.08 151.069C171.121 149.738 170.846 148.416 170.278 147.211C169.711 146.006 168.866 144.952 167.814 144.136C169.014 142.222 170.529 140.525 172.294 139.116C177.474 134.888 186.367 131.553 194.435 136.068C196.424 137.153 198.156 138.654 199.512 140.469C198.568 142.837 198.15 145.383 198.286 147.929C198.469 151.78 199.432 152.719 200.291 152.834C201.151 152.949 202.01 152.135 202.526 150.622C203.02 148.884 203.123 147.057 202.828 145.274C202.532 143.491 201.846 141.795 200.818 140.308C201.887 137.977 203.556 135.972 205.654 134.498C210.582 131.06 217.401 130.716 224.369 133.604C228.256 135.197 231.709 137.691 234.442 140.881C234.525 141.833 234.794 142.76 235.233 143.609C237.364 147.895 238.098 147.757 238.453 147.7C238.616 147.667 238.764 147.58 238.872 147.453C238.98 147.326 239.042 147.167 239.049 147.001C239.141 146.153 238.063 143.437 235.611 140.423C235.611 137.902 237.227 135.839 238.866 134.326C245.18 128.722 258.76 125.857 266.152 130.705C268.941 132.55 271.006 135.303 271.996 138.498C271.786 139.528 271.663 140.575 271.63 141.626C271.446 146.405 272.168 146.565 272.546 146.646C272.741 146.646 273.211 146.714 273.509 145.992C274.132 143.504 274.016 140.887 273.177 138.463C273.558 136.573 274.311 134.778 275.393 133.182C276.476 131.586 277.865 130.222 279.48 129.169C284.133 126.144 290.31 125.731 296.429 128.229C299.243 129.314 301.754 131.059 303.752 133.318C302.27 134.206 301.104 135.537 300.417 137.122C300.039 138.188 299.821 140.274 302.618 142.13C304.91 143.632 306.216 143.448 306.949 143.013C307.426 142.662 307.793 142.182 308.006 141.63C308.219 141.078 308.27 140.476 308.153 139.896C307.849 137.589 306.913 135.412 305.448 133.604C310.755 130.795 316.758 129.57 322.741 130.074C327.636 130.537 332.35 132.16 336.493 134.807C336.2 135.27 336.009 135.789 335.932 136.332C335.703 138.188 337.078 139.77 339.599 140.366C340.848 140.675 341.65 140.595 342.074 140.102C342.233 139.901 342.328 139.658 342.349 139.403C342.369 139.148 342.313 138.893 342.189 138.669C341.212 136.994 339.834 135.588 338.178 134.578C340.138 132.676 344.813 130.808 353.259 130.808H353.523C360.903 130.939 368.148 132.812 374.667 136.274C374.131 136.936 373.67 137.655 373.291 138.417C372.397 140.297 372.375 141.97 373.223 143.15C373.864 144.021 375.24 144.984 378.288 144.594C381.336 144.205 382.047 142.829 381.989 141.787C381.875 140.113 379.778 137.982 376.454 135.965C379.686 132.641 385.622 129.65 393.541 129.249C402.652 128.779 409.379 131.919 413.207 135.449C409.218 137.374 407.935 139.678 407.557 140.629C407.237 141.331 407.124 142.109 407.232 142.872C407.339 143.636 407.663 144.352 408.164 144.938C409.448 146.371 411.74 146.817 414.307 146.084C416.874 145.351 418.341 143.471 417.939 140.893C417.527 138.974 416.582 137.21 415.212 135.804C418.242 134.707 421.407 134.028 424.621 133.787C429.195 133.425 433.791 134.123 438.051 135.829C442.311 137.534 446.119 140.201 449.179 143.62C448.724 144.034 448.359 144.538 448.109 145.1C447.858 145.663 447.727 146.271 447.724 146.886C447.807 147.613 448.095 148.302 448.556 148.87C449.017 149.439 449.631 149.864 450.325 150.095C451.563 150.68 452.468 150.702 453.007 150.152C453.546 149.602 453.729 148.846 452.847 146.955C452.28 145.813 451.584 144.74 450.772 143.758C451.014 143.567 451.267 143.391 451.529 143.231C455.081 141.145 461.751 140.09 469.246 143.952ZM138.453 152.112C138.453 153.969 137.628 155.642 136.597 156.008C136.253 156.075 135.898 156.036 135.578 155.894C135.259 155.753 134.99 155.517 134.809 155.218C133.812 154.003 134.671 152.215 135.267 151.264C135.916 150.284 136.686 149.391 137.559 148.605C138.178 149.668 138.488 150.883 138.453 152.112ZM169.968 150.966C169.876 152.662 169.086 153.808 168.398 153.888C167.71 153.969 166.977 153.029 166.461 151.424C165.899 149.297 166.195 147.033 167.286 145.121C168.153 145.823 168.846 146.716 169.311 147.73C169.777 148.744 170.001 149.851 169.968 150.966ZM201.472 150.21C201.116 151.275 200.646 151.677 200.486 151.654C200.326 151.631 199.604 150.851 199.466 147.826C199.354 145.723 199.646 143.619 200.326 141.626C201.096 142.91 201.595 144.338 201.792 145.822C201.99 147.306 201.88 148.815 201.472 150.255V150.21ZM306.995 139.976C307.075 140.996 306.835 141.741 306.353 142.027C305.872 142.314 304.6 142.027 303.236 141.179C301.601 140.079 301.017 138.853 301.483 137.5C302.113 136.123 303.154 134.974 304.463 134.211C305.819 135.882 306.695 137.891 306.995 140.022V139.976ZM340.768 138.475C340.982 138.727 341.135 139.025 341.215 139.346C341.215 139.346 340.882 139.506 339.874 139.254C337.995 138.773 336.917 137.707 337.078 136.469C337.126 136.111 337.251 135.767 337.444 135.461C338.704 136.303 339.825 137.335 340.768 138.52V138.475ZM380.878 141.913C380.935 142.933 379.445 143.345 378.173 143.506C376.248 143.758 374.827 143.414 374.185 142.531C373.901 141.976 373.768 141.355 373.798 140.732C373.828 140.109 374.021 139.505 374.357 138.979C374.724 138.233 375.178 137.533 375.709 136.893C378.815 138.727 380.763 140.652 380.843 141.901L380.878 141.913ZM416.839 141.179C417.149 143.162 416.186 144.503 414.043 145.076C411.9 145.649 410.044 145.339 409.058 144.239C408.701 143.809 408.474 143.287 408.403 142.733C408.332 142.179 408.42 141.616 408.657 141.11C409.287 139.517 411.018 137.776 414.123 136.377C415.46 137.685 416.394 139.347 416.816 141.168L416.839 141.179ZM451.804 147.528C452.4 148.8 452.285 149.339 452.205 149.43C452.125 149.522 451.746 149.579 450.807 149.132C450.314 148.966 449.875 148.671 449.535 148.278C449.194 147.885 448.965 147.409 448.87 146.898C448.882 146.464 448.981 146.038 449.162 145.644C449.344 145.25 449.603 144.897 449.924 144.606C450.665 145.501 451.296 146.483 451.804 147.528Z"
            fill="#FFC100"
          />
          <path
            d="M272.729 142.944C272.729 143.15 272.729 143.345 272.729 143.528C272.741 143.299 272.741 143.104 272.729 142.944Z"
            fill="#FFC100"
          />
          <g opacity="0.9">
            <path
              opacity="0.9"
              d="M489.461 225.674L483.731 229.57C481.737 227.484 479.732 225.399 477.715 223.313L483.926 219.027L489.301 224.654C489.232 224.069 489.175 223.508 489.106 222.889L484.831 218.408C485.978 217.606 487.124 216.804 488.35 216.013C488.35 215.543 488.247 215.073 488.189 214.603L483.949 217.503L477.921 211.246L484.132 206.96L487.651 210.638C487.502 209.962 487.364 209.286 487.215 208.61L485.038 206.318L486.47 205.344L486.161 204.049L484.155 205.412C482.154 203.311 480.144 201.226 478.127 199.155C480.03 197.834 481.94 196.52 483.857 195.213C483.525 194.067 483.181 192.921 482.826 191.775L478.345 187.134L480.889 185.38C480.763 184.956 480.649 184.544 480.534 184.12L477.554 186.194L471.504 179.994C473.578 178.539 475.652 177.106 477.726 175.662L478.574 176.533L477.921 174.012L477.761 174.127L471.698 167.915L475.675 165.165C475.56 164.741 475.457 164.305 475.343 163.881L470.77 167.01L464.696 160.822L469.979 157.131C470.038 157.089 470.086 157.034 470.119 156.971C470.153 156.907 470.172 156.837 470.174 156.765L471.675 156.994C471.678 157.154 471.744 157.306 471.859 157.418L474.22 159.825C474.025 159.103 473.818 158.381 473.624 157.659L473.211 157.235H473.52L473.211 156.157C354.546 138.024 233.658 140.245 115.739 162.724C117.267 239.33 118.822 315.944 120.403 392.566C121.286 392.44 122.168 392.325 123.062 392.222L121.985 391.488L127.875 385.105L133.984 389.334L132.012 391.443L133.548 391.351L134.866 389.941L136.711 391.225H138.82L135.726 389.07C137.689 386.962 139.656 384.861 141.627 382.767L146.521 386.205L147.529 385.403C145.845 384.257 144.172 383.031 142.487 381.862L148.4 375.605L154.325 379.776L155.299 378.951L149.271 374.7L155.196 368.477L161.304 372.832L155.987 378.367C158.095 376.579 160.193 374.78 162.267 372.946C162.416 372.419 162.576 371.892 162.725 371.365L162.175 371.938L156.067 367.56L162.003 361.372L165.178 363.664L165.625 362.518L162.863 360.524L168.822 354.381L169.246 354.679C169.441 354.324 169.636 353.957 169.842 353.602L169.681 353.487L170.277 352.88C171.476 350.868 172.828 348.952 174.323 347.15L168.799 352.811C166.759 351.329 164.715 349.862 162.668 348.41L168.639 342.256L174.724 346.668C174.987 346.348 175.274 346.061 175.549 345.752L169.498 341.374C171.492 339.334 173.486 337.294 175.48 335.277L181.6 339.735L178.941 342.451C180.608 341.025 182.39 339.741 184.27 338.612L189.358 333.489L191.524 335.105C191.983 334.933 192.452 334.784 192.911 334.624L190.229 332.63L196.234 326.636L202.297 331.22C202.526 330.888 202.755 330.556 202.973 330.212C201.025 328.734 199.065 327.267 197.117 325.811C199.111 323.817 201.116 321.846 203.122 319.875L207.098 322.866C207.282 322.499 207.465 322.133 207.637 321.72L203.947 318.935C205.952 316.953 207.969 314.993 209.975 313.022L210.64 313.526L211.029 312.311L210.846 312.174C210.951 312.061 211.062 311.954 211.178 311.853C211.419 311.085 211.659 310.34 211.912 309.561L209.963 311.463C207.916 309.935 205.865 308.388 203.809 306.822C205.815 304.839 207.832 302.88 209.849 300.909L214.009 304.083C214.181 303.705 214.364 303.338 214.536 302.937L210.72 300.026C212.729 298.063 214.742 296.111 216.759 294.17L219.051 295.946C219.326 295.648 219.613 295.362 219.899 295.076L217.607 293.311L223.658 287.489L227.027 290.113L227.44 289.907L228.276 289.552L224.541 286.652C226.557 284.727 228.574 282.79 230.603 280.922L236.757 285.724L235.267 287.134L237.639 286.435L239.049 286.022L238.51 285.61L244.584 279.88L248.458 282.951C248.882 282.79 249.294 282.607 249.718 282.435L245.466 279.054C247.499 277.167 249.531 275.28 251.563 273.393L257.293 277.977C257.603 277.714 257.923 277.473 258.221 277.198L252.491 272.614L258.588 266.998L263.08 270.62C263.252 270.253 263.413 269.875 263.585 269.474L259.471 266.15L265.579 260.569L266.645 261.44C266.794 261.051 266.942 260.661 267.103 260.294L266.473 259.779L267.882 258.507C268.355 257.457 268.903 256.442 269.521 255.47L265.567 259.057C263.512 257.384 261.457 255.722 259.402 254.072L265.521 248.491L271.251 253.166C271.515 252.868 271.79 252.593 272.077 252.307L266.404 247.723C268.428 245.866 270.468 244.017 272.524 242.176L278.689 247.23L276.271 249.522C277.267 249.039 278.298 248.629 279.354 248.296L279.64 248.032L279.801 248.158C280.259 248.032 280.717 247.895 281.187 247.78L280.534 247.241C282.574 245.415 284.618 243.597 286.665 241.786L292.819 246.932L292.716 247.024C293.449 247.024 294.171 247.092 294.893 247.138L294.607 246.898C296.647 245.098 298.698 243.299 300.738 241.523C302.801 243.25 304.856 244.988 306.904 246.737L305.689 247.792H307.408L307.786 247.459L308.199 247.803C308.806 247.803 309.413 247.803 310.032 247.803L308.691 246.657L314.834 241.374C316.885 243.127 318.937 244.904 320.976 246.668L319.624 247.814H321.423L321.87 247.425L322.317 247.814H324.071L322.776 246.668L328.93 241.454L335.061 246.84L333.915 247.757H335.725L335.897 247.608L336.069 247.757H337.811L336.78 246.852L342.945 241.729L347.736 246.004C348.24 245.924 348.744 245.866 349.248 245.82L343.851 240.984C345.906 239.288 347.961 237.596 350.016 235.908C352.056 237.73 354.096 239.575 356.136 241.42L350.898 245.706C351.54 245.706 352.171 245.706 352.801 245.706L357.03 242.268L363.149 247.814L362.931 247.998L363.447 248.238L365.487 248.399L364.937 247.906L371.114 242.944C373.154 244.812 375.182 246.691 377.222 248.582L375.95 249.591L377.577 249.82L378.116 249.396L378.746 249.992L380.717 250.278L378.998 248.685L385.187 243.815L389.771 248.147C390.172 247.998 390.573 247.872 390.917 247.734L385.978 243.15L392.166 238.314L398.251 244.044L394.721 246.783C395.524 246.634 396.337 246.519 397.14 246.439L399.145 244.881L400.612 246.279C401.185 246.279 401.758 246.279 402.331 246.359L400.039 244.182L406.216 239.437L412.301 245.27L409.195 247.643C409.654 247.78 410.124 247.941 410.582 248.112L413.184 246.13C415.109 247.986 417.019 249.847 418.914 251.711L419.131 251.825C420.277 252.49 421.423 253.097 422.501 253.659L420.988 252.192L427.188 247.608L433.239 253.579L431.416 254.931L433.25 255.069L434.11 254.438L434.877 255.195L436.562 255.321L435.015 253.785L441.192 249.201L447.243 255.252L446.257 255.963L449.695 256.192L448.996 255.481L455.173 251.023L460.903 256.856L463.55 256.982L469.154 253.029C470.575 254.496 471.996 255.974 473.429 257.441L475.262 257.544C473.62 255.833 471.973 254.129 470.323 252.433L476.512 248.101L482.528 254.358L477.807 257.636L479.881 257.704L483.284 255.252C484.121 256.134 484.958 257.005 485.783 257.888H486.608L486.883 257.452C485.978 256.513 485.084 255.561 484.19 254.622L489.106 251.241C489.037 250.783 488.991 250.313 488.934 249.854L483.319 253.716C481.313 251.631 479.319 249.545 477.314 247.471L483.502 243.173L488.831 248.766C488.774 248.193 488.728 247.62 488.694 247.058L484.43 242.543L488.797 239.552C488.797 239.013 488.877 238.486 488.934 237.947L483.559 241.638L477.554 235.38L483.743 231.094L489.072 236.675C489.072 236.217 489.175 235.759 489.244 235.289L484.66 230.475L489.61 227.095C489.564 226.602 489.507 226.155 489.461 225.674ZM483.101 218.122L476.89 222.408L470.862 216.196C472.925 214.741 474.999 213.308 477.062 211.876C479.079 213.954 481.092 216.036 483.101 218.122ZM140.722 332.951C138.682 331.53 136.638 330.12 134.591 328.722L140.539 322.408L146.67 326.682L140.722 332.951ZM140.722 334.475L146.853 338.75L140.905 345.018L134.786 340.789C136.78 338.681 138.77 336.576 140.756 334.475H140.722ZM443.094 188.177L449.317 183.696L455.391 189.77L449.179 194.228L443.094 188.177ZM455.219 201.848L449.008 206.306C446.979 204.289 444.962 202.261 442.934 200.255L449.156 195.775L455.219 201.848ZM448.263 194.881L442.028 199.385L435.966 193.368L442.189 188.784L448.263 194.881ZM441.157 200.038L434.923 204.622C432.906 202.628 430.878 200.637 428.838 198.651L435.061 194.067C437.089 196.027 439.129 198.032 441.157 200.038ZM435.084 192.497L428.987 186.492L435.21 181.908L441.318 187.902L435.084 192.497ZM434.19 193.173C432.115 194.686 430.041 196.222 427.967 197.757L421.859 191.821L428.093 187.237C430.121 189.185 432.161 191.168 434.19 193.173ZM427.062 198.41L420.85 202.994L414.754 197.104C416.816 195.576 418.887 194.025 420.965 192.451L427.062 198.41ZM420.976 190.961C418.952 188.99 416.916 187.027 414.868 185.071L421.102 180.418L427.199 186.332L420.976 190.961ZM420.071 191.638L413.86 196.302L407.752 190.457L413.963 185.759C416.003 187.707 418.039 189.666 420.071 191.638ZM406.858 189.609L400.772 183.799L406.995 179.066L413.115 184.899L406.858 189.609ZM405.952 190.297L399.73 195.053L393.61 189.323L399.833 184.532L405.952 190.297ZM392.75 188.452C390.711 186.538 388.659 184.624 386.619 182.722L392.842 177.897L398.973 183.627L392.75 188.452ZM391.857 189.151L385.645 193.987L379.503 188.257L385.714 183.386L391.857 189.151ZM384.728 194.686L378.517 199.568C376.477 197.681 374.434 195.801 372.386 193.93L378.597 189.025L384.728 194.686ZM378.609 187.478L372.455 181.839L378.678 176.934L384.82 182.664L378.609 187.478ZM377.703 188.2C375.629 189.827 373.555 191.477 371.492 193.116L365.338 187.523L371.549 182.561L377.703 188.2ZM370.587 193.826L364.387 198.789L358.233 193.23L364.433 188.245L370.587 193.826ZM364.444 186.71C362.393 184.842 360.341 182.997 358.29 181.152C360.353 179.478 362.423 177.813 364.501 176.155L370.656 181.748C368.558 183.386 366.496 185.048 364.421 186.71H364.444ZM363.539 187.432L357.339 192.44C355.291 190.599 353.236 188.757 351.174 186.916L357.385 181.885C359.413 183.719 361.465 185.575 363.516 187.432H363.539ZM350.28 186.114L344.114 180.647L350.314 175.571L356.491 181.071L350.28 186.114ZM349.386 186.859C347.311 188.543 345.249 190.297 343.174 191.947C341.119 190.129 339.064 188.318 337.009 186.515C339.083 184.796 341.146 183.077 343.22 181.392C345.268 183.203 347.315 185.025 349.363 186.859H349.386ZM342.326 192.68C340.252 194.376 338.189 196.118 336.127 197.803C334.071 196.008 332.016 194.212 329.961 192.417L336.149 187.26L342.326 192.68ZM336.161 185.724L329.984 180.327C332.047 178.608 334.113 176.892 336.184 175.181L342.361 180.59L336.161 185.724ZM335.256 186.469L329.056 191.649C327.004 189.85 324.942 188.073 322.89 186.297L329.079 181.083L335.256 186.469ZM328.162 192.394C326.099 194.124 324.036 195.832 321.973 197.608L315.796 192.291L321.985 187.054L328.162 192.394ZM321.985 185.518L315.796 180.212L321.996 174.975C324.059 176.74 326.118 178.516 328.173 180.304L321.985 185.518ZM321.08 186.286L314.822 191.534C312.775 189.77 310.716 188.012 308.645 186.263L314.834 180.98L321.08 186.286ZM313.997 192.291L307.82 197.585L301.632 192.36L307.809 187.042L313.997 192.291ZM307.809 185.506C305.746 183.757 303.683 182.015 301.62 180.281L307.809 174.952C309.872 176.705 311.934 178.39 313.997 180.212L307.809 185.506ZM306.926 186.274L300.727 191.615L294.538 186.435L300.715 181.06L306.926 186.274ZM299.844 192.382C297.781 194.17 295.726 195.966 293.679 197.769C291.616 196.05 289.549 194.334 287.479 192.623L293.656 187.214L299.844 192.382ZM293.644 185.678L287.433 180.533L293.633 175.135L299.821 180.304L293.644 185.678ZM292.75 186.469C290.688 188.272 288.632 190.079 286.585 191.89L280.385 186.79C282.44 184.972 284.495 183.153 286.551 181.335C288.556 183.054 290.63 184.75 292.693 186.492L292.75 186.469ZM285.68 192.669L279.526 198.135L273.326 193.07L279.48 187.581L285.68 192.669ZM279.48 186.045C277.405 184.349 275.343 182.607 273.268 180.991L279.445 175.502C281.508 177.186 283.582 178.94 285.645 180.59L279.48 186.045ZM278.574 186.847C276.523 188.669 274.472 190.514 272.42 192.348L266.221 187.329L272.375 181.793C274.414 183.467 276.462 185.151 278.517 186.847H278.574ZM250.291 200.244L244.16 205.974C242.097 204.347 240.023 202.731 237.96 201.126C240 199.216 242.044 197.306 244.091 195.396L250.291 200.244ZM244.916 194.514L251.07 188.853L257.282 193.769L251.139 199.407C249.111 197.803 247.036 196.164 244.916 194.514ZM222.111 214.397C220.071 216.33 218.039 218.274 216.014 220.23L209.814 215.543L215.9 209.676L222.111 214.397ZM216.794 208.828C218.826 206.879 220.862 204.939 222.902 203.006L229.102 207.762L222.993 213.492L216.794 208.828ZM194.103 229.329C192.086 231.312 190.057 233.318 188.04 235.323L181.886 230.842L187.949 224.803L194.103 229.329ZM188.785 223.897C190.814 221.892 192.831 219.898 194.859 217.915L201.059 222.499L194.985 228.459C192.968 226.957 190.905 225.456 188.831 223.932L188.785 223.897ZM167.137 245.671L173.326 250.095L167.286 256.215L161.144 251.814C163.153 249.759 165.166 247.711 167.183 245.671H167.137ZM167.137 244.147C165.063 242.669 163 241.213 160.926 239.758L166.988 233.593C169.051 235.071 171.125 236.538 173.188 238.028C171.183 240.056 169.166 242.096 167.16 244.147H167.137ZM168.02 244.789L174.059 238.669L180.248 243.139L174.208 249.224C172.161 247.734 170.105 246.256 168.043 244.789H168.02ZM174.896 237.787C176.913 235.759 178.918 233.73 180.935 231.713L187.135 236.217L181.084 242.256L174.896 237.787ZM180.924 230.189L174.724 225.708L180.775 219.646C182.838 221.136 184.912 222.637 186.975 224.15C185.026 226.155 183.032 228.161 180.993 230.189H180.924ZM180.041 231.071L173.99 237.145L167.802 232.71C169.811 230.67 171.824 228.634 173.841 226.602L180.041 231.071ZM166.897 232.068L160.697 227.679L166.748 221.537L172.948 225.949L166.897 232.068ZM166.026 232.962C164.009 235.017 161.999 237.073 159.998 239.128C157.935 237.669 155.868 236.217 153.798 234.773L159.826 228.585L166.026 232.962ZM160.112 240.652L166.301 245.041L160.284 251.195L154.096 246.852L160.112 240.652ZM160.307 252.719L166.484 257.109C164.482 259.148 162.477 261.2 160.468 263.263C158.42 261.811 156.361 260.363 154.291 258.919L160.307 252.719ZM160.491 264.798C162.553 266.254 164.616 267.709 166.668 269.187C164.662 271.227 162.668 273.279 160.662 275.33L154.497 270.987C156.468 268.912 158.474 266.85 160.468 264.798H160.491ZM161.362 263.893L167.378 257.739L173.566 262.174C171.549 264.198 169.54 266.238 167.538 268.293L161.362 263.893ZM168.238 256.856L174.265 250.748L180.454 255.218L174.414 261.28L168.238 256.856ZM175.114 249.854C177.119 247.826 179.136 245.809 181.153 243.781L187.341 248.296L181.302 254.335L175.114 249.854ZM181.99 242.91L188.04 236.882L194.229 241.466L188.178 247.471L181.99 242.91ZM188.866 236.034L194.928 230.04L201.116 234.624L195.054 240.572L188.866 236.034ZM195.81 229.158C197.839 227.164 199.856 225.181 201.884 223.21L208.084 227.794L202.01 233.707L195.81 229.158ZM202.755 222.339L208.852 216.437C210.93 217.965 212.996 219.52 215.052 221.101L208.966 226.98L202.755 222.339ZM208.84 214.901L202.618 210.317L208.726 204.415L214.937 209.08L208.84 214.901ZM207.946 215.761L201.861 221.674C199.798 220.146 197.732 218.618 195.661 217.09C197.694 215.096 199.722 213.114 201.747 211.142L207.946 215.761ZM194.756 216.414L188.556 211.83L194.63 205.848L200.841 210.432L194.756 216.414ZM193.874 217.285L187.8 223.279L181.6 218.763L187.662 212.735C189.908 214.237 191.937 215.761 194 217.285H193.874ZM180.695 218.11C178.632 216.609 176.557 215.119 174.495 213.641C176.512 211.609 178.532 209.584 180.557 207.567L186.757 212.071L180.695 218.11ZM179.812 218.993C177.795 221.01 175.778 223.038 173.761 225.078L167.561 220.643C169.571 218.603 171.588 216.563 173.612 214.523L179.812 218.993ZM166.668 220.001L160.445 215.612L166.507 209.458L172.718 213.881C170.785 215.906 168.811 217.946 166.794 220.001H166.668ZM165.785 220.895L159.746 227.049L153.546 222.706C155.551 220.631 157.568 218.569 159.574 216.506L165.785 220.895ZM152.64 222.041C150.578 220.597 148.503 219.164 146.441 217.743C148.45 215.658 150.459 213.58 152.469 211.509L158.68 215.841C156.747 217.927 154.776 220.005 152.767 222.075L152.64 222.041ZM152.64 223.577L158.84 227.908L152.824 234.108L146.624 229.811L152.64 223.577ZM152.847 235.644C154.91 237.076 156.972 238.532 159.035 239.987C157.03 242.039 155.024 244.113 153.019 246.187L146.83 241.878C148.985 239.827 150.944 237.741 152.996 235.678L152.847 235.644ZM153.042 247.711L159.23 252.055C157.228 254.117 155.227 256.184 153.225 258.255L147.037 253.946L153.042 247.711ZM153.248 259.779L159.425 264.122C157.423 266.185 155.421 268.251 153.42 270.322C151.372 268.878 149.313 267.442 147.243 266.013L153.248 259.779ZM153.443 271.846L159.62 276.189C157.618 278.252 155.62 280.319 153.626 282.389L147.61 278.172L153.443 271.846ZM153.649 283.913L159.803 288.268L153.821 294.457L147.667 290.148L153.649 283.913ZM154.52 283.02L160.513 276.831C162.576 278.283 164.631 279.746 166.679 281.22L160.685 287.363L154.52 283.02ZM161.396 275.937L167.412 269.783L173.589 274.207C171.584 276.247 169.578 278.275 167.584 280.326L161.396 275.937ZM168.272 268.901C170.277 266.85 172.283 264.821 174.288 262.781C176.351 264.271 178.41 265.765 180.465 267.262C178.46 269.268 176.454 271.296 174.449 273.324L168.272 268.901ZM175.148 261.899L181.176 255.825L187.364 260.34C185.347 262.346 183.33 264.351 181.325 266.38L175.148 261.899ZM182.024 254.954L188.063 248.926L194.252 253.51L188.201 259.492L182.024 254.954ZM188.9 248.078C190.917 246.084 192.934 244.078 194.962 242.096C197.025 243.62 199.088 245.144 201.151 246.68C199.118 248.651 197.098 250.634 195.088 252.628L188.9 248.078ZM195.845 241.202L201.907 235.243L208.095 239.884L202.033 245.798L195.845 241.202ZM202.778 234.326L208.875 228.413L215.063 233.1L208.989 238.967L202.778 234.326ZM209.746 227.565L215.831 221.697L222.042 226.419L216.175 232.332L209.746 227.565ZM216.725 220.849L222.822 215.027L229.021 219.783L223.142 225.662L216.725 220.849ZM223.704 214.179C225.744 212.254 227.772 210.317 229.812 208.449C231.886 210.042 233.949 211.635 236.012 213.251L229.904 218.981L223.704 214.179ZM230.706 207.555L236.826 201.825L243.025 206.65L236.906 212.38C235.084 210.844 233.009 209.24 230.947 207.647L230.706 207.555ZM236.814 200.278L230.603 195.477L236.734 189.747L242.945 194.583L236.814 200.278ZM235.92 201.115L229.801 206.845L223.601 202.078C225.625 200.145 227.661 198.235 229.709 196.348L235.92 201.115ZM222.695 201.413L216.713 196.806L222.833 190.984L229.044 195.729L222.695 201.413ZM221.802 202.261L215.693 208.094C213.631 206.52 211.56 204.958 209.482 203.407L215.59 197.539L221.802 202.261ZM208.588 202.731L202.365 198.09L208.474 192.188L214.696 196.852L208.588 202.731ZM207.706 203.59L201.609 209.504L195.398 204.92C197.43 202.926 199.462 200.943 201.494 198.972L207.706 203.59ZM194.492 204.244L188.281 199.66L194.366 193.677L200.589 198.261L194.492 204.244ZM193.61 205.115C191.578 207.109 189.553 209.106 187.536 211.108L181.325 206.593C183.342 204.576 185.366 202.567 187.399 200.565L193.61 205.115ZM180.42 205.94L174.208 201.47C176.225 199.438 178.246 197.417 180.271 195.408L186.493 199.9L180.42 205.94ZM179.537 206.822L173.475 212.907L167.263 208.472L173.314 202.364L179.537 206.822ZM166.37 207.831L160.147 203.453C162.164 201.39 164.185 199.339 166.209 197.299C168.287 198.766 170.358 200.236 172.42 201.711L166.37 207.831ZM165.487 208.724L159.436 214.89L153.236 210.547C155.246 208.468 157.259 206.402 159.276 204.347L165.487 208.724ZM152.331 209.87L146.36 205.699L152.388 199.476C154.466 200.913 156.541 202.356 158.611 203.808C156.594 205.859 154.577 207.934 152.572 210.008L152.331 209.87ZM151.449 210.776C149.432 212.854 147.422 214.936 145.421 217.021L139.484 212.85L145.512 206.57L151.449 210.776ZM145.444 218.546L151.643 222.843L145.627 229.089L139.427 224.826L145.444 218.546ZM145.65 230.613L151.85 234.922L145.833 241.156L139.645 236.893C141.891 234.933 143.885 232.836 145.891 230.751L145.65 230.613ZM145.868 242.68L152.056 246.989C150.054 249.067 148.053 251.146 146.051 253.224L139.863 248.96C142.017 246.959 144.099 244.911 146.108 242.818L145.868 242.68ZM146.074 254.759C148.137 256.18 150.188 257.613 152.251 259.057C150.257 261.131 148.251 263.205 146.257 265.291C144.194 263.858 142.143 262.437 140.08 261.028C142.235 259.019 144.328 256.975 146.36 254.897L146.074 254.759ZM146.28 266.827C148.343 268.248 150.394 269.68 152.457 271.124C150.455 273.195 148.458 275.273 146.464 277.358C144.412 275.926 142.349 274.505 140.298 273.095L146.28 266.827ZM146.486 278.894C148.549 280.315 150.601 281.759 152.652 283.191L146.67 289.426C144.622 287.997 142.571 286.576 140.516 285.163C142.655 283.153 144.725 281.11 146.727 279.031L146.486 278.894ZM146.704 290.961L152.858 295.27C150.864 297.333 148.874 299.407 146.888 301.493L140.734 297.219C142.922 295.27 144.951 293.173 146.945 291.099L146.704 290.961ZM146.91 303.029C148.966 304.45 151.013 305.882 153.053 307.326C151.07 309.4 149.076 311.475 147.094 313.56L140.951 309.286C143.174 307.338 145.214 305.241 147.151 303.166L146.91 303.029ZM147.781 302.112C149.764 300.038 151.758 297.952 153.752 295.889L159.906 300.232C157.912 302.295 155.922 304.362 153.935 306.432L147.781 302.112ZM154.657 294.995C156.651 292.921 158.657 290.858 160.651 288.795L166.805 293.185L160.811 299.339C158.966 298.021 156.915 296.565 154.864 295.133L154.657 294.995ZM161.533 287.902L167.55 281.748C169.597 283.214 171.649 284.693 173.704 286.183C171.702 288.207 169.701 290.243 167.699 292.291L161.533 287.902ZM168.409 280.865L174.426 274.757L180.74 279.318L174.724 285.38L168.409 280.865ZM175.285 273.874C177.291 271.835 179.296 269.818 181.313 267.801L187.479 272.316L181.451 278.344C179.533 276.93 177.543 275.487 175.48 274.012L175.285 273.874ZM182.161 266.93C184.178 264.913 186.184 262.896 188.201 260.902L194.378 265.486L188.338 271.468C186.436 270.024 184.45 268.557 182.379 267.067L182.161 266.93ZM189.037 260.054L195.088 254.06L201.265 258.644L195.214 264.592L189.037 260.054ZM195.971 253.178L202.022 247.23L208.21 251.871C206.185 253.827 204.165 255.794 202.148 257.773L195.971 253.178ZM202.847 246.37L208.932 240.457L215.12 245.144L209.047 251.012C207.19 249.537 205.227 248.032 203.156 246.497L202.847 246.37ZM209.803 239.609L215.888 233.742L222.077 238.463L216.266 244.422L209.803 239.609ZM216.771 232.894L222.856 227.072L229.056 231.828L222.959 237.615L216.771 232.894ZM223.75 226.235C225.778 224.299 227.818 222.362 229.846 220.505C231.925 222.094 233.991 223.695 236.046 225.307L229.938 231.037C228.185 229.524 226.122 227.943 224.059 226.361L223.75 226.235ZM230.74 219.6L236.849 213.87C238.927 215.474 240.993 217.086 243.048 218.706L236.929 224.436L230.74 219.6ZM237.742 213.033L243.862 207.303L250.062 212.197L243.942 217.858L237.742 213.033ZM244.744 206.501C246.784 204.606 248.832 202.723 250.887 200.851C252.95 202.479 255.024 204.117 257.087 205.768C255.032 207.632 252.988 209.507 250.956 211.395L244.744 206.501ZM251.769 200.026L257.912 194.399L264.123 199.373L257.969 204.966L251.769 200.026ZM258.806 193.586L264.948 188.016L271.16 193.013L265.006 198.559L258.806 193.586ZM264.948 186.481L258.737 181.507L264.891 175.937C266.962 177.595 269.032 179.261 271.102 180.934L264.948 186.481ZM264.066 187.294L257.901 192.875L251.689 187.947L257.843 182.321L264.066 187.294ZM250.795 187.225L244.916 182.458L251.07 176.808L257.293 181.725L250.795 187.225ZM249.901 188.051C247.862 189.93 245.81 191.821 243.77 193.723L237.559 188.876C239.599 186.966 241.643 185.056 243.69 183.146C245.975 184.865 248.148 186.542 250.211 188.177L249.901 188.051ZM236.654 188.165L230.431 183.363C232.471 181.438 234.522 179.524 236.562 177.633L242.785 182.47C241.043 184.475 239.003 186.389 236.963 188.291L236.654 188.165ZM235.76 189.002L229.629 194.732L223.417 189.964L229.537 184.234L235.76 189.002ZM222.512 189.3L216.289 184.578L222.409 178.757L228.632 183.501L222.512 189.3ZM221.618 190.148L215.499 195.981C213.436 194.415 211.365 192.852 209.287 191.294L215.395 185.426L221.618 190.148ZM208.393 190.618L202.514 186.102L208.634 180.2L214.857 184.865L208.393 190.618ZM207.499 191.477L201.403 197.39L195.191 192.806C197.22 190.824 199.248 188.83 201.277 186.859L207.499 191.477ZM194.275 192.13C192.212 190.602 190.141 189.074 188.063 187.546L194.149 181.553L200.371 186.137L194.275 192.13ZM193.392 193.001L187.616 199.098L181.394 194.583L187.479 188.543L193.392 193.001ZM180.179 193.838C178.101 192.31 176.027 190.82 173.956 189.368L180.041 183.295L186.264 187.787L180.179 193.838ZM179.296 194.72L173.223 200.794L167.011 196.371L173.074 190.251L179.296 194.72ZM166.117 195.729L159.883 191.34C161.9 189.292 163.925 187.245 165.957 185.197L172.18 189.598C170.426 191.764 168.444 193.803 166.427 195.855L166.117 195.729ZM165.235 196.623L159.184 202.788L153.236 198.571C155.253 196.497 157.27 194.422 159.287 192.371L165.235 196.623ZM152.056 197.769L145.833 193.46L151.884 187.237L158.107 191.557L152.056 197.769ZM151.174 198.674L145.146 204.92L138.923 200.657C140.94 198.559 142.945 196.462 144.962 194.376C147.346 195.969 149.409 197.402 151.483 198.846L151.174 198.674ZM138.338 200.244L132.127 196.027L138.155 189.712L144.378 193.964C142.349 196.015 140.344 198.112 138.338 200.244ZM138.338 201.78L144.55 206.031L138.522 212.311L132.322 208.094C134.339 205.974 136.344 203.854 138.338 201.745V201.78ZM138.556 213.847L144.756 218.099L138.762 224.31C136.7 222.904 134.633 221.498 132.563 220.093L138.556 213.847ZM138.774 225.914L144.974 230.166L138.957 236.446L132.769 232.229C134.778 230.097 136.787 227.981 138.797 225.88L138.774 225.914ZM138.992 237.97L145.18 242.233C143.175 244.319 141.18 246.416 139.175 248.514L132.998 244.296C135.015 242.142 137.009 240.045 139.015 237.936L138.992 237.97ZM139.209 250.038L145.386 254.301L139.393 260.581L133.216 256.364C135.233 254.209 137.192 252.112 139.232 250.003L139.209 250.038ZM139.484 262.128L145.661 266.391C143.66 268.477 141.662 270.57 139.668 272.671L133.502 268.442L139.484 262.128ZM139.702 274.195L145.868 278.458L139.885 284.739L133.754 280.464C135.703 278.348 137.674 276.239 139.668 274.138L139.702 274.195ZM139.92 286.263L146.074 290.526C144.08 292.612 142.097 294.709 140.103 296.806L133.949 292.577C135.909 290.411 137.891 288.303 139.885 286.194L139.92 286.263ZM140.138 298.33L146.292 302.593C144.298 304.679 142.315 306.776 140.321 308.873L134.178 304.645C136.142 302.498 138.117 300.374 140.103 298.273L140.138 298.33ZM140.355 310.398L146.498 314.661L140.539 320.941C138.499 319.52 136.447 318.11 134.408 316.712C136.344 314.546 138.338 312.437 140.321 310.34L140.355 310.398ZM141.433 321.548L147.392 315.291C149.443 316.712 151.483 318.144 153.534 319.588C151.552 321.663 149.558 323.737 147.575 325.823C145.512 324.348 143.453 322.904 141.398 321.491L141.433 321.548ZM148.309 314.374L154.279 308.151L160.422 312.495L154.382 318.637L148.309 314.374ZM155.185 307.246C157.179 305.183 159.161 303.12 161.167 301.069L167.309 305.447C165.315 307.487 163.321 309.538 161.327 311.601L155.185 307.246ZM162.061 300.164C164.055 298.116 166.052 296.069 168.054 294.021L174.22 298.445C172.214 300.485 170.22 302.513 168.226 304.564L162.061 300.164ZM168.937 293.139C170.931 291.087 172.936 289.059 174.942 287.031L181.096 291.5L175.091 297.562L168.937 293.139ZM182.001 292.142L188.155 296.657L182.139 302.685L175.984 298.216L182.001 292.142ZM182.001 290.618L175.836 286.137L181.852 280.063L188.017 284.578L182.001 290.618ZM182.734 279.158L188.762 273.13L194.928 277.714C192.911 279.7 190.902 281.694 188.9 283.696L182.734 279.158ZM189.61 272.282C191.62 270.28 193.633 268.282 195.65 266.288L201.815 270.872C199.798 272.851 197.785 274.837 195.776 276.831L189.61 272.282ZM196.486 265.406L202.537 259.458L208.714 264.099L202.514 269.978L196.486 265.406ZM203.362 258.598L209.436 252.685C211.499 254.213 213.558 255.775 215.613 257.372L209.482 263.274L203.362 258.598ZM210.307 251.837L216.381 245.981L222.581 250.691C220.541 252.624 218.513 254.564 216.496 256.513L210.307 251.837ZM217.275 245.121C219.292 243.173 221.316 241.233 223.349 239.3L229.537 244.056L223.452 249.854L217.275 245.121ZM224.243 238.463L230.328 232.676L236.516 237.478L230.419 243.208L224.243 238.463ZM237.422 238.177L243.598 243.013L237.502 248.743L231.325 243.941C233.311 241.985 235.321 240.056 237.353 238.154L237.422 238.177ZM237.422 236.641L231.233 231.839C233.258 229.914 235.294 228.004 237.341 226.109L243.53 230.957L237.422 236.641ZM238.224 225.261L244.343 219.531L250.532 224.413C248.492 226.293 246.452 228.203 244.412 230.143L238.224 225.261ZM245.214 218.729L251.357 213.079L257.545 217.996L251.426 223.622L245.214 218.729ZM252.239 212.254L258.37 206.639L264.57 211.601L258.428 217.193L252.239 212.254ZM259.264 205.825C261.304 203.961 263.352 202.104 265.407 200.255C267.47 201.906 269.532 203.579 271.595 205.252L265.453 210.799L259.264 205.825ZM266.301 199.442L272.455 193.895L278.643 198.949L272.42 204.438C270.35 202.758 268.283 201.084 266.221 199.419L266.301 199.442ZM279.549 199.694C281.611 201.375 283.674 203.071 285.737 204.782L279.583 210.237L273.394 205.183L279.549 199.694ZM280.442 198.892L286.608 193.437L292.796 198.571L286.642 203.991L280.442 198.892ZM293.702 199.327C295.764 201.046 297.823 202.769 299.879 204.496L293.725 209.87L287.525 204.736L293.702 199.327ZM294.584 198.536L300.761 193.162L306.949 198.387L300.692 203.682C298.629 201.963 296.567 200.244 294.504 198.514L294.584 198.536ZM307.843 199.155C309.906 200.897 311.957 202.593 314.02 204.404C311.957 206.157 309.906 207.922 307.843 209.699C305.796 207.949 303.737 206.207 301.666 204.473L307.843 199.155ZM308.737 198.376L314.914 193.082C316.977 194.846 319.036 196.615 321.091 198.387L314.822 203.682C312.783 201.879 310.727 200.103 308.657 198.353L308.737 198.376ZM321.996 199.167L328.162 204.496L321.985 209.71L315.819 204.404C317.813 202.639 319.846 200.87 321.916 199.098L321.996 199.167ZM322.902 198.399C324.949 196.657 327.008 194.923 329.079 193.196L335.256 198.582L329.067 203.751L322.902 198.399ZM336.149 199.373L342.303 204.782L336.127 209.916C334.079 208.121 332.024 206.325 329.961 204.53L336.149 199.373ZM337.043 198.617L343.232 193.494L349.397 198.96L343.197 204.049L337.043 198.617ZM344.137 192.749L350.337 187.684L356.491 193.185L350.291 198.227L344.137 192.749ZM357.385 193.987L363.539 199.533C361.468 201.191 359.402 202.861 357.339 204.542L351.185 199.029L357.385 193.987ZM364.433 200.347L370.575 205.928L364.375 210.89C362.336 209.034 360.288 207.185 358.233 205.344L364.433 200.347ZM365.338 199.625L371.538 194.663L377.68 200.301L371.481 205.229L365.338 199.625ZM378.574 201.126L384.694 206.788L378.414 211.704L372.294 205.974C374.357 204.362 376.424 202.738 378.494 201.104L378.574 201.126ZM379.457 200.416L385.68 195.545C387.719 197.436 389.771 199.35 391.811 201.275C389.736 202.88 387.674 204.484 385.599 206.112C383.491 204.186 381.416 202.28 379.377 200.393L379.457 200.416ZM386.573 194.835L392.785 190.01L398.904 195.74L392.705 200.531L386.573 194.835ZM399.798 196.6L405.918 202.398L399.626 207.12L393.507 201.39L399.798 196.6ZM400.704 195.912L406.926 191.168L413.035 197.001L406.823 201.711L400.704 195.912ZM413.917 197.86C415.957 199.809 417.985 201.768 420.025 203.739C417.951 205.286 415.888 206.845 413.814 208.415C411.789 206.459 409.753 204.507 407.706 202.559L413.917 197.86ZM420.908 204.599L427.004 210.512L420.793 215.096L414.708 209.206L420.908 204.599ZM421.801 203.923L428.024 199.339L434.121 205.298L427.91 209.882L421.801 203.923ZM434.992 206.134L441.077 212.139C438.999 213.667 436.925 215.195 434.854 216.723L428.781 210.753L434.992 206.134ZM435.897 205.47L442.109 200.886L448.182 206.937C446.108 208.426 444.045 209.928 441.971 211.44L435.897 205.47ZM449.065 207.865C451.082 209.893 453.11 211.91 455.127 213.95C453.053 215.429 450.99 216.907 448.916 218.408C446.899 216.376 444.878 214.359 442.854 212.357L449.065 207.865ZM449.97 207.212L456.181 202.765C458.198 204.805 460.227 206.845 462.244 208.896C460.173 210.363 458.103 211.834 456.033 213.308C453.935 211.246 451.907 209.217 449.89 207.189L449.97 207.212ZM457.087 202.112L463.31 197.711L469.361 203.877C467.29 205.328 465.22 206.788 463.149 208.255C461.079 206.192 459.031 204.137 457.007 202.089L457.087 202.112ZM456.204 201.241C454.187 199.201 452.159 197.161 450.142 195.144L456.365 190.686L462.427 196.817L456.204 201.241ZM450.234 183.054L456.457 178.608L462.53 184.739L456.308 189.151L450.234 183.054ZM449.34 182.172L443.255 176.121L449.489 171.628L455.574 177.725L449.34 182.172ZM448.435 182.825L442.212 187.317C440.18 185.315 438.147 183.314 436.115 181.312C438.189 179.788 440.275 178.275 442.349 176.728C444.382 178.76 446.41 180.789 448.435 182.813V182.825ZM435.233 180.441L429.124 174.47L435.359 169.886L441.467 175.892C439.393 177.404 437.307 178.905 435.233 180.43V180.441ZM434.339 181.106C432.264 182.619 430.179 184.154 428.104 185.69L421.996 179.754L428.231 175.17L434.339 181.106ZM421.114 178.894C419.074 176.923 417.034 174.963 414.994 173.015L421.228 168.351L427.348 174.276L421.114 178.894ZM420.254 179.616L413.986 184.2L407.866 178.355L414.089 173.657C416.129 175.62 418.184 177.607 420.254 179.616ZM407.018 177.588L400.887 171.789L407.075 167.01L413.195 172.855L407.018 177.588ZM406.113 178.275L399.89 183.031L393.759 177.301L399.982 172.511L406.113 178.275ZM392.865 176.43L386.722 170.7L392.945 165.875L399.088 171.605L392.865 176.43ZM391.971 177.129C389.885 178.734 387.807 180.346 385.737 181.965L379.594 176.235C381.672 174.608 383.75 172.984 385.829 171.365L391.971 177.129ZM378.712 175.456L372.558 169.829C374.628 168.179 376.703 166.54 378.781 164.913L384.923 170.586L378.712 175.456ZM377.795 176.167L371.584 181.094C369.529 179.215 367.477 177.347 365.43 175.49L371.641 170.54C373.673 172.373 375.709 174.23 377.749 176.109L377.795 176.167ZM364.536 174.677L358.37 169.073C360.433 167.4 362.504 165.734 364.582 164.076C366.645 165.933 368.7 167.797 370.747 169.669L364.536 174.677ZM363.631 175.41L357.408 180.407L351.242 174.894L357.465 169.852L363.631 175.41ZM350.348 174.035C348.297 172.201 346.234 170.391 344.171 168.569L350.383 163.492C352.446 165.314 354.508 167.159 356.56 169.004L350.348 174.035ZM349.455 174.768L343.255 179.857L337.066 174.425L343.266 169.302L349.455 174.768ZM336.172 173.622L329.995 168.248L336.195 163.079C338.258 164.875 340.321 166.685 342.384 168.511L336.172 173.622ZM335.267 174.379L329.021 179.616L322.844 174.207L329.044 169.004L335.267 174.379ZM321.985 173.416L315.739 168.156L321.951 162.907L328.139 168.259C326.065 169.955 323.99 171.697 321.939 173.428L321.985 173.416ZM321.08 174.184L314.891 179.433L308.691 174.173C310.754 172.396 312.817 170.643 314.891 168.878L321.08 174.184ZM307.786 173.405C305.723 171.663 303.657 169.925 301.586 168.19L307.786 162.861C309.849 164.603 311.923 166.357 313.986 168.122L307.786 173.405ZM306.904 174.184C304.829 175.949 302.766 177.737 300.704 179.524C298.641 177.782 296.567 176.086 294.504 174.333L300.692 168.958L306.904 174.184ZM293.61 173.588L287.318 168.465L293.495 163.045L299.707 168.225L293.61 173.588ZM292.716 174.367L286.539 179.788L280.328 174.688L286.505 169.233L292.716 174.367ZM279.422 173.955C277.36 172.259 275.285 170.586 273.211 168.901L279.388 163.4L285.599 168.5L279.422 173.955ZM278.529 174.746L272.363 180.258L266.152 175.238C268.199 173.382 270.254 171.537 272.317 169.703L278.529 174.746ZM265.246 174.505L259.024 169.543L265.189 163.962L271.412 168.97L265.246 174.505ZM264.353 175.319L258.187 180.911L251.976 175.972C254.016 174.092 256.067 172.22 258.13 170.356L264.353 175.319ZM251.082 175.319L244.802 170.448C246.849 168.561 248.904 166.674 250.967 164.787C253.042 166.414 255.116 168.064 257.19 169.715C255.127 171.514 253.076 173.393 251.036 175.273L251.082 175.319ZM250.177 176.144L244.034 181.805L237.811 176.957L243.954 171.227L250.177 176.144ZM236.894 176.178L230.672 171.376L236.814 165.646L243.037 170.482L236.894 176.178ZM236.001 177.015L229.869 182.745L223.647 177.977L229.778 172.19L236.001 177.015ZM222.741 177.313C220.663 175.731 218.585 174.161 216.507 172.602L222.638 166.769L228.872 171.594L222.741 177.313ZM221.847 178.161L215.728 183.994L209.505 179.307C211.545 177.347 213.573 175.387 215.625 173.439L221.847 178.161ZM208.611 178.63L202.365 174.046L208.497 168.133L214.719 172.809L208.611 178.63ZM207.717 179.49L201.609 185.403L195.386 180.819L201.483 174.872C203.546 176.422 205.612 177.973 207.683 179.524L207.717 179.49ZM194.481 180.143L188.247 175.559C190.275 173.554 192.315 171.548 194.343 169.566L200.578 174.15L194.481 180.143ZM193.587 181.014L187.49 187.019L181.268 182.504L187.353 176.465L193.587 181.014ZM180.362 181.851C178.292 180.361 176.214 178.875 174.128 177.393L180.213 171.319C182.299 172.847 184.377 174.348 186.447 175.823L180.362 181.851ZM179.468 182.733L173.395 188.818L167.172 184.395C169.2 182.343 171.217 180.304 173.246 178.275L179.468 182.733ZM166.278 183.742C164.192 182.286 162.118 180.819 160.032 179.375L166.117 173.21L172.352 177.633C170.304 179.719 168.268 181.767 166.243 183.776L166.278 183.742ZM165.395 184.647C163.367 186.687 161.35 188.75 159.333 190.801L153.076 186.492L159.127 180.292L165.395 184.647ZM152.205 185.793C150.131 184.349 148.045 182.916 145.971 181.495L152.022 175.25L158.256 179.593L152.205 185.793ZM151.323 186.698L145.214 193.024L139.015 188.784L145.054 182.504C147.14 183.91 149.218 185.335 151.288 186.779L151.323 186.698ZM138.144 188.062L131.921 183.856L137.96 177.53L144.183 181.793L138.144 188.062ZM137.273 188.99C135.256 191.091 133.246 193.2 131.245 195.316L125.022 191.145C127.031 189.013 129.04 186.889 131.05 184.773L137.273 188.99ZM131.268 196.84L137.49 201.058C135.473 203.159 133.468 205.267 131.474 207.384L125.263 203.201L131.268 196.84ZM131.497 208.908C133.571 210.306 135.634 211.704 137.708 213.125C135.706 215.218 133.701 217.327 131.692 219.451L125.492 215.268C127.463 213.228 129.457 211.097 131.462 208.988L131.497 208.908ZM131.726 220.975L137.926 225.181L131.921 231.507L125.732 227.416C127.692 225.284 129.686 223.164 131.692 221.055L131.726 220.975ZM131.955 233.043L138.144 237.248L132.15 243.574L125.962 239.403C127.933 237.325 129.919 235.231 131.921 233.123L131.955 233.043ZM132.173 245.098L138.361 249.316L132.379 255.642L126.191 251.459L132.173 245.098ZM132.402 257.166L138.579 261.383L132.608 267.778L126.443 263.606L132.402 257.166ZM132.631 269.233L138.797 273.45C136.803 275.548 134.82 277.656 132.826 279.765L126.661 275.593C128.62 273.588 130.603 271.422 132.608 269.313L132.631 269.233ZM132.861 281.301L139.015 285.518L133.055 291.832L126.878 287.73C128.849 285.613 130.832 283.497 132.826 281.381L132.861 281.301ZM133.078 293.368L139.232 297.574L133.285 303.9L127.131 299.717L133.078 293.368ZM133.307 305.435L139.461 309.641C137.467 311.742 135.481 313.847 133.502 315.956L127.36 311.773L133.307 305.435ZM133.537 317.491L139.679 321.709L133.754 328.103L127.623 323.92C129.556 321.804 131.516 319.688 133.502 317.571L133.537 317.491ZM133.766 329.559L139.897 333.776C137.911 335.877 135.932 337.982 133.961 340.09L127.83 335.896L133.766 329.559ZM133.984 341.626C136.039 343.024 138.082 344.43 140.115 345.843C138.128 347.944 136.153 350.049 134.19 352.158C132.15 350.748 130.11 349.361 128.07 347.963L133.984 341.626ZM134.213 353.682L140.332 357.911C138.361 360.008 136.379 362.116 134.419 364.225C132.379 362.812 130.339 361.414 128.299 360.031L134.213 353.682ZM135.084 352.765C137.055 350.668 139.026 348.559 141.009 346.462L147.128 350.737L141.192 357.005L135.084 352.765ZM141.868 345.545L147.816 339.277L153.935 343.586C151.949 345.664 149.97 347.742 147.999 349.82L141.868 345.545ZM147.781 337.753L141.65 333.478L147.598 327.221L153.741 331.518C151.724 333.65 149.726 335.755 147.747 337.833L147.781 337.753ZM148.469 326.293C150.452 324.207 152.446 322.133 154.428 320.058L160.571 324.413C158.577 326.464 156.594 328.527 154.6 330.601L148.469 326.293ZM155.345 319.153C157.339 317.09 159.322 315.027 161.316 312.976C163.371 314.435 165.418 315.895 167.458 317.354L161.488 323.508L155.345 319.153ZM162.221 312.082C164.227 310.019 166.221 307.968 168.226 305.928L174.369 310.363L168.387 316.471L162.221 312.082ZM169.097 305.034C171.091 302.994 173.089 300.962 175.091 298.938L181.245 303.407L175.24 309.469L169.097 305.034ZM182.139 304.06L188.293 308.575C186.291 310.585 184.289 312.594 182.287 314.603L175.996 310.26L182.139 304.06ZM183.021 303.178C185.015 301.161 187.017 299.155 189.026 297.161L195.18 301.745L189.163 307.727L183.021 303.178ZM189.003 295.626L182.849 291.11L188.866 285.082C190.928 286.61 192.983 288.138 195.031 289.666C192.888 291.729 190.871 293.723 188.866 295.729L189.003 295.626ZM189.748 284.166L195.776 278.172C197.839 279.7 199.894 281.228 201.941 282.756L195.913 288.715C193.725 287.34 191.662 285.827 189.61 284.315L189.748 284.166ZM196.624 277.29L202.675 271.342L208.84 275.983L202.789 281.885C200.673 280.464 198.584 278.989 196.521 277.461L196.624 277.29ZM203.5 270.482L209.574 264.569L215.739 269.256L209.688 275.124C207.58 273.68 205.494 272.19 203.431 270.654L203.5 270.482ZM210.445 263.721L216.507 257.865L222.684 262.586C220.656 264.512 218.627 266.46 216.61 268.397L210.445 263.721ZM217.389 257.005L223.463 251.184C225.526 252.765 227.585 254.35 229.64 255.94L223.566 261.738L217.389 257.005ZM224.357 250.347C226.374 248.414 228.403 246.485 230.442 244.56L236.551 249.522L230.454 255.252L224.357 250.347ZM237.513 250.061C239.576 251.665 241.627 253.281 243.69 254.908C241.662 256.799 239.622 258.701 237.593 260.638C235.538 259.026 233.483 257.422 231.428 255.825L237.513 250.061ZM238.407 249.235L244.504 243.506L250.681 248.399L244.573 254.049L238.407 249.235ZM244.492 242.004C242.43 240.377 240.367 238.761 238.304 237.157L244.412 231.427L250.601 236.309L244.492 242.004ZM245.295 230.624C247.334 228.737 249.378 226.85 251.426 224.963C253.488 226.591 255.54 228.241 257.603 229.891C255.563 231.759 253.523 233.627 251.483 235.518L245.295 230.624ZM252.297 224.15C254.337 222.27 256.38 220.394 258.428 218.523L264.616 223.496L258.485 229.077L252.297 224.15ZM259.322 217.709L265.453 212.139L271.641 217.136L265.51 222.683L259.322 217.709ZM266.347 211.326L272.42 205.974C274.483 207.647 276.546 209.332 278.609 211.028C276.557 212.85 274.518 214.684 272.466 216.529L266.347 211.326ZM279.583 211.578L285.76 216.666C283.708 218.477 281.669 220.299 279.617 222.133L273.44 217.067L279.583 211.578ZM280.477 210.787L286.631 205.332C288.694 207.044 290.753 208.755 292.808 210.466L286.654 215.887C284.553 214.298 282.482 212.655 280.442 210.959L280.477 210.787ZM293.713 211.211L299.89 216.38L293.736 221.766L287.559 216.62L293.713 211.211ZM294.595 210.432L300.761 205.057L306.949 210.271L300.772 215.612L294.595 210.432ZM307.832 211.039L314.009 216.288L307.843 221.583L301.678 216.357L307.832 211.039ZM308.737 210.271C310.788 208.495 312.851 206.73 314.903 204.977L321.08 210.283L314.822 215.704C312.783 213.996 310.72 212.185 308.668 210.443L308.737 210.271ZM321.973 211.051L328.139 216.391L321.962 221.605L315.808 216.288L321.973 211.051ZM322.879 210.294L329.056 205.08L335.21 210.466L329.033 215.646L322.879 210.294ZM336.115 211.257L342.258 216.678L336.012 222.018L329.869 216.632L336.115 211.257ZM336.997 210.512C339.06 208.793 341.123 207.086 343.186 205.39L349.351 210.856C347.281 212.544 345.214 214.24 343.152 215.944L336.997 210.512ZM344.08 204.645C346.143 202.949 348.209 201.256 350.28 199.568L356.422 205.069L350.234 210.111L344.08 204.645ZM357.224 206.043L363.367 211.601C361.304 213.263 359.241 214.924 357.179 216.609L351.036 211.085L357.224 206.043ZM364.261 212.415L370.392 217.996L364.215 222.958L358.095 217.434C360.158 215.738 362.221 214.065 364.284 212.415H364.261ZM365.246 211.704L371.446 206.753L377.577 212.392C375.507 214.019 373.44 215.658 371.377 217.308L365.246 211.704ZM378.471 213.205C380.511 215.096 382.551 216.976 384.591 218.935C382.528 220.551 380.454 222.178 378.391 223.817L372.271 218.167L378.471 213.205ZM379.354 212.495L385.565 207.624L391.685 213.354L385.485 218.19L379.354 212.495ZM386.459 206.914L392.659 202.089L398.778 207.819L392.578 212.609L386.459 206.914ZM399.626 208.667C401.666 210.592 403.695 212.518 405.735 214.466C403.66 216.036 401.598 217.629 399.535 219.21L393.427 213.48C395.478 211.853 397.541 210.249 399.626 208.667ZM400.532 207.968L406.732 203.235C408.771 205.168 410.808 207.109 412.84 209.057L406.64 213.767L400.532 207.968ZM413.734 209.916L419.819 215.795C417.756 217.342 415.682 218.901 413.619 220.471L407.522 214.615L413.734 209.916ZM420.713 216.655L426.787 222.568L420.598 227.152L414.524 221.307L420.713 216.655ZM421.607 215.979C423.669 214.451 425.74 212.923 427.818 211.395L433.903 217.354L427.692 221.938L421.607 215.979ZM434.774 218.19C436.799 220.184 438.823 222.182 440.848 224.184L434.637 228.768L428.574 222.797C430.626 221.227 432.688 219.726 434.763 218.19H434.774ZM435.68 217.526L441.879 212.942C443.904 214.951 445.925 216.968 447.942 218.993C445.879 220.482 443.805 221.984 441.742 223.496C439.736 221.525 437.685 219.52 435.668 217.526H435.68ZM448.824 219.921C450.849 221.938 452.866 223.962 454.875 225.995L448.687 230.453L442.624 224.402L448.824 219.921ZM449.73 219.268L455.941 214.81C457.958 216.85 459.971 218.893 461.98 220.941L455.78 225.364L449.73 219.268ZM462.863 221.835C464.88 223.882 466.893 225.937 468.902 228C466.839 229.444 464.765 230.911 462.702 232.378C460.701 230.33 458.687 228.283 456.663 226.235L462.863 221.835ZM456.846 214.168C458.909 212.693 460.979 211.226 463.057 209.767L469.097 215.921L462.886 220.299C460.876 218.251 458.859 216.208 456.835 214.168H456.846ZM463.94 209.126C466.014 207.659 468.1 206.203 470.174 204.759L476.214 210.971C474.143 212.407 472.073 213.851 470.002 215.302C467.978 213.24 465.953 211.181 463.928 209.126H463.94ZM464.146 197.058L470.369 192.68L476.408 198.903C474.334 200.336 472.271 201.78 470.197 203.235C468.169 201.161 466.152 199.098 464.135 197.058H464.146ZM463.264 196.153C461.247 194.101 459.218 192.062 457.201 190.022C459.28 188.54 461.354 187.073 463.424 185.621C465.441 187.672 467.47 189.724 469.487 191.787C467.401 193.23 465.327 194.697 463.252 196.153H463.264ZM457.373 177.954L463.608 173.554C465.632 175.601 467.653 177.656 469.67 179.719L463.447 184.085C461.392 182.038 459.364 179.994 457.362 177.954H457.373ZM456.491 177.06L450.406 170.975L456.651 166.517L462.725 172.648L456.491 177.06ZM449.523 170.081C447.499 168.064 445.466 166.051 443.427 164.042L449.672 159.55L455.78 165.635L449.523 170.081ZM448.618 170.735C446.532 172.263 444.454 173.764 442.384 175.238L436.298 169.222L442.533 164.638L448.618 170.735ZM435.393 168.351L429.273 162.426L435.508 157.842C437.548 159.836 439.587 161.842 441.627 163.859C439.542 165.325 437.444 166.827 435.382 168.351H435.393ZM434.499 169.016L428.265 173.6C426.225 171.621 424.181 169.642 422.134 167.663L428.391 163.079L434.499 169.016ZM421.263 166.804C419.223 164.833 417.179 162.873 415.132 160.925L421.377 156.261L427.497 162.185L421.263 166.804ZM420.346 167.48L414.123 172.144L407.992 166.299L414.226 161.601C416.259 163.549 418.295 165.509 420.335 167.48H420.346ZM407.098 165.451L400.956 159.653L407.201 154.908C409.241 156.845 411.293 158.793 413.333 160.753L407.098 165.451ZM406.193 166.139L399.959 170.895C397.919 168.958 395.867 167.044 393.816 165.165C395.902 163.561 397.976 161.956 400.05 160.375L406.193 166.139ZM392.922 164.283L386.78 158.553C388.858 156.933 390.936 155.321 393.014 153.716L399.157 159.446L392.922 164.283ZM392.028 164.993L385.806 169.829L379.64 164.099L385.863 159.229L392.028 164.993ZM378.758 163.32L372.592 157.682C374.67 156.039 376.748 154.404 378.827 152.777C380.878 154.656 382.929 156.558 384.98 158.449L378.758 163.32ZM377.841 164.03L371.618 168.947L365.464 163.354L371.687 158.392L377.841 164.03ZM364.559 162.541C362.511 160.684 360.452 158.835 358.382 156.994C360.468 155.321 362.542 153.648 364.616 151.997L370.782 157.59L364.559 162.541ZM363.653 163.263L357.431 168.271L351.265 162.747C353.328 161.058 355.398 159.381 357.477 157.716L363.653 163.263ZM350.348 161.945L344.16 156.49L350.383 151.401L356.571 156.914L350.348 161.945ZM349.455 162.69L343.232 167.778L337.043 162.346L343.255 157.223C345.333 159.034 347.399 160.856 349.455 162.69ZM336.149 161.544C334.098 159.744 332.024 157.945 329.961 156.157L336.184 151L342.372 156.421L336.149 161.544ZM335.244 162.288L329.044 167.457L322.856 162.117L329.056 156.902L335.244 162.288ZM321.951 161.337L315.751 156.043C317.813 154.278 319.888 152.536 321.951 150.794L328.15 156.134L321.951 161.337ZM321.045 162.094L314.822 167.365L308.623 162.094C310.685 160.329 312.752 158.568 314.822 156.811L321.045 162.094ZM307.74 161.326C305.666 159.572 303.603 157.888 301.529 156.112L307.729 150.771L313.94 156.031C311.866 157.842 309.803 159.561 307.74 161.337V161.326ZM306.846 162.094L300.646 167.434L294.435 162.254L300.623 156.879L306.846 162.094ZM293.541 161.498L287.318 156.375L293.518 150.966C295.593 152.685 297.667 154.404 299.73 156.146C297.667 157.918 295.604 159.706 293.541 161.509V161.498ZM292.636 162.288L286.459 167.709L280.248 162.609C282.299 160.776 284.362 158.965 286.424 157.154C288.464 158.862 290.573 160.581 292.636 162.3V162.288ZM279.296 161.876L273.085 156.834C275.133 154.985 277.192 153.151 279.262 151.333L285.485 156.421L279.296 161.876ZM278.403 162.678C276.34 164.5 274.288 166.345 272.226 168.179L266.003 163.159L272.18 157.624L278.403 162.678ZM265.132 162.426L258.909 157.464C260.964 155.6 263.023 153.739 265.086 151.883L271.309 156.891C269.246 158.736 267.195 160.581 265.132 162.426ZM264.249 163.24C262.187 165.096 260.128 166.957 258.072 168.821L251.85 163.893C253.905 162.013 255.96 160.138 258.015 158.266L264.249 163.24ZM250.956 163.171L244.71 158.3L250.887 152.628L257.121 157.556L250.956 163.171ZM250.05 163.996L243.896 169.726L237.674 164.878L243.828 159.148L250.05 163.996ZM236.768 164.122L230.534 159.32L236.688 153.59L242.922 158.426L236.768 164.122ZM235.874 164.959C233.823 166.861 231.772 168.786 229.732 170.689C227.658 169.084 225.583 167.503 223.498 165.921L229.64 160.134C231.714 161.761 233.8 163.354 235.874 164.97V164.959ZM222.592 165.257C220.518 163.675 218.432 162.105 216.358 160.547C218.398 158.587 220.449 156.65 222.489 154.713L228.735 159.469C226.687 161.44 224.64 163.373 222.592 165.268V165.257ZM221.698 166.105L215.567 171.938L209.39 167.262L215.521 161.395L221.698 166.105ZM208.439 166.575L202.194 161.991L208.325 156.077L214.57 160.753C212.515 162.678 210.471 164.623 208.439 166.586V166.575ZM207.545 167.434L201.437 173.359C199.363 171.812 197.277 170.288 195.203 168.775L201.311 162.816C203.397 164.351 205.475 165.895 207.545 167.445V167.434ZM194.298 168.087L188.052 163.503L194.16 157.51L200.406 162.094L194.298 168.087ZM193.404 168.958C191.364 170.952 189.332 172.954 187.307 174.963L181.073 170.448L187.169 164.42L193.404 168.958ZM180.156 169.795L173.922 165.337C175.946 163.305 177.979 161.28 180.018 159.263C182.093 160.753 184.178 162.254 186.253 163.767L180.156 169.795ZM179.274 170.689L173.188 176.762C171.11 175.28 169.032 173.806 166.954 172.339L173.039 166.219C175.114 167.709 177.199 169.199 179.274 170.7V170.689ZM166.06 171.697L159.814 167.319C161.843 165.268 163.871 163.205 165.9 161.165L172.145 165.578L166.06 171.697ZM165.178 172.591L159.104 178.757L152.87 174.413L158.943 168.213L165.178 172.591ZM151.964 173.737C149.894 172.308 147.816 170.88 145.73 169.451C147.747 167.365 149.768 165.283 151.792 163.205L158.027 167.549L151.964 173.737ZM151.082 174.654L145.031 180.9L138.808 176.636C140.818 174.543 142.831 172.45 144.848 170.356C146.933 171.816 149.011 173.267 151.082 174.711V174.654ZM137.891 176.018L131.669 171.823C133.678 169.707 135.691 167.598 137.708 165.497L143.942 169.737L137.891 176.018ZM137.009 176.946C135.004 179.043 132.987 181.152 130.981 183.272L124.758 179.1C126.768 176.969 128.777 174.845 130.786 172.729L137.009 176.946ZM123.853 178.493L117.619 174.379C119.624 172.236 121.63 170.093 123.647 167.973L129.892 172.133C127.875 174.299 125.858 176.43 123.853 178.55V178.493ZM123.853 180.029L130.087 184.2C128.082 186.309 126.065 188.429 124.059 190.56C121.985 189.174 119.911 187.81 117.836 186.435L123.853 180.029ZM124.094 192.096C126.172 193.471 128.246 194.858 130.316 196.256C128.311 198.365 126.305 200.496 124.3 202.628L118.077 198.491C120.125 196.39 122.138 194.277 124.117 192.153L124.094 192.096ZM124.323 204.163L130.546 208.312L124.586 214.741C122.524 213.354 120.449 211.979 118.387 210.615C120.358 208.476 122.344 206.345 124.346 204.221L124.323 204.163ZM124.586 216.288L130.798 220.448C128.796 222.564 126.794 224.688 124.793 226.82L118.593 222.683L124.586 216.288ZM124.816 228.355C126.89 229.731 128.953 231.117 131.027 232.515L125.022 238.887L118.856 234.739L124.816 228.355ZM125.056 240.411L131.256 244.583L125.263 250.943L119.074 246.806C121.068 244.663 123.062 242.52 125.056 240.354V240.411ZM125.285 252.479C127.348 253.854 129.423 255.252 131.485 256.65C129.484 258.759 127.486 260.879 125.492 263.01C123.444 261.628 121.385 260.249 119.315 258.873C121.309 256.719 123.291 254.587 125.285 252.467V252.479ZM125.526 264.535L131.703 268.717C129.709 270.826 127.719 272.946 125.732 275.078L119.567 270.929L125.526 264.535ZM125.755 276.602C127.818 277.985 129.877 279.375 131.932 280.773L125.962 287.134L119.808 282.997L125.755 276.602ZM125.996 288.669L132.161 292.841L126.202 299.201L120.002 295.053L125.996 288.669ZM126.225 300.725C128.288 302.108 130.343 303.502 132.391 304.908C130.408 307.017 128.414 309.137 126.431 311.268L120.289 307.12L126.225 300.725ZM126.466 312.793L132.62 316.976L126.672 323.336C124.621 321.938 122.581 320.563 120.53 319.187C122.512 317.033 124.483 314.901 126.466 312.781V312.793ZM126.695 324.86C128.746 326.247 130.798 327.633 132.849 329.043L126.878 335.38C124.838 333.99 122.795 332.607 120.747 331.232L126.695 324.86ZM126.936 336.916L133.078 341.099L127.142 347.459L121.022 343.311L126.936 336.916ZM127.165 348.983L133.307 353.166L127.371 359.538C125.343 358.14 123.303 356.765 121.263 355.389C123.234 353.224 125.194 351.092 127.165 348.972V348.983ZM127.406 361.051L133.525 365.268L127.612 371.617L121.504 367.468C123.44 365.268 125.434 363.159 127.406 361.039V361.051ZM134.408 365.841C136.447 367.239 138.476 368.649 140.516 370.07L134.602 376.384C132.574 374.975 130.534 373.576 128.506 372.19C130.465 370.047 132.436 367.938 134.408 365.83V365.841ZM135.267 364.924C137.238 362.816 139.213 360.715 141.192 358.621C143.232 360.042 145.268 361.467 147.3 362.896L141.375 369.164C139.351 367.736 137.315 366.318 135.267 364.913V364.924ZM142.051 357.704L147.988 351.436L154.107 355.756C152.125 357.819 150.142 359.905 148.171 361.979L142.051 357.704ZM148.847 350.542L154.795 344.319L160.926 348.662C158.932 350.725 156.946 352.792 154.967 354.862C152.927 353.395 150.944 351.963 148.847 350.53V350.542ZM154.772 342.783L148.652 338.463C150.631 336.377 152.618 334.299 154.612 332.229L160.743 336.584L154.772 342.783ZM155.471 331.323C157.457 329.261 159.444 327.202 161.43 325.147C163.478 326.598 165.521 328.061 167.561 329.536C165.579 331.576 163.585 333.627 161.602 335.69L155.471 331.323ZM162.347 324.253L168.341 318.099L174.472 322.534L168.49 328.653C166.412 327.179 164.345 325.712 162.29 324.253H162.347ZM169.223 317.216C171.217 315.176 173.211 313.136 175.205 311.119L181.348 315.577L175.354 321.651C173.234 320.161 171.183 318.683 169.143 317.216H169.223ZM182.253 316.231L188.384 320.815C186.39 322.809 184.385 324.826 182.391 326.843L176.156 322.304C178.166 320.28 180.171 318.255 182.173 316.231H182.253ZM183.124 315.348L189.129 309.343C191.18 310.844 193.22 312.369 195.272 313.927C193.27 315.921 191.268 317.919 189.267 319.921L183.124 315.348ZM190 308.472L196.017 302.49L202.171 307.074L196.154 313.022L190 308.472ZM196.005 300.966L189.851 296.382L195.868 290.4L202.033 294.984L196.005 300.966ZM196.75 289.506C198.756 287.512 200.772 285.541 202.789 283.558L208.943 288.142L202.904 294.044L196.75 289.506ZM203.626 282.699L209.688 276.785L215.854 281.472L209.746 287.34C207.698 285.812 205.639 284.284 203.569 282.756L203.626 282.699ZM210.559 275.937L216.61 270.081C218.673 271.64 220.724 273.221 222.776 274.803L216.725 280.613L210.559 275.937ZM217.504 269.222L223.566 263.4C225.629 264.982 227.684 266.571 229.732 268.167L223.67 273.955L217.504 269.222ZM224.449 262.563L230.534 256.776C232.585 258.381 234.648 259.974 236.7 261.589L230.626 267.319L224.449 262.563ZM237.605 262.277L243.759 267.125C241.731 269.015 239.714 270.918 237.685 272.855L231.52 268.041L237.605 262.277ZM238.487 261.452L244.573 255.722C246.635 257.338 248.687 258.965 250.75 260.604C248.71 262.483 246.677 264.37 244.653 266.265C242.544 264.706 240.481 263.091 238.43 261.486L238.487 261.452ZM245.455 254.92L251.563 249.258L257.729 254.186L251.575 259.836L245.455 254.92ZM251.552 247.734L245.363 242.841L251.483 237.18C253.546 238.822 255.605 240.465 257.66 242.107L251.552 247.734ZM252.365 236.366L258.485 230.751L264.673 235.713L258.542 241.305L252.365 236.366ZM259.379 229.925C261.419 228.069 263.459 226.201 265.499 224.356L271.675 229.364L265.544 234.945L259.379 229.925ZM266.392 223.554L272.535 218.007L278.712 223.061L272.569 228.573C270.484 226.915 268.406 225.254 266.335 223.588L266.392 223.554ZM279.617 223.794L285.783 228.894L279.652 234.349C277.589 232.653 275.538 230.968 273.475 229.295C275.476 227.5 277.505 225.678 279.56 223.829L279.617 223.794ZM280.511 223.004L286.654 217.549L292.831 222.683L286.677 228.103L280.511 223.004ZM293.725 223.428C295.787 225.147 297.842 226.873 299.89 228.607L293.747 233.982L287.525 228.894L293.725 223.428ZM294.607 222.648C296.658 220.861 298.71 219.061 300.761 217.285L306.949 222.499L300.784 227.84L294.607 222.648ZM307.832 223.256C309.883 224.998 311.946 226.694 313.997 228.516C311.942 230.273 309.891 232.038 307.843 233.81C305.792 232.057 303.729 230.372 301.678 228.585C303.687 226.82 305.719 225.055 307.774 223.29L307.832 223.256ZM308.726 222.488L314.891 217.205C316.942 218.958 319.005 220.723 321.057 222.499C318.994 224.253 316.942 225.995 314.891 227.759L308.726 222.488ZM321.951 223.267L328.105 228.607L321.939 233.822C319.899 232.042 317.848 230.273 315.785 228.516L321.951 223.267ZM322.856 222.511L329.021 217.308L335.175 222.694L329.01 227.863L322.856 222.511ZM336.069 223.473L342.212 228.894L336.046 234.028L329.904 228.642L336.069 223.473ZM336.963 222.729L343.129 217.606L349.202 223.164L343.014 228.252L336.963 222.729ZM344.034 216.861L350.222 211.796L356.365 217.296L350.176 222.339C348.098 220.528 346.032 218.714 343.977 216.895L344.034 216.861ZM357.224 218.133L363.355 223.68L357.179 228.688L351.013 223.164L357.224 218.133ZM364.249 224.482L370.369 230.074L364.192 235.037L358.072 229.49L364.249 224.482ZM365.155 223.771C367.21 222.113 369.269 220.459 371.332 218.809L377.463 224.448L371.274 229.364L365.155 223.771ZM378.357 225.261C380.397 227.141 382.425 229.032 384.465 230.934C382.402 232.546 380.339 234.173 378.276 235.816C376.244 233.929 374.208 232.049 372.168 230.178C374.216 228.558 376.271 226.919 378.334 225.261H378.357ZM379.239 224.551L385.416 219.726L391.536 225.456L385.347 230.292L379.239 224.551ZM386.333 218.97L392.533 214.156C394.573 216.059 396.601 217.984 398.641 219.886L392.441 224.688L386.333 218.97ZM399.535 220.746L405.631 226.545C403.569 228.115 401.494 229.708 399.432 231.301C397.403 229.364 395.375 227.45 393.335 225.571L399.535 220.746ZM400.429 220.047L406.628 215.314L412.725 221.136L406.537 225.846L400.429 220.047ZM413.619 221.995C415.644 223.943 417.672 225.903 419.704 227.874C417.641 229.421 415.567 230.98 413.504 232.55C411.48 230.594 409.451 228.646 407.419 226.705C409.467 225.108 411.526 223.546 413.596 222.018L413.619 221.995ZM420.587 228.722C422.619 230.693 424.644 232.668 426.661 234.647L420.472 239.231L414.398 233.34L420.587 228.722ZM421.481 228.057C423.543 226.529 425.614 225.001 427.692 223.473L433.754 229.433L427.566 234.017L421.481 228.057ZM434.637 230.258L440.699 236.263L434.499 240.847C432.482 238.841 430.465 236.859 428.437 234.876L434.637 230.258ZM435.531 229.605L441.73 225.021C443.755 227.03 445.776 229.043 447.793 231.06L441.593 235.564C439.591 233.593 437.563 231.606 435.508 229.605H435.531ZM448.675 231.988C450.692 234.005 452.698 236.034 454.715 238.073L448.526 242.531C446.509 240.503 444.492 238.497 442.475 236.481C444.523 234.983 446.582 233.486 448.652 231.988H448.675ZM449.569 231.346L455.769 226.888C457.786 228.917 459.803 230.968 461.808 233.008L455.62 237.432L449.569 231.346ZM462.656 233.902C464.673 235.957 466.683 238.012 468.684 240.067L462.496 244.445C460.49 242.394 458.473 240.354 456.468 238.314L462.656 233.902ZM463.55 233.272C465.613 231.805 467.684 230.346 469.762 228.894L475.778 235.105L469.59 239.437L463.55 233.272ZM463.745 221.193L469.956 216.827L475.984 223.038L469.785 227.37C467.779 225.307 465.773 223.244 463.802 221.193H463.745ZM483.284 206.054C481.199 207.475 479.124 208.896 477.05 210.34C475.045 208.255 473.028 206.192 471.022 204.117C473.085 202.674 475.155 201.237 477.234 199.809C479.285 201.883 481.302 203.957 483.284 206.054ZM483.491 193.987C481.416 195.408 479.331 196.829 477.256 198.273C475.255 196.187 473.242 194.113 471.217 192.05L477.44 187.73L483.491 193.987ZM476.615 186.824L470.392 191.156C468.363 189.093 466.347 187.031 464.318 184.979L470.564 180.613L476.615 186.824ZM476.81 174.757L470.587 179.089L464.501 172.912C466.587 171.445 468.673 169.99 470.759 168.546L476.81 174.757ZM469.865 167.652L463.63 172.007C461.614 169.967 459.585 167.915 457.557 165.887L463.791 161.475C465.816 163.53 467.836 165.589 469.853 167.652H469.865ZM468.719 156.558L463.871 159.996C462.297 158.4 460.723 156.814 459.15 155.241C462.305 155.653 465.472 156.092 468.65 156.558H468.719ZM456.113 154.771L457.625 154.977C457.627 155.054 457.644 155.131 457.676 155.202C457.707 155.273 457.752 155.336 457.809 155.39L462.966 160.581L456.72 164.993L450.635 158.896L455.918 155.126C455.964 155.08 456 155.024 456.021 154.963C456.043 154.901 456.051 154.836 456.044 154.771H456.113ZM454.589 154.564C452.977 155.71 451.364 156.856 449.752 158.002L445.008 153.304C448.163 153.716 451.334 154.137 454.52 154.564H454.589ZM441.983 152.937L443.507 153.132C443.506 153.21 443.521 153.287 443.553 153.358C443.585 153.43 443.632 153.493 443.69 153.545C445.409 155.241 447.128 156.948 448.847 158.667L442.613 163.159L436.505 157.143L441.799 153.304C441.843 153.255 441.875 153.196 441.893 153.132C441.911 153.069 441.914 153.002 441.902 152.937H441.983ZM440.458 152.754L435.611 156.272L430.878 151.688C434.006 151.997 437.181 152.376 440.378 152.754H440.458ZM427.852 151.31L429.365 151.47C429.366 151.548 429.383 151.624 429.414 151.695C429.446 151.766 429.492 151.83 429.548 151.883L434.74 156.937L428.494 161.521C426.454 159.534 424.411 157.556 422.363 155.584L427.658 151.677C427.698 151.625 427.727 151.566 427.743 151.503C427.759 151.44 427.761 151.374 427.749 151.31H427.852ZM426.317 151.138L421.4 154.725C419.819 153.197 418.234 151.669 416.645 150.141C419.819 150.473 423.016 150.806 426.214 151.138H426.317ZM413.711 149.866L415.235 150.015C415.237 150.166 415.299 150.31 415.407 150.416L420.61 155.401L414.364 160.065L408.233 154.221L413.527 150.244C413.567 150.182 413.592 150.111 413.6 150.037C413.608 149.964 413.599 149.889 413.573 149.82L413.711 149.866ZM412.187 149.728C410.574 150.935 408.959 152.15 407.339 153.373L402.572 148.869C405.643 149.144 408.794 149.419 412.049 149.728H412.187ZM399.581 148.582L401.105 148.708C401.105 148.784 401.122 148.859 401.154 148.929C401.185 148.998 401.231 149.059 401.288 149.109L406.491 154.026L400.245 158.77L394.103 153.04L399.397 148.995C399.428 148.889 399.424 148.777 399.386 148.674L399.581 148.582ZM398.045 148.456L393.209 152.169L388.441 147.734C391.444 147.998 394.653 148.239 397.85 148.491L398.045 148.456ZM385.187 147.528L386.711 147.631C386.709 147.708 386.725 147.783 386.756 147.853C386.788 147.922 386.835 147.984 386.894 148.032C388.636 149.637 390.374 151.253 392.109 152.88L385.874 157.739L379.72 152.009L385.003 147.895C385.06 147.852 385.107 147.797 385.138 147.733C385.17 147.669 385.187 147.599 385.187 147.528ZM383.651 147.425C382.031 148.67 380.423 149.927 378.827 151.195L374.036 146.829C377.245 147.047 380.442 147.242 383.651 147.459V147.425ZM370.976 146.691L372.501 146.772C372.5 146.848 372.517 146.923 372.548 146.992C372.58 147.062 372.626 147.123 372.684 147.173L377.91 151.952C375.839 153.579 373.765 155.218 371.687 156.868L365.51 151.264L370.782 147.07C370.84 147.025 370.888 146.968 370.922 146.903C370.956 146.837 370.974 146.765 370.976 146.691ZM369.452 146.611L364.616 150.45C363.012 149.018 361.419 147.574 359.814 146.153C363.023 146.306 366.236 146.458 369.452 146.611ZM356.755 146.015L358.29 146.084C358.291 146.16 358.307 146.235 358.339 146.304C358.371 146.373 358.416 146.435 358.474 146.485L363.699 151.184L357.477 156.18L351.3 150.668C353.053 149.236 354.818 147.815 356.571 146.405C356.629 146.358 356.675 146.298 356.707 146.231C356.738 146.163 356.755 146.09 356.755 146.015ZM355.23 145.958L350.348 149.82L345.558 145.58C348.797 145.702 352.022 145.828 355.23 145.958ZM342.544 145.534H344.057C344.059 145.609 344.077 145.683 344.111 145.75C344.145 145.818 344.193 145.877 344.252 145.924L349.5 150.508L343.266 155.596L337.078 150.164L342.349 145.832C342.448 145.759 342.517 145.653 342.544 145.534ZM340.997 145.534L336.184 149.499L331.371 145.328C334.579 145.351 337.788 145.408 340.997 145.5V145.534ZM328.311 145.236H329.835C329.838 145.31 329.856 145.382 329.888 145.449C329.919 145.516 329.964 145.576 330.018 145.626L335.278 150.21L329.056 155.378C326.993 153.59 324.926 151.806 322.856 150.026L328.116 145.614C328.175 145.57 328.223 145.513 328.256 145.447C328.29 145.382 328.309 145.31 328.311 145.236ZM326.775 145.236L321.962 149.27L317.114 145.144C320.358 145.156 323.566 145.236 326.775 145.236ZM314.077 145.156H315.602C315.604 145.23 315.621 145.303 315.653 145.37C315.684 145.437 315.729 145.497 315.785 145.545L321.057 150.038L314.822 155.275C312.748 153.522 310.685 151.757 308.611 150.015L313.883 145.534C313.941 145.487 313.989 145.427 314.022 145.36C314.056 145.293 314.075 145.219 314.077 145.144V145.156ZM312.542 145.156L307.729 149.258L302.915 145.213C306.124 145.175 309.329 145.152 312.53 145.144L312.542 145.156ZM299.856 145.247H301.38C301.379 145.322 301.395 145.396 301.427 145.463C301.458 145.531 301.505 145.59 301.563 145.637C303.328 147.104 305.085 148.579 306.835 150.061C304.76 151.826 302.698 153.613 300.623 155.39L294.412 150.21L299.672 145.626C299.73 145.578 299.776 145.519 299.808 145.451C299.839 145.384 299.856 145.31 299.856 145.236V145.247ZM298.32 145.247L293.518 149.407L288.694 145.431C291.902 145.362 295.111 145.297 298.32 145.236V145.247ZM285.622 145.511H287.158C287.158 145.586 287.174 145.659 287.206 145.726C287.238 145.794 287.284 145.853 287.341 145.901L292.613 150.244L286.424 155.665L280.202 150.565L285.439 145.981C285.508 145.928 285.562 145.858 285.594 145.777C285.626 145.696 285.636 145.608 285.622 145.523V145.511ZM284.098 145.511C282.494 146.917 280.893 148.33 279.296 149.751C277.681 148.433 276.076 147.127 274.46 145.832C277.669 145.752 280.889 145.649 284.098 145.557V145.511ZM271.4 145.947H272.925C272.927 146.019 272.944 146.09 272.976 146.155C273.008 146.22 273.053 146.278 273.108 146.325L278.391 150.599C276.328 152.433 274.269 154.27 272.214 156.112C270.14 154.427 268.054 152.754 265.98 151.092L271.274 146.382C271.363 146.272 271.408 146.133 271.4 145.992V145.947ZM269.865 146.015C268.272 147.436 266.667 148.869 265.075 150.313L260.238 146.451C263.447 146.321 266.656 146.191 269.865 146.061V146.015ZM257.19 146.611L258.714 146.531C258.714 146.604 258.731 146.676 258.762 146.741C258.794 146.807 258.84 146.864 258.898 146.909L264.192 151.115L258.004 156.707C255.929 155.057 253.844 153.407 251.769 151.78C253.511 150.191 255.257 148.601 257.007 147.012C257.111 146.922 257.177 146.795 257.19 146.657V146.611ZM255.654 146.703L250.876 151.058C249.26 149.797 247.655 148.525 246.039 147.276C249.241 147.1 252.446 146.924 255.654 146.749V146.703ZM242.98 147.471L244.504 147.368C244.504 147.44 244.52 147.512 244.552 147.578C244.584 147.643 244.63 147.701 244.687 147.746L249.982 151.883C247.919 153.762 245.864 155.653 243.816 157.556C241.742 155.928 239.656 154.312 237.582 152.708L242.796 147.872C242.898 147.784 242.964 147.661 242.98 147.528V147.471ZM241.455 147.574C239.851 149.052 238.258 150.519 236.677 151.997L231.829 148.284C235.038 148.063 238.254 147.841 241.478 147.62L241.455 147.574ZM228.781 148.525L230.293 148.399C230.299 148.472 230.318 148.543 230.352 148.608C230.385 148.673 230.432 148.731 230.488 148.777L235.771 152.834C233.716 154.752 231.669 156.662 229.629 158.564L223.383 153.808L228.597 148.903C228.697 148.818 228.762 148.7 228.781 148.571V148.525ZM227.245 148.651L222.478 153.132L217.63 149.476L227.245 148.651ZM214.639 149.797L216.152 149.66C216.153 149.732 216.171 149.803 216.205 149.866C216.239 149.93 216.288 149.985 216.347 150.026L221.63 154.014C219.578 155.963 217.538 157.899 215.499 159.859L209.253 155.172L214.456 150.21C214.547 150.101 214.596 149.962 214.593 149.82L214.639 149.797ZM213.103 149.946L208.359 154.53L203.466 150.966C206.651 150.592 209.849 150.255 213.058 149.958L213.103 149.946ZM200.497 151.23L202.022 151.069C202.021 151.14 202.037 151.211 202.069 151.275C202.101 151.339 202.147 151.394 202.205 151.436L207.499 155.355L201.3 161.28C199.214 159.733 197.14 158.209 195.054 156.696L200.234 151.654C200.29 151.6 200.335 151.537 200.367 151.466C200.398 151.395 200.416 151.319 200.417 151.241L200.497 151.23ZM198.973 151.39L194.229 155.974L189.381 152.444C192.521 152.101 195.692 151.753 198.893 151.401L198.973 151.39ZM186.367 152.857L187.891 152.674C187.891 152.745 187.907 152.815 187.939 152.879C187.97 152.943 188.017 152.998 188.075 153.04L193.369 156.891C191.329 158.885 189.293 160.883 187.261 162.884C185.187 161.383 183.101 159.87 181.015 158.381L186.195 153.269C186.231 153.21 186.254 153.143 186.264 153.075C186.274 153.006 186.27 152.936 186.253 152.868L186.367 152.857ZM184.843 153.04L180.11 157.727L175.263 154.289C178.345 153.854 181.531 153.441 184.728 153.052L184.843 153.04ZM172.237 154.668L173.738 154.461C173.741 154.533 173.759 154.604 173.793 154.667C173.827 154.731 173.875 154.786 173.933 154.828L179.216 158.61L173.016 164.718L166.771 160.294L171.939 155.103C171.997 155.049 172.043 154.983 172.074 154.91C172.106 154.837 172.122 154.758 172.122 154.679L172.237 154.668ZM170.701 154.874L165.842 159.63L160.995 156.192C164.215 155.779 167.401 155.321 170.587 154.885L170.701 154.874ZM158.095 156.673L159.608 156.455C159.606 156.527 159.623 156.597 159.657 156.659C159.692 156.722 159.742 156.774 159.803 156.811L165.097 160.524L158.966 166.701L152.732 162.357L157.866 157.109C157.958 156.992 158.003 156.844 157.992 156.696L158.095 156.673ZM156.583 156.902L151.873 161.715L147.025 158.392C150.142 157.888 153.294 157.395 156.48 156.914L156.583 156.902ZM143.977 158.873L145.478 158.633C145.48 158.703 145.499 158.772 145.533 158.834C145.567 158.895 145.615 158.948 145.673 158.988L150.967 162.621C148.939 164.707 146.922 166.781 144.905 168.878L138.671 164.615C140.382 162.842 142.093 161.07 143.805 159.297C143.88 159.174 143.912 159.029 143.896 158.885L143.977 158.873ZM142.453 159.126C140.882 160.741 139.324 162.369 137.754 163.996L132.918 160.741C136.046 160.203 139.198 159.664 142.372 159.137L142.453 159.126ZM129.847 161.269L131.359 161.005C131.36 161.076 131.379 161.145 131.413 161.207C131.447 161.269 131.495 161.321 131.554 161.36L136.826 164.924C134.809 167.021 132.803 169.142 130.786 171.25L124.552 167.079L129.675 161.693C129.765 161.574 129.813 161.429 129.812 161.28L129.847 161.269ZM128.334 161.532L123.647 166.471L118.822 163.274C121.951 162.69 125.125 162.117 128.299 161.544L128.334 161.532ZM117.023 163.572H117.263C117.263 163.643 117.28 163.713 117.314 163.775C117.348 163.837 117.398 163.89 117.458 163.927L122.741 167.423C120.896 169.371 119.063 171.342 117.218 173.302C117.149 170.081 117.092 166.85 117.023 163.572ZM117.263 175.651L122.993 179.433L117.458 185.346L117.263 175.651ZM117.504 187.707L123.234 191.5L117.71 197.425C117.649 194.208 117.581 190.984 117.504 187.753V187.707ZM117.756 199.774L123.486 203.567C121.653 205.516 119.819 207.475 117.985 209.446L117.756 199.774ZM117.997 211.842C119.899 213.091 121.79 214.363 123.727 215.623L118.226 221.514C118.123 218.328 118.066 215.142 117.997 211.887V211.842ZM118.238 223.897L123.968 227.691L118.478 233.57C118.375 230.395 118.306 227.164 118.238 223.943V223.897ZM118.478 235.965L124.208 239.758C122.375 241.706 120.552 243.666 118.719 245.637C118.627 242.436 118.547 239.227 118.478 236.011V235.965ZM118.73 248.021L124.46 251.814L118.982 257.693C118.898 254.538 118.814 251.329 118.73 248.067V248.021ZM118.971 260.088C120.858 261.349 122.745 262.613 124.632 263.881L119.166 269.749L118.971 260.088ZM119.212 272.144L124.873 275.949L119.406 281.816C119.338 278.63 119.28 275.41 119.212 272.19V272.144ZM119.452 284.211L125.114 288.005L119.647 293.872C119.586 290.679 119.521 287.474 119.452 284.257V284.211ZM119.704 296.279L125.343 300.072L119.899 305.94C119.83 302.746 119.766 299.541 119.704 296.325V296.279ZM119.945 308.335L125.583 312.128C123.765 314.076 121.951 316.032 120.14 317.995C120.048 314.81 120.002 311.605 120.002 308.381L119.945 308.335ZM120.381 330.109C120.312 326.888 120.255 323.668 120.186 320.448C122.065 321.697 123.945 322.969 125.813 324.241L120.381 330.109ZM120.381 332.504L126.007 336.297L120.575 342.165C120.552 338.948 120.503 335.728 120.426 332.504H120.381ZM120.621 344.56L126.248 348.364L120.816 354.232L120.621 344.56ZM120.873 356.616L126.477 360.432C124.678 362.38 122.867 364.328 121.068 366.288L120.873 356.616ZM121.148 368.706L126.752 372.511C124.942 374.459 123.139 376.415 121.343 378.378L121.148 368.706ZM121.584 390.48L121.389 380.808L126.993 384.612C125.19 386.522 123.391 388.478 121.595 390.48H121.584ZM127.83 383.684L121.733 379.547C123.704 377.404 125.664 375.284 127.635 373.164L133.743 377.347L127.83 383.684ZM134.82 388.486L128.723 384.292C130.679 382.168 132.647 380.055 134.625 377.954C136.654 379.352 138.694 380.762 140.722 382.183L134.82 388.486ZM141.582 381.266C139.553 379.845 137.513 378.447 135.485 377.037L141.398 370.734L147.506 375.009C145.535 377.049 143.564 379.115 141.593 381.209L141.582 381.266ZM148.366 374.092L142.258 369.818C144.229 367.72 146.211 365.635 148.183 363.549L154.291 367.869L148.366 374.092ZM155.162 366.964L149.053 362.655C151.025 360.569 153.003 358.495 154.99 356.432L161.098 360.787C159.127 362.781 157.156 364.844 155.173 366.907L155.162 366.964ZM167.928 353.739C165.934 355.779 163.948 357.827 161.969 359.882L155.849 355.527L161.797 349.339C163.86 350.79 165.907 352.238 167.94 353.682L167.928 353.739ZM161.774 347.814L155.654 343.46C157.637 341.385 159.62 339.334 161.614 337.283L167.745 341.66L161.774 347.814ZM168.65 340.778L162.519 336.377C164.505 334.322 166.499 332.275 168.501 330.235L174.632 334.67L168.65 340.778ZM175.526 333.787L169.28 329.284L175.263 323.187L181.405 327.656C179.445 329.673 177.451 331.69 175.457 333.73L175.526 333.787ZM182.551 338.91L176.351 334.326L182.333 328.264L188.464 332.779L182.551 338.91ZM189.427 332.034C187.387 330.506 185.343 328.997 183.296 327.507L189.301 321.491L195.432 326.075L189.427 332.034ZM196.303 325.158L190.172 320.574C192.177 318.568 194.172 316.574 196.177 314.592L202.32 319.176L196.303 325.158ZM209.218 312.437C207.217 314.393 205.211 316.364 203.202 318.351L197.059 313.767L203.076 307.83L209.218 312.437ZM203.053 306.272C201.013 304.744 198.966 303.216 196.91 301.688C198.92 299.709 200.929 297.73 202.938 295.752L209.092 300.336C206.984 302.238 204.978 304.232 202.961 306.215L203.053 306.272ZM209.929 299.511C207.881 297.983 205.826 296.435 203.764 294.869L209.814 288.956L215.98 293.643L209.929 299.511ZM216.805 292.795L210.651 288.108L216.702 282.252L222.879 286.973L216.805 292.795ZM223.738 286.125L217.584 281.392L223.647 275.571L229.801 280.338L223.738 286.125ZM230.695 279.49L224.506 274.734C226.523 272.793 228.548 270.883 230.58 269.004L236.734 273.806L230.695 279.49ZM237.742 285.002L231.588 280.189L237.662 274.459L243.816 279.307L237.742 285.002ZM244.699 278.47L238.522 273.588L244.607 267.858L250.761 272.751C248.733 274.631 246.704 276.522 244.676 278.413L244.699 278.47ZM251.678 271.995L245.501 267.102L251.609 261.44L257.775 266.368C255.719 268.194 253.679 270.051 251.655 271.938L251.678 271.995ZM264.765 259.974L258.668 265.497L252.503 260.569C254.543 258.69 256.571 256.811 258.611 254.954L264.765 259.974ZM258.577 253.464C256.525 251.814 254.463 250.175 252.411 248.548L258.519 242.921L264.696 247.895C262.634 249.682 260.594 251.55 258.554 253.407L258.577 253.464ZM265.579 247.081L259.413 242.107C261.438 240.243 263.474 238.383 265.521 236.526L271.698 241.534L265.579 247.081ZM272.592 240.744L266.415 235.724L272.546 230.189C274.609 231.862 276.661 233.547 278.723 235.243C276.653 237.031 274.602 238.845 272.569 240.686L272.592 240.744ZM279.652 246.531L273.486 241.466L279.617 235.976C281.68 237.657 283.735 239.353 285.783 241.065L279.652 246.531ZM286.677 240.285L280.442 235.128L286.585 229.673L292.75 234.807L286.677 240.285ZM293.736 246.164L287.571 241.019L293.713 235.61C295.776 237.329 297.827 239.048 299.879 240.789C297.804 242.508 295.764 244.308 293.713 246.084L293.736 246.164ZM300.761 240.01C298.713 238.276 296.658 236.549 294.595 234.83L300.75 229.456L306.926 234.681C304.841 236.389 302.789 238.177 300.738 239.953L300.761 240.01ZM307.809 245.992L301.655 240.767L307.809 235.426L313.963 240.686L307.809 245.992ZM308.703 234.67L314.857 229.375L321.011 234.681L314.822 239.873C312.783 238.119 310.731 236.354 308.68 234.624L308.703 234.67ZM321.905 246.004C319.853 244.227 317.802 242.451 315.751 240.698C317.802 238.933 319.853 237.191 321.905 235.449C323.956 237.214 326.007 239.002 328.059 240.789C325.981 242.486 323.922 244.205 321.882 245.946L321.905 246.004ZM322.844 234.624L328.998 229.421C331.05 231.209 333.101 232.997 335.152 234.807C333.09 236.515 331.038 238.245 328.987 239.976L322.844 234.624ZM336.023 246.141C333.972 244.331 331.932 242.531 329.881 240.744L336.046 235.575L342.177 241.007L336.023 246.141ZM343.071 240.274C341.02 238.452 338.98 236.641 336.929 234.842C338.98 233.123 341.043 231.404 343.094 229.719C345.149 231.53 347.201 233.352 349.248 235.186C347.147 236.882 345.069 238.582 343.014 240.285L343.071 240.274ZM344 228.974C346.051 227.267 348.114 225.536 350.176 223.886L356.308 229.398L350.131 234.441L344 228.974ZM351.025 235.243L357.201 230.2L363.333 235.759C361.27 237.42 359.207 239.082 357.156 240.767C355.078 238.964 353.015 237.126 350.967 235.254L351.025 235.243ZM364.1 247.127L357.981 241.569L364.146 236.572C366.186 238.429 368.226 240.285 370.266 242.165L364.1 247.127ZM365.052 235.85C367.114 234.2 369.166 232.538 371.229 230.899L377.348 236.526C375.285 238.169 373.226 239.812 371.171 241.454L365.052 235.85ZM378.162 247.895L372.122 242.256L378.311 237.34L384.408 243.013L378.162 247.895ZM385.244 242.325L379.124 236.595C381.187 234.968 383.254 233.344 385.324 231.725L391.421 237.455L385.244 242.325ZM386.207 231.06L392.395 226.224L398.503 231.954L392.315 236.756L386.207 231.06ZM399.294 243.379C397.262 241.454 395.23 239.544 393.197 237.649L399.386 232.859C401.426 234.784 403.458 236.717 405.482 238.658L399.294 243.379ZM400.291 232.126L406.479 227.381L412.576 233.214L406.376 237.936C404.359 235.988 402.335 234.051 400.303 232.126H400.291ZM407.27 238.784C409.333 237.203 411.396 235.632 413.459 234.074C415.491 236.022 417.515 237.982 419.532 239.953C417.47 241.481 415.407 243.039 413.344 244.629C411.335 242.673 409.314 240.725 407.282 238.784H407.27ZM420.3 251.39L414.238 245.5L420.415 240.835C422.447 242.806 424.472 244.781 426.489 246.76L420.3 251.39ZM421.309 240.171L427.509 235.587C429.541 237.565 431.562 239.556 433.571 241.557C431.508 243.085 429.449 244.613 427.394 246.141L421.309 240.171ZM434.316 252.914L428.265 246.955C430.32 245.427 432.379 243.899 434.442 242.371L440.516 248.376C438.453 249.843 436.39 251.367 434.327 252.88L434.316 252.914ZM435.347 241.718C437.41 240.19 439.473 238.662 441.536 237.134L447.586 243.173L441.398 247.677L435.347 241.718ZM448.32 254.645C446.318 252.62 444.305 250.603 442.281 248.594C444.343 247.081 446.406 245.591 448.469 244.09L454.508 250.175L448.32 254.645ZM449.374 243.448L455.563 238.99C457.58 241.03 459.589 243.074 461.591 245.121C459.528 246.588 457.465 248.055 455.402 249.545C453.408 247.471 451.391 245.442 449.386 243.414L449.374 243.448ZM462.313 256.547C460.311 254.492 458.302 252.448 456.285 250.416L462.473 246.004L468.49 252.169L462.313 256.547ZM469.395 251.55L463.367 245.373C465.43 243.907 467.496 242.451 469.567 241.007L475.583 247.207L469.395 251.55ZM482.666 242.291L476.466 246.577C474.472 244.499 472.466 242.428 470.449 240.365L476.649 236.034L482.666 242.291ZM476.672 234.509C474.67 232.431 472.661 230.361 470.644 228.298C472.718 226.843 474.781 225.399 476.855 223.966C478.861 226.04 480.878 228.126 482.883 230.223L476.672 234.509Z"
              fill="white"
            />
            <path
              opacity="0.9"
              d="M469.246 143.952L468.673 142.405C461.201 138.967 454.554 140.113 450.933 142.348C450.619 142.536 450.316 142.742 450.027 142.967C446.846 139.418 442.89 136.649 438.466 134.874C434.043 133.1 429.27 132.367 424.518 132.733C421.031 132.995 417.603 133.767 414.341 135.025C410.181 131.026 402.755 127.702 393.484 128.149C385.095 128.573 378.827 131.828 375.446 135.426C368.702 131.79 361.184 129.826 353.523 129.696C344.813 129.696 339.461 131.564 337.192 133.948C332.869 131.181 327.953 129.476 322.844 128.974C316.565 128.469 310.272 129.777 304.715 132.745C302.577 130.294 299.881 128.395 296.853 127.209C290.39 124.631 283.823 125.021 278.849 128.264C275.822 130.228 273.573 133.186 272.489 136.63C271.301 133.822 269.307 131.429 266.759 129.754C258.955 124.631 244.687 127.599 238.109 133.478C236.302 134.921 235.051 136.946 234.568 139.208C231.846 136.314 228.537 134.036 224.861 132.527C217.527 129.478 210.319 129.845 205.059 133.535C202.963 135.007 201.266 136.976 200.119 139.265C198.719 137.541 196.994 136.108 195.043 135.048C186.47 130.269 177.062 133.776 171.572 138.234C169.735 139.697 168.158 141.46 166.908 143.448C165.233 142.364 163.378 141.588 161.43 141.156C152.136 138.864 142.922 142.531 137.651 146.966C136.554 145.747 135.172 144.818 133.628 144.262C131.584 143.493 129.368 143.301 127.222 143.705C125.076 144.109 123.082 145.095 121.458 146.554C117.596 149.831 115.567 154.931 116.427 159.252L117.573 159.022C116.794 155.103 118.719 150.439 122.214 147.425C123.685 146.098 125.493 145.201 127.439 144.832C129.385 144.462 131.395 144.633 133.25 145.328C134.619 145.81 135.842 146.635 136.803 147.723C135.842 148.607 134.995 149.608 134.282 150.702C132.964 152.8 132.838 154.691 133.915 155.997C134.224 156.499 134.691 156.884 135.243 157.091C135.795 157.299 136.4 157.317 136.963 157.143C138.487 156.604 139.565 154.564 139.588 152.181C139.605 150.653 139.171 149.153 138.338 147.872C143.45 143.597 152.503 140.159 161.155 142.256C163.003 142.664 164.759 143.41 166.335 144.457C165.037 146.679 164.674 149.325 165.327 151.814C166.312 154.885 167.756 155.172 168.513 155.069C169.876 154.897 170.954 153.212 171.08 151.069C171.121 149.738 170.846 148.416 170.278 147.211C169.711 146.006 168.866 144.952 167.814 144.136C169.014 142.222 170.529 140.525 172.294 139.116C177.474 134.888 186.367 131.553 194.435 136.068C196.424 137.153 198.156 138.654 199.512 140.469C198.568 142.837 198.15 145.383 198.286 147.929C198.469 151.78 199.432 152.719 200.291 152.834C201.151 152.949 202.01 152.135 202.526 150.622C203.02 148.884 203.123 147.057 202.828 145.274C202.532 143.491 201.846 141.795 200.818 140.308C201.887 137.977 203.556 135.972 205.654 134.498C210.582 131.06 217.401 130.716 224.369 133.604C228.256 135.197 231.709 137.691 234.442 140.881C234.525 141.833 234.794 142.76 235.233 143.609C237.364 147.895 238.098 147.757 238.453 147.7C238.616 147.667 238.764 147.58 238.872 147.453C238.98 147.326 239.042 147.167 239.049 147.001C239.141 146.153 238.063 143.437 235.611 140.423C235.611 137.902 237.227 135.839 238.866 134.326C245.18 128.722 258.76 125.857 266.152 130.705C268.941 132.55 271.006 135.303 271.996 138.498C271.786 139.528 271.663 140.575 271.63 141.626C271.446 146.405 272.168 146.565 272.546 146.646C272.741 146.646 273.211 146.714 273.509 145.992C274.132 143.504 274.016 140.887 273.177 138.463C273.558 136.573 274.311 134.778 275.393 133.182C276.476 131.586 277.865 130.222 279.48 129.169C284.133 126.144 290.31 125.731 296.429 128.229C299.243 129.314 301.754 131.059 303.752 133.318C302.27 134.206 301.104 135.537 300.417 137.122C300.039 138.188 299.821 140.274 302.618 142.13C304.91 143.632 306.216 143.448 306.949 143.013C307.426 142.662 307.793 142.182 308.006 141.63C308.219 141.078 308.27 140.476 308.153 139.896C307.849 137.589 306.913 135.412 305.448 133.604C310.755 130.795 316.758 129.57 322.741 130.074C327.636 130.537 332.35 132.16 336.493 134.807C336.2 135.27 336.009 135.789 335.932 136.332C335.703 138.188 337.078 139.77 339.599 140.366C340.848 140.675 341.65 140.595 342.074 140.102C342.233 139.901 342.328 139.658 342.349 139.403C342.369 139.148 342.313 138.893 342.189 138.669C341.212 136.994 339.834 135.588 338.178 134.578C340.138 132.676 344.813 130.808 353.259 130.808H353.523C360.903 130.939 368.148 132.812 374.667 136.274C374.131 136.936 373.67 137.655 373.291 138.417C372.397 140.297 372.375 141.97 373.223 143.15C373.864 144.021 375.24 144.984 378.288 144.594C381.336 144.205 382.047 142.829 381.989 141.787C381.875 140.113 379.778 137.982 376.454 135.965C379.686 132.641 385.622 129.65 393.541 129.249C402.652 128.779 409.379 131.919 413.207 135.449C409.218 137.374 407.935 139.678 407.557 140.629C407.237 141.331 407.124 142.109 407.232 142.872C407.339 143.636 407.663 144.352 408.164 144.938C409.448 146.371 411.74 146.817 414.307 146.084C416.874 145.351 418.341 143.471 417.939 140.893C417.527 138.974 416.582 137.21 415.212 135.804C418.242 134.707 421.407 134.028 424.621 133.787C429.195 133.425 433.791 134.123 438.051 135.829C442.311 137.534 446.119 140.201 449.179 143.62C448.724 144.034 448.359 144.538 448.109 145.1C447.858 145.663 447.727 146.271 447.724 146.886C447.807 147.613 448.095 148.302 448.556 148.87C449.017 149.439 449.631 149.864 450.325 150.095C451.563 150.68 452.468 150.702 453.007 150.152C453.546 149.602 453.729 148.846 452.847 146.955C452.28 145.813 451.584 144.74 450.772 143.758C451.014 143.567 451.267 143.391 451.529 143.231C455.081 141.145 461.751 140.09 469.246 143.952ZM138.453 152.112C138.453 153.969 137.628 155.642 136.597 156.008C136.253 156.075 135.898 156.036 135.578 155.894C135.259 155.753 134.99 155.517 134.809 155.218C133.812 154.003 134.671 152.215 135.267 151.264C135.916 150.284 136.686 149.391 137.559 148.605C138.178 149.668 138.488 150.883 138.453 152.112ZM169.968 150.966C169.876 152.662 169.086 153.808 168.398 153.888C167.71 153.969 166.977 153.029 166.461 151.424C165.899 149.297 166.195 147.033 167.286 145.121C168.153 145.823 168.846 146.716 169.311 147.73C169.777 148.744 170.001 149.851 169.968 150.966ZM201.472 150.21C201.116 151.275 200.646 151.677 200.486 151.654C200.326 151.631 199.604 150.851 199.466 147.826C199.354 145.723 199.646 143.619 200.326 141.626C201.096 142.91 201.595 144.338 201.792 145.822C201.99 147.306 201.88 148.815 201.472 150.255V150.21ZM306.995 139.976C307.075 140.996 306.835 141.741 306.353 142.027C305.872 142.314 304.6 142.027 303.236 141.179C301.601 140.079 301.017 138.853 301.483 137.5C302.113 136.123 303.154 134.974 304.463 134.211C305.819 135.882 306.695 137.891 306.995 140.022V139.976ZM340.768 138.475C340.982 138.727 341.135 139.025 341.215 139.346C341.215 139.346 340.882 139.506 339.874 139.254C337.995 138.773 336.917 137.707 337.078 136.469C337.126 136.111 337.251 135.767 337.444 135.461C338.704 136.303 339.825 137.335 340.768 138.52V138.475ZM380.878 141.913C380.935 142.933 379.445 143.345 378.173 143.506C376.248 143.758 374.827 143.414 374.185 142.531C373.901 141.976 373.768 141.355 373.798 140.732C373.828 140.109 374.021 139.505 374.357 138.979C374.724 138.233 375.178 137.533 375.709 136.893C378.815 138.727 380.763 140.652 380.843 141.901L380.878 141.913ZM416.839 141.179C417.149 143.162 416.186 144.503 414.043 145.076C411.9 145.649 410.044 145.339 409.058 144.239C408.701 143.809 408.474 143.287 408.403 142.733C408.332 142.179 408.42 141.616 408.657 141.11C409.287 139.517 411.018 137.776 414.123 136.377C415.46 137.685 416.394 139.347 416.816 141.168L416.839 141.179ZM451.804 147.528C452.4 148.8 452.285 149.339 452.205 149.43C452.125 149.522 451.746 149.579 450.807 149.132C450.314 148.966 449.875 148.671 449.535 148.278C449.194 147.885 448.965 147.409 448.87 146.898C448.882 146.464 448.981 146.038 449.162 145.644C449.344 145.25 449.603 144.897 449.924 144.606C450.665 145.501 451.296 146.483 451.804 147.528Z"
              fill="white"
            />
            <path
              opacity="0.9"
              d="M272.729 142.944C272.729 143.15 272.729 143.345 272.729 143.528C272.741 143.299 272.741 143.104 272.729 142.944Z"
              fill="white"
            />
          </g>
          <path
            d="M24.208 53.6821L68.18 67.9039V101.253"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1006 96.531V49.121L19.3603 52.112"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M39.1402 115.841L10.1006 114.787V101.253"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.1172 109.103L53.4656 109.997V105.596"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.8691 93.9296V107.945L37.066 108.575"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.4653 99.0064V90.503L29.8691 85.3804V91.1104"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M78.7456 108.633C78.7456 111.463 69.8756 113.767 58.9198 113.767C47.964 113.767 39.1055 111.475 39.1055 108.633C39.1055 105.791 47.9755 103.499 58.9198 103.499C69.8641 103.499 78.7456 105.802 78.7456 108.633Z"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.8818 358.77C45.8216 373.164 46.6658 387.569 47.4145 401.986"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.4014 165.325C34.3496 213.354 37.9938 261.291 41.4548 309.24C42.4327 322.74 43.3762 336.247 44.2854 349.763"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.9718 118.557L29.8691 125.387L31.9892 158.85"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.6162 398.502C33.7767 401.497 33.9447 404.492 34.1205 407.487"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.9131 209.87C26.523 269.921 29.1129 329.582 33.1125 389.552"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.0275 118.557L18.1455 125.731L22.6264 204.725"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.4033 113.01C43.4033 113.01 45.5693 136.137 49.7751 136.801C53.9809 137.466 61.9571 114.856 61.9571 114.856"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M55.4131 114.97C55.4131 114.97 58.8511 135.518 61.9567 136.813C65.0624 138.108 71.9957 107.659 71.9957 107.659"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M75.7096 111.693C75.7096 111.693 72.6612 129.272 70.4723 131.335C68.2835 133.398 63.7109 106.891 63.7109 106.891"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58.8514 107.659C58.8514 107.659 56.1812 124.608 52.6859 126.212C49.1906 127.817 48.2051 111.589 48.2051 111.589"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68.2941 132.103C68.2941 132.103 66.8731 143.895 62.9423 145.087C59.0115 146.279 55.4131 134.613 55.4131 134.613"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48.7549 126.327C48.7549 126.327 51.8835 142.486 54.1755 142.921C56.4675 143.357 58.8511 134.635 58.8511 134.635"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.8867 415.337C54.038 411.085 83.6162 406.169 114.421 403.693H126.74C252.434 392.6 376.878 402.467 499.775 417.904"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M499.775 368.076C393.701 340.365 160.295 348.594 160.295 348.594V391.557"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M499.775 316.838C499.775 316.838 354.989 294.021 220.277 296.634L218.1 337.959"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M273.13 293.07V256.856C273.13 256.856 425.88 253.625 499.774 276.533"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.1"
            d="M463.871 381.977C436.103 376.121 424.46 393.437 424.46 393.437L426.534 355.745L447.735 358.335L451.173 310.363L466.197 312.185V293.07L478.929 271.113C441.111 262.609 400.417 260.569 400.417 260.569L386.47 274.86L375.663 332.802L364.1 336.034C365.968 322.087 361.545 308.633 361.545 308.633C361.545 308.633 347.391 309.687 337.696 307.212C328.001 304.736 320.174 304.736 312.393 307.212C304.611 309.687 278.448 307.212 278.448 307.212C272.443 311.796 278.448 343.081 278.448 343.081L258.301 347.31L319.979 348.456C319.979 348.456 319.819 371.582 318.673 372.935C317.527 374.287 282.344 377.954 279.514 376.911C276.683 375.869 257.236 366.987 255.448 365.589C253.66 364.191 255.448 348.456 255.448 348.456H250.864C250.864 348.456 247.93 361.945 248.939 366.162C249.947 370.379 270.655 380.074 275.766 381.839C280.878 383.604 309.195 382.905 318.661 379.364C328.127 375.823 324.701 348.903 324.701 348.903L333.41 349.075L344.079 404.347C344.079 404.347 342.315 413.732 357.373 411.899C372.432 410.065 375.652 405.195 375.652 405.195L368.466 352.479L406.009 353.705L401.196 420.597C418.948 422.889 431.256 420.597 431.256 420.597C466.873 430.304 487.742 416.345 487.742 416.345C487.742 416.345 491.65 387.833 463.871 381.977Z"
            fill="black"
            fillOpacity="0.7"
          />
          <path
            d="M250.154 345.786C250.154 345.786 246.269 337.42 246.612 328.871C246.956 320.322 256.926 313.068 256.926 313.068C258.374 313.824 259.889 314.442 261.453 314.913C263.287 315.36 287.341 311.119 294.756 310.409C302.17 309.698 319.716 314.913 319.716 314.913H330.213C330.213 314.913 334.854 341.019 331.955 347.459C331.898 347.448 273.486 346.141 250.154 345.786Z"
            fill="#BFBFBF"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M259.527 316.403C259.527 316.403 255.276 324.184 255.459 325.949C255.642 327.714 258.461 330.991 261.292 330.59C264.123 330.189 280.556 328.401 288.693 328.86C296.83 329.318 303.591 330.888 305.883 330.624C308.175 330.361 308.542 322.236 309.779 320.471C311.017 318.706 317.205 314.191 317.205 314.191"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M324.047 318.763C324.047 318.763 317.354 330.338 317.171 332.836C316.988 335.334 318.225 346.588 325.835 347.31"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M326.351 317.193C326.351 317.193 322.454 330.945 321.045 336.389C319.635 341.832 320.185 364.775 317.16 369.497C314.134 374.218 278.792 378.665 273.13 375.227C267.469 371.789 247.323 367.411 247.323 359.561C247.323 351.711 248.469 341.156 248.469 341.156L247.323 336.733C247.323 336.733 245.202 360.031 245.558 363.033C245.913 366.036 269.246 376.109 270.655 380.006C272.065 383.902 298.95 381.06 307.786 378.768C316.621 376.476 319.635 381.346 321.217 369.451C322.798 357.555 321.4 338.818 323.348 334.922C325.296 331.026 331.301 322.889 330.155 314.855L326.351 317.193Z"
            fill="#757575"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M437.051 419.716C446.996 417.553 453.305 407.738 451.142 397.793C448.979 387.848 439.164 381.54 429.219 383.703C419.274 385.866 412.965 395.681 415.128 405.626C417.291 415.57 427.106 421.879 437.051 419.716Z"
            fill="#FFC100"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M443.834 402.253C445.58 394.822 440.971 387.384 433.541 385.638C426.11 383.892 418.671 388.501 416.925 395.932C415.18 403.362 419.788 410.801 427.219 412.547C434.65 414.293 442.089 409.684 443.834 402.253Z"
            fill="white"
          />
          <path
            d="M415.728 395.66C415.728 395.66 422.237 410.844 435.783 412.437C449.328 414.03 451.162 405.561 451.162 405.561"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M439.633 384.395C445.626 388.085 447.655 422.74 426.431 418.775"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M424.769 385.254C425.256 388.341 426.567 391.239 428.563 393.643C432.917 398.731 434.923 406.513 432.001 411.601C429.709 415.532 424.976 416.54 419.704 414.248"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M450.909 396.68C451.597 404.152 448.674 404.404 445.649 411.429C444.968 412.991 444.579 414.665 444.503 416.368"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M395.65 410.867C395.134 413.469 393.071 415.554 394.24 418.397C394.24 418.397 400.406 422.041 417.55 419.921C417.55 419.921 419.028 416.345 417.263 410.867C415.498 405.389 406.754 400.76 406.754 400.76L395.65 410.867Z"
            fill="#757575"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M338.269 390.01C338.269 390.01 339.415 395.958 337.479 398.433C335.542 400.909 324.873 406.02 320.758 406.948C316.644 407.876 317.194 412.838 317.194 412.838C326.956 415.556 337.289 415.444 346.99 412.518L349.489 412.884L357.362 411.876C357.765 409.363 357.66 406.795 357.052 404.324C356.021 400.439 349.489 388.497 349.489 388.497L338.269 390.01Z"
            fill="#757575"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M367.194 324.138C367.194 324.138 337.398 316.047 327.084 321.284C320.047 324.849 317.171 330.59 322.225 341.592C324.849 347.322 333.318 380.177 333.685 382.733C334.052 385.289 335.347 390.698 335.347 390.698L337.421 393.803L337.49 398.387L357.075 404.278C357.075 404.278 355.046 397.734 355.78 396.6C356.513 395.465 352.938 388.245 352.571 382.699C352.204 377.152 346.646 347.287 347.758 347.746C348.869 348.204 365.991 350.336 380.339 352.158C384.774 352.719 412.759 352.158 412.759 352.158C416.44 342.459 417.89 332.056 416.999 321.72C415.395 305.034 367.194 324.138 367.194 324.138Z"
            fill="#263238"
          />
          <path
            d="M382.436 240.904C381.049 236.526 377.233 208.541 377.233 208.541C377.611 196.554 374.184 189.174 373.898 173.806C373.611 158.117 373.52 158.117 372.03 155.882C370.723 153.934 362.002 153.361 358.186 154.874C355.4 155.887 352.515 156.605 349.58 157.017C349.58 157.017 347.815 160.111 358.748 159.928C359.496 160.538 360.374 160.969 361.315 161.188C362.358 161.246 365.555 161.521 365.555 161.521C366.495 174.241 363.538 194.755 365.268 205.252C365.268 205.252 364.879 209.423 364.959 210.81C365.134 212.219 365.561 213.586 366.22 214.844C367.171 226.911 367.366 247.092 368.649 252.089C370.098 257.158 372.96 261.709 376.9 265.211"
            fill="white"
          />
          <path
            d="M382.436 240.904C381.049 236.526 377.233 208.541 377.233 208.541C377.611 196.554 374.184 189.174 373.898 173.806C373.611 158.117 373.52 158.117 372.03 155.882C370.723 153.934 362.002 153.361 358.186 154.874C355.4 155.887 352.515 156.605 349.58 157.017C349.58 157.017 347.815 160.111 358.748 159.928C359.496 160.538 360.374 160.969 361.315 161.188C362.358 161.246 365.555 161.521 365.555 161.521C366.495 174.241 363.538 194.755 365.268 205.252C365.268 205.252 364.879 209.423 364.959 210.81C365.134 212.219 365.561 213.586 366.22 214.844C367.171 226.911 367.366 247.092 368.649 252.089C370.098 257.158 372.96 261.709 376.9 265.211"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M365.566 161.521C367.732 161.864 370.884 161.624 371.067 159.389L365.566 161.521Z"
            fill="white"
          />
          <path
            d="M365.566 161.521C367.732 161.864 370.884 161.624 371.067 159.389"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M358.76 159.928C358.76 159.928 358.485 158.541 360.421 158.438C362.358 158.335 364.776 158.908 365.979 157.704"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M360.994 155.722C359.516 156.65 355.058 157.143 354.038 156.96C353.018 156.776 352.468 159.55 357.831 159.928"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M354.302 159.779C353.162 159.453 352.098 158.904 351.173 158.163C350.52 157.338 350.783 156.96 352.731 156.501C354.435 156.149 356.157 155.889 357.888 155.722"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M404.21 244.193C404.21 244.193 417.148 216.288 416.965 213.572C416.965 213.572 406.96 199.465 403.533 194.823C396.761 185.655 394.469 183.638 394.239 180.602C393.953 176.911 397.677 172.58 397.677 172.58C397.566 171.051 397.875 169.521 398.571 168.156C398.571 168.156 396.761 160.501 397.964 160.501C397.964 160.501 398.159 158.701 399.11 158.701C399.11 158.701 399.11 156.856 400.405 157.739C400.405 157.739 401.551 161.005 402.353 163.583C402.995 165.738 404.164 167.606 404.221 168.672C404.347 170.861 401.184 180.246 401.184 180.246C401.184 180.246 420.666 197.299 425.823 205.286C430.98 213.274 431.714 212.976 431.026 216.07C430.338 219.164 421.72 245.752 418.878 253.888C416.863 259.124 413.555 263.764 409.263 267.377"
            fill="white"
          />
          <path
            d="M404.21 244.193C404.21 244.193 417.148 216.288 416.965 213.572C416.965 213.572 406.96 199.465 403.533 194.823C396.761 185.655 394.469 183.638 394.239 180.602C393.953 176.911 397.677 172.58 397.677 172.58C397.566 171.051 397.875 169.521 398.571 168.156C398.571 168.156 396.761 160.501 397.964 160.501C397.964 160.501 398.159 158.701 399.11 158.701C399.11 158.701 399.11 156.856 400.405 157.739C400.405 157.739 401.551 161.005 402.353 163.583C402.995 165.738 404.164 167.606 404.221 168.672C404.347 170.861 401.184 180.246 401.184 180.246C401.184 180.246 420.666 197.299 425.823 205.286C430.98 213.274 431.714 212.976 431.026 216.07C430.338 219.164 421.72 245.752 418.878 253.888C416.863 259.124 413.555 263.764 409.263 267.377"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M397.964 160.524C398.606 160.203 398.789 160.524 398.984 161.039C399.517 163.604 400.179 166.139 400.966 168.637"
            fill="white"
          />
          <path
            d="M397.964 160.524C398.606 160.203 398.789 160.524 398.984 161.039C399.517 163.604 400.179 166.139 400.966 168.637"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M399.122 158.724C399.214 158.816 399.443 158.3 399.718 159.137C399.993 159.974 401.529 165.864 402.445 167.984"
            fill="white"
          />
          <path
            d="M399.122 158.724C399.214 158.816 399.443 158.3 399.718 159.137C399.993 159.974 401.529 165.864 402.445 167.984"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M401.196 180.269C400.555 181.095 399.71 181.739 398.743 182.137L401.196 180.269Z"
            fill="white"
          />
          <path
            d="M401.196 180.269C400.555 181.095 399.71 181.739 398.743 182.137"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M388.441 241.5C388.441 241.5 390.436 247.23 389.897 247.998C389.358 248.766 385.909 246.485 385.909 246.485C385.909 246.485 383.113 249.923 383.044 250.278C382.975 250.634 382.826 258.083 384.304 258.083C385.783 258.083 403.786 251.207 404.233 251.321C404.68 251.436 406.755 248.33 406.755 248.33L404.577 246.176C404.577 246.176 402.629 243.517 405.104 237.134C407.58 230.751 388.441 241.5 388.441 241.5Z"
            fill="white"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M403.064 237.489C403.717 242.52 396.257 246.508 391.432 246.508C390.068 246.508 386.195 243.208 384.556 235.231C383.903 231.977 384.556 228.252 384.556 224.425C384.499 211.635 400.841 209.355 406.33 217.721C408.496 221.01 409.023 227.507 406.25 232.802"
            fill="white"
          />
          <path
            d="M403.064 237.489C403.717 242.52 396.257 246.508 391.432 246.508C390.068 246.508 386.195 243.208 384.556 235.231C383.903 231.977 384.556 228.252 384.556 224.425C384.499 211.635 400.841 209.355 406.33 217.721C408.496 221.01 409.023 227.507 406.25 232.802"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M385.416 223.256C385.895 222.733 386.489 222.328 387.152 222.073C387.814 221.819 388.526 221.721 389.232 221.789"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M395.649 221.789C395.649 221.789 399.294 220.918 401.196 222.935"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M397.987 227.507C397.987 228.08 397.735 228.55 397.426 228.55C397.116 228.55 396.864 228.08 396.864 227.507C396.864 226.934 397.116 226.476 397.426 226.476C397.735 226.476 397.987 226.934 397.987 227.507Z"
            fill="#263238"
          />
          <path
            d="M388.441 227.507C388.441 228.08 388.189 228.55 387.88 228.55C387.57 228.55 387.318 228.08 387.318 227.507C387.318 226.934 387.57 226.476 387.88 226.476C388.189 226.476 388.441 226.934 388.441 227.507Z"
            fill="#263238"
          />
          <path
            d="M390.183 225.341C390.619 226.384 391.226 227.943 389.232 231.851C388.877 232.527 390.378 233.925 390.378 233.925"
            fill="white"
          />
          <path
            d="M390.183 225.341C390.619 226.384 391.226 227.943 389.232 231.851C388.877 232.527 390.378 233.925 390.378 233.925"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M390.618 236.916C392.005 236.4 393.3 238.738 391.833 239.953C390.366 241.168 390.114 238.727 390.618 237.787"
            fill="white"
          />
          <path
            d="M390.618 236.916C392.005 236.4 393.3 238.738 391.833 239.953C390.366 241.168 390.114 238.727 390.618 237.787"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M410.651 218.752C410.651 218.752 410.57 215.314 409.871 214.5C409.172 213.687 405.711 212.781 405.711 212.781C405.417 211.566 404.712 210.49 403.717 209.733C402.239 208.862 399.294 209.813 399.294 209.813C398.484 208.996 397.404 208.503 396.257 208.426C395.663 208.411 395.077 208.577 394.58 208.902C394.082 209.228 393.696 209.698 393.472 210.249C393.472 210.249 391.57 210.157 389.897 210.249C388.223 210.34 387.318 213.366 387.318 213.366C387.318 213.366 385.84 212.942 385.416 213.801C385.235 214.588 385.295 215.41 385.588 216.162C384.155 218.271 384.831 221.789 384.831 221.789L386.883 217.056C391.581 215.623 396.625 215.821 401.196 217.617C401.196 220.574 403.97 226.121 403.97 226.121L403.74 229.948C406.262 232.802 406.032 235.059 406.032 235.059L409.47 227.507C410.214 226.037 410.824 224.503 411.292 222.923C411.41 221.502 411.19 220.073 410.651 218.752Z"
            fill="#263238"
          />
          <path
            d="M404.21 231.587C404.21 231.587 406.227 227.645 407.419 228.55C408.611 229.456 410.192 231.851 408.565 233.925C406.937 235.999 405.448 240.171 404.233 237.489"
            fill="white"
          />
          <path
            d="M404.21 231.587C404.21 231.587 406.227 227.645 407.419 228.55C408.611 229.456 410.192 231.851 408.565 233.925C406.937 235.999 405.448 240.171 404.233 237.489"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M427.99 241.065L424.46 244.056L416.988 265.211L415.074 313.079L416.988 315.577V321.72L380.729 330.544L367.194 324.092L367.55 321.915L369.544 319.302L369.979 318.717C368.925 300.679 370.151 260.1 370.151 260.1C367.859 254.553 366.507 244.159 366.507 244.159L365.819 243.46L365.109 242.738L364.249 238.566C374.128 236.664 379.147 221.548 379.147 221.548L381.439 223.416L381.302 227.037C381.302 233.913 387.329 246.863 387.329 246.863C384.946 248.147 387.329 252.444 389.908 252.032C392.486 251.619 402.938 246.302 402.938 246.302L413.103 224.31C411.957 239.77 426.614 236.515 426.614 236.515L427.99 241.065Z"
            fill="#FFC100"
          />
          <path
            opacity="0.2"
            d="M369.544 319.348L369.979 318.763C368.925 300.725 370.151 260.145 370.151 260.145C367.859 254.599 366.507 244.205 366.507 244.205L365.819 243.505C368.325 242.984 370.677 241.894 372.695 240.32C372.695 240.32 372.065 250.221 370.174 251.986V256.169C370.174 256.169 376.58 254.037 379.182 251.986C381.783 249.935 372.695 265.211 372.695 265.211C372.695 265.211 371.022 292.508 372.695 293.093C374.368 293.677 392.452 280.762 394.905 276.098C395.054 275.8 395.145 275.662 395.18 275.674C395.18 276.43 381.978 306.306 376.913 308.266C371.446 310.398 397.094 313.583 403.099 309.343C408.794 305.252 398.033 335.025 369.544 319.348Z"
            fill="black"
            fillOpacity="0.7"
          />
          <path
            d="M427.99 241.065L424.46 244.056L416.988 265.211L415.074 313.079L416.988 315.577V321.72L380.729 330.544L367.194 324.092L367.55 321.915L369.544 319.302L369.979 318.717C368.925 300.679 370.151 260.1 370.151 260.1C367.859 254.553 366.507 244.159 366.507 244.159L365.819 243.46L365.109 242.738L364.249 238.566C374.128 236.664 379.147 221.548 379.147 221.548L381.439 223.416L381.302 227.037C381.302 233.913 387.329 246.863 387.329 246.863C384.946 248.147 387.329 252.444 389.908 252.032C392.486 251.619 402.938 246.302 402.938 246.302L413.103 224.31C411.957 239.77 426.614 236.515 426.614 236.515L427.99 241.065Z"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M394.881 324.505C405.871 319.348 415.693 320.62 416.896 328.218C418.099 335.816 414.764 394.182 414.764 394.182L417.159 399.912L415.498 404.943L417.549 407.521L417.263 410.867C417.263 410.867 407.774 404.519 404.233 405.137C400.691 405.756 395.649 410.867 395.649 410.867L394.881 407.521L397.425 404.943L395.649 400.416L397.425 397.459C397.425 397.459 392.2 349.224 389.231 342.348C386.263 335.472 394.881 324.505 394.881 324.505Z"
            fill="#263238"
          />
          <path
            d="M406.754 255.034C406.754 255.034 410.742 266.265 416.988 265.211"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M381.462 246.623C381.462 246.623 378.781 256.283 370.14 260.134"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M384.728 251.986C385.162 252.983 385.903 253.816 386.842 254.364C387.782 254.912 388.871 255.147 389.953 255.034C393.861 254.69 400.118 251.986 400.118 251.986"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M424.46 244.056C424.46 244.056 415.292 244.709 412.748 239.472"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M381.428 223.462C381.428 223.462 381.118 233.077 376.844 237.455"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M400.062 266.712C400.062 266.712 385.519 292.761 376.89 300.198"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M369.968 318.763C369.968 318.763 379.136 326.785 387.318 323.703"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M390.675 347.814C390.675 347.814 386.882 334.166 391.993 328.86"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M347.632 345.786C347.632 345.786 348.904 337.157 344.079 332.848"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M376.889 347.814C376.889 347.814 360.318 338.257 354.989 330.624"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M340.366 338.337C343.371 340.783 345.555 344.09 346.623 347.814"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M382.814 332.836C382.642 333.512 379.765 345.351 385.346 349.579"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M414.845 345.786C414.845 345.786 411.739 364.81 399.053 372.923"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M400.405 394.399C402.09 395.912 410.387 397.78 410.387 397.78"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M340.871 359.343C340.871 359.343 342.372 377.484 337.433 384.246"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M372.672 332.836C375.603 335.608 377.676 339.165 378.643 343.081"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M327.726 404.324C327.726 404.324 329.926 403.877 332.585 407.315L327.726 404.324Z"
            fill="#757575"
          />
          <path
            d="M327.726 404.324C327.726 404.324 329.926 403.877 332.585 407.315"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M331.897 402.249C331.897 402.249 334.705 402.318 336.287 405.814"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M335.221 400.278C335.221 400.278 338.659 401.539 340.137 404.026"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M400.405 410.673C402.313 409.381 404.565 408.69 406.869 408.69C409.173 408.69 411.424 409.381 413.332 410.673"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M400.405 407.315C402.223 406.243 404.295 405.678 406.405 405.678C408.515 405.678 410.586 406.243 412.404 407.315"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M395.294 416.334C402.053 418.319 409.18 418.711 416.117 417.48"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M318.661 411.429C318.661 411.429 329.8 414.156 346.234 410.867"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M348.228 410.673C348.228 410.673 351.322 411.819 357.59 409.676"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.1"
            d="M263.252 434.567C263.252 436.595 253.064 438.234 240.504 438.234C227.944 438.234 217.756 436.595 217.756 434.567C217.756 432.538 227.944 430.899 240.504 430.899C253.064 430.899 263.252 432.55 263.252 434.567Z"
            fill="black"
            fillOpacity="0.7"
          />
          <path
            d="M236.985 129.708C241.019 126.992 246.692 129.1 249.225 131.232C250.371 132.195 259.642 139.391 262.885 141.913C263.729 142.569 264.336 143.482 264.615 144.514C265.09 146.286 265.193 148.138 264.919 149.952C264.645 151.766 263.999 153.504 263.023 155.057C260.192 159.641 256.628 160.787 254.84 161.051C254.207 161.151 253.559 161.1 252.949 160.902C249.236 159.756 233.123 154.553 230.809 150.347C228.872 146.806 236.985 129.708 236.985 129.708Z"
            fill="white"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M232.413 126.27C236.757 123.336 242.876 125.616 245.615 127.908C246.853 128.94 256.846 136.71 260.341 139.426C261.257 140.128 261.911 141.116 262.198 142.233C262.717 144.143 262.834 146.14 262.54 148.097C262.246 150.054 261.548 151.929 260.49 153.602C257.442 158.518 253.614 159.756 251.666 160.065C250.983 160.166 250.285 160.111 249.626 159.905C245.627 158.667 228.242 153.029 225.755 148.525C223.646 144.697 232.413 126.27 232.413 126.27Z"
            fill="#FFC100"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M244.068 142.394C241.467 149.27 234.9 153.292 229.468 151.252C224.036 149.213 221.687 141.924 224.288 134.991C226.89 128.057 233.456 124.092 238.877 126.132C244.298 128.172 246.658 135.461 244.068 142.394Z"
            fill="white"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M230.018 144.984L231.164 142.05C231.296 141.699 231.526 141.392 231.826 141.167C232.127 140.941 232.485 140.806 232.86 140.778C233.303 140.748 233.744 140.869 234.11 141.12C234.476 141.372 234.746 141.74 234.877 142.165L235.713 144.961C235.787 145.209 235.811 145.47 235.783 145.727C235.755 145.985 235.677 146.234 235.552 146.461C235.427 146.688 235.259 146.888 235.057 147.05C234.854 147.211 234.622 147.331 234.373 147.402C233.475 147.674 232.528 147.745 231.599 147.608C231.307 147.57 231.028 147.466 230.782 147.305C230.535 147.144 230.329 146.929 230.177 146.677C230.025 146.425 229.932 146.142 229.904 145.848C229.877 145.555 229.915 145.26 230.018 144.984Z"
            fill="#263238"
          />
          <path
            d="M247.701 132.699C248.397 134.833 248.64 137.089 248.415 139.323C248.19 141.556 247.502 143.719 246.395 145.671C242.143 153.075 238.018 152.868 238.018 152.868"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M240.332 129.937C239.42 129.176 238.33 128.657 237.164 128.431C235.997 128.205 234.793 128.277 233.662 128.642C228.448 130.464 224.494 137.294 226.007 143.861"
            fill="white"
          />
          <path
            d="M240.332 129.937C239.42 129.176 238.33 128.657 237.164 128.431C235.997 128.205 234.793 128.277 233.662 128.642C228.448 130.464 224.494 137.294 226.007 143.861"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M264.914 111.864C262.785 114.471 260.799 117.191 258.966 120.013"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M340.034 104.209C318.959 88.5892 294.275 85.0366 273.303 103.189"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M368.077 134.979C362.498 126.284 355.887 118.296 348.389 111.188"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M379.973 154.232C378.655 151.722 377.268 149.316 375.858 146.966"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M135.472 498.697C180.815 498.697 217.572 492.504 217.572 484.865C217.572 477.225 180.815 471.032 135.472 471.032C90.1302 471.032 53.373 477.225 53.373 484.865C53.373 492.504 90.1302 498.697 135.472 498.697Z"
            fill="#FFC100"
          />
          <path
            opacity="0.7"
            d="M135.472 498.697C180.815 498.697 217.572 492.504 217.572 484.865C217.572 477.225 180.815 471.032 135.472 471.032C90.1302 471.032 53.373 477.225 53.373 484.865C53.373 492.504 90.1302 498.697 135.472 498.697Z"
            fill="white"
          />
          <path
            d="M203.121 274.425V285.415L168.031 286.985L163.447 286.767L57.4761 281.61L57.0177 276.866C56.6758 273.135 57.144 269.375 58.3901 265.843C59.6362 262.31 61.6308 259.088 64.2375 256.398L74.7349 245.58C82.5553 237.552 93.1699 232.848 104.37 232.447L112.667 232.183L165.876 230.395H167.217C172.303 230.227 177.269 231.964 181.141 235.266L187.547 240.732C183.526 246.144 181.353 252.705 181.347 259.446C181.347 259.87 181.347 260.283 181.347 260.696L181.485 264.271C181.578 266.511 182.474 268.643 184.011 270.276C185.547 271.909 187.62 272.935 189.851 273.164L203.121 274.425Z"
            fill="#FFC100"
          />
          <path
            opacity="0.2"
            d="M181.886 276.453H163.424V286.767L57.4761 281.61L57.0177 276.866C56.6758 273.135 57.144 269.375 58.3901 265.842C59.6362 262.31 61.6308 259.088 64.2375 256.398L74.7349 245.58C79.261 240.91 84.7852 237.325 90.8935 235.094C96.9443 233.948 104.141 232.997 112.667 232.183C139.862 229.536 158.152 226.728 165.876 230.395C169.532 232.137 170.838 235.335 169.578 240.709L162.702 270.035L181.886 276.453Z"
            fill="black"
            fillOpacity="0.7"
          />
          <path
            d="M203.121 274.425V285.415L168.031 286.985L163.447 286.767L57.4761 281.61L57.0177 276.866C56.6758 273.135 57.144 269.375 58.3901 265.843C59.6362 262.31 61.6308 259.088 64.2375 256.398L74.7349 245.58C82.5553 237.552 93.17 232.848 104.37 232.447L112.667 232.183L165.876 230.395H167.217C172.303 230.227 177.269 231.964 181.141 235.266L187.547 240.732C183.526 246.144 181.353 252.705 181.347 259.446C181.347 259.87 181.347 260.283 181.347 260.696L181.485 264.271C181.578 266.511 182.474 268.643 184.011 270.276C185.547 271.909 187.62 272.935 189.851 273.164L203.121 274.425Z"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M206.502 286.194L206.01 292.508L204.864 307.108L191.593 477.862C191.483 479.261 190.947 480.593 190.058 481.679C189.169 482.765 187.969 483.552 186.619 483.936L162.049 490.927L161.591 491.064C160.893 491.255 160.171 491.344 159.448 491.328L78.8724 488.314C77.1864 488.249 75.5833 487.565 74.3682 486.395C73.1532 485.224 72.411 483.648 72.2829 481.965L57.4766 286.194H206.502Z"
            fill="#FFC100"
          />
          <path
            opacity="0.2"
            d="M204.875 307.154L163.424 329.616C163.424 329.616 164.169 443.895 162.061 490.927L161.602 491.064C160.904 491.255 160.182 491.344 159.459 491.328L78.8838 488.314C77.1978 488.249 75.5948 487.565 74.3797 486.395C73.1646 485.224 72.4224 483.648 72.2943 481.965L57.4766 286.194H163.424V295.007L206.01 292.508L204.875 307.154Z"
            fill="black"
            fillOpacity="0.7"
          />
          <path
            d="M206.502 286.194L206.01 292.508L204.864 307.108L191.593 477.862C191.483 479.261 190.947 480.593 190.058 481.679C189.169 482.765 187.969 483.552 186.619 483.936L162.049 490.927L161.591 491.064C160.893 491.255 160.171 491.344 159.448 491.328L78.8724 488.314C77.1864 488.249 75.5833 487.565 74.3682 486.395C73.1532 485.224 72.411 483.648 72.2829 481.965L57.4766 286.194H206.502Z"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M213.149 282.183L212.599 289.059C212.543 289.786 212.227 290.468 211.709 290.982C211.192 291.495 210.507 291.805 209.78 291.855L163.424 295.018L159.424 295.293H159.367L51.8837 293.861C51.6885 293.858 51.5014 293.783 51.3592 293.649C51.217 293.516 51.1302 293.333 51.1158 293.139L50.0959 278.172C50.0864 278.068 50.0985 277.963 50.1316 277.864C50.1646 277.765 50.2177 277.674 50.2877 277.596C50.3577 277.519 50.443 277.457 50.5381 277.414C50.6333 277.371 50.7364 277.348 50.8408 277.347L160.994 275.467H161.052L181.829 276.407L209.126 277.645C209.694 277.663 210.252 277.797 210.766 278.038C211.279 278.279 211.739 278.622 212.115 279.047C212.492 279.472 212.778 279.969 212.956 280.509C213.133 281.048 213.199 281.618 213.149 282.183Z"
            fill="#FFC100"
          />
          <path
            opacity="0.2"
            d="M181.886 276.453H163.435V295.053L159.436 295.328H159.378L51.8951 293.895C51.7 293.893 51.5128 293.817 51.3707 293.684C51.2285 293.55 51.1416 293.368 51.1273 293.173L50.0959 278.172C50.0864 278.068 50.0985 277.963 50.1316 277.864C50.1646 277.765 50.2177 277.674 50.2877 277.596C50.3577 277.519 50.443 277.457 50.5381 277.414C50.6333 277.371 50.7364 277.348 50.8408 277.347L160.994 275.467H161.052L181.886 276.453Z"
            fill="black"
            fillOpacity="0.7"
          />
          <path
            d="M213.149 282.183L212.599 289.059C212.543 289.786 212.227 290.468 211.709 290.982C211.192 291.495 210.507 291.805 209.78 291.855L163.424 295.018L159.424 295.293H159.367L51.8837 293.861C51.6885 293.858 51.5014 293.783 51.3592 293.649C51.217 293.516 51.1302 293.333 51.1158 293.139L50.0959 278.172C50.0864 278.068 50.0985 277.963 50.1316 277.864C50.1646 277.765 50.2177 277.674 50.2877 277.596C50.3577 277.519 50.443 277.457 50.5381 277.414C50.6333 277.371 50.7364 277.348 50.8408 277.347L160.994 275.467H161.052L181.829 276.407L209.126 277.645C209.694 277.663 210.252 277.797 210.766 278.038C211.279 278.279 211.739 278.622 212.115 279.047C212.492 279.472 212.778 279.969 212.956 280.509C213.133 281.048 213.199 281.618 213.149 282.183V282.183Z"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M159.975 303.9V481.667"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M163.424 280.326V288.761"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M162.255 272.247L170.277 237.867C170.45 237.125 170.378 236.347 170.07 235.65C169.761 234.954 169.235 234.376 168.569 234.005"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "MOTION DUE TO GRAVITY",
      text: "This section has more capabilities, it solves for a particular motion parameter you select. All you have to do it provide the required parameters to solve it, and the direction the body is moving.",
      svg: (
        <svg
          width="500"
          height="373"
          viewBox="0 0 500 373"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M500 327.4H0V327.65H500V327.4Z" fill="#EBEBEB" />
          <path d="M449.9 343.49H428.22V343.74H449.9V343.49Z" fill="#EBEBEB" />
          <path
            d="M344.67 338.31H310.56V338.56H344.67V338.31Z"
            fill="#EBEBEB"
          />
          <path
            d="M441.12 334.21H396.59V334.46H441.12V334.21Z"
            fill="#EBEBEB"
          />
          <path d="M173.02 339.25H161.88V339.5H173.02V339.25Z" fill="#EBEBEB" />
          <path d="M152.97 339.25H114.58V339.5H152.97V339.25Z" fill="#EBEBEB" />
          <path
            d="M94.0096 335.03H66.3096V335.28H94.0096V335.03Z"
            fill="#EBEBEB"
          />
          <path
            d="M237 282.8H43.91C42.3973 282.797 40.9475 282.195 39.8788 281.124C38.8102 280.053 38.21 278.603 38.21 277.09V5.66C38.2231 4.15602 38.8292 2.71798 39.8964 1.65822C40.9637 0.598458 42.4059 0.00257639 43.91 0H237C238.514 0 239.967 0.601588 241.038 1.67242C242.108 2.74325 242.71 4.19561 242.71 5.71V277.09C242.71 278.604 242.108 280.057 241.038 281.128C239.967 282.198 238.514 282.8 237 282.8ZM43.91 0.200001C42.4636 0.20265 41.0774 0.779065 40.0556 1.80273C39.0338 2.82639 38.46 4.21365 38.46 5.66V277.09C38.46 278.536 39.0338 279.924 40.0556 280.947C41.0774 281.971 42.4636 282.547 43.91 282.55H237C238.447 282.547 239.834 281.971 240.858 280.948C241.881 279.924 242.457 278.537 242.46 277.09V5.66C242.457 4.21273 241.881 2.82549 240.858 1.80212C239.834 0.77874 238.447 0.202644 237 0.200001H43.91Z"
            fill="#EBEBEB"
          />
          <path
            d="M453.31 282.8H260.21C258.696 282.797 257.246 282.195 256.175 281.125C255.105 280.054 254.503 278.604 254.5 277.09V5.66C254.516 4.15511 255.124 2.71708 256.193 1.65759C257.262 0.598109 258.705 0.00254829 260.21 0H453.31C454.812 0.0052045 456.252 0.602249 457.317 1.66173C458.382 2.72121 458.987 4.15775 459 5.66V277.09C459 278.601 458.401 280.05 457.335 281.121C456.268 282.191 454.821 282.795 453.31 282.8ZM260.21 0.200001C258.763 0.202644 257.375 0.77874 256.352 1.80212C255.329 2.82549 254.753 4.21273 254.75 5.66V277.09C254.753 278.537 255.329 279.924 256.352 280.948C257.375 281.971 258.763 282.547 260.21 282.55H453.31C454.757 282.547 456.145 281.971 457.168 280.948C458.191 279.924 458.767 278.537 458.77 277.09V5.66C458.767 4.21273 458.191 2.82549 457.168 1.80212C456.145 0.77874 454.757 0.202644 453.31 0.200001H260.21Z"
            fill="#EBEBEB"
          />
          <path
            d="M63.2802 149.23L287.95 149.23V25.75L63.2802 25.75L63.2802 149.23Z"
            fill="#E6E6E6"
          />
          <path
            d="M60.0898 149.23L284.76 149.23V25.75L60.0898 25.75L60.0898 149.23Z"
            fill="#F5F5F5"
          />
          <path
            d="M279.03 143.44V31.55L65.8103 31.55V143.44H279.03Z"
            fill="white"
          />
          <path d="M143.7 143.44V31.55H135.06V143.44H143.7Z" fill="#E6E6E6" />
          <path d="M216.15 143.44V31.55H207.51V143.44H216.15Z" fill="#E6E6E6" />
          <path d="M140.67 147.12V27.24H132.03V147.12H140.67Z" fill="#F5F5F5" />
          <path d="M213.12 147.13V27.25H204.48V147.13H213.12Z" fill="#F5F5F5" />
          <path
            d="M68.2197 143.44V31.55H65.8097V143.44H68.2197Z"
            fill="#E6E6E6"
          />
          <path
            d="M354.94 148.55C354.94 148.55 357.09 163.55 385.13 160.96C413.17 158.37 412.5 143.17 412.5 143.17L354.94 148.55Z"
            fill="#F0F0F0"
          />
          <path
            d="M239.23 223.25H210.34V228.95H239.23V223.25Z"
            fill="#E6E6E6"
          />
          <path
            d="M66.7196 228.95L210.35 228.95V223.25L66.7196 223.25V228.95Z"
            fill="#F5F5F5"
          />
          <path
            d="M239.23 261.78H210.34V267.48H239.23V261.78Z"
            fill="#E6E6E6"
          />
          <path
            d="M85.1798 327.4H90.5098L90.5098 228.95H85.1798L85.1798 327.4Z"
            fill="#E6E6E6"
          />
          <path
            d="M66.7196 267.48H210.35V261.78H66.7196V267.48Z"
            fill="#F5F5F5"
          />
          <path
            d="M239.23 292.95H210.34V298.65H239.23V292.95Z"
            fill="#E6E6E6"
          />
          <path
            d="M66.7196 298.64H210.35V292.94H66.7196V298.64Z"
            fill="#F5F5F5"
          />
          <path d="M228.82 327.4H234.15V228.95H228.82V327.4Z" fill="#E6E6E6" />
          <path d="M205.01 327.4H210.34V228.95H205.01V327.4Z" fill="#F5F5F5" />
          <path
            d="M66.7198 327.4H72.0498L72.0498 228.95H66.7198L66.7198 327.4Z"
            fill="#F5F5F5"
          />
          <path
            d="M160 289.49C161.15 288.23 165 283.6 165.79 280.32C167.03 275.4 170.98 272.43 173.91 274.27C172.58 277.89 171.54 285.27 166.91 287.52C162.28 289.77 160 289.49 160 289.49Z"
            fill="#E0E0E0"
          />
          <path
            d="M174.55 274.6C175.059 275.416 175.364 276.342 175.44 277.3C175.77 280.81 176.44 290.17 176.44 290.17L175.62 290.3C175.306 287.444 174.838 284.606 174.22 281.8C173.56 279.56 172.22 282.55 171.63 285.31C171.04 288.07 167.69 291.43 162.41 292.41C156.22 293.55 153.67 293.68 155.3 291.87C156.93 290.06 160.94 288.44 160.94 288.44C162.636 288.105 164.22 287.347 165.545 286.237C166.87 285.127 167.893 283.701 168.52 282.09C169.99 278.45 171.84 274.75 173.3 273.72C173.565 273.753 173.817 273.851 174.035 274.004C174.253 274.158 174.43 274.362 174.55 274.6Z"
            fill="#F0F0F0"
          />
          <path
            d="M132.2 283C133.67 282.14 138.68 278.83 140.43 275.93C143.06 271.59 147.7 269.93 149.97 272.53C147.63 275.6 144.46 282.36 139.36 283.13C134.26 283.9 132.2 283 132.2 283Z"
            fill="#E0E0E0"
          />
          <path
            d="M150.53 273C150.777 273.929 150.794 274.903 150.58 275.84C149.87 279.3 147.77 288.44 147.77 288.44L146.95 288.32C147.484 285.499 147.868 282.652 148.1 279.79C148.1 277.44 145.99 279.92 144.6 282.38C143.21 284.84 139.03 287.08 133.69 286.46C127.44 285.74 124.97 285.11 127.06 283.86C129.15 282.61 133.45 282.23 133.45 282.23C135.171 282.41 136.909 282.152 138.503 281.481C140.097 280.81 141.496 279.746 142.57 278.39C145.04 275.34 147.89 272.39 149.57 271.79C149.816 271.899 150.032 272.066 150.199 272.277C150.367 272.487 150.48 272.736 150.53 273Z"
            fill="#F0F0F0"
          />
          <path
            d="M118.77 244.67L129.41 246.87C129.598 246.907 129.767 247.008 129.889 247.155C130.012 247.303 130.079 247.488 130.08 247.68L130.21 256.49C130.212 256.704 130.166 256.916 130.075 257.109C129.983 257.303 129.85 257.473 129.683 257.608C129.517 257.743 129.322 257.838 129.114 257.887C128.905 257.936 128.689 257.937 128.48 257.89C124.78 257.05 123.02 256.46 118.34 255.5C115.46 254.9 109.46 253.97 105.49 253.15C101.52 252.33 101.81 248.29 103.49 248.27C111.11 248.19 114.32 246.55 117.09 244.93C117.597 244.636 118.197 244.543 118.77 244.67Z"
            fill="#F0F0F0"
          />
          <path
            d="M115.29 245.68C114.637 245.59 114.033 245.288 113.57 244.82C113.429 244.64 113.335 244.428 113.297 244.203C113.259 243.978 113.277 243.746 113.35 243.53C113.379 243.4 113.442 243.28 113.534 243.183C113.626 243.087 113.741 243.016 113.87 242.98C115.01 242.66 117.69 245.17 117.99 245.45C118.022 245.482 118.045 245.522 118.056 245.566C118.067 245.611 118.064 245.657 118.05 245.7C118.034 245.743 118.005 245.78 117.968 245.807C117.93 245.834 117.886 245.849 117.84 245.85C116.986 245.887 116.131 245.83 115.29 245.68ZM114.29 243.43C114.191 243.405 114.088 243.405 113.99 243.43C113.92 243.43 113.84 243.49 113.79 243.67C113.739 243.815 113.726 243.971 113.75 244.123C113.774 244.274 113.836 244.418 113.93 244.54C114.36 245.09 115.58 245.4 117.26 245.41C116.407 244.564 115.398 243.892 114.29 243.43Z"
            fill="#E0E0E0"
          />
          <path
            d="M117.79 245.84C117.757 245.849 117.723 245.849 117.69 245.84C116.82 245.1 115.35 242.63 115.77 241.62C115.833 241.459 115.951 241.327 116.104 241.246C116.256 241.165 116.432 241.142 116.6 241.18C116.775 241.192 116.946 241.241 117.101 241.324C117.256 241.407 117.392 241.521 117.5 241.66C118.42 242.79 118.08 245.57 118.06 245.66C118.055 245.7 118.04 245.738 118.015 245.77C117.991 245.801 117.958 245.826 117.92 245.84C117.878 245.854 117.832 245.854 117.79 245.84ZM116.67 241.61H116.57C116.27 241.61 116.21 241.71 116.19 241.76C115.94 242.36 116.83 244.18 117.65 245.12C117.65 244.3 117.73 242.64 117.14 241.92C117.024 241.765 116.858 241.655 116.67 241.61Z"
            fill="#E0E0E0"
          />
          <path
            d="M147.47 240.07L157.57 236.07C157.747 236.001 157.942 235.994 158.124 236.05C158.305 236.106 158.463 236.223 158.57 236.38L163.57 243.66C163.687 243.838 163.763 244.041 163.792 244.252C163.821 244.464 163.802 244.679 163.737 244.883C163.671 245.086 163.561 245.272 163.415 245.427C163.268 245.583 163.089 245.703 162.89 245.78C159.34 247.12 157.55 247.6 153.11 249.37C150.38 250.46 144.86 252.99 141.11 254.49C137.36 255.99 135.36 252.49 136.77 251.49C143.09 247.21 144.86 244.08 146.29 241.21C146.529 240.698 146.949 240.292 147.47 240.07Z"
            fill="#F0F0F0"
          />
          <path
            d="M145.13 242.82C144.537 243.109 143.865 243.19 143.22 243.05C143.005 242.978 142.811 242.853 142.655 242.687C142.5 242.522 142.388 242.32 142.33 242.1C142.281 241.976 142.266 241.84 142.287 241.708C142.308 241.576 142.364 241.453 142.45 241.35C143.23 240.45 146.85 241.07 147.26 241.15C147.304 241.156 147.346 241.175 147.378 241.206C147.41 241.236 147.432 241.276 147.44 241.32C147.452 241.364 147.45 241.411 147.434 241.454C147.418 241.498 147.388 241.534 147.35 241.56C146.661 242.063 145.916 242.486 145.13 242.82ZM143.05 241.49C142.957 241.525 142.872 241.58 142.8 241.65C142.772 241.697 142.757 241.75 142.757 241.805C142.757 241.86 142.772 241.913 142.8 241.96C142.842 242.109 142.918 242.246 143.023 242.361C143.127 242.475 143.256 242.564 143.4 242.62C144.06 242.83 145.25 242.42 146.65 241.51C145.463 241.267 144.24 241.26 143.05 241.49Z"
            fill="#E0E0E0"
          />
          <path
            d="M147.3 241.59H147.19C146.06 241.46 143.48 240.2 143.27 239.13C143.236 238.961 143.263 238.785 143.345 238.634C143.427 238.482 143.56 238.364 143.72 238.3C143.871 238.217 144.038 238.166 144.21 238.15C144.383 238.135 144.556 238.155 144.72 238.21C146.1 238.65 147.35 241.15 147.4 241.21C147.422 241.244 147.434 241.284 147.434 241.325C147.434 241.366 147.422 241.406 147.4 241.44C147.395 241.471 147.383 241.5 147.366 241.526C147.349 241.552 147.326 241.573 147.3 241.59ZM144 238.67H143.9C143.64 238.81 143.67 238.95 143.68 239.01C143.8 239.65 145.54 240.68 146.74 241.01C146.34 240.29 145.45 238.9 144.56 238.62C144.374 238.565 144.174 238.583 144 238.67Z"
            fill="#E0E0E0"
          />
          <path
            d="M331.001 76.5175L373.414 88.96L387.078 42.383L344.666 29.9405L331.001 76.5175Z"
            fill="#F0F0F0"
          />
          <path
            d="M326.413 75.1638L370.227 88.0173L383.891 41.4402L340.077 28.5867L326.413 75.1638Z"
            fill="#F5F5F5"
          />
          <path
            d="M367.657 83.2601L379.168 44.0237L342.695 33.3237L331.184 72.5601L367.657 83.2601Z"
            fill="white"
          />
          <path
            d="M361.609 71.1582L367.54 50.9403L348.752 45.4285L342.821 65.6464L361.609 71.1582Z"
            fill="#F5F5F5"
          />
          <path
            d="M408.889 93.6581L442.349 91.6409L440.182 55.6962L406.722 57.7133L408.889 93.6581Z"
            fill="#F0F0F0"
          />
          <path
            d="M405.342 93.8665L439.15 91.8283L436.983 55.8836L403.175 57.9218L405.342 93.8665Z"
            fill="#F5F5F5"
          />
          <path
            d="M436.147 89.1666L434.322 58.8915L406.183 60.5879L408.009 90.863L436.147 89.1666Z"
            fill="white"
          />
          <path
            d="M420.7 67.23L429.2 80.09L413.81 81.02L420.7 67.23Z"
            fill="#F5F5F5"
          />
          <path d="M303.3 327.4H352.37V168.33H303.3V327.4Z" fill="#E6E6E6" />
          <path
            d="M316.4 327.4H303.3V305.44H330.14L316.4 327.4Z"
            fill="#F5F5F5"
          />
          <path d="M391.74 327.4H440.81V168.33H391.74V327.4Z" fill="#E6E6E6" />
          <path d="M303.3 319.84H403.18V168.33H303.3V319.84Z" fill="#F5F5F5" />
          <path
            d="M390.07 327.4H403.18V305.44H376.33L390.07 327.4Z"
            fill="#F5F5F5"
          />
          <path d="M313.46 262.7H393.01V224.78H313.46V262.7Z" fill="#F0F0F0" />
          <path d="M313.46 308.72H393.01V270.8H313.46V308.72Z" fill="#F0F0F0" />
          <path
            d="M340.42 228.84H366.05C367.995 228.84 369.86 228.068 371.237 226.694C372.613 225.319 373.387 223.455 373.39 221.51H333.08C333.083 223.455 333.857 225.319 335.233 226.694C336.61 228.068 338.475 228.84 340.42 228.84Z"
            fill="#F5F5F5"
          />
          <path
            d="M313.46 216.69H393.01V178.77H313.46V216.69Z"
            fill="#F0F0F0"
          />
          <path
            d="M340.42 182.82H366.05C367.995 182.82 369.86 182.048 371.237 180.674C372.613 179.299 373.387 177.435 373.39 175.49H333.08C333.083 177.435 333.857 179.299 335.233 180.674C336.61 182.048 338.475 182.82 340.42 182.82Z"
            fill="#F5F5F5"
          />
          <path
            d="M366.05 274.87H340.47C338.523 274.87 336.656 274.097 335.28 272.72C333.903 271.344 333.13 269.477 333.13 267.53H373.43C373.43 268.497 373.239 269.455 372.867 270.348C372.496 271.241 371.952 272.052 371.266 272.734C370.58 273.416 369.766 273.956 368.871 274.323C367.976 274.689 367.017 274.875 366.05 274.87Z"
            fill="#F5F5F5"
          />
          <path
            d="M377.33 135C377.33 136.252 376.959 137.476 376.263 138.517C375.568 139.558 374.579 140.369 373.422 140.848C372.266 141.327 370.993 141.453 369.765 141.208C368.537 140.964 367.409 140.361 366.524 139.476C365.639 138.591 365.036 137.463 364.792 136.235C364.547 135.007 364.673 133.734 365.152 132.578C365.631 131.421 366.442 130.432 367.483 129.737C368.524 129.041 369.748 128.67 371 128.67C372.679 128.67 374.289 129.337 375.476 130.524C376.663 131.711 377.33 133.321 377.33 135Z"
            fill="#E0E0E0"
          />
          <path
            d="M391.74 123.21C391.742 124.214 391.446 125.195 390.889 126.03C390.333 126.866 389.541 127.517 388.614 127.902C387.688 128.287 386.667 128.388 385.683 128.193C384.699 127.998 383.794 127.515 383.085 126.805C382.375 126.095 381.892 125.191 381.697 124.207C381.501 123.222 381.602 122.202 381.987 121.275C382.372 120.348 383.024 119.557 383.859 119C384.694 118.444 385.676 118.148 386.68 118.15C388.022 118.15 389.309 118.683 390.258 119.632C391.207 120.581 391.74 121.868 391.74 123.21Z"
            fill="#E0E0E0"
          />
          <path
            d="M250 372.56C357.083 372.56 443.89 367.492 443.89 361.24C443.89 354.988 357.083 349.92 250 349.92C142.918 349.92 56.1104 354.988 56.1104 361.24C56.1104 367.492 142.918 372.56 250 372.56Z"
            fill="#F5F5F5"
          />
          <path
            d="M239.37 153C238.658 151.656 237.486 150.613 236.068 150.062C234.651 149.511 233.082 149.489 231.65 150L231.15 149C231.119 148.941 231.077 148.889 231.026 148.847C230.976 148.804 230.917 148.772 230.853 148.753C230.79 148.733 230.724 148.727 230.658 148.733C230.592 148.739 230.528 148.759 230.47 148.79L220.74 153.49C220.679 153.516 220.624 153.554 220.578 153.601C220.533 153.649 220.496 153.705 220.472 153.766C220.448 153.827 220.436 153.893 220.438 153.959C220.439 154.025 220.453 154.09 220.48 154.15L227 167.6L237.67 162.45L237 161C238.296 160.179 239.25 158.916 239.686 157.445C240.122 155.974 240.009 154.394 239.37 153ZM236.11 159.2L232.49 151.7C233.453 151.4 234.492 151.456 235.418 151.858C236.343 152.26 237.093 152.981 237.532 153.89C237.97 154.799 238.068 155.834 237.807 156.809C237.546 157.784 236.944 158.632 236.11 159.2Z"
            fill="#407BFF"
          />
          <path
            d="M90.3697 78.42L90.3097 78.23L89.9297 76.97L113.52 69.7L113.97 71.14L90.3697 78.42Z"
            fill="#407BFF"
          />
          <path
            d="M91.2596 81.3L90.9696 80.38L90.8096 79.86L114.41 72.58L114.86 74.03L91.2596 81.3Z"
            fill="#407BFF"
          />
          <path
            d="M113.97 71.1489L90.3711 78.4088L90.8151 79.852L114.414 72.5921L113.97 71.1489Z"
            fill="#407BFF"
          />
          <path
            opacity="0.2"
            d="M113.97 71.1489L90.3711 78.4088L90.8151 79.852L114.414 72.5921L113.97 71.1489Z"
            fill="black"
          />
          <path
            d="M116.89 71.74L116.49 70.44L113.52 69.7L114.86 74.03L116.89 71.74Z"
            fill="#407BFF"
          />
          <path
            opacity="0.8"
            d="M116.89 71.74L116.49 70.44L113.52 69.7L114.86 74.03L116.89 71.74Z"
            fill="white"
          />
          <path
            d="M117.769 70.76L116.489 70.44L116.889 71.74L117.769 70.76Z"
            fill="#407BFF"
          />
          <path
            d="M369.59 59.18C374.094 74.3245 379.436 89.2074 385.59 103.76C383.23 106.54 380.896 109.313 378.59 112.08L351.24 119.48C344.045 103.102 337.873 86.2928 332.76 69.15L369.59 59.18Z"
            fill="#407BFF"
          />
          <path
            opacity="0.8"
            d="M369.59 59.18C374.094 74.3245 379.436 89.2074 385.59 103.76C383.23 106.54 380.896 109.313 378.59 112.08L351.24 119.48C344.045 103.102 337.873 86.2928 332.76 69.15L369.59 59.18Z"
            fill="white"
          />
          <path
            d="M385.59 103.76C384.79 106.76 382.59 108.56 378.59 112.08C380.682 109.56 381.931 106.447 382.16 103.18C383.335 102.932 384.561 103.139 385.59 103.76Z"
            fill="#407BFF"
          />
          <path
            d="M210.89 272.38L206.22 266.45L218.72 254.08L223.38 260.01L210.89 272.38Z"
            fill="#FF8B7B"
          />
          <path
            d="M243.69 314.12L239.03 308.19L249.13 292.77L253.79 298.7L243.69 314.12Z"
            fill="#FF8B7B"
          />
          <path
            d="M238.82 307L247.32 310.51C247.459 310.569 247.573 310.673 247.644 310.806C247.715 310.939 247.738 311.092 247.71 311.24L246.53 318C246.499 318.164 246.431 318.32 246.332 318.454C246.232 318.589 246.104 318.7 245.956 318.779C245.809 318.857 245.645 318.902 245.478 318.909C245.311 318.916 245.144 318.886 244.99 318.82C242.28 317.64 240.35 316.66 236.91 315.23C234.79 314.35 230.33 312.77 227.4 311.56C224.47 310.35 225.29 307.3 226.6 307.56C232.46 308.61 235.15 307.82 237.51 306.99C237.933 306.833 238.399 306.837 238.82 307Z"
            fill="#263238"
          />
          <path
            d="M206.82 265.46L213.82 269.76C213.947 269.838 214.043 269.957 214.094 270.096C214.145 270.236 214.147 270.389 214.1 270.53L211.9 277C211.847 277.158 211.759 277.302 211.642 277.421C211.525 277.54 211.383 277.63 211.226 277.686C211.069 277.742 210.901 277.762 210.736 277.743C210.57 277.725 210.411 277.669 210.27 277.58C207.76 275.98 204.19 273.58 201 271.64C197.28 269.36 193.94 267.64 189.57 264.92C186.93 263.31 187.83 260.19 189.08 260.62C194.79 262.62 198.97 265 204.96 264.98C205.613 264.963 206.257 265.129 206.82 265.46Z"
            fill="#263238"
          />
          <path
            d="M366.4 165.08C360.54 165.67 354.64 166.19 348.76 166.66L330.86 168.12C328.657 168.219 326.457 167.844 324.41 167.02C322.583 166.255 320.881 165.22 319.36 163.95C316.754 161.691 314.529 159.027 312.77 156.06C311.125 153.337 309.714 150.481 308.55 147.52C307.98 146.06 307.47 144.59 306.99 143.12C306.51 141.65 306.1 140.19 305.73 138.59L311.11 136.82C312.32 139.3 313.66 141.91 315.11 144.31C316.504 146.706 318.068 148.998 319.79 151.17C321.306 153.165 323.113 154.922 325.15 156.38C325.967 156.952 326.868 157.394 327.82 157.69C328.564 157.902 329.343 157.96 330.11 157.86L334.27 157.2C335.75 156.96 337.27 156.76 338.72 156.55C341.72 156.13 344.64 155.74 347.61 155.4C353.54 154.69 359.45 154.11 365.42 153.68L366.4 165.08Z"
            fill="#FF8B7B"
          />
          <path
            d="M372.62 163.92C367.13 168.61 346.83 169.33 346.83 169.33L346 152C346 152 356.87 148.91 366.33 149.57C375.79 150.23 378.64 158.78 372.62 163.92Z"
            fill="#407BFF"
          />
          <path
            opacity="0.2"
            d="M365.28 161.28C359.77 161.79 351.49 165.62 348.89 169.22C354.058 168.928 359.198 168.259 364.27 167.22C366.61 164 368 161 365.28 161.28Z"
            fill="black"
          />
          <path
            d="M312.71 140.56L310.32 132.67L302.58 138.41C302.975 139.905 303.836 141.235 305.04 142.207C306.243 143.178 307.725 143.74 309.27 143.81L312.71 140.56Z"
            fill="#FF8B7B"
          />
          <path
            d="M306.6 128.96L301.61 134.8L302.58 138.41L310.32 132.66L306.6 128.96Z"
            fill="#FF8B7B"
          />
          <path
            opacity="0.2"
            d="M218.72 254.08L212.28 260.46L216.94 266.39L223.38 260.01L218.72 254.08Z"
            fill="black"
          />
          <path
            opacity="0.2"
            d="M253.79 298.71L249.13 292.78L243.66 301.13L249.35 305.5L253.79 298.71Z"
            fill="black"
          />
          <path
            d="M369.86 150.31C369.86 150.31 361.61 164.6 322.72 190.7L347.66 222.43C369.42 210.98 385.31 197.14 406.66 176.43C406.66 176.43 400.03 168.79 394.77 164.81C390.238 161.318 385.506 158.092 380.6 155.15C377.151 153.26 373.56 151.642 369.86 150.31Z"
            fill="#407BFF"
          />
          <path
            opacity="0.2"
            d="M393.56 180.58C393.56 180.58 388.29 187.42 387.13 194.65C389.43 192.65 391.763 190.537 394.13 188.31L393.56 180.58Z"
            fill="black"
          />
          <path
            d="M404.28 147.87C400.28 151.82 393.68 159.56 394.8 164.78C394.8 164.78 390.4 168.56 381.93 162.78C372.61 156.42 380.63 155.12 380.63 155.12C386.54 157.37 388.98 153.51 390.51 149.36L404.28 147.87Z"
            fill="#FF8B7B"
          />
          <path
            opacity="0.2"
            d="M398.66 148.48L390.52 149.36C390.179 150.333 389.751 151.274 389.24 152.17C391.37 153.22 395.5 152.91 397.09 151.01C397.769 150.274 398.302 149.415 398.66 148.48Z"
            fill="black"
          />
          <path
            d="M410.05 118.45C410.088 117.683 410.014 116.915 409.83 116.17C405.22 119.91 397.54 115.74 393.83 122.29C390.12 128.84 397.43 135.53 400.3 137.77C401.081 138.446 402.087 138.803 403.12 138.77C405.99 141.66 412.12 138.03 413.2 133.01C414.43 127.18 421.2 131.18 424.2 124.45C418.9 124.59 415.4 118.65 410.05 118.45Z"
            fill="#263238"
          />
          <path
            d="M408.74 139.71C404.74 146.03 402.74 149.93 397.55 151.47C389.79 153.78 383.37 146.33 385.41 138.94C387.25 132.28 393.5 123.06 401.34 123.99C403.07 124.187 404.721 124.822 406.136 125.837C407.551 126.851 408.683 128.211 409.424 129.786C410.166 131.361 410.492 133.1 410.372 134.837C410.253 136.574 409.691 138.251 408.74 139.71Z"
            fill="#FF8B7B"
          />
          <path
            d="M403.13 141.65C403.13 138.01 403.99 128.11 411.46 127.09C418.93 126.07 417.78 130.89 423.56 132.26C420.19 134.46 416.56 136.26 414.11 141.19C411.66 146.12 403.08 147.88 403.13 141.65Z"
            fill="#263238"
          />
          <path
            d="M398.41 120C401.59 118.24 411.41 117.44 416.88 122.65C422.35 127.86 414.96 127.51 416.59 133.22C413.03 131.36 409.74 129.09 404.18 129.36C398.62 129.63 393 123 398.41 120Z"
            fill="#263238"
          />
          <path
            d="M407.72 148.55C406.071 149.458 404.13 149.677 402.32 149.16C399.93 148.45 400.05 145.99 401.82 144.43C403.42 143.02 406.58 141.69 408.45 143.24C408.852 143.589 409.161 144.032 409.348 144.53C409.535 145.029 409.595 145.565 409.523 146.093C409.45 146.62 409.248 147.121 408.933 147.55C408.618 147.979 408.201 148.323 407.72 148.55Z"
            fill="#FF8B7B"
          />
          <path
            d="M322.72 190.7C322.72 190.7 272.49 192.77 254.91 207.63C236.62 223.08 211.91 257.15 211.91 257.15L219.8 267.2C219.8 267.2 247.31 238.93 266.14 224.86C286.66 209.51 323.58 223.77 339.14 211.56L322.72 190.7Z"
            fill="#263238"
          />
          <path
            opacity="0.2"
            d="M318.5 212.33C312.88 207.84 296.18 211.39 288.41 217.48C297.97 216.6 308.15 217.28 317.26 217.04C319.24 215.22 320 213.54 318.5 212.33Z"
            fill="black"
          />
          <path
            d="M331.57 202C331.57 202 289.27 216.18 275.19 233.22C259.78 251.88 243.1 296.9 243.1 296.9L253 305C253 305 270.85 269.11 287.45 252.33C305.45 234.11 332.76 234.14 347.62 222.46L331.57 202Z"
            fill="#263238"
          />
          <path
            d="M240.41 296.5L255.06 307.07L257.9 303.13L241.71 291.06L240.41 296.5Z"
            fill="#407BFF"
          />
          <path
            d="M209.9 255.1L221.06 269.3L224.93 266.26L212.66 250.22L209.9 255.1Z"
            fill="#407BFF"
          />
          <path
            d="M397.81 136.06C397.52 136.6 397 136.87 396.65 136.68C396.3 136.49 396.26 135.9 396.55 135.37C396.84 134.84 397.36 134.56 397.71 134.75C398.06 134.94 398.1 135.53 397.81 136.06Z"
            fill="#263238"
          />
          <path
            d="M391.79 132.74C391.49 133.27 390.97 133.55 390.63 133.36C390.29 133.17 390.23 132.58 390.53 132.05C390.83 131.52 391.34 131.24 391.69 131.43C392.04 131.62 392.08 132.21 391.79 132.74Z"
            fill="#263238"
          />
          <path
            d="M393.56 134.06C392.026 135.34 390.323 136.403 388.5 137.22C388.719 137.681 389.037 138.089 389.431 138.414C389.825 138.739 390.285 138.973 390.78 139.1L393.56 134.06Z"
            fill="#FF5652"
          />
          <path
            d="M392.77 141.94C392.336 141.817 391.917 141.646 391.52 141.43C391.478 141.407 391.446 141.369 391.432 141.323C391.418 141.277 391.422 141.227 391.445 141.185C391.468 141.143 391.506 141.111 391.552 141.097C391.598 141.083 391.648 141.087 391.69 141.11C392.345 141.49 393.079 141.711 393.835 141.755C394.591 141.798 395.346 141.663 396.04 141.36C396.083 141.338 396.132 141.333 396.179 141.346C396.225 141.359 396.265 141.389 396.29 141.43C396.311 141.474 396.315 141.524 396.3 141.571C396.285 141.618 396.253 141.657 396.21 141.68C395.13 142.172 393.911 142.264 392.77 141.94Z"
            fill="#263238"
          />
          <path
            d="M400.77 135.15C400.704 135.134 400.644 135.097 400.599 135.045C400.554 134.993 400.527 134.928 400.52 134.86C400.467 134.415 400.31 133.988 400.062 133.614C399.813 133.241 399.481 132.931 399.09 132.71C399.005 132.671 398.938 132.6 398.905 132.512C398.871 132.424 398.873 132.326 398.91 132.24C398.952 132.154 399.025 132.087 399.114 132.053C399.204 132.02 399.303 132.022 399.39 132.06C399.889 132.331 400.315 132.718 400.634 133.187C400.952 133.657 401.153 134.196 401.22 134.76C401.227 134.806 401.225 134.853 401.214 134.898C401.203 134.943 401.182 134.986 401.154 135.023C401.127 135.06 401.091 135.092 401.051 135.115C401.011 135.139 400.967 135.154 400.92 135.16C400.871 135.172 400.818 135.168 400.77 135.15Z"
            fill="#263238"
          />
          <path
            d="M390.37 129.25C390.288 129.229 390.217 129.179 390.17 129.11C390.118 129.031 390.098 128.935 390.115 128.842C390.132 128.749 390.184 128.666 390.26 128.61C390.716 128.273 391.246 128.05 391.807 127.96C392.367 127.869 392.94 127.914 393.48 128.09C393.567 128.128 393.636 128.197 393.674 128.285C393.711 128.372 393.713 128.471 393.68 128.56C393.644 128.647 393.576 128.716 393.49 128.753C393.404 128.791 393.307 128.793 393.22 128.76C392.791 128.623 392.335 128.591 391.891 128.668C391.447 128.744 391.028 128.927 390.67 129.2C390.626 129.23 390.577 129.25 390.525 129.258C390.473 129.267 390.42 129.264 390.37 129.25Z"
            fill="#263238"
          />
          <path
            d="M405.63 181.35C405.76 182.89 405.84 184.24 405.87 185.67C405.9 187.1 405.94 188.5 405.95 189.91C405.95 192.73 405.82 195.56 405.59 198.39C405.36 201.22 405 204.07 404.5 206.93L404.09 209.07L403.59 211.22C403.43 211.93 403.21 212.66 403.01 213.37L402.7 214.45L402.62 214.72L402.47 215.16C402.366 215.473 402.246 215.78 402.11 216.08C401.25 217.859 400.059 219.457 398.6 220.79C397.454 221.873 396.235 222.875 394.95 223.79C392.581 225.458 390.102 226.965 387.53 228.3C382.582 230.898 377.436 233.102 372.14 234.89L369.78 229.74C374.28 226.95 378.78 224.02 383.06 221.01C385.139 219.55 387.141 217.984 389.06 216.32C389.921 215.573 390.729 214.768 391.48 213.91C391.987 213.368 392.397 212.742 392.69 212.06C392.69 212.06 392.69 212.01 392.69 212.06C392.69 212.11 392.69 212.12 392.69 212.06V211.83L392.87 210.94C392.98 210.34 393.12 209.75 393.2 209.13L393.48 207.29L393.72 205.42C393.987 202.913 394.174 200.367 394.28 197.78C394.37 195.21 394.42 192.61 394.4 190.01C394.4 188.71 394.4 187.41 394.34 186.12L394.2 182.32L405.63 181.35Z"
            fill="#FF8B7B"
          />
          <path
            d="M406.06 175.69C411.5 180.43 408.28 201.96 408.28 201.96L391.05 202.38C390.303 195.982 390.35 189.516 391.19 183.13C392.71 173.44 399.9 170.31 406.06 175.69Z"
            fill="#407BFF"
          />
          <path
            d="M236 307.3C235.509 307.14 235.087 306.819 234.8 306.39C234.72 306.235 234.679 306.064 234.679 305.89C234.679 305.716 234.72 305.545 234.8 305.39C234.839 305.293 234.905 305.208 234.99 305.146C235.075 305.084 235.175 305.047 235.28 305.04C236.21 304.96 237.89 307.27 238.08 307.54C238.097 307.569 238.106 307.602 238.106 307.635C238.106 307.668 238.097 307.701 238.08 307.73C238.064 307.762 238.037 307.788 238.005 307.804C237.973 307.821 237.936 307.826 237.9 307.82C237.25 307.717 236.613 307.542 236 307.3ZM235.56 305.43C235.487 305.401 235.409 305.384 235.33 305.38C235.27 305.38 235.21 305.38 235.14 305.54C235.084 305.646 235.055 305.765 235.055 305.885C235.055 306.005 235.084 306.124 235.14 306.23C235.775 306.901 236.638 307.311 237.56 307.38C237.031 306.606 236.354 305.944 235.57 305.43H235.56Z"
            fill="#407BFF"
          />
          <path
            d="M237.9 307.8C237.9 307.8 237.84 307.8 237.83 307.74C237.27 307.05 236.5 304.95 236.97 304.23C237.045 304.118 237.157 304.035 237.287 303.997C237.417 303.959 237.556 303.967 237.68 304.02C237.81 304.058 237.931 304.121 238.036 304.207C238.141 304.293 238.227 304.4 238.29 304.52C238.83 305.52 238.16 307.6 238.13 307.69C238.119 307.719 238.101 307.744 238.079 307.765C238.056 307.786 238.029 307.801 238 307.81L237.9 307.8ZM237.66 304.39H237.58C237.36 304.33 237.3 304.39 237.27 304.46C236.99 304.88 237.41 306.4 237.9 307.24C238.176 306.427 238.204 305.549 237.98 304.72C237.919 304.573 237.805 304.455 237.66 304.39Z"
            fill="#407BFF"
          />
          <path
            d="M203.46 264.94C202.878 264.651 202.41 264.176 202.13 263.59C202.082 263.436 202.073 263.273 202.103 263.114C202.133 262.956 202.2 262.807 202.3 262.68C202.355 262.598 202.429 262.532 202.517 262.486C202.604 262.441 202.701 262.418 202.8 262.42C203.8 262.47 205.64 265.36 205.8 265.69C205.822 265.721 205.833 265.757 205.833 265.795C205.833 265.833 205.822 265.869 205.8 265.9C205.776 265.929 205.744 265.95 205.708 265.959C205.672 265.968 205.634 265.965 205.6 265.95C204.855 265.684 204.138 265.346 203.46 264.94ZM203.11 262.94C203.014 262.875 202.904 262.833 202.79 262.82C202.751 262.82 202.712 262.829 202.678 262.846C202.643 262.864 202.613 262.889 202.59 262.92C202.522 263.004 202.476 263.105 202.457 263.211C202.438 263.318 202.446 263.427 202.48 263.53C202.66 264.12 203.68 264.83 205.24 265.46C204.682 264.49 203.962 263.624 203.11 262.9V262.94Z"
            fill="#407BFF"
          />
          <path
            d="M205.59 265.94C205.568 265.923 205.548 265.902 205.53 265.88C204.97 265.06 204.28 262.73 204.85 262.07C204.98 261.92 205.23 261.78 205.68 261.99C205.84 262.067 205.983 262.177 206.1 262.311C206.217 262.445 206.305 262.601 206.36 262.77C206.77 263.95 205.88 265.77 205.84 265.86C205.828 265.89 205.807 265.915 205.781 265.933C205.754 265.951 205.722 265.96 205.69 265.96C205.656 265.963 205.621 265.956 205.59 265.94ZM205.59 262.37L205.49 262.32C205.2 262.18 205.12 262.27 205.09 262.32C204.75 262.71 205.09 264.44 205.63 265.4C206.008 264.625 206.134 263.75 205.99 262.9C205.929 262.687 205.799 262.501 205.62 262.37H205.59Z"
            fill="#407BFF"
          />
          <path
            d="M371.74 229.37L364.11 228.68L367.32 237.77C367.32 237.77 373.95 236.91 373.89 233.35L371.74 229.37Z"
            fill="#FF8B7B"
          />
          <path
            d="M356.96 232.64L359.99 239.95L367.32 237.76L364.11 228.68L356.96 232.64Z"
            fill="#FF8B7B"
          />
          <path
            d="M213.24 36.69C219.14 28.39 225.5 32.1 234.58 25.1C241.15 20.03 248.04 28.38 254.34 24.78C260.64 21.18 271.2 20.21 275.27 25.78C279.34 31.35 288.89 32.06 296.8 28.63C307.8 23.87 314.1 27.51 319.67 31.99C337 41.71 321.95 71.99 309.82 94.23C295.02 97.79 288.82 79.5 273.46 78.87C261.33 78.37 256.13 90.23 248.15 79.8C240.61 69.93 242.73 65.1 228.75 66.37C214.77 67.64 205 48.32 213.24 36.69Z"
            fill="#263238"
          />
          <path
            d="M232.051 81.63C232.151 81.89 232.311 82.35 232.481 82.72L232.981 83.93C233.341 84.74 233.731 85.54 234.141 86.34C234.953 87.9425 235.854 89.4982 236.841 91C238.819 94.024 241.108 96.8326 243.671 99.38L244.091 99.81C244.091 99.81 244.091 99.81 244.091 99.86C244.204 99.9427 244.333 100.001 244.471 100.03C245.081 100.185 245.714 100.232 246.341 100.17C248.038 100.013 249.714 99.6781 251.341 99.17C253.129 98.6507 254.888 98.0365 256.611 97.33C258.361 96.65 260.131 95.88 261.831 95.13L263.831 98.33C260.585 100.774 257.085 102.86 253.391 104.55C251.404 105.469 249.311 106.141 247.161 106.55C245.86 106.792 244.529 106.815 243.221 106.62C242.395 106.491 241.595 106.231 240.851 105.85C240.432 105.63 240.037 105.369 239.671 105.07L239.461 104.89L239.321 104.77L239.021 104.51C237.43 103.16 235.934 101.703 234.541 100.15C233.821 99.39 233.171 98.57 232.541 97.77C231.911 96.97 231.261 96.12 230.681 95.25C229.471 93.5403 228.376 91.7531 227.401 89.9C226.921 88.96 226.471 88.01 226.041 87.04C225.831 86.55 225.611 86.04 225.431 85.55C225.251 85.06 225.061 84.55 224.851 83.9L232.051 81.63Z"
            fill="#CE7A63"
          />
          <path
            d="M234.721 87L228.271 94.52C231.707 97.3999 234.867 100.594 237.711 104.06L243.15 98.33C240.564 94.3922 237.749 90.609 234.721 87Z"
            fill="#407BFF"
          />
          <path
            d="M225.82 74.24C232.59 76.01 237.23 88.05 237.42 88.51L228.47 97.57C228.47 97.57 217.36 86.09 218 82.05C218.67 77.83 221.38 73.07 225.82 74.24Z"
            fill="#263238"
          />
          <path
            d="M262.501 94.57L268.691 93.13L266.401 100.52C266.401 100.52 261.171 100.22 259.511 97.63L260.161 96.39C260.397 95.9363 260.728 95.5389 261.132 95.2249C261.536 94.9108 262.003 94.6874 262.501 94.57Z"
            fill="#CE7A63"
          />
          <path
            d="M274.941 95.58L272.211 100.75L266.391 100.52L268.691 93.13L274.941 95.58Z"
            fill="#CE7A63"
          />
          <path
            d="M176.25 19.22L177.17 11.29L183.35 15.94C183.35 15.94 181.98 21.19 177.47 20.54L176.25 19.22Z"
            fill="#CE7A63"
          />
          <path
            d="M178.03 7.25L184.14 7.09L183.35 15.94L177.17 11.29L178.03 7.25Z"
            fill="#CE7A63"
          />
          <path
            d="M117.771 233.17L122.791 238.39L138.431 229.36L133.411 224.14L117.771 233.17Z"
            fill="#CE7A63"
          />
          <path
            d="M68.5101 164.39L68.3701 171.8L85.4801 174.5L85.6101 167.09L68.5101 164.39Z"
            fill="#CE7A63"
          />
          <path
            d="M70.1503 172.24L72.6603 164.3C72.7052 164.164 72.6984 164.017 72.6412 163.886C72.584 163.755 72.4804 163.649 72.3503 163.59L66.3503 160.7C66.1977 160.632 66.0324 160.597 65.8653 160.597C65.6982 160.597 65.533 160.633 65.3808 160.702C65.2286 160.771 65.0928 160.872 64.9824 160.997C64.8719 161.123 64.7894 161.27 64.7403 161.43C63.9103 164.21 63.6503 165.6 62.5503 169.09C61.8703 171.23 60.0503 175.88 59.1203 178.84C58.1903 181.8 61.0603 182.84 61.7103 181.74C64.7103 176.58 67.1803 174.65 69.3303 173.28C69.7138 173.037 70.003 172.67 70.1503 172.24Z"
            fill="#263238"
          />
          <path
            d="M125.28 237.93L122.17 229.71C122.114 229.563 122.011 229.438 121.878 229.355C121.744 229.272 121.587 229.235 121.43 229.25L114.25 229.92C114.08 229.932 113.914 229.985 113.768 230.074C113.622 230.162 113.499 230.284 113.409 230.43C113.319 230.575 113.265 230.74 113.252 230.91C113.238 231.081 113.265 231.252 113.33 231.41C114.46 234.26 115.16 235.6 116.52 239.22C117.36 241.44 119.86 248.77 121.02 251.84C122.18 254.91 125.43 254.33 125.24 252.98C124.37 246.98 124.29 241.59 125.24 239.26C125.418 238.837 125.432 238.363 125.28 237.93Z"
            fill="#263238"
          />
          <path
            opacity="0.2"
            d="M138.431 229.36L130.151 234.14L125.311 228.81L133.401 224.14L138.431 229.36Z"
            fill="black"
          />
          <path
            opacity="0.2"
            d="M85.6102 167.09L85.4702 174.5L76.6602 173.1L76.7902 165.7L85.6102 167.09Z"
            fill="black"
          />
          <path
            d="M231.81 78.65C231.81 78.65 233.94 81.72 202.75 112.79L178.38 95.16C185.96 85.54 190.38 79.43 200.38 55.65C204.301 57.4114 208.087 59.4568 211.71 61.77C215.57 64.1933 219.268 66.8657 222.78 69.77C227.22 73.64 231.81 78.65 231.81 78.65Z"
            fill="#263238"
          />
          <path
            d="M221.821 50.1C219.941 54.17 215.921 61.19 211.711 61.77C211.711 61.77 210.071 66.08 216.711 70.87C223.991 76.13 222.801 69.77 222.801 69.77C219.511 65.95 221.751 63.08 224.441 60.77L221.821 50.1Z"
            fill="#CE7A63"
          />
          <path
            opacity="0.2"
            d="M222.88 54.47L224.42 60.81C223.78 61.3264 223.191 61.9023 222.66 62.53C221.3 61.21 220 58.2 220.98 56.53C221.487 55.7369 222.13 55.0395 222.88 54.47Z"
            fill="black"
          />
          <path
            d="M222.71 41.74C220.02 48.58 218.71 51.42 220.51 56.4C223.18 63.88 232.17 65.68 236.84 59.78C241.05 54.47 244.74 44.18 239.46 38.5C238.305 37.2357 236.845 36.2891 235.22 35.7508C233.594 35.2125 231.858 35.1006 230.177 35.4257C228.496 35.7509 226.926 36.5023 225.619 37.6079C224.312 38.7135 223.31 40.1363 222.71 41.74Z"
            fill="#CE7A63"
          />
          <path
            d="M219.12 46.73C218.49 52.2 229.84 40.08 237.35 43.73C242.91 46.43 250.67 47.12 252.03 42.5C253.39 37.88 241 30.22 230.46 32.43C220.51 34.54 219.94 39.59 219.12 46.73Z"
            fill="#263238"
          />
          <path
            d="M218.88 47.26C218.427 48.6056 218.524 50.0757 219.15 51.35C219.99 53.04 221.8 52.62 222.73 51.09C223.57 49.72 224.14 47.19 222.73 46.01C222.417 45.7586 222.046 45.589 221.651 45.5165C221.256 45.4441 220.849 45.4711 220.467 45.5951C220.086 45.7192 219.74 45.9363 219.463 46.2269C219.186 46.5176 218.986 46.8726 218.88 47.26Z"
            fill="#CE7A63"
          />
          <path
            d="M202.751 112.79C202.751 112.79 195.381 178.44 181.751 196.45C167.571 215.19 134.371 234.09 134.371 234.09L125.931 226C125.931 226 156.461 202.31 164.161 186.22C174.771 164.03 181.711 97.59 181.711 97.59L202.751 112.79Z"
            fill="#407BFF"
          />
          <path
            d="M125.16 225.29L134.55 235.08L139.77 232.66L129.88 221.35L125.16 225.29Z"
            fill="#263238"
          />
          <path
            opacity="0.2"
            d="M187.86 113.2C187.47 120.98 182.38 131.2 176.28 137.5C177.28 131.37 178.17 125.42 178.91 120.07C182 117.08 185.08 114.5 187.86 113.2Z"
            fill="black"
          />
          <path
            d="M196.31 108.13C196.31 108.13 166.84 144 146.44 164.57C130 181.21 78.9102 175.13 78.9102 175.13L79.5702 165C79.5702 165 117.49 165.17 128.78 153.93C164.94 117.93 162.7 100.44 178.38 95.21L196.31 108.13Z"
            fill="#407BFF"
          />
          <path
            d="M79.4403 163.26L78.5303 177.29L85.0503 179.56L85.7403 163.72L79.4403 163.26Z"
            fill="#263238"
          />
          <path
            d="M179.051 93.47L176.371 94.85C176.161 94.96 176.241 95.28 176.521 95.48L202.081 114C202.301 114.16 202.561 114.18 202.671 114.05L204.471 112.05C204.591 111.91 204.471 111.65 204.261 111.47L179.581 93.62C179.513 93.5506 179.429 93.5002 179.336 93.4739C179.243 93.4475 179.144 93.4462 179.051 93.47Z"
            fill="#407BFF"
          />
          <path
            opacity="0.4"
            d="M179.051 93.47L176.371 94.85C176.161 94.96 176.241 95.28 176.521 95.48L202.081 114C202.301 114.16 202.561 114.18 202.671 114.05L204.471 112.05C204.591 111.91 204.471 111.65 204.261 111.47L179.581 93.62C179.513 93.5506 179.429 93.5002 179.336 93.4739C179.243 93.4475 179.144 93.4462 179.051 93.47Z"
            fill="white"
          />
          <path
            d="M180.37 98.63L179.71 98.15C179.57 98.05 179.52 97.91 179.59 97.84L181.95 95.23C182.02 95.15 182.18 95.16 182.32 95.23L182.98 95.71C183.11 95.8 183.16 95.94 183.09 96.02L180.73 98.63C180.66 98.74 180.5 98.72 180.37 98.63Z"
            fill="#407BFF"
          />
          <path
            d="M200.051 112.86L199.391 112.38C199.261 112.29 199.211 112.15 199.281 112.07L201.641 109.46C201.701 109.39 201.871 109.4 202.001 109.46L202.661 109.93C202.791 110.03 202.841 110.17 202.781 110.25L200.421 112.86C200.367 112.9 200.302 112.921 200.236 112.921C200.169 112.921 200.104 112.9 200.051 112.86Z"
            fill="#407BFF"
          />
          <path
            d="M190.21 105.74L189.55 105.27C189.42 105.17 189.36 105.03 189.43 104.95L191.79 102.34C191.843 102.3 191.908 102.279 191.975 102.279C192.042 102.279 192.106 102.3 192.16 102.34L192.82 102.82C192.95 102.91 193 103.05 192.93 103.13L190.57 105.74C190.519 105.781 190.455 105.803 190.39 105.803C190.325 105.803 190.261 105.781 190.21 105.74Z"
            fill="#407BFF"
          />
          <path
            d="M231.93 48.29C231.68 48.83 231.76 49.41 232.12 49.57C232.48 49.73 232.96 49.43 233.22 48.89C233.48 48.35 233.39 47.77 233.03 47.61C232.67 47.45 232.19 47.75 231.93 48.29Z"
            fill="#263238"
          />
          <path
            d="M238.06 51.14C237.8 51.68 237.89 52.25 238.24 52.42C238.59 52.59 239.09 52.28 239.34 51.74C239.59 51.2 239.51 50.62 239.15 50.46C238.79 50.3 238.31 50.6 238.06 51.14Z"
            fill="#263238"
          />
          <path
            d="M239 50.41L240.48 50.64C240.48 50.64 239.32 51.35 239 50.41Z"
            fill="#263238"
          />
          <path
            d="M236 51.32C235.911 52.7783 236.022 54.2419 236.33 55.67C235.963 55.7412 235.584 55.7306 235.221 55.639C234.858 55.5474 234.52 55.3771 234.23 55.14L236 51.32Z"
            fill="#BA4D3C"
          />
          <path
            d="M231.351 56.39C231.39 56.4038 231.434 56.4022 231.473 56.3855C231.512 56.3689 231.543 56.3384 231.561 56.3C231.581 56.2575 231.585 56.2085 231.57 56.1636C231.555 56.1187 231.523 56.0814 231.481 56.06C230.8 55.7616 230.2 55.3074 229.727 54.7342C229.255 54.161 228.924 53.4847 228.761 52.76C228.758 52.7366 228.751 52.714 228.739 52.6936C228.728 52.6731 228.712 52.6553 228.693 52.6412C228.675 52.6271 228.653 52.617 228.63 52.6117C228.607 52.6063 228.584 52.6057 228.561 52.61C228.515 52.6174 228.473 52.6424 228.445 52.6797C228.417 52.717 228.405 52.7637 228.411 52.81C228.575 53.5958 228.926 54.3304 229.434 54.9518C229.943 55.5732 230.593 56.0631 231.331 56.38L231.351 56.39Z"
            fill="#263238"
          />
          <path
            d="M231.79 46C231.83 46.0174 231.872 46.0263 231.915 46.0263C231.958 46.0263 232.001 46.0174 232.04 46C232.441 45.8166 232.88 45.7318 233.32 45.7526C233.76 45.7735 234.189 45.8995 234.57 46.12C234.649 46.1717 234.744 46.1902 234.836 46.1715C234.928 46.1527 235.009 46.0982 235.06 46.02C235.112 45.9418 235.13 45.8462 235.112 45.7543C235.093 45.6624 235.039 45.5817 234.96 45.53C234.481 45.249 233.941 45.0869 233.386 45.0573C232.831 45.0278 232.277 45.1315 231.77 45.36C231.727 45.3775 231.688 45.4034 231.656 45.436C231.623 45.4687 231.597 45.5076 231.579 45.5503C231.562 45.5931 231.553 45.639 231.553 45.6853C231.553 45.7316 231.562 45.7773 231.58 45.82C231.602 45.8624 231.631 45.9001 231.667 45.931C231.703 45.9619 231.745 45.9853 231.79 46Z"
            fill="#263238"
          />
          <path
            d="M242.19 49.63C242.243 49.6402 242.297 49.6402 242.35 49.63C242.441 49.6152 242.523 49.5649 242.578 49.4899C242.632 49.4149 242.654 49.3215 242.64 49.23C242.57 48.6778 242.368 48.1505 242.051 47.6928C241.734 47.2351 241.312 46.8602 240.82 46.6C240.735 46.562 240.638 46.5584 240.551 46.5901C240.463 46.6218 240.391 46.6863 240.35 46.77C240.313 46.8563 240.31 46.9538 240.344 47.0417C240.378 47.1295 240.444 47.2007 240.53 47.24C240.917 47.4511 241.248 47.7519 241.495 48.1173C241.742 48.4827 241.898 48.9019 241.95 49.34C241.958 49.4062 241.985 49.4686 242.028 49.52C242.07 49.5714 242.126 49.6095 242.19 49.63Z"
            fill="#263238"
          />
          <path
            d="M194 61.29L193.15 60.84L192.42 60.41C191.94 60.13 191.5 59.82 191.04 59.52C190.15 58.91 189.28 58.28 188.45 57.61C186.794 56.2746 185.23 54.8279 183.77 53.28C182.307 51.7506 180.954 50.1199 179.72 48.4C179.08 47.56 178.53 46.66 177.95 45.78C177.37 44.9 176.89 44 176.36 43C174.263 39.0042 173.328 34.5005 173.66 30C173.799 27.8736 174.133 25.7646 174.66 23.7C174.93 22.7 175.26 21.7 175.66 20.7C176.021 19.6909 176.445 18.7056 176.93 17.75L180.39 19.19C179.952 20.965 179.644 22.7699 179.47 24.59C179.259 26.3889 179.223 28.204 179.36 30.01C179.502 33.4061 180.507 36.7101 182.28 39.61C184.266 42.6554 186.565 45.4842 189.14 48.05C190.428 49.3136 191.787 50.5022 193.21 51.61C193.91 52.18 194.64 52.7 195.36 53.2C195.72 53.45 196.09 53.69 196.45 53.92L196.99 54.25L197.43 54.52L194 61.29Z"
            fill="#CE7A63"
          />
          <path
            d="M184.321 41.73L177.391 46.07C180.5 51.0957 184.361 55.6148 188.841 59.47L194.941 51.69C191.098 48.7081 187.543 45.3736 184.321 41.73Z"
            fill="#407BFF"
          />
          <path
            d="M206.46 59.3C206.1 56.17 193.64 49.96 193.64 49.96L186.84 61C186.84 61 191.96 67.86 196.31 70.92C199.8 73.38 206.87 62.87 206.46 59.3Z"
            fill="#263238"
          />
          <path
            d="M68.26 176C68.4256 176.176 68.6494 176.286 68.89 176.31C68.9939 176.334 69.1025 176.33 69.2044 176.299C69.3064 176.267 69.398 176.209 69.47 176.13C70.1 175.42 69.4 172.84 69.31 172.55C69.3023 172.517 69.2849 172.487 69.26 172.463C69.235 172.44 69.2036 172.425 69.17 172.42C69.1345 172.417 69.0989 172.423 69.0671 172.439C69.0353 172.455 69.0085 172.48 68.99 172.51C68.49 173.35 67.7 174.9 68.09 175.75C68.1325 175.842 68.1899 175.927 68.26 176ZM69.08 173.06C69.33 174.06 69.54 175.52 69.21 175.89C69.1782 175.926 69.1372 175.953 69.0913 175.967C69.0454 175.981 68.9965 175.982 68.95 175.97C68.8373 175.959 68.7292 175.92 68.635 175.857C68.5408 175.795 68.4636 175.71 68.41 175.61C68.2 175.12 68.45 174.18 69.08 173V173.06Z"
            fill="#407BFF"
          />
          <path
            d="M70.1602 174.64C70.3966 174.945 70.7271 175.163 71.1002 175.26C71.2398 175.272 71.3795 175.238 71.4973 175.162C71.615 175.086 71.704 174.972 71.7502 174.84C71.8094 174.719 71.8402 174.585 71.8402 174.45C71.8402 174.315 71.8094 174.181 71.7502 174.06C71.3102 173.06 69.2802 172.43 69.2002 172.4C69.1743 172.385 69.145 172.377 69.1152 172.377C69.0853 172.377 69.056 172.385 69.0302 172.4C69.0069 172.419 68.9891 172.444 68.9786 172.472C68.9681 172.5 68.9651 172.53 68.9702 172.56C69.1985 173.337 69.6061 174.049 70.1602 174.64ZM71.2202 173.9C71.3058 173.992 71.3767 174.096 71.4302 174.21C71.4646 174.287 71.4825 174.371 71.4825 174.455C71.4825 174.539 71.4646 174.623 71.4302 174.7C71.3402 174.9 71.2302 174.92 71.1402 174.91C70.6302 174.85 69.7402 173.69 69.4102 172.85C70.0769 173.077 70.6921 173.434 71.2202 173.9Z"
            fill="#407BFF"
          />
          <path
            d="M125.29 242.09C125.469 242.666 125.817 243.175 126.29 243.55C126.436 243.646 126.602 243.707 126.776 243.728C126.949 243.748 127.125 243.729 127.29 243.67C127.38 243.647 127.463 243.599 127.528 243.532C127.593 243.465 127.639 243.381 127.66 243.29C127.88 242.36 125.56 240.04 125.09 239.58C125.06 239.561 125.025 239.552 124.99 239.552C124.954 239.552 124.92 239.561 124.89 239.58C124.856 239.595 124.828 239.621 124.809 239.653C124.791 239.686 124.785 239.723 124.79 239.76C124.876 240.552 125.043 241.333 125.29 242.09ZM127.21 242.86C127.258 242.97 127.275 243.091 127.26 243.21C127.251 243.24 127.235 243.267 127.212 243.288C127.189 243.309 127.16 243.324 127.13 243.33C127.021 243.37 126.905 243.383 126.79 243.37C126.675 243.356 126.566 243.315 126.47 243.25C125.92 242.91 125.47 241.79 125.16 240.25C125.97 241.012 126.661 241.892 127.21 242.86Z"
            fill="#407BFF"
          />
          <path
            d="M124.74 239.77V239.83C125.47 240.61 127.67 241.92 128.41 241.52C128.57 241.43 128.74 241.23 128.63 240.79C128.21 239.09 124.98 239.51 124.84 239.53C124.809 239.536 124.779 239.551 124.755 239.572C124.73 239.593 124.711 239.62 124.7 239.65C124.703 239.693 124.716 239.734 124.74 239.77ZM128.29 240.77C128.294 240.81 128.294 240.85 128.29 240.89C128.29 241.07 128.29 241.18 128.24 241.22C127.81 241.45 126.14 240.6 125.24 239.85C126.1 239.79 127.92 239.78 128.29 240.76V240.77Z"
            fill="#407BFF"
          />
          <path
            d="M232.86 47.57L234.34 47.8C234.34 47.8 233.2 48.5 232.86 47.57Z"
            fill="#263238"
          />
        </svg>
      ),
    },
    {
      title: "EQUATION OF MOTION CALCULATOR",
      text: "It's similar to the previous section. You solve for a parameter by giving the known parameters.",
      svg: (
        <svg
          width="528"
          height="309"
          viewBox="0 0 528 309"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Car">
            <g id="freepik--background-complete--inject-19">
              <path
                id="Vector"
                d="M136.091 50.3197C129.231 50.3197 13.8431 51.1057 6.59792 50.8463C6.47584 50.8457 6.35731 50.8052 6.26047 50.731C6.16362 50.6567 6.0938 50.5528 6.06167 50.4351C6.02955 50.3174 6.0369 50.1925 6.0826 50.0794C6.1283 49.9663 6.20984 49.8712 6.31472 49.8088C10.8853 47.553 16.0694 48.001 20.8209 46.4054C23.6135 45.4622 25.3285 43.6387 27.2715 41.5401C28.8766 39.7082 30.9521 38.3492 33.2738 37.6101C35.3963 36.9683 37.65 36.8924 39.811 37.39C42.171 37.9481 44.1849 39.2843 46.419 40.1331C51.965 42.2239 57.3458 40.2353 61.3027 36.1403C64.5674 32.7605 67.777 29.5693 72.2138 27.7536C75.9347 26.2288 80.0805 25.9144 83.7778 27.5964C88.01 29.5064 90.9129 33.3657 94.8855 35.6765C99.6055 38.4354 105.238 37.783 110.438 38.6083C115.638 39.4336 119.642 43.8195 124.205 46.3425C125.69 47.3093 127.412 47.8529 129.184 47.9145C130.2 47.8243 131.211 47.6827 132.213 47.4901C133.786 47.2936 135.281 47.3408 136.335 48.6455C136.595 48.9678 136.54 50.3197 136.091 50.3197Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_2"
                d="M527.671 58.3762C522.667 58.3762 438.423 58.9264 433.129 58.7613C432.751 58.7613 432.547 58.1876 432.924 57.9753C436.26 56.3247 440.044 56.6549 443.513 55.4916C445.558 54.7999 446.809 53.4716 448.233 51.9389C449.405 50.6058 450.921 49.619 452.615 49.0857C454.165 48.6165 455.813 48.5649 457.39 48.9363C459.097 49.3372 460.584 50.3197 462.212 50.9328C466.256 52.4576 470.189 51.0114 473.084 48.0167C475.444 45.5487 477.804 43.2221 481.045 41.8938C482.369 41.2977 483.801 40.9797 485.253 40.9594C486.705 40.9391 488.146 41.217 489.486 41.7759C492.577 43.175 494.694 45.9888 497.596 47.6866C501.042 49.6909 505.156 49.2586 508.956 49.8245C512.755 50.3904 515.674 53.6288 519.002 55.468C520.089 56.1637 521.345 56.5521 522.636 56.592C523.38 56.5262 524.121 56.4213 524.854 56.2776C525.995 56.1361 527.088 56.1754 527.859 57.1265C528.04 57.3858 528.001 58.3762 527.671 58.3762Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_3"
                d="M253.674 77.0909C248.671 77.0909 164.427 77.6411 159.133 77.476C158.755 77.476 158.551 76.9022 158.928 76.69C162.264 75.0394 166.008 75.3774 169.517 74.2062C171.562 73.5224 172.813 72.1862 174.237 70.6535C175.411 69.322 176.925 68.3355 178.619 67.8003C180.169 67.3311 181.817 67.2796 183.394 67.651C185.101 68.0519 186.588 69.0344 188.216 69.6474C192.267 71.1723 196.201 69.726 199.088 66.7314C201.448 64.2712 203.808 61.9368 207.057 60.6084C208.379 60.012 209.811 59.6944 211.262 59.6755C212.713 59.6565 214.152 59.9367 215.49 60.4984C218.581 61.8975 220.705 64.7035 223.608 66.4013C227.046 68.4056 231.16 67.934 234.96 68.5392C238.759 69.1444 241.678 72.3434 245.013 74.1827C246.1 74.8794 247.357 75.2679 248.648 75.3066C249.387 75.3066 250.119 75.0866 250.858 75.0001C252.007 74.8586 253.092 74.8901 253.863 75.8411C254.044 76.1005 254.005 77.0909 253.674 77.0909Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_4"
                d="M349.404 111.4C344.401 111.4 260.157 111.95 254.862 111.785C254.485 111.785 254.28 111.211 254.658 110.999C257.993 109.348 261.777 109.678 265.246 108.507C267.284 107.823 268.542 106.487 269.966 104.962C271.136 103.624 272.652 102.634 274.348 102.101C275.899 101.632 277.546 101.581 279.123 101.952C280.83 102.361 282.317 103.335 283.945 103.948C287.989 105.481 291.922 104.027 294.817 101.032C297.177 98.5722 299.537 96.2457 302.778 94.9173C304.102 94.3195 305.534 94.0004 306.986 93.9801C308.439 93.9599 309.88 94.2388 311.219 94.7994C314.311 96.1985 316.427 99.0124 319.33 100.702C322.775 102.707 326.89 102.235 330.689 102.84C334.489 103.445 337.407 106.644 340.735 108.484C341.819 109.186 343.077 109.575 344.369 109.608C345.156 109.608 345.848 109.388 346.588 109.301C347.728 109.16 348.822 109.191 349.593 110.142C349.774 110.409 349.734 111.4 349.404 111.4Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_5"
                d="M422.343 21.222C422.249 21.5049 289.57 21.222 291.245 21.222C292.032 21.222 290.081 20.0823 290.828 19.7207C295.147 17.5749 299.875 17.5121 304.579 17.0798C307.325 16.8361 310.141 16.4352 312.611 15.1383C315.081 13.8414 316.67 11.5542 318.448 9.45556C321.184 6.22062 324.7 3.73568 328.664 2.23529C332.628 0.734903 336.91 0.268569 341.104 0.880305C350.544 2.35798 357.97 9.5263 367.426 10.8625C373.098 11.6485 378.439 9.45556 384.017 8.68528C388.587 8.04862 392.387 8.9368 396.478 10.9647C399.467 12.4424 402.236 13.6921 405.619 13.9279C408.215 14.1087 410.826 13.81 413.43 13.7864C417.693 13.8647 421.781 15.4972 424.923 18.3767C425.34 18.7461 426.693 21.222 422.343 21.222Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_6"
                d="M427.999 31.2749H384.001V261.707H427.999V31.2749Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_7"
                d="M399.38 38.7576H390.829V47.553H399.38V38.7576Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_8"
                d="M410.323 38.7576H401.772V47.553H410.323V38.7576Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_9"
                d="M399.38 53.6995H390.829V62.4948H399.38V53.6995Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_10"
                d="M410.323 53.6995H401.772V62.4948H410.323V53.6995Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_11"
                d="M399.38 68.6335H390.829V77.4288H399.38V68.6335Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_12"
                d="M410.323 68.6335H401.772V77.4288H410.323V68.6335Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_13"
                d="M399.38 83.5754H390.829V92.3707H399.38V83.5754Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_14"
                d="M410.323 83.5754H401.772V92.3707H410.323V83.5754Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_15"
                d="M399.38 98.5094H390.829V107.305H399.38V98.5094Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_16"
                d="M410.323 98.5094H401.772V107.305H410.323V98.5094Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_17"
                d="M399.38 113.451H390.829V122.247H399.38V113.451Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_18"
                d="M410.323 113.451H401.772V122.247H410.323V113.451Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_19"
                d="M399.38 128.385H390.829V137.181H399.38V128.385Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_20"
                d="M410.323 128.385H401.772V137.181H410.323V128.385Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_21"
                d="M399.38 143.327H390.829V152.122H399.38V143.327Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_22"
                d="M410.323 143.327H401.772V152.122H410.323V143.327Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_23"
                d="M399.38 158.261H390.829V167.056H399.38V158.261Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_24"
                d="M410.323 158.261H401.772V167.056H410.323V158.261Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_25"
                d="M399.38 173.203H390.829V181.998H399.38V173.203Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_26"
                d="M410.323 173.203H401.772V181.998H410.323V173.203Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_27"
                d="M399.38 188.137H390.829V196.932H399.38V188.137Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_28"
                d="M410.323 188.137H401.772V196.932H410.323V188.137Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_29"
                d="M399.38 203.079H390.829V211.874H399.38V203.079Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_30"
                d="M410.323 203.079H401.772V211.874H410.323V203.079Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_31"
                d="M399.38 218.013H390.829V226.808H399.38V218.013Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_32"
                d="M410.323 218.013H401.772V226.808H410.323V218.013Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_33"
                d="M399.38 232.955H390.829V241.75H399.38V232.955Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_34"
                d="M412.62 241.75H421.171V232.955H412.62V241.75Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_35"
                d="M412.62 226.816H421.171V218.021H412.62V226.816Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_36"
                d="M412.62 211.874H421.171V203.079H412.62V211.874Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_37"
                d="M412.62 196.94H421.171V188.145H412.62V196.94Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_38"
                d="M412.62 181.998H421.171V173.203H412.62V181.998Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_39"
                d="M412.62 167.064H421.171V158.269H412.62V167.064Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_40"
                d="M412.62 152.122H421.171V143.327H412.62V152.122Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_41"
                d="M412.62 137.188H421.171V128.393H412.62V137.188Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_42"
                d="M412.62 122.247H421.171V113.451H412.62V122.247Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_43"
                d="M412.62 107.313H421.171V98.5172H412.62V107.313Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_44"
                d="M412.62 92.3707H421.171V83.5754H412.62V92.3707Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_45"
                d="M412.62 77.4367H421.171V68.6413H412.62V77.4367Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_46"
                d="M412.62 62.4948H421.171V53.6995H412.62V62.4948Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_47"
                d="M412.62 47.5608H421.171V38.7655H412.62V47.5608Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_48"
                d="M410.323 232.955H401.772V241.75H410.323V232.955Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_49"
                d="M462.692 31.2749H428V261.707H462.692V31.2749Z"
                fill="#A6A6A6"
              />
              <path
                id="Vector_50"
                d="M452.056 241.75H459.12V232.955H452.056V241.75Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_51"
                d="M443.017 241.75H450.081V232.955H443.017V241.75Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_52"
                d="M452.056 226.816H459.12V218.021H452.056V226.816Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_53"
                d="M443.017 226.816H450.081V218.021H443.017V226.816Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_54"
                d="M452.056 211.874H459.12V203.079H452.056V211.874Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_55"
                d="M443.017 211.874H450.081V203.079H443.017V211.874Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_56"
                d="M452.056 196.94H459.12V188.145H452.056V196.94Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_57"
                d="M443.017 196.94H450.081V188.145H443.017V196.94Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_58"
                d="M452.056 181.998H459.12V173.203H452.056V181.998Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_59"
                d="M443.017 181.998H450.081V173.203H443.017V181.998Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_60"
                d="M452.056 167.064H459.12V158.269H452.056V167.064Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_61"
                d="M443.017 167.064H450.081V158.269H443.017V167.064Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_62"
                d="M452.056 152.122H459.12V143.327H452.056V152.122Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_63"
                d="M443.017 152.122H450.081V143.327H443.017V152.122Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_64"
                d="M452.056 137.188H459.12V128.393H452.056V137.188Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_65"
                d="M443.017 137.188H450.081V128.393H443.017V137.188Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_66"
                d="M452.056 122.247H459.12V113.451H452.056V122.247Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_67"
                d="M443.017 122.247H450.081V113.451H443.017V122.247Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_68"
                d="M452.056 107.313H459.12V98.5172H452.056V107.313Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_69"
                d="M443.017 107.313H450.081V98.5172H443.017V107.313Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_70"
                d="M452.056 92.3707H459.12V83.5754H452.056V92.3707Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_71"
                d="M443.017 92.3707H450.081V83.5754H443.017V92.3707Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_72"
                d="M452.056 77.4367H459.12V68.6413H452.056V77.4367Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_73"
                d="M443.017 77.4367H450.081V68.6413H443.017V77.4367Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_74"
                d="M452.056 62.4948H459.12V53.6995H452.056V62.4948Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_75"
                d="M443.017 62.4948H450.081V53.6995H443.017V62.4948Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_76"
                d="M452.056 47.5608H459.12V38.7655H452.056V47.5608Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_77"
                d="M441.121 38.7576H434.057V47.553H441.121V38.7576Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_78"
                d="M441.121 53.6995H434.057V62.4948H441.121V53.6995Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_79"
                d="M441.121 68.6335H434.057V77.4288H441.121V68.6335Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_80"
                d="M441.121 83.5754H434.057V92.3707H441.121V83.5754Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_81"
                d="M441.121 98.5094H434.057V107.305H441.121V98.5094Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_82"
                d="M441.121 113.451H434.057V122.247H441.121V113.451Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_83"
                d="M441.121 128.385H434.057V137.181H441.121V128.385Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_84"
                d="M441.121 143.327H434.057V152.122H441.121V143.327Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_85"
                d="M441.121 158.261H434.057V167.056H441.121V158.261Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_86"
                d="M441.121 173.203H434.057V181.998H441.121V173.203Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_87"
                d="M441.121 188.137H434.057V196.932H441.121V188.137Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_88"
                d="M441.121 203.079H434.057V211.874H441.121V203.079Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_89"
                d="M441.121 218.013H434.057V226.808H441.121V218.013Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_90"
                d="M441.121 232.955H434.057V241.75H441.121V232.955Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_91"
                d="M443.017 47.5608H450.081V38.7655H443.017V47.5608Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_92"
                d="M116.913 13.4013H63.9463V261.707H116.913V13.4013Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_93"
                d="M116.913 8.45734H62.6719V13.4013H116.913V8.45734Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_94"
                d="M74.1014 20.6875H68.7363V261.707H74.1014V20.6875Z"
                fill="white"
              />
              <path
                id="Vector_95"
                d="M83.6043 20.6875H78.2393V261.707H83.6043V20.6875Z"
                fill="white"
              />
              <path
                id="Vector_96"
                d="M93.1073 20.6875H87.7422V261.707H93.1073V20.6875Z"
                fill="white"
              />
              <path
                id="Vector_97"
                d="M102.618 20.6875H97.2529V261.707H102.618V20.6875Z"
                fill="white"
              />
              <path
                id="Vector_98"
                d="M112.121 20.6875H106.756V261.707H112.121V20.6875Z"
                fill="white"
              />
              <path
                id="Vector_99"
                d="M74.1014 26.9362H68.7363V36.6983H74.1014V26.9362Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_100"
                d="M83.6043 26.9362H78.2393V36.6983H83.6043V26.9362Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_101"
                d="M93.1073 26.9362H87.7422V36.6983H93.1073V26.9362Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_102"
                d="M102.618 26.9362H97.2529V36.6983H102.618V26.9362Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_103"
                d="M112.121 26.9362H106.756V36.6983H112.121V26.9362Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_104"
                d="M74.1014 42.7977H68.7363V52.5598H74.1014V42.7977Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_105"
                d="M83.6043 42.7977H78.2393V52.5598H83.6043V42.7977Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_106"
                d="M93.1073 42.7977H87.7422V52.5598H93.1073V42.7977Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_107"
                d="M102.618 42.7977H97.2529V52.5598H102.618V42.7977Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_108"
                d="M112.121 42.7977H106.756V52.5598H112.121V42.7977Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_109"
                d="M74.1014 58.6592H68.7363V68.4213H74.1014V58.6592Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_110"
                d="M83.6043 58.6592H78.2393V68.4213H83.6043V58.6592Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_111"
                d="M93.1073 58.6592H87.7422V68.4213H93.1073V58.6592Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_112"
                d="M102.618 58.6592H97.2529V68.4213H102.618V58.6592Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_113"
                d="M112.121 58.6592H106.756V68.4213H112.121V58.6592Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_114"
                d="M74.1014 74.5285H68.7363V84.2906H74.1014V74.5285Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_115"
                d="M83.6043 74.5285H78.2393V84.2906H83.6043V74.5285Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_116"
                d="M93.1073 74.5285H87.7422V84.2906H93.1073V74.5285Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_117"
                d="M102.618 74.5285H97.2529V84.2906H102.618V74.5285Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_118"
                d="M112.121 74.5285H106.756V84.2906H112.121V74.5285Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_119"
                d="M74.1014 90.39H68.7363V100.152H74.1014V90.39Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_120"
                d="M83.6043 90.39H78.2393V100.152H83.6043V90.39Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_121"
                d="M93.1073 90.39H87.7422V100.152H93.1073V90.39Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_122"
                d="M102.618 90.39H97.2529V100.152H102.618V90.39Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_123"
                d="M112.121 90.39H106.756V100.152H112.121V90.39Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_124"
                d="M74.1014 106.251H68.7363V116.014H74.1014V106.251Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_125"
                d="M83.6043 106.251H78.2393V116.014H83.6043V106.251Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_126"
                d="M93.1073 106.251H87.7422V116.014H93.1073V106.251Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_127"
                d="M102.618 106.251H97.2529V116.014H102.618V106.251Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_128"
                d="M112.121 106.251H106.756V116.014H112.121V106.251Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_129"
                d="M74.1014 122.113H68.7363V131.875H74.1014V122.113Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_130"
                d="M83.6043 122.113H78.2393V131.875H83.6043V122.113Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_131"
                d="M93.1073 122.113H87.7422V131.875H93.1073V122.113Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_132"
                d="M102.618 122.113H97.2529V131.875H102.618V122.113Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_133"
                d="M112.121 122.113H106.756V131.875H112.121V122.113Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_134"
                d="M74.1014 137.982H68.7363V147.744H74.1014V137.982Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_135"
                d="M83.6043 137.982H78.2393V147.744H83.6043V137.982Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_136"
                d="M93.1073 137.982H87.7422V147.744H93.1073V137.982Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_137"
                d="M102.618 137.982H97.2529V147.744H102.618V137.982Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_138"
                d="M112.121 137.982H106.756V147.744H112.121V137.982Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_139"
                d="M74.1014 153.844H68.7363V163.606H74.1014V153.844Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_140"
                d="M83.6043 153.844H78.2393V163.606H83.6043V153.844Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_141"
                d="M93.1073 153.844H87.7422V163.606H93.1073V153.844Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_142"
                d="M102.618 153.844H97.2529V163.606H102.618V153.844Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_143"
                d="M112.121 153.844H106.756V163.606H112.121V153.844Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_144"
                d="M74.1014 169.705H68.7363V179.467H74.1014V169.705Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_145"
                d="M83.6043 169.705H78.2393V179.467H83.6043V169.705Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_146"
                d="M93.1073 169.705H87.7422V179.467H93.1073V169.705Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_147"
                d="M102.618 169.705H97.2529V179.467H102.618V169.705Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_148"
                d="M112.121 169.705H106.756V179.467H112.121V169.705Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_149"
                d="M74.1014 185.567H68.7363V195.329H74.1014V185.567Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_150"
                d="M83.6043 185.567H78.2393V195.329H83.6043V185.567Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_151"
                d="M93.1073 185.567H87.7422V195.329H93.1073V185.567Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_152"
                d="M102.618 185.567H97.2529V195.329H102.618V185.567Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_153"
                d="M112.121 185.567H106.756V195.329H112.121V185.567Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_154"
                d="M74.1014 201.428H68.7363V211.19H74.1014V201.428Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_155"
                d="M83.6043 201.428H78.2393V211.19H83.6043V201.428Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_156"
                d="M93.1073 201.428H87.7422V211.19H93.1073V201.428Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_157"
                d="M102.618 201.428H97.2529V211.19H102.618V201.428Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_158"
                d="M112.121 201.428H106.756V211.19H112.121V201.428Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_159"
                d="M74.1014 217.298H68.7363V227.06H74.1014V217.298Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_160"
                d="M83.6043 217.298H78.2393V227.06H83.6043V217.298Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_161"
                d="M93.1073 217.298H87.7422V227.06H93.1073V217.298Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_162"
                d="M102.618 217.298H97.2529V227.06H102.618V217.298Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_163"
                d="M112.121 217.298H106.756V227.06H112.121V217.298Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_164"
                d="M74.1014 233.159H68.7363V261.707H74.1014V233.159Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_165"
                d="M83.6043 233.159H78.2393V261.707H83.6043V233.159Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_166"
                d="M93.1073 233.159H87.7422V261.707H93.1073V233.159Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_167"
                d="M102.618 233.159H97.2529V261.707H102.618V233.159Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_168"
                d="M112.121 233.159H106.756V261.707H112.121V233.159Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_169"
                d="M150.912 13.4013H116.912V261.707H150.912V13.4013Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_170"
                d="M152.391 8.45734H116.912V13.4013H152.391V8.45734Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_171"
                d="M127.06 20.6875H121.695V261.707H127.06V20.6875Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_172"
                d="M136.571 20.6875H131.206V261.707H136.571V20.6875Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_173"
                d="M146.074 20.6875H140.709V261.707H146.074V20.6875Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_174"
                d="M127.06 26.9362H121.695V36.6983H127.06V26.9362Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_175"
                d="M136.571 26.9362H131.206V36.6983H136.571V26.9362Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_176"
                d="M146.074 26.9362H140.709V36.6983H146.074V26.9362Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_177"
                d="M127.06 42.7977H121.695V52.5598H127.06V42.7977Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_178"
                d="M136.571 42.7977H131.206V52.5598H136.571V42.7977Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_179"
                d="M146.074 42.7977H140.709V52.5598H146.074V42.7977Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_180"
                d="M127.06 58.6592H121.695V68.4213H127.06V58.6592Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_181"
                d="M136.571 58.6592H131.206V68.4213H136.571V58.6592Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_182"
                d="M146.074 58.6592H140.709V68.4213H146.074V58.6592Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_183"
                d="M127.06 74.5285H121.695V84.2906H127.06V74.5285Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_184"
                d="M136.571 74.5285H131.206V84.2906H136.571V74.5285Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_185"
                d="M146.074 74.5285H140.709V84.2906H146.074V74.5285Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_186"
                d="M127.06 90.39H121.695V100.152H127.06V90.39Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_187"
                d="M136.571 90.39H131.206V100.152H136.571V90.39Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_188"
                d="M146.074 90.39H140.709V100.152H146.074V90.39Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_189"
                d="M127.06 106.251H121.695V116.014H127.06V106.251Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_190"
                d="M136.571 106.251H131.206V116.014H136.571V106.251Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_191"
                d="M146.074 106.251H140.709V116.014H146.074V106.251Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_192"
                d="M127.06 122.113H121.695V131.875H127.06V122.113Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_193"
                d="M136.571 122.113H131.206V131.875H136.571V122.113Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_194"
                d="M146.074 122.113H140.709V131.875H146.074V122.113Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_195"
                d="M127.06 137.982H121.695V147.744H127.06V137.982Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_196"
                d="M136.571 137.982H131.206V147.744H136.571V137.982Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_197"
                d="M146.074 137.982H140.709V147.744H146.074V137.982Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_198"
                d="M127.06 153.844H121.695V163.606H127.06V153.844Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_199"
                d="M136.571 153.844H131.206V163.606H136.571V153.844Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_200"
                d="M146.074 153.844H140.709V163.606H146.074V153.844Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_201"
                d="M127.06 169.705H121.695V179.467H127.06V169.705Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_202"
                d="M136.571 169.705H131.206V179.467H136.571V169.705Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_203"
                d="M146.074 169.705H140.709V179.467H146.074V169.705Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_204"
                d="M127.06 185.567H121.695V195.329H127.06V185.567Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_205"
                d="M136.571 185.567H131.206V195.329H136.571V185.567Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_206"
                d="M146.074 185.567H140.709V195.329H146.074V185.567Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_207"
                d="M127.06 201.428H121.695V211.19H127.06V201.428Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_208"
                d="M136.571 201.428H131.206V211.19H136.571V201.428Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_209"
                d="M146.074 201.428H140.709V211.19H146.074V201.428Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_210"
                d="M127.06 217.298H121.695V227.06H127.06V217.298Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_211"
                d="M136.571 217.298H131.206V227.06H136.571V217.298Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_212"
                d="M146.074 217.298H140.709V227.06H146.074V217.298Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_213"
                d="M127.06 233.159H121.695V261.707H127.06V233.159Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_214"
                d="M136.571 233.159H131.206V261.707H136.571V233.159Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_215"
                d="M146.074 233.159H140.709V261.707H146.074V233.159Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_216"
                d="M53.1688 96.7644H9.64258V261.707H53.1688V96.7644Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_217"
                d="M53.1682 85.8312H15.833V96.7723H53.1682V85.8312Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_218"
                d="M48.3932 102.479H14.4092V225.779H48.3932V102.479Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_219"
                d="M48.3932 114.245H14.4092V117.161H48.3932V114.245Z"
                fill="white"
              />
              <path
                id="Vector_220"
                d="M48.3932 126.31H14.4092V129.226H48.3932V126.31Z"
                fill="white"
              />
              <path
                id="Vector_221"
                d="M48.3932 138.383H14.4092V141.299H48.3932V138.383Z"
                fill="white"
              />
              <path
                id="Vector_222"
                d="M48.3932 150.448H14.4092V153.364H48.3932V150.448Z"
                fill="white"
              />
              <path
                id="Vector_223"
                d="M48.3932 162.521H14.4092V165.437H48.3932V162.521Z"
                fill="white"
              />
              <path
                id="Vector_224"
                d="M48.3932 174.586H14.4092V177.502H48.3932V174.586Z"
                fill="white"
              />
              <path
                id="Vector_225"
                d="M48.3932 186.659H14.4092V189.575H48.3932V186.659Z"
                fill="white"
              />
              <path
                id="Vector_226"
                d="M48.3932 198.724H14.4092V201.64H48.3932V198.724Z"
                fill="white"
              />
              <path
                id="Vector_227"
                d="M48.3932 210.797H14.4092V213.713H48.3932V210.797Z"
                fill="white"
              />
              <path
                id="Vector_228"
                d="M48.3932 222.862H14.4092V225.779H48.3932V222.862Z"
                fill="white"
              />
              <path
                id="Vector_229"
                d="M80.4348 96.7644H53.1689V261.707H80.4348V96.7644Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_230"
                d="M76.3441 85.8312H53.1689V96.7723H76.3441V85.8312Z"
                fill="#A6A6A6"
              />
              <path
                id="Vector_231"
                d="M77.8934 102.479H56.9287V225.779H77.8934V102.479Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_232"
                d="M77.8934 114.245H56.9287V117.161H77.8934V114.245Z"
                fill="white"
              />
              <path
                id="Vector_233"
                d="M77.8934 126.31H56.9287V129.226H77.8934V126.31Z"
                fill="white"
              />
              <path
                id="Vector_234"
                d="M77.8934 138.383H56.9287V141.299H77.8934V138.383Z"
                fill="white"
              />
              <path
                id="Vector_235"
                d="M77.8934 150.448H56.9287V153.364H77.8934V150.448Z"
                fill="white"
              />
              <path
                id="Vector_236"
                d="M77.8934 162.521H56.9287V165.437H77.8934V162.521Z"
                fill="white"
              />
              <path
                id="Vector_237"
                d="M77.8934 174.586H56.9287V177.502H77.8934V174.586Z"
                fill="white"
              />
              <path
                id="Vector_238"
                d="M77.8934 186.659H56.9287V189.575H77.8934V186.659Z"
                fill="white"
              />
              <path
                id="Vector_239"
                d="M77.8934 198.724H56.9287V201.64H77.8934V198.724Z"
                fill="white"
              />
              <path
                id="Vector_240"
                d="M77.8934 210.797H56.9287V213.713H77.8934V210.797Z"
                fill="white"
              />
              <path
                id="Vector_241"
                d="M77.8934 222.862H56.9287V225.779H77.8934V222.862Z"
                fill="white"
              />
              <path
                id="Vector_242"
                d="M488.471 99.5469H465.225V126.986H488.471V99.5469Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_243"
                d="M503.213 99.5469H488.471V127.992H503.213V99.5469Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_244"
                d="M504.196 111.667H489.564V127.992H504.196V111.667Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_245"
                d="M513.322 111.667H504.196V127.992H513.322V111.667Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_246"
                d="M493.899 125.202H456.304V261.707H493.899V125.202Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_247"
                d="M472.43 131.073H460.606V135.899H472.43V131.073Z"
                fill="white"
              />
              <path
                id="Vector_248"
                d="M487.55 131.073H475.727V135.899H487.55V131.073Z"
                fill="white"
              />
              <path
                id="Vector_249"
                d="M472.43 139.263H460.606V144.09H472.43V139.263Z"
                fill="white"
              />
              <path
                id="Vector_250"
                d="M487.55 139.263H475.727V144.09H487.55V139.263Z"
                fill="white"
              />
              <path
                id="Vector_251"
                d="M472.43 147.454H460.606V152.28H472.43V147.454Z"
                fill="white"
              />
              <path
                id="Vector_252"
                d="M487.55 147.454H475.727V152.28H487.55V147.454Z"
                fill="white"
              />
              <path
                id="Vector_253"
                d="M472.43 155.652H460.606V160.478H472.43V155.652Z"
                fill="white"
              />
              <path
                id="Vector_254"
                d="M487.55 155.652H475.727V160.478H487.55V155.652Z"
                fill="white"
              />
              <path
                id="Vector_255"
                d="M472.43 163.842H460.606V168.668H472.43V163.842Z"
                fill="white"
              />
              <path
                id="Vector_256"
                d="M487.55 163.842H475.727V168.668H487.55V163.842Z"
                fill="white"
              />
              <path
                id="Vector_257"
                d="M472.43 172.04H460.606V176.866H472.43V172.04Z"
                fill="white"
              />
              <path
                id="Vector_258"
                d="M487.55 172.04H475.727V176.866H487.55V172.04Z"
                fill="white"
              />
              <path
                id="Vector_259"
                d="M472.43 180.23H460.606V185.056H472.43V180.23Z"
                fill="white"
              />
              <path
                id="Vector_260"
                d="M487.55 180.23H475.727V185.056H487.55V180.23Z"
                fill="white"
              />
              <path
                id="Vector_261"
                d="M472.43 188.428H460.606V193.254H472.43V188.428Z"
                fill="white"
              />
              <path
                id="Vector_262"
                d="M487.55 188.428H475.727V193.254H487.55V188.428Z"
                fill="white"
              />
              <path
                id="Vector_263"
                d="M472.43 196.618H460.606V201.444H472.43V196.618Z"
                fill="white"
              />
              <path
                id="Vector_264"
                d="M487.55 196.618H475.727V201.444H487.55V196.618Z"
                fill="white"
              />
              <path
                id="Vector_265"
                d="M472.43 204.808H460.606V209.634H472.43V204.808Z"
                fill="white"
              />
              <path
                id="Vector_266"
                d="M487.55 204.808H475.727V209.634H487.55V204.808Z"
                fill="white"
              />
              <path
                id="Vector_267"
                d="M472.43 213.006H460.606V217.832H472.43V213.006Z"
                fill="white"
              />
              <path
                id="Vector_268"
                d="M487.55 213.006H475.727V217.832H487.55V213.006Z"
                fill="white"
              />
              <path
                id="Vector_269"
                d="M472.43 221.196H460.606V226.022H472.43V221.196Z"
                fill="white"
              />
              <path
                id="Vector_270"
                d="M487.55 221.196H475.727V226.022H487.55V221.196Z"
                fill="white"
              />
              <path
                id="Vector_271"
                d="M472.43 229.394H460.606V234.22H472.43V229.394Z"
                fill="white"
              />
              <path
                id="Vector_272"
                d="M487.55 229.394H475.727V234.22H487.55V229.394Z"
                fill="white"
              />
              <path
                id="Vector_273"
                d="M472.43 237.584H460.606V242.41H472.43V237.584Z"
                fill="white"
              />
              <path
                id="Vector_274"
                d="M487.55 237.584H475.727V242.41H487.55V237.584Z"
                fill="white"
              />
              <path
                id="Vector_275"
                d="M524.358 125.202H493.898V261.707H524.358V125.202Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_276"
                d="M511.598 242.41H521.306V237.584H511.598V242.41Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_277"
                d="M499.177 242.41H508.885V237.584H499.177V242.41Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_278"
                d="M511.598 234.212H521.306V229.386H511.598V234.212Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_279"
                d="M499.177 234.212H508.885V229.386H499.177V234.212Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_280"
                d="M511.598 226.022H521.306V221.196H511.598V226.022Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_281"
                d="M499.177 226.022H508.885V221.196H499.177V226.022Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_282"
                d="M511.598 217.832H521.306V213.006H511.598V217.832Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_283"
                d="M499.177 217.832H508.885V213.006H499.177V217.832Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_284"
                d="M511.598 209.642H521.306V204.816H511.598V209.642Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_285"
                d="M499.177 209.642H508.885V204.816H499.177V209.642Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_286"
                d="M511.598 201.444H521.306V196.618H511.598V201.444Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_287"
                d="M499.177 201.444H508.885V196.618H499.177V201.444Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_288"
                d="M511.598 193.246H521.306V188.42H511.598V193.246Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_289"
                d="M499.177 193.246H508.885V188.42H499.177V193.246Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_290"
                d="M511.598 185.056H521.306V180.23H511.598V185.056Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_291"
                d="M499.177 185.056H508.885V180.23H499.177V185.056Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_292"
                d="M511.598 176.858H521.306V172.032H511.598V176.858Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_293"
                d="M499.177 176.858H508.885V172.032H499.177V176.858Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_294"
                d="M511.598 168.676H521.306V163.85H511.598V168.676Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_295"
                d="M499.177 168.676H508.885V163.85H499.177V168.676Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_296"
                d="M511.598 160.478H521.306V155.652H511.598V160.478Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_297"
                d="M499.177 160.478H508.885V155.652H499.177V160.478Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_298"
                d="M511.598 152.287H521.306V147.461H511.598V152.287Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_299"
                d="M499.177 152.287H508.885V147.461H499.177V152.287Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_300"
                d="M511.598 144.09H521.306V139.263H511.598V144.09Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_301"
                d="M499.177 144.09H508.885V139.263H499.177V144.09Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_302"
                d="M511.598 135.892H521.306V131.065H511.598V135.892Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_303"
                d="M499.177 135.892H508.885V131.065H499.177V135.892Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_304"
                d="M186.579 153.121H142.156V261.707H186.579V153.121Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_305"
                d="M157 162.521H149.142V169.171H157V162.521Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_306"
                d="M157 176.732H149.142V183.382H157V176.732Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_307"
                d="M157 190.943H149.142V197.592H157V190.943Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_308"
                d="M157 205.146H149.142V211.796H157V205.146Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_309"
                d="M157 219.357H149.142V226.006H157V219.357Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_310"
                d="M157 233.568H149.142V240.217H157V233.568Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_311"
                d="M157 247.779H149.142V254.428H157V247.779Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_312"
                d="M168.305 162.521H160.446V169.171H168.305V162.521Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_313"
                d="M168.305 176.732H160.446V183.382H168.305V176.732Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_314"
                d="M168.305 190.943H160.446V197.592H168.305V190.943Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_315"
                d="M168.305 205.146H160.446V211.796H168.305V205.146Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_316"
                d="M168.305 219.357H160.446V226.006H168.305V219.357Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_317"
                d="M168.305 233.568H160.446V240.217H168.305V233.568Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_318"
                d="M168.305 247.779H160.446V254.428H168.305V247.779Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_319"
                d="M179.586 162.521H171.728V169.171H179.586V162.521Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_320"
                d="M179.586 176.732H171.728V183.382H179.586V176.732Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_321"
                d="M179.586 190.943H171.728V197.592H179.586V190.943Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_322"
                d="M179.586 205.146H171.728V211.796H179.586V205.146Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_323"
                d="M179.586 219.357H171.728V226.006H179.586V219.357Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_324"
                d="M179.586 233.568H171.728V240.217H179.586V233.568Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_325"
                d="M179.586 247.779H171.728V254.428H179.586V247.779Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_326"
                d="M186.572 141.81H157.001V153.121H186.572V141.81Z"
                fill="#DBDBDB"
              />
              <path
                id="Vector_327"
                d="M186.571 134.807H167.825V141.81H186.571V134.807Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_328"
                d="M217.739 153.121H186.571V261.707H217.739V153.121Z"
                fill="#A6A6A6"
              />
              <path
                id="Vector_329"
                d="M208.149 253.367H214.545V246.718H208.149V253.367Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_330"
                d="M208.149 239.164H214.545V232.514H208.149V239.164Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_331"
                d="M208.149 224.953H214.545V218.304H208.149V224.953Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_332"
                d="M208.149 210.742H214.545V204.093H208.149V210.742Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_333"
                d="M208.149 196.531H214.545V189.882H208.149V196.531Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_334"
                d="M208.149 182.321H214.545V175.671H208.149V182.321Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_335"
                d="M208.149 168.118H214.545V161.468H208.149V168.118Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_336"
                d="M198.946 253.367H205.342V246.718H198.946V253.367Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_337"
                d="M198.946 239.164H205.342V232.514H198.946V239.164Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_338"
                d="M198.946 224.953H205.342V218.304H198.946V224.953Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_339"
                d="M198.946 210.742H205.342V204.093H198.946V210.742Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_340"
                d="M198.946 196.531H205.342V189.882H198.946V196.531Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_341"
                d="M198.946 182.321H205.342V175.671H198.946V182.321Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_342"
                d="M198.946 168.118H205.342V161.468H198.946V168.118Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_343"
                d="M189.766 253.367H196.161V246.718H189.766V253.367Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_344"
                d="M189.766 239.164H196.161V232.514H189.766V239.164Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_345"
                d="M189.766 224.953H196.161V218.304H189.766V224.953Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_346"
                d="M189.766 210.742H196.161V204.093H189.766V210.742Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_347"
                d="M189.766 196.531H196.161V189.882H189.766V196.531Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_348"
                d="M189.766 182.321H196.161V175.671H189.766V182.321Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_349"
                d="M189.766 168.118H196.161V161.468H189.766V168.118Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_350"
                d="M213.019 141.81H186.571V153.121H213.019V141.81Z"
                fill="#C7C7C7"
              />
              <path
                id="Vector_351"
                d="M200.904 134.807H186.571V141.81H200.904V134.807Z"
                fill="#DBDBDB"
              />
            </g>
            <g id="freepik--Floor--inject-19">
              <path
                id="Vector_352"
                d="M8.97363 293.972C174.276 293.485 359.709 293.485 525.027 293.972C359.725 294.451 174.292 294.451 8.97363 293.972Z"
                fill="#263238"
              />
              <path
                id="Vector_353"
                d="M8.97363 261.707C174.276 261.227 359.709 261.219 525.027 261.707C359.725 262.194 174.292 262.186 8.97363 261.707Z"
                fill="#263238"
              />
            </g>
            <g id="freepik--Trees--inject-19">
              <path
                id="Vector_354"
                d="M27.8531 226.289C27.8531 226.289 37.4426 247.566 21.7879 247.59C6.13323 247.614 16.2812 225.582 16.2812 225.582C16.2812 225.582 12.6547 224.01 16.8398 212.11C21.0248 200.21 22.9128 200.226 24.6592 200.226C26.8619 200.226 28.923 205.366 27.4283 213.258C27.4126 213.258 32.9271 223.098 27.8531 226.289Z"
                fill="#37474F"
              />
              <path
                id="Vector_355"
                d="M20.4189 261.707L21.8979 229.638L23.4397 261.707H20.4189Z"
                fill="#263238"
              />
              <path
                id="Vector_356"
                d="M21.292 243.078L26.9796 236.437L22.5192 243.959L21.292 243.078Z"
                fill="#263238"
              />
              <path
                id="Vector_357"
                d="M219.454 228.577C219.454 228.577 214.994 226.816 211.454 232.978C207.827 239.266 212.39 243.456 216.001 240.972C216.001 240.972 218.84 246.914 224.504 245.491C230.168 244.069 231.089 239.541 231.089 239.541C231.089 239.541 236.123 239.887 236.257 236.138C236.391 232.389 232.709 229.064 232.709 229.064C232.709 229.064 232.489 219.718 226.416 219.797C220.343 219.876 219.454 228.577 219.454 228.577Z"
                fill="#455A64"
              />
              <path
                id="Vector_358"
                d="M223.639 261.691L224.882 233.882L226.188 261.691H223.639Z"
                fill="#263238"
              />
              <path
                id="Vector_359"
                d="M224.52 244.336L220.595 236.539L225.157 243.118L224.52 244.336Z"
                fill="#263238"
              />
              <path
                id="Vector_360"
                d="M144.437 228.577C144.437 228.577 139.969 226.816 136.429 232.978C132.81 239.266 137.365 243.456 140.976 240.972C140.976 240.972 143.816 246.914 149.487 245.491C155.159 244.069 156.072 239.541 156.072 239.541C156.072 239.541 161.099 239.887 161.24 236.138C161.382 232.389 157.684 229.064 157.684 229.064C157.684 229.064 157.464 219.718 151.391 219.797C145.318 219.876 144.437 228.577 144.437 228.577Z"
                fill="#455A64"
              />
              <path
                id="Vector_361"
                d="M148.614 261.691L149.865 233.882L151.171 261.691H148.614Z"
                fill="#263238"
              />
              <path
                id="Vector_362"
                d="M149.496 244.336L145.578 236.539L150.133 243.118L149.496 244.336Z"
                fill="#263238"
              />
              <path
                id="Vector_363"
                d="M518.048 226.148C518.048 226.148 527.638 247.425 511.983 247.441C496.329 247.456 506.477 225.433 506.477 225.433C506.477 225.433 502.85 223.861 507.043 211.961C511.236 200.061 513.085 200.092 514.799 200.092C517.01 200.092 519.063 205.225 517.569 213.124C517.6 213.116 523.122 222.957 518.048 226.148Z"
                fill="#37474F"
              />
              <path
                id="Vector_364"
                d="M510.614 261.565L512.085 229.488L513.627 261.557L510.614 261.565Z"
                fill="#263238"
              />
              <path
                id="Vector_365"
                d="M511.488 242.937L517.168 236.295L512.715 243.817L511.488 242.937Z"
                fill="#263238"
              />
              <path
                id="Vector_366"
                d="M457.948 226.148C457.948 226.148 467.537 247.425 451.883 247.441C436.228 247.456 446.376 225.433 446.376 225.433C446.376 225.433 442.749 223.861 446.942 211.961C451.135 200.061 452.992 200.092 454.73 200.092C456.941 200.092 459.002 205.225 457.499 213.124C457.499 213.116 463.022 222.957 457.948 226.148Z"
                fill="#37474F"
              />
              <path
                id="Vector_367"
                d="M450.514 261.565L451.985 229.488L453.534 261.557L450.514 261.565Z"
                fill="#263238"
              />
              <path
                id="Vector_368"
                d="M451.387 242.937L457.066 236.295L452.614 243.817L451.387 242.937Z"
                fill="#263238"
              />
              <path
                id="Vector_369"
                d="M197.923 230.667C197.923 230.667 189.568 249.327 203.28 249.311C216.992 249.296 208.086 230.023 208.086 230.023C208.086 230.023 211.233 228.624 207.559 218.233C203.886 207.842 202.226 207.834 200.692 207.842C198.765 207.842 196.971 212.346 198.332 219.255C198.293 219.247 193.478 227.885 197.923 230.667Z"
                fill="#37474F"
              />
              <path
                id="Vector_370"
                d="M204.506 261.675L203.153 233.583L201.863 261.675H204.506Z"
                fill="#263238"
              />
              <path
                id="Vector_371"
                d="M203.704 245.366L198.717 239.549L202.634 246.136L203.704 245.366Z"
                fill="#263238"
              />
              <path
                id="Vector_372"
                d="M321.579 230.667C321.579 230.667 313.225 249.327 326.936 249.311C340.648 249.296 331.735 230.023 331.735 230.023C331.735 230.023 334.882 228.624 331.216 218.233C327.55 207.842 325.882 207.834 324.348 207.842C322.421 207.842 320.627 212.346 321.988 219.255C321.949 219.247 317.134 227.885 321.579 230.667Z"
                fill="#37474F"
              />
              <path
                id="Vector_373"
                d="M328.163 261.675L326.81 233.583L325.52 261.675H328.163Z"
                fill="#263238"
              />
              <path
                id="Vector_374"
                d="M327.361 245.366L322.373 239.549L326.291 246.136L327.361 245.366Z"
                fill="#263238"
              />
              <path
                id="Vector_375"
                d="M466.538 228.467C466.538 228.467 462.07 226.698 458.53 232.86C454.903 239.188 459.466 243.338 463.077 240.862C463.077 240.862 465.917 246.804 471.588 245.381C477.26 243.959 478.165 239.423 478.165 239.423C478.165 239.423 483.2 239.777 483.333 236.02C483.467 232.263 479.786 228.946 479.786 228.946C479.786 228.946 479.565 219.601 473.492 219.679C467.419 219.758 466.538 228.467 466.538 228.467Z"
                fill="#455A64"
              />
              <path
                id="Vector_376"
                d="M470.715 261.581L471.958 233.772L473.264 261.573L470.715 261.581Z"
                fill="#263238"
              />
              <path
                id="Vector_377"
                d="M471.581 244.187L467.671 236.421L472.352 242.992L471.581 244.187Z"
                fill="#263238"
              />
            </g>
            <g id="freepik--Birds--inject-19">
              <path
                id="Vector_378"
                d="M343.889 104.9C343.278 104.594 342.648 104.332 342.001 104.114C341.341 103.864 340.65 103.705 339.948 103.642C339.733 103.626 339.517 103.65 339.311 103.713C339.243 103.738 339.178 103.767 339.114 103.799L338.988 103.893C338.909 103.948 338.846 104.011 338.768 104.074C338.491 104.321 338.228 104.583 337.981 104.86C337.525 105.379 337.108 105.921 336.699 106.479L337.21 106.299C336.521 106.102 335.82 105.954 335.11 105.858C334.747 105.808 334.382 105.782 334.016 105.78C333.821 105.778 333.627 105.791 333.434 105.819C333.327 105.835 333.222 105.861 333.119 105.898C333.01 105.938 332.905 105.988 332.805 106.047C332.491 106.266 332.213 106.531 331.979 106.833C331.751 107.116 331.554 107.407 331.357 107.706C330.986 108.304 330.66 108.929 330.382 109.576C330.838 109.034 331.271 108.492 331.735 108.004C331.963 107.745 332.191 107.493 332.435 107.265C332.656 107.043 332.904 106.85 333.174 106.692C333.428 106.609 333.696 106.582 333.961 106.613C334.292 106.635 334.62 106.68 334.944 106.747C335.605 106.865 336.274 107.03 336.919 107.203L337.242 107.289L337.43 107.022C337.808 106.487 338.217 105.953 338.626 105.45C338.821 105.197 339.032 104.955 339.255 104.727L339.421 104.569L339.491 104.507C339.606 104.46 339.729 104.436 339.853 104.436C340.503 104.435 341.151 104.498 341.788 104.624C342.52 104.64 343.22 104.782 343.889 104.9Z"
                fill="#263238"
              />
              <path
                id="Vector_379"
                d="M336.478 124.895C335.676 124.264 334.832 123.686 333.953 123.166C333.056 122.607 332.088 122.171 331.074 121.869C330.762 121.784 330.436 121.758 330.114 121.791C330.006 121.799 329.899 121.826 329.8 121.869L329.587 121.964C329.446 122.026 329.336 122.097 329.21 122.16C328.756 122.435 328.317 122.734 327.896 123.056C327.062 123.685 326.323 124.361 325.536 125.053L326.323 124.943C325.37 124.453 324.384 124.031 323.373 123.677C322.857 123.502 322.332 123.358 321.799 123.245C321.514 123.19 321.224 123.155 320.934 123.143C320.774 123.131 320.614 123.131 320.454 123.143C320.289 123.143 320.108 123.229 319.951 123.268C319.422 123.5 318.934 123.813 318.503 124.196C318.092 124.543 317.7 124.913 317.331 125.304C316.608 126.07 315.948 126.893 315.356 127.764C316.143 127.104 316.969 126.436 317.803 125.823C318.201 125.508 318.616 125.214 319.046 124.943C319.433 124.679 319.854 124.467 320.297 124.314C320.713 124.264 321.134 124.307 321.532 124.439C322.009 124.567 322.477 124.728 322.932 124.919C323.86 125.288 324.804 125.705 325.701 126.169L326.15 126.389L326.504 126.051C327.212 125.367 327.967 124.707 328.722 124.07C329.086 123.753 329.466 123.457 329.863 123.182C329.957 123.127 330.051 123.056 330.146 123.009L330.272 122.938C330.272 122.938 330.272 122.938 330.319 122.938C330.501 122.906 330.687 122.906 330.87 122.938C331.826 123.125 332.762 123.407 333.662 123.779C334.598 124.125 335.534 124.518 336.478 124.895Z"
                fill="#263238"
              />
              <path
                id="Vector_380"
                d="M181.875 44.3854C181.327 43.9787 180.752 43.611 180.152 43.285C179.54 42.9369 178.884 42.6726 178.201 42.499C177.988 42.4614 177.77 42.4614 177.556 42.499C177.487 42.5149 177.418 42.536 177.352 42.5619L177.21 42.6326C177.126 42.6751 177.045 42.7223 176.966 42.7741C176.669 42.9646 176.382 43.1719 176.109 43.395C175.566 43.8352 175.07 44.2989 174.575 44.7784L175.102 44.6841C174.455 44.3828 173.79 44.1204 173.112 43.8981C172.765 43.8038 172.411 43.7094 172.042 43.6466C171.85 43.6119 171.655 43.5935 171.46 43.5915C171.352 43.5842 171.244 43.5842 171.137 43.5915C171.025 43.6146 170.914 43.6462 170.807 43.6859C170.458 43.8531 170.137 44.0731 169.855 44.3382C169.591 44.5862 169.342 44.8486 169.107 45.1242C168.641 45.6518 168.215 46.2141 167.833 46.8063C168.368 46.3504 168.887 45.8867 169.406 45.4544C169.674 45.2421 169.949 45.0299 170.193 44.8491C170.435 44.6668 170.699 44.5162 170.98 44.4011C171.256 44.3597 171.538 44.3785 171.806 44.4561C172.126 44.535 172.441 44.6321 172.75 44.747C173.379 44.9749 174.016 45.2421 174.622 45.533L174.929 45.6666L175.157 45.4386C175.613 44.967 176.109 44.5033 176.596 44.0631C176.831 43.8454 177.078 43.6407 177.336 43.4501C177.399 43.4501 177.462 43.3557 177.525 43.3243L177.603 43.2771C177.603 43.2771 177.603 43.2771 177.643 43.2771C177.762 43.2556 177.885 43.2556 178.005 43.2771C178.646 43.386 179.275 43.5544 179.885 43.7802C180.601 43.9138 181.254 44.1575 181.875 44.3854Z"
                fill="#263238"
              />
              <path
                id="Vector_381"
                d="M204.468 41.6423C203.889 40.7981 203.253 39.9945 202.564 39.2371C201.875 38.4373 201.082 37.7341 200.204 37.1463C199.933 36.9728 199.631 36.8503 199.315 36.7848C199.209 36.7685 199.1 36.7685 198.993 36.7848C198.914 36.7801 198.836 36.7801 198.757 36.7848L198.34 36.8712C197.823 36.9924 197.313 37.1447 196.814 37.3271C195.838 37.6808 194.91 38.1131 193.966 38.5376L194.753 38.6633C193.985 37.9172 193.168 37.2239 192.306 36.5883C191.866 36.2631 191.403 35.9689 190.922 35.708C190.668 35.568 190.405 35.4446 190.135 35.3385C189.98 35.2891 189.823 35.2497 189.663 35.2206C189.49 35.2084 189.317 35.2084 189.144 35.2206C188.573 35.2855 188.015 35.4393 187.492 35.6765C186.988 35.8887 186.516 36.1324 186.044 36.3839C185.127 36.9048 184.251 37.4961 183.425 38.1524C184.4 37.7594 185.368 37.3664 186.335 37.0206C186.811 36.8376 187.297 36.6827 187.791 36.5568C188.239 36.414 188.705 36.3372 189.175 36.3289C189.585 36.3992 189.973 36.5633 190.308 36.8084C190.725 37.0727 191.125 37.3642 191.504 37.6808C192.291 38.3096 193.077 39.0013 193.777 39.693L194.139 40.0388L194.58 39.8187C195.461 39.3786 196.381 38.9699 197.286 38.5847C197.727 38.3908 198.178 38.2229 198.639 38.0817C198.745 38.0465 198.852 38.0177 198.961 37.9952H199.103H199.158C199.342 38.0211 199.52 38.0769 199.685 38.1603C200.539 38.6107 201.348 39.1424 202.1 39.748C202.895 40.3454 203.666 40.9977 204.468 41.6423Z"
                fill="#263238"
              />
              <path
                id="Vector_382"
                d="M366.167 119.991C365.588 119.147 364.952 118.343 364.264 117.586C363.577 116.784 362.783 116.08 361.904 115.495C361.634 115.317 361.332 115.194 361.015 115.133C360.908 115.121 360.799 115.121 360.692 115.133H360.464C360.307 115.133 360.181 115.188 360.039 115.212C359.525 115.338 359.018 115.493 358.521 115.676C357.538 116.029 356.609 116.462 355.665 116.886L356.452 117.012C355.686 116.263 354.869 115.57 354.005 114.937C353.563 114.612 353.101 114.315 352.621 114.049C352.368 113.908 352.105 113.787 351.834 113.687C351.683 113.635 351.528 113.595 351.37 113.569C351.197 113.557 351.024 113.557 350.851 113.569C350.277 113.632 349.717 113.786 349.191 114.025C348.697 114.231 348.216 114.467 347.751 114.732C346.831 115.251 345.953 115.839 345.124 116.493C346.107 116.108 347.067 115.707 348.043 115.361C348.522 115.188 349.01 115.023 349.49 114.897C349.94 114.762 350.405 114.686 350.875 114.67C351.284 114.747 351.673 114.91 352.015 115.149C352.429 115.418 352.825 115.712 353.203 116.029C353.99 116.65 354.776 117.35 355.477 118.041L355.838 118.387L356.279 118.167C357.16 117.727 358.08 117.318 358.985 116.933C359.426 116.738 359.878 116.568 360.338 116.422L360.661 116.344H360.802C360.802 116.344 360.802 116.344 360.857 116.344C361.042 116.366 361.22 116.422 361.384 116.509C362.242 116.972 363.051 117.52 363.799 118.144C364.594 118.694 365.373 119.346 366.167 119.991Z"
                fill="#263238"
              />
            </g>
            <g id="freepik--Lines--inject-19">
              <path
                id="Vector_383"
                d="M62.6469 165.956C53.1305 166.491 43.5916 166.491 34.0752 165.956C43.5916 165.422 53.1305 165.422 62.6469 165.956Z"
                fill="#263238"
              />
              <path
                id="Vector_384"
                d="M40.5964 175.349C30.7835 175.883 20.9487 175.883 11.1357 175.349C20.9485 174.806 30.7837 174.806 40.5964 175.349Z"
                fill="#263238"
              />
              <path
                id="Vector_385"
                d="M35.1532 169.517C23.7072 170.051 12.1668 170.051 0.712891 169.517C12.1668 168.974 23.7072 168.974 35.1532 169.517Z"
                fill="#263238"
              />
              <path
                id="Vector_386"
                d="M255.2 115.699C245.683 116.234 236.144 116.234 226.628 115.699C236.144 115.165 245.683 115.165 255.2 115.699Z"
                fill="#263238"
              />
              <path
                id="Vector_387"
                d="M213.451 153.962C203.635 154.496 193.798 154.496 183.982 153.962C193.798 153.427 203.635 153.427 213.451 153.962Z"
                fill="#263238"
              />
              <path
                id="Vector_388"
                d="M229.169 147.084C217.715 147.619 206.175 147.619 194.721 147.084C206.175 146.55 217.715 146.55 229.169 147.084Z"
                fill="#263238"
              />
              <g id="Group" opacity="0.8">
                <path
                  id="Vector_389"
                  opacity="0.8"
                  d="M9.16211 293.972L14.8261 292.95C14.8261 292.95 8.80024 286.772 12.4661 282.976C16.132 279.179 21.7488 282.536 21.7488 282.536C21.7488 282.536 20.9149 273.504 27.9005 271.618C34.8861 269.732 41.0457 283.235 41.0457 283.235C41.0457 283.235 42.0684 280.091 47.2918 281.309C52.5153 282.528 56.6374 289.657 56.6374 289.657L121.341 293.98"
                  fill="white"
                />
                <path
                  id="Vector_390"
                  opacity="0.8"
                  d="M9.16211 293.972L14.8182 292.911C13.5361 291.68 12.5142 290.205 11.8132 288.572C9.94091 284.744 12.5998 281.176 16.6826 281.05C18.493 281.054 20.2713 281.528 21.8432 282.425L21.6386 282.551C21.5464 281.188 21.6364 279.819 21.9061 278.48C22.913 272.451 29.1198 268.82 34.123 273.292C37.2697 275.925 39.4173 279.509 41.203 283.156H40.8726C41.2197 282.34 41.8634 281.686 42.6741 281.325C46.812 279.651 51.1308 282.488 53.7661 285.546C54.8825 286.748 55.8492 288.081 56.6453 289.515L121.341 293.956L56.6296 289.759C56.5509 289.759 56.5666 289.759 56.5273 289.696C55.6611 288.298 54.6684 286.983 53.5616 285.766C51.3982 283.353 48.5505 281.191 45.1678 281.207C43.5945 281.144 41.8166 281.789 41.2345 283.306L41.0772 283.675L40.9041 283.322C39.1341 279.745 36.9708 276.248 33.9106 273.599C30.6066 270.58 26.1541 271.186 23.684 274.88C22.3199 277.194 21.7096 279.875 21.9376 282.551V282.795L21.7252 282.677C20.1982 281.797 18.4692 281.325 16.7062 281.309C14.1496 281.309 11.349 283.243 11.412 285.986C11.4749 288.729 13.182 291.04 14.9048 292.997H14.8497L9.17784 293.988L9.16211 293.972Z"
                  fill="#263238"
                />
              </g>
            </g>
            <g id="freepik--Character--inject-19">
              <g id="Group_2" opacity="0.8">
                <path
                  id="Vector_391"
                  opacity="0.8"
                  d="M24.6357 293.972L30.2919 292.95C30.2919 292.95 24.266 286.772 27.9319 282.976C31.5977 279.179 37.2145 282.536 37.2145 282.536C37.2145 282.536 36.3492 273.504 43.3427 271.61C50.3361 269.716 56.48 283.227 56.48 283.227C56.48 283.227 57.5105 280.083 62.7261 281.302C67.9417 282.52 72.0717 289.649 72.0717 289.649L136.775 293.972"
                  fill="white"
                />
                <path
                  id="Vector_392"
                  opacity="0.8"
                  d="M24.6357 293.972L30.284 292.911C29.0068 291.676 27.9857 290.201 27.2789 288.572C25.4067 284.744 28.0656 281.176 32.1484 281.05C33.9537 281.055 35.7267 281.529 37.2932 282.425L37.0965 282.551C37.0043 281.188 37.0943 279.819 37.364 278.48C38.3631 272.451 44.5699 268.82 49.5731 273.292C52.7197 275.925 54.8752 279.509 56.6531 283.156H56.3305C56.6776 282.34 57.3213 281.686 58.132 281.325C62.2699 279.651 66.5808 282.488 69.2161 285.546C70.3325 286.748 71.2993 288.081 72.0953 289.515L136.791 293.956L72.0796 289.759C72.0009 289.759 72.0167 289.759 71.9852 289.696C71.1139 288.302 70.1215 286.987 69.0195 285.766C66.8561 283.353 64.0005 281.191 60.6257 281.207C59.0524 281.144 57.2745 281.789 56.6924 283.306L56.5429 283.675L56.3699 283.322C54.592 279.745 52.4365 276.248 49.3685 273.599C46.0645 270.58 41.612 271.186 39.1419 274.88C37.7756 277.194 37.1626 279.874 37.3876 282.551V282.795L37.1752 282.677C35.6497 281.793 33.9198 281.321 32.1563 281.309C29.5996 281.309 26.7991 283.243 26.862 285.986C26.9249 288.729 28.632 291.04 30.3627 292.997H30.2997L24.6357 293.988V293.972Z"
                  fill="#263238"
                />
              </g>
              <path
                id="Vector_393"
                d="M258.905 145.221C253.736 149.788 248.293 156.076 241.394 157.884C235.981 159.283 230.294 157.687 225.464 155.188C214.836 149.686 204.758 138.139 208.432 125.375C209.903 120.274 216.629 114.214 222.388 116.1C225.338 117.075 227.588 119.244 230.05 121.044C231.534 122.21 233.263 123.028 235.107 123.436C236.95 123.844 238.863 123.833 240.701 123.402C248.395 121.736 251.99 117.955 258.354 113.711C258.957 113.249 259.65 112.917 260.387 112.736C261.125 112.555 261.893 112.528 262.641 112.657C265.91 113.34 268.841 115.134 270.933 117.735C272.774 120.588 272.372 125.06 272.506 128.307C272.64 131.553 271.782 133.809 269.32 136.064C265.882 139.169 262.374 142.172 258.905 145.221Z"
                fill="#263238"
              />
              <path
                id="Vector_394"
                d="M256.907 147.909C261.375 143.445 265.749 138.894 270.162 134.375C270.162 134.375 270.162 134.296 270.162 134.327C266.425 137.943 262.642 141.504 258.952 145.166C255.263 148.829 251.872 152.704 247.939 155.966C239.144 163.299 228.138 157.035 222.482 149.096C222.223 148.735 221.696 149.183 221.947 149.536C227.139 156.351 235.816 162.49 244.69 158.686C249.512 156.61 253.249 151.564 256.907 147.909Z"
                fill="#263238"
              />
              <path
                id="Vector_395"
                d="M259.173 113.75C259.267 113.671 259.173 113.538 259.047 113.608C253.957 117.318 248.372 122.129 241.85 122.765C238.638 123.073 235.409 122.404 232.583 120.847C230.349 119.606 228.713 117.703 226.786 116.076C219.257 109.733 209.015 117.821 209.44 126.475C209.44 126.656 209.762 126.648 209.762 126.475C209.762 120.187 214.309 114.41 220.933 114.269C226.251 114.151 229.09 119.826 233.63 121.846C243.038 126.012 252.156 119.621 259.173 113.75Z"
                fill="#263238"
              />
              <path
                id="Vector_396"
                d="M225.307 176.724C225.307 176.724 224.732 171.293 224.764 170.169C224.795 169.045 230.538 165.17 230.538 165.17C230.538 165.17 231.891 154.795 232.977 152.453C233.276 151.8 243.07 150.881 244.344 152.044C245.618 153.207 251.888 177.149 251.888 177.149L225.307 176.724Z"
                fill="#FFC727"
              />
              <path
                id="Vector_397"
                opacity="0.5"
                d="M225.307 176.724C225.307 176.724 224.732 171.293 224.764 170.169C224.795 169.045 230.538 165.17 230.538 165.17C230.538 165.17 231.891 154.795 232.977 152.453C233.276 151.8 243.07 150.881 244.344 152.044C245.618 153.207 251.888 177.149 251.888 177.149L225.307 176.724Z"
                fill="white"
              />
              <path
                id="Vector_398"
                d="M261.596 149.081C267.102 160.085 276.023 172.716 278.902 174.413C282.592 176.559 301.126 176.386 302.14 176.253C304.65 175.907 304.453 158.89 301.755 159.141C297.656 159.527 286.423 161.114 285.345 160.438C284.267 159.762 276.283 153.529 267.928 146.377C262.193 141.433 258.181 142.258 261.596 149.081Z"
                fill="#D3766A"
              />
              <path
                id="Vector_399"
                d="M309.347 157.381C312.317 156.749 315.414 157.14 318.134 158.489C320.675 159.747 321.202 164.125 320.745 165.091C320.289 166.058 316.466 171.631 313.909 170.428C311.353 169.226 315.081 165.311 315.239 164.738C315.396 164.164 315.616 163.433 315.113 163.26C314.609 163.087 304.257 163.095 304.257 163.095L309.347 157.381Z"
                fill="#D3766A"
              />
              <path
                id="Vector_400"
                d="M309.802 157.294C309.944 157.357 318.078 157.892 320.619 159.149C323.16 160.407 323.679 164.785 323.223 165.752C322.767 166.718 318.951 172.291 316.395 171.089C313.838 169.886 317.567 165.972 317.724 165.398C317.881 164.824 318.102 164.101 317.59 163.92C317.079 163.74 306.742 163.755 306.742 163.755L309.802 157.294Z"
                fill="#D3766A"
              />
              <path
                id="Vector_401"
                d="M315.679 170.35C315.62 169.764 315.718 169.173 315.962 168.636C316.17 168.072 316.461 167.542 316.827 167.064C317.187 166.673 317.513 166.253 317.802 165.807C318.025 165.334 318.123 164.811 318.086 164.29C318.086 163.834 317.629 163.779 317.252 163.74C316.689 163.708 316.124 163.708 315.561 163.74L313.751 163.802C313.125 163.8 312.5 163.836 311.879 163.912C311.87 163.916 311.863 163.922 311.858 163.93C311.853 163.937 311.851 163.946 311.851 163.956C311.851 163.965 311.853 163.974 311.858 163.981C311.863 163.989 311.87 163.995 311.879 163.999C312.403 164.026 312.928 164.026 313.452 163.999C314.042 163.999 314.64 163.999 315.23 163.999C315.82 163.999 316.339 163.999 316.898 163.999C317.166 163.97 317.437 164.011 317.685 164.117C317.858 164.25 317.685 164.777 317.685 164.95C317.576 165.461 317.319 165.929 316.945 166.294C316.593 166.686 316.282 167.113 316.017 167.567C315.76 167.993 315.584 168.462 315.498 168.951C315.467 169.416 315.496 169.884 315.584 170.342C315.584 170.428 315.686 170.413 315.679 170.35Z"
                fill="#263238"
              />
              <path
                id="Vector_402"
                d="M310.983 157.09C311.14 157.09 319.219 156.045 321.956 156.776C324.694 157.507 326.079 161.688 325.819 162.726C325.559 163.763 322.924 169.988 320.179 169.304C317.433 168.621 320.32 164.062 320.352 163.472C320.383 162.883 320.47 162.12 319.935 162.042C319.4 161.963 309.268 164.03 309.268 164.03L310.983 157.09Z"
                fill="#D3766A"
              />
              <path
                id="Vector_403"
                d="M319.329 168.731C319.161 168.166 319.142 167.568 319.273 166.994C319.36 166.393 319.541 165.809 319.808 165.264C320.08 164.806 320.317 164.328 320.516 163.834C320.648 163.318 320.648 162.778 320.516 162.262C320.398 161.822 319.958 161.853 319.58 161.892C319.021 161.96 318.467 162.062 317.92 162.199C317.33 162.325 316.748 162.474 316.158 162.608C315.546 162.733 314.942 162.896 314.349 163.095C314.302 163.095 314.31 163.181 314.349 163.174C314.878 163.108 315.403 163.014 315.922 162.891L317.677 162.561C318.219 162.466 318.762 162.34 319.313 162.254C319.571 162.19 319.841 162.19 320.099 162.254C320.296 162.348 320.273 162.891 320.273 163.04C320.267 163.561 320.109 164.07 319.816 164.502C319.545 164.954 319.324 165.433 319.155 165.932C318.991 166.402 318.911 166.897 318.919 167.394C318.985 167.855 319.107 168.307 319.281 168.738C319.25 168.825 319.352 168.786 319.329 168.731Z"
                fill="#263238"
              />
              <path
                id="Vector_404"
                d="M310.585 183.755L314.38 185.679L327.959 158.947L324.164 157.023L310.585 183.755Z"
                fill="#263238"
              />
              <path
                id="Vector_405"
                d="M328.62 171.518L321.052 168.715L319.384 173.21L326.952 176.013L328.62 171.518Z"
                fill="#263238"
              />
              <path
                id="Vector_406"
                d="M331.16 171.437L326.24 169.615L323.9 175.923L328.82 177.746L331.16 171.437Z"
                fill="#263238"
              />
              <path
                id="Vector_407"
                d="M298.506 160.171C298.506 160.171 307.663 157.609 309.802 157.294C312.634 156.87 317.079 158.261 317.229 160.517C317.229 161.169 314.412 163.905 314.208 164.447C313.626 165.901 313.728 169.163 316.143 170.24C318.558 171.317 321.744 168.558 324.112 169.202C326.48 169.847 323.144 173.179 320.501 174.767C317.822 176.238 314.781 176.919 311.73 176.732C309.307 176.536 301.629 176.268 301.629 176.268L298.506 160.171Z"
                fill="#D3766A"
              />
              <path
                id="Vector_408"
                d="M319.888 169.925C318.66 170.193 317.221 170.609 316.017 170.098C314.814 169.587 314.357 168.4 314.263 167.143C314.103 165.871 314.435 164.586 315.191 163.551C315.955 162.655 316.96 161.998 318.086 161.657C319.465 161.246 320.896 161.037 322.334 161.036C322.397 161.036 322.381 160.933 322.334 160.933C321.005 160.933 316.938 160.69 314.829 163.378C314.066 164.44 313.737 165.753 313.909 167.049C313.88 167.658 314.004 168.266 314.271 168.815C314.537 169.364 314.938 169.838 315.435 170.193C316.788 170.979 318.542 170.397 319.958 170.02C320.006 169.972 319.951 169.91 319.888 169.925Z"
                fill="#263238"
              />
              <path
                id="Vector_409"
                d="M301.613 157.892L300.189 178.642C300.189 178.642 282.56 177.919 278.761 175.396C274.961 172.873 265.34 157.459 261.737 149.725C258.134 141.991 262.296 141.205 267.315 145.41C272.333 149.615 284.747 159.77 285.345 159.912C285.943 160.053 301.613 157.892 301.613 157.892Z"
                fill="#455A64"
              />
              <path
                id="Vector_410"
                d="M296.5 170.46C296.688 168.007 296.893 165.555 296.987 163.095C297.042 161.696 297.105 160.305 297.153 158.906C297.153 158.851 297.058 158.843 297.058 158.906C296.767 161.358 296.492 163.818 296.311 166.286C296.13 168.754 295.949 171.191 295.807 173.643C295.729 175.042 295.689 176.433 295.697 177.832H295.744C296.106 175.388 296.311 172.928 296.5 170.46Z"
                fill="#263238"
              />
              <path
                id="Vector_411"
                d="M300.299 176.575L300.157 178.642C300.157 178.642 282.52 177.919 278.729 175.404C274.937 172.889 265.308 157.459 261.705 149.725C259.07 144.074 260.588 142.124 263.554 143.138C272.774 151.36 290.19 167.001 300.299 176.575Z"
                fill="#37474F"
              />
              <path
                id="Vector_412"
                d="M236.532 182.745L277.777 183.421L274.544 171.081C274.544 171.081 277.966 167.937 276.267 161.735C275.283 158.104 270.713 151.25 267.842 147.799C260.832 139.381 254.744 143.186 252.801 145.347C245.382 153.616 236.532 182.745 236.532 182.745Z"
                fill="#455A64"
              />
              <path
                id="Vector_413"
                d="M254.563 143.885L263.759 144.097L264.129 144.341L254.224 144.113C254.335 144.034 254.413 143.956 254.563 143.885ZM251.353 147.194L267.637 147.564L267.433 147.32L251.526 146.958L251.353 147.194ZM249.41 150.283L270.123 150.763L269.95 150.527L249.552 150.063C249.5 150.133 249.453 150.207 249.41 150.283V150.283ZM247.766 153.427L272.294 153.993C272.239 153.915 272.192 153.828 272.137 153.742L247.876 153.191C247.837 153.239 247.797 153.317 247.766 153.396V153.427ZM246.271 156.571L274.214 157.208L274.08 156.98L246.381 156.343L246.271 156.571ZM244.902 159.715L275.779 160.423C275.779 160.344 275.716 160.265 275.685 160.179L245.005 159.479L244.902 159.715ZM243.612 162.82L276.652 163.606C276.652 163.535 276.652 163.457 276.652 163.378L243.754 162.592C243.667 162.576 243.636 162.655 243.612 162.726V162.82ZM242.377 165.964L276.621 166.75C276.621 166.671 276.621 166.593 276.621 166.514L242.44 165.728L242.377 165.964ZM241.205 169.108L275.551 169.894L275.677 169.666L241.292 168.88L241.205 169.108ZM240.08 172.252L275.008 173.038L274.945 172.802L240.167 172.016C240.127 171.922 240.112 172 240.08 172.079V172.252ZM238.987 175.396L275.834 176.245L275.771 176.009L239.073 174.94C239.05 175.026 239.021 175.11 238.987 175.192V175.396ZM237.948 178.54L276.668 179.428L276.605 179.184L238.058 178.304L237.948 178.54ZM236.941 181.684L277.494 182.611L277.431 182.368L237.012 181.228C236.981 181.283 236.965 181.369 236.941 181.44V181.684Z"
                fill="white"
              />
              <path
                id="Vector_414"
                d="M263.507 170.358C265.269 170.199 267.042 170.17 268.809 170.271C269.69 170.334 270.555 170.436 271.428 170.554C271.861 170.617 272.302 170.664 272.734 170.703C273.189 170.762 273.649 170.762 274.103 170.703C274.15 170.703 274.158 170.758 274.103 170.766C273.681 170.868 273.253 170.939 272.821 170.979C272.402 171.006 271.981 171.006 271.562 170.979C270.665 170.924 269.776 170.829 268.887 170.758C267.094 170.633 265.3 170.507 263.499 170.507C263.483 170.501 263.47 170.49 263.461 170.476C263.452 170.462 263.447 170.446 263.448 170.429C263.449 170.413 263.455 170.397 263.466 170.384C263.476 170.371 263.491 170.362 263.507 170.358V170.358Z"
                fill="#263238"
              />
              <path
                id="Vector_415"
                d="M259.495 172.668C260.9 172.262 262.326 171.934 263.767 171.686C264.483 171.56 265.206 171.482 265.938 171.419L266.976 171.348C267.362 171.348 267.763 171.348 268.133 171.348C268.172 171.348 268.188 171.403 268.133 171.403C267.779 171.442 267.417 171.537 267.063 171.592L265.985 171.757L263.822 172.103C262.382 172.315 260.943 172.535 259.511 172.794C259.44 172.802 259.424 172.692 259.495 172.668Z"
                fill="#263238"
              />
              <path
                id="Vector_416"
                d="M257.662 144.286C257.875 145.025 261.674 149.686 265.081 149.356C266.19 149.246 265.867 143.178 265.867 143.178L265.946 142.73L267 136.426L259.385 132.056L258.284 131.482C258.284 131.482 258.103 133.243 257.89 135.412V135.726C257.89 135.852 257.89 135.97 257.851 136.08C257.812 136.41 257.78 136.74 257.749 137.078C257.717 137.416 257.71 137.574 257.694 137.864C257.678 138.155 257.694 138.391 257.639 138.65C257.519 140.527 257.527 142.41 257.662 144.286V144.286Z"
                fill="#D3766A"
              />
              <path
                id="Vector_417"
                d="M257.922 135.404C258.645 137.136 259.737 138.691 261.121 139.96C262.505 141.228 264.149 142.182 265.938 142.753L267 136.426L259.385 132.056L258.284 131.482C258.284 131.482 258.134 133.219 257.922 135.404Z"
                fill="#263238"
              />
              <path
                id="Vector_418"
                d="M275.134 124.998C278.139 135.899 271.988 138.925 269.628 139.57C267.496 140.159 260.148 141.881 256.034 131.348C251.92 120.816 255.987 115.99 260.817 114.418C265.647 112.846 272.129 114.104 275.134 124.998Z"
                fill="#D3766A"
              />
              <path
                id="Vector_419"
                d="M273.08 123.543C272.813 123.543 272.561 123.543 272.294 123.543C272.025 123.586 271.749 123.542 271.507 123.418C271.438 123.363 271.39 123.287 271.368 123.202C271.347 123.117 271.354 123.027 271.389 122.946C271.483 122.795 271.616 122.671 271.773 122.588C271.931 122.505 272.108 122.466 272.286 122.475C272.65 122.44 273.014 122.541 273.309 122.757C273.383 122.809 273.439 122.883 273.469 122.968C273.499 123.053 273.501 123.145 273.476 123.232C273.451 123.319 273.399 123.395 273.328 123.451C273.257 123.507 273.171 123.539 273.08 123.543V123.543Z"
                fill="#263238"
              />
              <path
                id="Vector_420"
                d="M265.426 125.092C265.678 124.998 265.891 124.872 266.134 124.754C266.398 124.667 266.624 124.496 266.78 124.267C266.816 124.185 266.825 124.093 266.803 124.007C266.782 123.92 266.732 123.842 266.662 123.787C266.507 123.698 266.332 123.651 266.154 123.651C265.976 123.651 265.801 123.698 265.647 123.787C265.302 123.923 265.021 124.184 264.86 124.518C264.819 124.598 264.805 124.688 264.818 124.776C264.832 124.864 264.873 124.946 264.936 125.009C264.999 125.073 265.08 125.115 265.168 125.13C265.256 125.145 265.346 125.131 265.426 125.092V125.092Z"
                fill="#263238"
              />
              <path
                id="Vector_421"
                d="M267.968 127.662C267.968 127.662 267.913 127.717 267.928 127.749C268.157 128.48 268.29 129.321 267.692 129.792C267.692 129.792 267.692 129.847 267.692 129.831C268.495 129.493 268.298 128.322 267.968 127.662Z"
                fill="#263238"
              />
              <path
                id="Vector_422"
                d="M267.087 127.073C265.867 127.308 266.434 129.729 267.566 129.509C268.699 129.289 268.109 126.868 267.087 127.073Z"
                fill="#263238"
              />
              <path
                id="Vector_423"
                d="M266.638 127.308C266.465 127.497 266.315 127.788 266.064 127.874C265.812 127.961 265.489 127.772 265.277 127.576C265.277 127.576 265.23 127.576 265.277 127.576C265.379 128.047 265.67 128.48 266.181 128.432C266.693 128.385 266.882 127.898 266.889 127.411C266.819 127.348 266.716 127.238 266.638 127.308Z"
                fill="#263238"
              />
              <path
                id="Vector_424"
                d="M272.098 126.53C272.098 126.53 272.161 126.53 272.168 126.577C272.318 127.363 272.609 128.149 273.348 128.275V128.314C272.507 128.385 272.113 127.269 272.098 126.53Z"
                fill="#263238"
              />
              <path
                id="Vector_425"
                d="M272.585 125.587C273.773 125.225 274.418 127.623 273.325 127.945C272.231 128.267 271.594 125.894 272.585 125.587Z"
                fill="#263238"
              />
              <path
                id="Vector_426"
                d="M273.135 125.611C273.356 125.689 273.608 125.87 273.836 125.823C274.064 125.776 274.229 125.461 274.331 125.17C274.331 125.17 274.331 125.17 274.371 125.17C274.47 125.37 274.494 125.599 274.439 125.815C274.384 126.031 274.254 126.221 274.072 126.349C273.686 126.538 273.285 126.224 273.057 125.791C273.01 125.729 273.041 125.587 273.135 125.611Z"
                fill="#263238"
              />
              <path
                id="Vector_427"
                d="M269.36 133.832C269.553 134.022 269.806 134.139 270.076 134.162C270.36 134.104 270.628 133.986 270.863 133.816C270.863 133.816 270.918 133.816 270.902 133.816C270.824 133.986 270.7 134.131 270.544 134.235C270.389 134.339 270.208 134.398 270.021 134.406C269.858 134.4 269.701 134.345 269.571 134.246C269.442 134.147 269.346 134.011 269.297 133.856C269.242 133.84 269.297 133.816 269.36 133.832Z"
                fill="#263238"
              />
              <path
                id="Vector_428"
                d="M271.783 130.358C271.995 130.872 272.181 131.397 272.341 131.93C272.341 131.985 272.239 132.04 272.058 132.095C271.627 132.29 271.151 132.363 270.682 132.305C270.213 132.246 269.769 132.06 269.399 131.765C269.352 131.726 269.399 131.655 269.462 131.671C270.247 131.961 271.104 131.994 271.909 131.765C271.909 131.608 271.122 129.942 271.193 129.918C271.61 129.858 272.034 129.858 272.451 129.918C271.617 127.646 270.43 125.532 269.635 123.253C269.634 123.237 269.637 123.22 269.645 123.206C269.653 123.193 269.665 123.181 269.68 123.174C269.695 123.168 269.711 123.165 269.727 123.168C269.743 123.171 269.757 123.178 269.769 123.19C271.113 125.431 272.231 127.801 273.104 130.264C273.199 130.523 272.019 130.397 271.783 130.358Z"
                fill="#263238"
              />
              <path
                id="Vector_429"
                d="M271.917 131.891C271.738 132.397 271.431 132.849 271.028 133.203C270.804 133.388 270.53 133.5 270.241 133.526C269.604 133.526 269.407 133.023 269.368 132.527C269.337 132.266 269.337 132.003 269.368 131.741C270.18 132.063 271.073 132.115 271.917 131.891V131.891Z"
                fill="#263238"
              />
              <path
                id="Vector_430"
                d="M271.028 133.203C270.805 133.388 270.53 133.5 270.241 133.526C269.604 133.526 269.407 133.023 269.368 132.527C269.681 132.44 270.013 132.459 270.314 132.582C270.614 132.704 270.866 132.923 271.028 133.203Z"
                fill="#FF9BBC"
              />
              <path
                id="Vector_431"
                d="M256.529 132.614C257.169 132.114 257.668 131.458 257.98 130.709C258.291 129.96 258.404 129.143 258.307 128.338C260.075 127.074 261.473 125.362 262.359 123.378C262.359 123.622 262.146 125.391 262.02 126.287C268.809 123.481 269.887 117.641 269.887 117.641C271.499 118.596 272.876 119.902 273.915 121.461C273.915 121.461 273.049 117.122 270.202 114.693C269.264 113.832 268.114 113.237 266.869 112.971C265.624 112.704 264.33 112.775 263.122 113.176C261.287 113.125 259.473 113.568 257.868 114.458C256.264 115.349 254.93 116.654 254.004 118.238C250.48 124.18 256.529 132.614 256.529 132.614Z"
                fill="#263238"
              />
              <path
                id="Vector_432"
                d="M267.149 123.984C266.145 124.845 265.018 125.552 263.806 126.082C263.806 126.082 263.806 126.082 263.806 126.082C265.678 125.12 267.244 123.656 268.329 121.854C268.787 121.084 269.147 120.26 269.399 119.401C269.713 118.471 269.839 117.488 269.769 116.509C269.769 116.438 269.871 116.43 269.879 116.509C270.044 117.469 270.044 118.449 269.879 119.409C269.688 120.356 269.322 121.26 268.801 122.074C268.338 122.795 267.774 123.446 267.125 124.007L267.149 123.984Z"
                fill="#263238"
              />
              <path
                id="Vector_433"
                d="M253.831 132.496L253.344 132.362C253.407 132.134 253.973 130.154 255.019 129.745C256.066 129.336 262.681 128.558 262.965 128.527L263.02 129.022C261.108 129.25 255.94 129.91 255.2 130.209C254.461 130.507 253.973 131.93 253.831 132.496Z"
                fill="#A6A6A6"
              />
              <path
                id="Vector_434"
                d="M269.886 128.016L269.493 127.709C269.949 127.128 271.066 126.224 272.191 126.986L271.908 127.395C270.933 126.711 269.934 127.969 269.886 128.016Z"
                fill="#A6A6A6"
              />
              <g id="Group_3" opacity="0.9">
                <path
                  id="Vector_435"
                  opacity="0.9"
                  d="M267.668 132.347C267.375 132.449 267.072 132.518 266.764 132.551C266.067 132.62 265.365 132.493 264.737 132.183C264.11 131.873 263.582 131.393 263.214 130.798C262.846 130.203 262.653 129.516 262.656 128.817C262.66 128.117 262.86 127.433 263.234 126.842C263.608 126.25 264.141 125.776 264.772 125.472C265.402 125.169 266.106 125.048 266.802 125.125C267.498 125.201 268.158 125.472 268.708 125.905C269.257 126.338 269.674 126.917 269.91 127.576C270.048 127.949 270.122 128.342 270.13 128.739C270.15 129.522 269.923 130.292 269.481 130.939C269.039 131.586 268.405 132.079 267.668 132.347Z"
                  fill="#37474F"
                />
                <g id="Group_4" opacity="0.1">
                  <path
                    id="Vector_436"
                    opacity="0.1"
                    d="M267.314 125.21L262.886 130.083C262.658 129.442 262.612 128.752 262.752 128.087L265.301 125.273C265.953 125.068 266.65 125.046 267.314 125.21V125.21Z"
                    fill="white"
                  />
                  <path
                    id="Vector_437"
                    opacity="0.1"
                    d="M269.486 126.735L264.64 132.103C264.429 131.984 264.229 131.847 264.042 131.694L269.061 126.192C269.22 126.359 269.362 126.541 269.486 126.735V126.735Z"
                    fill="white"
                  />
                  <path
                    id="Vector_438"
                    opacity="0.1"
                    d="M269.973 127.78L265.678 132.496H265.513L269.926 127.623L269.973 127.78Z"
                    fill="white"
                  />
                </g>
              </g>
              <g id="Group_5" opacity="0.9">
                <path
                  id="Vector_439"
                  opacity="0.9"
                  d="M275.378 130.649C275.297 130.656 275.216 130.656 275.134 130.649C273.711 130.79 272.279 129.462 271.87 127.552C271.653 126.648 271.73 125.698 272.09 124.84C272.227 124.468 272.457 124.136 272.757 123.876C273.057 123.615 273.417 123.435 273.806 123.351C274.194 123.267 274.597 123.283 274.978 123.396C275.359 123.509 275.705 123.717 275.984 123.999C276.657 124.629 277.116 125.454 277.298 126.357C277.746 128.425 276.873 130.334 275.378 130.649Z"
                  fill="#37474F"
                />
                <g id="Group_6" opacity="0.1">
                  <path
                    id="Vector_440"
                    opacity="0.1"
                    d="M277.29 126.373L273.695 130.303C273.268 130.045 272.901 129.699 272.617 129.289L276.661 124.825C276.962 125.299 277.175 125.823 277.29 126.373V126.373Z"
                    fill="white"
                  />
                  <path
                    id="Vector_441"
                    opacity="0.1"
                    d="M275.253 123.543L271.823 127.332C271.82 127.272 271.82 127.211 271.823 127.151L275.142 123.488L275.253 123.543Z"
                    fill="white"
                  />
                </g>
              </g>
              <path
                id="Vector_442"
                d="M256.773 135.137C256.953 135.159 257.136 135.159 257.316 135.137C257.495 135.138 257.674 135.109 257.843 135.051C258.064 134.99 258.269 134.88 258.441 134.728C258.58 134.613 258.702 134.478 258.803 134.327C258.948 134.115 259.052 133.878 259.11 133.628L257.945 130.767C257.945 130.767 254.877 127.749 253.461 128.904C252.045 130.059 254.814 134.791 256.773 135.137Z"
                fill="#D3766A"
              />
              <path
                id="Vector_443"
                d="M254.303 130.264C254.303 130.264 254.303 130.311 254.303 130.319C254.953 130.503 255.558 130.823 256.077 131.256C256.596 131.689 257.018 132.227 257.316 132.834C257.216 132.718 257.092 132.624 256.953 132.561C256.814 132.497 256.663 132.463 256.509 132.463C256.356 132.463 256.205 132.497 256.066 132.561C255.926 132.624 255.803 132.718 255.703 132.834C255.703 132.834 255.703 132.905 255.758 132.897C255.972 132.782 256.216 132.736 256.457 132.765C256.698 132.795 256.924 132.899 257.103 133.062C257.394 133.343 257.657 133.651 257.89 133.982C257.969 134.084 258.165 133.982 258.094 133.856C257.819 132.182 256.104 130.138 254.303 130.264Z"
                fill="#263238"
              />
              <path
                id="Vector_444"
                d="M251.707 146.51C245.414 152.798 229.791 176.96 234.322 181.621C238.853 186.282 266.339 180.662 273.765 177.432C275.968 176.473 266.914 162.356 264.325 162.71C262.186 163.009 251.164 166.97 250.873 166.333C250.582 165.697 252.447 160.462 255.389 151.116C258.819 140.356 254.484 143.728 251.707 146.51Z"
                fill="#D3766A"
              />
              <path
                id="Vector_445"
                d="M259.542 166.954C262.46 164.018 265.704 161.423 269.21 159.22C272.624 157.231 280.53 153.718 290.82 159.472C293.266 160.839 295.776 164.51 290.977 163.732C287.571 163.174 285.581 161.798 283.535 161.837C283.535 161.837 286.179 166.883 284.715 169.273C283.438 171.366 282.013 173.364 280.452 175.254C280.042 175.045 279.645 174.811 279.264 174.555C279.264 174.555 277.69 176.661 273.757 177.439L259.542 166.954Z"
                fill="#D3766A"
              />
              <path
                id="Vector_446"
                d="M272.774 157.837C274.804 158.222 279.068 159.118 282.356 161.075C285.983 163.244 292.37 168.4 290.734 171.057C289.538 173.006 286.927 171.246 286.927 171.246C286.927 171.246 289.121 173.934 287.65 175.459C286.321 176.842 284.378 175.364 284.378 175.364C284.378 175.364 285.424 177.227 283.882 178.312C282.026 179.617 280.13 175.514 277.109 175.215C276.44 175.144 272.774 157.837 272.774 157.837Z"
                fill="#D3766A"
              />
              <path
                id="Vector_447"
                d="M279.429 164.518C282.548 165.918 285.166 168.235 286.934 171.159C286.973 171.238 286.934 171.309 286.886 171.246C284.672 168.72 282.16 166.472 279.405 164.549C279.405 164.549 279.405 164.51 279.429 164.518Z"
                fill="#263238"
              />
              <path
                id="Vector_448"
                d="M277.336 168.228C280.29 169.906 282.736 172.35 284.416 175.302C284.416 175.38 284.416 175.451 284.369 175.388C282.286 172.75 279.911 170.356 277.289 168.251C277.289 168.251 277.321 168.22 277.336 168.228Z"
                fill="#263238"
              />
              <path
                id="Vector_449"
                d="M283.52 161.798C285.165 161.853 286.787 162.199 288.311 162.82C289.14 163.106 289.986 163.342 290.844 163.527C291.63 163.692 292.779 163.944 293.322 163.158C293.437 162.931 293.488 162.678 293.47 162.424C293.452 162.171 293.365 161.927 293.219 161.719C292.814 161.124 292.321 160.594 291.756 160.147C291.756 160.147 291.756 160.092 291.756 160.108C292.3 160.515 292.801 160.975 293.251 161.484C293.55 161.835 293.736 162.267 293.786 162.726C293.786 163.708 292.779 164.148 291.945 164.125C291.443 164.093 290.945 164.014 290.458 163.889C289.994 163.779 289.53 163.645 289.066 163.504C288.122 163.205 287.201 162.859 286.257 162.553C285.349 162.273 284.425 162.053 283.488 161.892C283.488 161.892 283.52 161.798 283.52 161.798Z"
                fill="#263238"
              />
              <path
                id="Vector_450"
                d="M288.727 166.553C287.09 164.87 285.346 163.295 283.504 161.837C283.504 161.837 283.504 161.782 283.504 161.79C285.512 163.003 287.362 164.46 289.011 166.129C289.903 167.029 290.606 168.098 291.08 169.273C291.292 169.742 291.314 170.276 291.141 170.761C290.968 171.246 290.613 171.646 290.151 171.875C289.677 172.113 289.137 172.185 288.617 172.079C287.997 171.912 287.417 171.624 286.91 171.23C286.91 171.23 286.91 171.167 286.91 171.183C287.325 171.477 287.801 171.673 288.303 171.755C288.805 171.836 289.319 171.802 289.805 171.655C290.21 171.485 290.533 171.163 290.702 170.758C290.833 170.267 290.783 169.746 290.56 169.289C290.104 168.282 289.485 167.358 288.727 166.553V166.553Z"
                fill="#263238"
              />
              <path
                id="Vector_451"
                d="M261.108 163.307L268.825 181.087C268.825 181.087 236.021 187.28 233.425 181.519C230.829 175.757 244.21 154.009 250.134 147.776C256.993 140.521 257.749 143.099 256.065 149.678C254.303 156.563 251.015 166.498 251.015 166.498L261.108 163.307Z"
                fill="#455A64"
              />
              <path
                id="Vector_452"
                d="M240.945 170.821C242.495 169.83 244.114 168.953 245.791 168.196C247.45 167.452 249.162 166.832 250.912 166.341C251.904 166.05 252.91 165.807 253.917 165.555C253.917 165.555 253.957 165.594 253.917 165.602C252.161 166.104 250.435 166.707 248.749 167.41C247.073 168.086 245.406 168.801 243.746 169.54C242.81 169.965 241.897 170.428 240.977 170.876L240.945 170.821Z"
                fill="#263238"
              />
              <path
                id="Vector_453"
                d="M261.021 163.252C260.856 163.291 251.416 166.003 251.117 166.129C251.157 165.995 253.603 158.599 253.635 158.528C253.808 158.23 254.697 156.603 254.901 156.17C254.673 156.555 253.989 157.483 253.894 157.664C254.075 157.176 254.846 154.693 255.082 153.907C255.082 153.907 255.082 153.907 255.043 153.907C253.823 156.17 250.252 166.939 250.268 166.931C250.283 166.923 260.88 163.441 261.069 163.37C261.084 163.364 261.097 163.352 261.103 163.336C261.11 163.321 261.11 163.303 261.104 163.288C261.098 163.272 261.085 163.259 261.07 163.253C261.055 163.246 261.037 163.246 261.021 163.252V163.252Z"
                fill="#263238"
              />
              <path
                id="Vector_454"
                d="M261.225 174.688C260.384 172.7 259.55 170.711 258.622 168.762C258.102 167.654 257.583 166.538 257.048 165.429C257.048 165.429 256.954 165.429 256.97 165.429C257.756 167.457 258.543 169.485 259.385 171.474C260.226 173.462 261.092 175.443 261.981 177.408C262.505 178.535 263.043 179.638 263.593 180.717H263.633C262.932 178.681 262.083 176.685 261.225 174.688Z"
                fill="#263238"
              />
              <path
                id="Vector_455"
                d="M269.242 181.377C268.927 180.827 268.549 180.033 268.219 179.499C268.132 179.357 268.022 179.381 268.093 179.499C268.321 179.994 268.51 180.552 268.738 181.071L267.354 181.291L265.78 181.574C264.742 181.747 263.696 181.912 262.634 182.069C260.536 182.383 258.412 182.645 256.262 182.855C251.996 183.337 247.708 183.599 243.415 183.641C242.219 183.641 241.055 183.641 239.82 183.562C238.636 183.529 237.454 183.432 236.28 183.272C236.28 183.272 236.241 183.319 236.28 183.327C237.288 183.575 238.314 183.746 239.348 183.838C240.434 183.924 241.519 183.987 242.605 184.01C244.768 184.058 246.939 184.01 249.095 183.869C253.382 183.625 257.662 183.193 261.91 182.596C263.106 182.423 264.27 182.242 265.481 182.045L267.275 181.739C267.94 181.675 268.598 181.554 269.242 181.377Z"
                fill="#263238"
              />
              <path
                id="Vector_456"
                d="M334.898 167.992C333.072 168.937 331.409 170.169 329.973 171.639C328.014 173.8 325.521 180.536 325.521 180.536C325.521 180.536 347.98 182.824 347.917 181.149C347.854 179.475 334.898 167.992 334.898 167.992Z"
                fill="#263238"
              />
              <path
                id="Vector_457"
                d="M181.159 173.054C181.159 173.054 178.106 153.718 176.824 152.846C175.542 151.973 157.574 151.871 156.371 152.649C155.167 153.427 154.577 161.9 153.555 162.081C152.532 162.262 146.404 162.977 144.429 163.708C142.455 164.439 142.368 170.971 142.368 170.971L181.159 173.054Z"
                fill="#FFC727"
              />
              <path
                id="Vector_458"
                opacity="0.5"
                d="M181.159 173.054C181.159 173.054 178.106 153.718 176.824 152.846C175.542 151.973 157.574 151.871 156.371 152.649C155.167 153.427 154.577 161.9 153.555 162.081C152.532 162.262 146.404 162.977 144.429 163.708C142.455 164.439 142.368 170.971 142.368 170.971L181.159 173.054Z"
                fill="white"
              />
              <path
                id="Vector_459"
                d="M466.986 265.11L369.856 265.754C369.856 265.754 375.048 205.728 421.776 209.76C468.504 213.792 466.986 265.11 466.986 265.11Z"
                fill="#FFC727"
              />
              <path
                id="Vector_460"
                opacity="0.5"
                d="M466.986 265.11L369.856 265.754C369.856 265.754 375.048 205.728 421.776 209.76C468.504 213.792 466.986 265.11 466.986 265.11Z"
                fill="black"
              />
              <path
                id="Vector_461"
                d="M176.266 265.047L79.4111 257.737C79.4111 257.737 89.5041 198.331 135.744 206.183C181.985 214.036 176.266 265.047 176.266 265.047Z"
                fill="#FFC727"
              />
              <path
                id="Vector_462"
                opacity="0.5"
                d="M176.266 265.047L79.4111 257.737C79.4111 257.737 89.5041 198.331 135.744 206.183C181.985 214.036 176.266 265.047 176.266 265.047Z"
                fill="black"
              />
              <path
                id="Vector_463"
                opacity="0.6"
                d="M391.293 175.443L393.354 176.622C393.354 176.622 380.334 177.825 377.463 177.502C374.592 177.18 323.639 145.63 322.931 145.324C322.223 145.017 289.065 132.496 289.065 132.496C289.065 132.496 334.495 146.951 337.43 148.012C340.364 149.073 391.293 175.443 391.293 175.443Z"
                fill="white"
              />
              <path
                id="Vector_464"
                d="M508.161 255.741C508.161 255.741 498.359 264.693 495.314 265.526C492.27 266.36 464.084 268.883 462.416 268.333C460.748 267.782 469.354 216.598 421.187 213.729C373.019 210.86 378.313 270.478 377.133 270.455C375.953 270.431 171.333 268.883 170.413 268.042C169.493 267.201 176.596 213.14 129.821 212.55C85.0361 211.984 87.5849 261.479 85.8149 261.534C84.0449 261.589 49.6912 257.47 46.8041 256.684C43.917 255.898 39.7241 247.559 39.4173 246.835C39.1105 246.112 40.0231 244.202 40.0231 244.202C40.0231 244.202 35.5863 230.054 35.3581 224.427C35.13 218.799 45.7421 203.165 45.7421 203.165L53.1919 178.115C53.1919 178.115 49.7148 176.04 49.2585 175.325C48.8023 174.61 48.3067 171.914 48.3067 171.914L120.098 166.019C120.918 165.445 121.793 164.952 122.71 164.549C123.496 164.345 128.114 164.211 128.114 164.211C128.114 164.211 135.635 169.902 138.71 170.641C141.786 171.379 345.667 181.338 346.799 180.976C347.932 180.615 318.755 151.777 315.773 149.041C312.792 146.306 287.39 139.303 287.084 138.556C286.777 137.809 286.706 131.875 287.508 131.962C288.311 132.048 320.367 143.814 324.041 145.858C327.715 147.902 376.748 176.819 378.195 177.392C379.643 177.966 393.221 176.716 393.354 176.606C393.488 176.496 391.293 175.726 391.293 175.443C391.293 175.16 394.904 175.993 395.683 175.993C396.462 175.993 454.982 184.702 464.603 188.121C474.224 191.54 488.588 200.351 495.039 206.545C501.49 212.739 507.429 222.171 508.507 222.807C509.584 223.444 512.18 223.593 512.637 227.704C513.093 231.815 512.511 236.036 511.598 236.916C510.686 237.796 507.751 238.716 507.453 239.054C507.154 239.392 506.76 249.272 506.91 249.634C507.059 249.995 508.247 250.278 508.373 251.151C508.499 252.023 508.758 254.758 508.161 255.741Z"
                fill="#FFC727"
              />
              <path
                id="Vector_465"
                opacity="0.3"
                d="M384.842 233.104C383.718 235.257 382.748 237.487 381.939 239.777C346.539 238.669 185.989 233.56 186.303 232.004C186.618 230.447 356.577 232.672 384.842 233.104Z"
                fill="white"
              />
              <g id="Wheel-2">
                <path
                  id="Vector_466"
                  d="M458.401 260.648C461.334 239.585 446.621 220.134 425.54 217.204C404.458 214.273 384.991 228.973 382.058 250.037C379.126 271.1 393.838 290.551 414.919 293.481C436.001 296.412 455.468 281.712 458.401 260.648Z"
                  fill="#263238"
                />
                <path
                  id="Vector_467"
                  d="M431.522 281.121C445.764 274.907 452.268 258.334 446.049 244.104C439.83 229.874 423.243 223.375 409 229.589C394.758 235.803 388.255 252.376 394.474 266.606C400.693 280.836 417.28 287.335 431.522 281.121Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_468"
                  d="M438.601 273.692C448.732 263.569 448.732 247.156 438.601 237.033C428.469 226.909 412.042 226.909 401.91 237.033C391.778 247.156 391.778 263.569 401.91 273.692C412.042 283.815 428.469 283.815 438.601 273.692Z"
                  fill="#A6A6A6"
                />
                <path
                  id="Vector_469"
                  d="M415.287 249.516L423.35 248.345C420.054 244.815 427.543 229.724 427.543 229.724L423.098 228.938C420.982 234.189 419.779 235.816 417.458 236.154C415.137 236.492 413.525 235.273 409.977 230.848L405.957 232.884C405.957 232.884 417.434 245.193 415.287 249.516Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_470"
                  d="M424.098 248.738L427.708 256.039C430.068 251.819 446.722 254.271 446.722 254.271L446.109 249.791C440.46 249.406 438.541 248.761 437.502 246.647C436.464 244.532 437.125 242.63 440.24 237.906L437.093 234.707C437.093 234.707 428.881 249.445 424.098 248.738Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_471"
                  d="M427.567 256.865L421.729 262.555C426.449 263.475 429.289 280.075 429.289 280.075L433.364 278.11C431.988 272.608 432.003 270.604 433.687 268.969C435.37 267.334 437.384 267.358 442.851 268.867L444.913 264.858C444.913 264.858 428.369 261.628 427.567 256.865Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_472"
                  d="M420.896 262.673L413.682 258.885C414.272 263.679 399.341 271.461 399.341 271.461L402.487 274.723C407.286 271.72 409.213 271.115 411.29 272.2C413.367 273.284 413.965 275.226 414.225 280.885L418.677 281.6C418.677 281.6 416.616 264.913 420.896 262.673Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_473"
                  d="M413.32 258.13L414.689 250.105C410.315 252.141 398.264 240.367 398.264 240.367L396.132 244.344C400.474 247.983 401.638 249.626 401.245 251.937C400.852 254.247 399.2 255.411 393.89 257.439L394.582 261.895C394.582 261.895 409.859 254.75 413.32 258.13Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_474"
                  d="M412.777 256.267C412.992 257.74 413.638 259.115 414.636 260.22C415.633 261.325 416.935 262.109 418.379 262.475C419.822 262.84 421.342 262.769 422.745 262.271C424.148 261.774 425.372 260.872 426.262 259.679C427.152 258.486 427.668 257.057 427.745 255.571C427.822 254.085 427.456 252.61 426.694 251.332C425.932 250.054 424.807 249.031 423.463 248.391C422.118 247.752 420.614 247.525 419.141 247.739C418.163 247.882 417.222 248.215 416.373 248.721C415.524 249.227 414.782 249.895 414.191 250.686C413.6 251.478 413.171 252.379 412.929 253.336C412.686 254.294 412.634 255.29 412.777 256.267V256.267Z"
                  fill="#DBDBDB"
                />
              </g>
              <g id="Wheel-1">
                <path
                  id="Vector_475"
                  d="M148.904 288.075C166.944 276.79 172.412 253.029 161.118 235.004C149.823 216.979 126.042 211.515 108.002 222.8C89.9615 234.086 84.4931 257.846 95.7879 275.871C107.083 293.896 130.863 299.36 148.904 288.075Z"
                  fill="#263238"
                />
                <path
                  id="Vector_476"
                  d="M149.804 273.764C159.921 261.978 158.561 244.228 146.765 234.119C134.969 224.01 117.204 225.37 107.086 237.156C96.9686 248.942 98.3293 266.692 110.125 276.801C121.922 286.91 139.686 285.55 149.804 273.764Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_477"
                  d="M153.345 262.742C157.374 249.003 149.493 234.603 135.742 230.577C121.991 226.552 107.578 234.426 103.55 248.165C99.5208 261.904 107.402 276.305 121.153 280.33C134.903 284.356 149.316 276.481 153.345 262.742Z"
                  fill="#A6A6A6"
                />
                <path
                  id="Vector_478"
                  d="M123.48 249.61L131.544 248.439C128.248 244.902 135.737 229.819 135.737 229.819L131.284 229.033C129.168 234.283 127.964 235.91 125.644 236.248C123.323 236.586 121.71 235.368 118.17 230.943L114.143 232.978C114.143 232.978 125.628 245.287 123.48 249.61Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_479"
                  d="M132.291 248.824L135.894 256.118C138.254 251.897 154.916 254.35 154.916 254.35L154.302 249.877C148.654 249.492 146.734 248.848 145.696 246.733C144.657 244.619 145.31 242.717 148.433 237.985L145.287 234.794C145.287 234.794 137.066 249.531 132.291 248.824Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_480"
                  d="M135.752 256.959L129.923 262.642C134.643 263.569 137.483 280.17 137.483 280.17L141.55 278.205C140.173 272.703 140.197 270.698 141.872 269.056C143.548 267.413 145.578 267.484 151.037 268.961L153.098 264.945C153.098 264.945 136.562 261.722 135.752 256.959Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_481"
                  d="M129.089 262.768L121.875 258.979C122.457 263.774 107.526 271.555 107.526 271.555L110.673 274.817C115.472 271.815 117.399 271.209 119.476 272.294C121.553 273.379 122.151 275.32 122.402 280.94L126.855 281.663C126.855 281.663 124.802 265 129.089 262.768Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_482"
                  d="M121.467 258.256L122.843 250.231C118.462 252.267 106.418 240.492 106.418 240.492L104.278 244.47C108.62 248.109 109.785 249.751 109.399 252.062C109.014 254.373 107.346 255.536 102.044 257.525L102.736 261.982C102.736 261.982 118.045 254.845 121.467 258.256Z"
                  fill="#DBDBDB"
                />
                <path
                  id="Vector_483"
                  d="M120.963 256.362C121.178 257.834 121.824 259.209 122.821 260.314C123.817 261.419 125.119 262.204 126.562 262.569C128.005 262.935 129.525 262.865 130.928 262.368C132.331 261.871 133.555 260.97 134.446 259.778C135.336 258.586 135.853 257.157 135.931 255.672C136.009 254.186 135.644 252.711 134.883 251.433C134.122 250.154 132.999 249.13 131.656 248.49C130.312 247.849 128.809 247.621 127.335 247.834C125.36 248.123 123.58 249.184 122.386 250.782C121.191 252.381 120.68 254.387 120.963 256.362V256.362Z"
                  fill="#DBDBDB"
                />
              </g>
              <path
                id="Vector_484"
                d="M52.8773 179.239C50.1554 180.025 44.869 187.382 44.6094 188.821C44.3498 190.259 43.9879 199.723 45.0971 200.964C46.2063 202.206 50.0138 205.13 52.8773 204.832C55.7407 204.533 73.8419 195.966 74.9039 194.614C75.9659 193.262 75.8951 186.227 74.1173 184.215C72.3394 182.203 56.3465 178.273 52.8773 179.239Z"
                fill="white"
              />
              <path
                id="Vector_485"
                d="M74.9274 194.653C73.8418 195.973 55.7406 204.533 52.9007 204.832C50.7217 205.06 47.9841 203.401 46.3242 202.057C48.5977 203.079 50.6351 203.377 52.1455 203C53.6559 202.623 71.0256 195.211 72.4652 193.442C73.9048 191.674 73.1417 185.889 72.772 184.883C72.4022 183.877 57.959 179.381 57.959 179.381C64.4726 179.97 72.9057 182.863 74.1329 184.223C75.9108 186.258 76.013 193.325 74.9274 194.653Z"
                fill="#EBEBEB"
              />
              <path
                id="Vector_486"
                d="M458.199 198.261C460.15 202.796 477.952 212.935 484.836 215.128C489.17 216.512 504.431 219.742 505.438 219.058C506.445 218.374 500.545 207.025 497.076 203.959C493.607 200.894 475.333 191.642 469.48 191.053C463.627 190.463 456.224 193.678 458.199 198.261Z"
                fill="white"
              />
              <path
                id="Vector_487"
                d="M505.447 219.074C504.432 219.75 489.178 216.512 484.836 215.144C477.953 212.943 460.15 202.812 458.192 198.268C456.233 193.725 463.627 190.503 469.48 191.084C469.936 191.13 470.388 191.206 470.833 191.312C465.13 192.507 463.399 196.571 466.341 199.471C469.284 202.371 479.007 209.563 483.058 211.363C486.991 213.1 501.773 217.691 503.228 216.865C503.524 216.605 503.758 216.283 503.913 215.921C504.068 215.559 504.14 215.168 504.125 214.774C505.211 217.03 505.824 218.822 505.447 219.074Z"
                fill="#EBEBEB"
              />
              <g id="Group_7" opacity="0.1">
                <path
                  id="Vector_488"
                  opacity="0.1"
                  d="M462.094 261.463C462.188 265.55 462.039 268.207 462.416 268.333C464.084 268.883 492.262 266.375 495.315 265.526C498.367 264.678 508.161 255.733 508.161 255.733C508.161 255.733 508.208 255.654 508.224 255.607C497.971 259.041 487.286 261.017 476.482 261.479C474.515 261.549 469.536 261.541 462.094 261.463Z"
                  fill="black"
                />
                <path
                  id="Vector_489"
                  opacity="0.1"
                  d="M169.98 255.198C170.57 262.461 170.091 267.774 170.374 268.042C171.286 268.906 375.891 270.4 377.086 270.455C377.409 270.455 377.259 266.179 377.802 259.962C315.309 258.657 234.629 256.786 169.98 255.198Z"
                  fill="black"
                />
                <path
                  id="Vector_490"
                  opacity="0.1"
                  d="M39.4175 246.859C39.7243 247.582 43.9094 255.945 46.8043 256.708C49.6993 257.47 83.9901 261.596 85.7601 261.541C86.2242 261.541 86.3973 258.122 87.1997 253.108C75.8498 252.788 64.5298 251.78 53.3022 250.089C48.5293 249.038 44.0147 247.044 40.0233 244.226C40.0233 244.226 39.1107 246.144 39.4175 246.859Z"
                  fill="black"
                />
              </g>
              <g id="Group_8" opacity="0.2">
                <path
                  id="Vector_491"
                  opacity="0.2"
                  d="M361.179 259.608C361.179 247.637 361.58 230.227 361.808 218.076C361.895 214.617 361.981 211.159 362.029 207.7C362.102 207.106 362.048 206.504 361.871 205.932C359.149 200.831 349.89 186.14 346.799 180.976C351.621 188.161 356.388 195.392 360.896 202.788C361.494 203.936 362.469 205.099 362.729 206.364C362.634 224.128 361.942 241.868 361.155 259.608H361.179Z"
                  fill="black"
                />
                <path
                  id="Vector_492"
                  opacity="0.2"
                  d="M214.592 174.783L212.099 184.734C211.225 188.852 209.739 193.002 209.636 197.207C210.077 211.843 210.502 231.241 210.659 245.939L210.706 256.197L210.274 245.979C209.778 232.326 209.274 213.446 209.031 199.825C209.031 198.316 208.85 196.131 209.227 194.653C210.69 187.94 212.634 181.385 214.592 174.83V174.783Z"
                  fill="black"
                />
                <path
                  id="Vector_493"
                  opacity="0.2"
                  d="M96.01 228.679C89.0008 225.095 82.086 221.33 75.3128 217.305C74.1215 216.519 73.0732 215.536 72.2133 214.397C71.0019 212.998 69.7904 211.591 68.634 210.145C66.274 207.268 64.0084 204.368 61.7979 201.397L65.4637 205.563C68.2328 208.652 71.9144 213.242 74.8644 216.119C81.8578 220.379 89.0244 224.34 96.01 228.695V228.679Z"
                  fill="black"
                />
                <path
                  id="Vector_494"
                  opacity="0.2"
                  d="M457.625 195.376C439.083 193.018 420.266 190.495 401.819 187.406C393.795 184.388 386.038 180.843 378.219 177.416C381.9 178.831 398.672 185.63 402.015 186.746C419.519 189.52 440.208 192.397 457.648 195.392L457.625 195.376Z"
                  fill="black"
                />
                <path
                  id="Vector_495"
                  opacity="0.2"
                  d="M244.186 198.889C243.691 200.595 243.03 202.709 241.283 203.519C238.933 203.78 236.564 203.84 234.203 203.7C231.851 203.656 229.507 203.42 227.194 202.992C226.919 202.932 226.653 202.832 226.407 202.694C225.196 201.585 224.74 199.99 224.244 198.496C224.913 199.809 225.558 201.35 226.691 202.285C227.145 202.432 227.615 202.525 228.091 202.56C232.174 202.898 236.351 203.024 240.449 203.047C240.913 203.102 241.379 202.972 241.747 202.686C242.843 201.621 243.685 200.324 244.21 198.889H244.186Z"
                  fill="black"
                />
                <path
                  id="Vector_496"
                  opacity="0.2"
                  d="M244.328 196.217C243.927 194.818 243.455 193.073 242.283 192.216C241.805 192.082 241.315 191.995 240.82 191.957C237.681 191.679 234.528 191.603 231.38 191.729C229.248 191.729 227.32 192.13 225.826 193.741C225.054 194.438 224.401 195.256 223.891 196.162C224.284 195.168 224.86 194.256 225.59 193.474C226.3 192.64 227.183 191.969 228.178 191.509C229.219 191.201 230.295 191.024 231.38 190.982C234.56 190.778 237.752 190.904 240.906 191.36C241.461 191.44 242.004 191.582 242.527 191.784C243.848 192.869 244.1 194.653 244.328 196.217V196.217Z"
                  fill="black"
                />
                <path
                  id="Vector_497"
                  opacity="0.2"
                  d="M243.683 196.052C246.932 196.759 246.727 198.661 243.478 199.054C239.411 199.455 235.321 199.4 231.246 199.416C228.728 199.235 225.944 199.73 223.529 198.63C222.309 198.033 221.955 196.681 223.363 196.005C225.936 195.007 228.807 195.533 231.474 195.423C235.552 195.43 239.627 195.643 243.683 196.06V196.052ZM243.683 196.052C237.649 195.392 231.45 195.745 225.409 196.17C224.41 196.256 222.042 196.956 223.89 197.946C225.212 198.622 226.722 198.489 228.209 198.606C233.26 198.787 238.436 199.212 243.463 198.944C246.68 198.654 246.908 196.791 243.683 196.052V196.052Z"
                  fill="black"
                />
              </g>
              <path
                id="Vector_498"
                d="M507.46 239.054C507.46 239.054 489.115 240.681 488.887 240.626C488.659 240.571 488.101 238.048 486.567 237.977C485.033 237.906 479.707 242.45 478.857 246.82C478.008 251.19 479.007 254.467 481.784 254.137C484.561 253.807 488.352 248.195 488.352 248.195C488.352 248.195 502.434 247.409 502.772 247.669C503.337 248.176 503.939 248.641 504.573 249.06C505.34 249.326 506.13 249.518 506.933 249.634L507.46 239.054Z"
                fill="#263238"
              />
              <path
                id="Vector_499"
                d="M333.237 189.159C331.994 187.296 334.944 173.439 336.305 172.519C337.666 171.599 353.337 173.714 352.825 182.596C352.314 191.477 335.173 192.075 333.237 189.159Z"
                fill="#FFC727"
              />
              <path
                id="Vector_500"
                opacity="0.1"
                d="M333.237 189.159C331.994 187.296 334.944 173.439 336.305 172.519C337.666 171.599 353.337 173.714 352.825 182.596C352.314 191.477 335.173 192.075 333.237 189.159Z"
                fill="black"
              />
              <g id="Group_9" opacity="0.4">
                <path
                  id="Vector_501"
                  opacity="0.4"
                  d="M176.07 235.124C171.971 222.006 162.193 210.703 149.457 205.39C134.628 199.44 116.582 199.597 102.878 208.353C94.4338 213.881 87.8541 221.825 83.998 231.147C85.6599 226.359 88.0708 221.865 91.141 217.832C104.459 199.911 127.941 195.824 148.19 203.409C161.957 208.534 172.577 221.039 176.03 235.14L176.07 235.124Z"
                  fill="white"
                />
                <path
                  id="Vector_502"
                  opacity="0.4"
                  d="M467.522 235.989C463.423 222.862 453.645 211.56 440.909 206.246C426.08 200.296 408.034 200.461 394.33 209.217C385.884 214.744 379.304 222.688 375.45 232.011C377.125 227.213 379.552 222.711 382.64 218.673C395.959 200.76 419.441 196.665 439.689 204.25C453.456 209.375 464.076 221.888 467.53 235.989H467.522Z"
                  fill="white"
                />
                <path
                  id="Vector_503"
                  opacity="0.4"
                  d="M332.703 198.52C271.107 196.162 208.889 192.743 147.411 188.302C209.007 190.66 271.225 194.087 332.703 198.52Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ]);
  return (
    <section className="help">
      <section className="top">
        <Logo />
        <div className="title-grid">
          <h1>HEARD SOMEONE NEEDED SOME HELP 👀, WELL I'M HERE TO HELP 😁</h1>
          <div className="image-container">
            <svg
              width="316"
              height="294"
              viewBox="0 0 316 294"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.9848 151.548L0.0507812 151.449C0.0507812 151.449 3.38182 147.117 7.05666 146.582C7.05666 146.582 14.223 125.351 26.1567 125.19C37.2576 125.068 41.6888 138.285 41.6888 138.285C41.6888 138.285 46.8458 132.364 51.7583 135.084C56.6708 137.804 59.4441 145.581 59.4441 145.581C59.4441 145.581 64.9831 148.584 66.9848 151.548Z"
                fill="#EBEBEB"
              />
              <path
                d="M231.344 47.2776L315.988 47.4075C315.988 47.4075 315.988 41.9984 304.337 40.9211C304.337 40.9211 293.725 17.2371 277.467 20.4154C267.306 22.3788 262.111 36.276 262.111 36.276C262.111 36.276 254.471 25.3279 248.359 27.4365C242.247 29.5452 238.587 41.1885 238.587 41.1885C238.587 41.1885 232.269 44.2216 231.344 47.2776Z"
                fill="#EBEBEB"
              />
              <path
                d="M45.2949 226.382L129.938 226.512C129.938 226.512 129.938 221.103 118.287 220.026C118.287 220.026 107.676 196.342 91.4176 199.52C81.2946 201.483 76.1376 215.373 76.1376 215.373C76.1376 215.373 68.4976 204.425 62.3856 206.533C56.2736 208.642 52.614 220.285 52.614 220.285C52.614 220.285 46.2576 223.326 45.2949 226.382Z"
                fill="#EBEBEB"
              />
              <path
                d="M87.6206 22.2413L145.173 22.333C145.173 22.333 139.748 17.2677 137.334 17.26C134.92 17.2524 127.906 0.276326 118.899 0.986846C109.891 1.69737 105.101 14.3263 105.101 14.3263C105.101 14.3263 94.1604 10.8806 87.6206 22.2413Z"
                fill="#EBEBEB"
              />
              <path
                d="M206.033 253.947L263.585 254.031C263.585 254.031 258.168 248.974 255.754 248.966C253.34 248.958 246.318 231.982 237.311 232.685C228.303 233.388 223.513 246.025 223.513 246.025C223.513 246.025 212.58 242.556 206.033 253.947Z"
                fill="#EBEBEB"
              />
              <path
                d="M221.152 149.058L270.369 149.134C270.369 149.134 267.924 145.941 265.227 145.543C265.227 145.543 260.009 129.912 251.223 129.782C243.056 129.667 239.763 139.378 239.763 139.378C239.763 139.378 235.989 135.015 232.368 137.002C228.746 138.988 226.699 144.688 226.699 144.688C226.699 144.688 222.627 146.865 221.152 149.058Z"
                fill="#EBEBEB"
              />
              <path
                d="M93.9231 180.955C88.8578 184.843 83.7466 188.671 78.6431 192.483L63.2332 203.852L47.7011 215.052L39.9083 220.614L32.062 226.107L39.702 220.308L47.342 214.578L62.7519 203.21L78.2687 191.987C83.4792 188.312 88.6744 184.591 93.9231 180.955Z"
                fill="#263238"
              />
              <path
                d="M68.4362 259.67C64.7079 262.58 60.9337 265.43 57.1519 268.272C53.3701 271.114 49.5119 273.895 45.7454 276.676C41.9789 279.457 38.0901 282.284 34.2319 285.011L28.4332 289.114C26.4926 290.451 24.5597 291.819 22.5962 293.148C24.4527 291.681 26.3474 290.253 28.2192 288.809L33.8881 284.576C37.7081 281.734 41.5281 278.953 45.2946 276.134C49.0612 273.315 52.9346 270.58 56.8081 267.837C60.6816 265.094 64.5245 262.328 68.4362 259.67Z"
                fill="#263238"
              />
              <path
                d="M222.565 195.081C218.837 198 215.063 200.849 211.281 203.691C207.499 206.533 203.679 209.314 199.874 212.134C196.07 214.953 192.234 217.688 188.369 220.431L182.578 224.526C180.629 225.87 178.696 227.238 176.733 228.56C178.597 227.1 180.484 225.672 182.356 224.228L188.017 219.957C191.837 217.115 195.657 214.326 199.424 211.515C203.19 208.703 207.064 205.96 210.937 203.218C214.811 200.475 218.654 197.747 222.565 195.081Z"
                fill="#263238"
              />
              <path
                d="M287.192 97.6558C283.464 100.574 279.69 103.424 275.908 106.258C272.126 109.093 268.268 111.889 264.501 114.701C260.735 117.512 256.861 120.263 252.988 122.998L247.197 127.1C245.249 128.445 243.323 129.805 241.36 131.134C243.216 129.667 245.103 128.246 246.975 126.795L252.644 122.524C256.426 119.69 260.246 116.901 264.051 114.12C267.855 111.339 271.691 108.558 275.557 105.815C279.422 103.073 283.296 100.314 287.192 97.6558Z"
                fill="#263238"
              />
              <path
                d="M61.0711 94.2331C57.3428 97.1515 53.5686 100.001 49.7868 102.836C46.005 105.67 42.1468 108.466 38.3803 111.24C34.6138 114.013 30.7403 116.802 26.8745 119.537L21.0834 123.639C19.1352 124.984 17.2022 126.344 15.2388 127.673C17.1029 126.206 18.99 124.785 20.8618 123.334L26.5231 119.063C30.3431 116.229 34.163 113.44 37.9296 110.659C41.6961 107.878 45.5696 105.097 49.443 102.362C53.3165 99.6269 57.1518 96.8918 61.0711 94.2331Z"
                fill="#263238"
              />
              <path
                d="M278.254 93.9733C276.015 95.7993 273.731 97.5641 271.439 99.3213C269.147 101.079 266.809 102.767 264.502 104.501C262.194 106.236 259.826 107.878 257.458 109.536L253.897 112.004C252.698 112.768 251.514 113.623 250.299 114.403C251.407 113.478 252.553 112.6 253.683 111.698L257.114 109.055C259.406 107.305 261.698 105.609 264.051 103.882C266.404 102.156 268.726 100.498 271.095 98.8476C273.463 97.1974 275.832 95.5472 278.254 93.9733Z"
                fill="#263238"
              />
              <path
                d="M57.6637 87.4029C55.4329 89.2289 53.1409 90.9937 50.8489 92.7509C48.5569 94.5081 46.2649 96.2042 43.9117 97.9308C41.5586 99.6575 39.2361 101.315 36.8677 102.966L33.3151 105.433C32.1079 106.236 30.9237 107.053 29.709 107.832C30.8244 106.915 32.001 106.029 33.0935 105.128L36.5239 102.484C38.8159 100.735 41.1079 99.031 43.461 97.3043C45.8141 95.5777 48.1367 93.9198 50.5051 92.2696C52.8735 90.6193 55.2419 88.992 57.6637 87.4029Z"
                fill="#263238"
              />
              <path
                d="M93.5413 167.539C89.813 170.45 86.0389 173.299 82.2571 176.141C78.4753 178.984 74.6171 181.765 70.8505 184.584C67.084 187.403 63.2105 190.138 59.3447 192.881L53.5536 196.983C51.6054 198.328 49.6725 199.688 47.709 201.017C49.5731 199.55 51.4602 198.122 53.332 196.678L58.9933 192.407C62.8133 189.565 66.6333 186.784 70.3998 183.965C74.1663 181.146 78.0398 178.411 81.9133 175.668C85.7867 172.925 89.6297 170.198 93.5413 167.539Z"
                fill="#263238"
              />
              <path
                d="M187.566 206.938L175.381 216.091L163.141 225.183L138.594 243.259L113.947 261.198L101.586 270.113L89.1709 278.968L101.364 269.816L113.596 260.724L138.143 242.648L162.798 224.709L175.159 215.793L187.566 206.938Z"
                fill="#263238"
              />
              <path
                d="M228.716 62.8403C222.795 68.4404 216.63 76.1568 208.539 78.5863C202.19 80.4734 195.398 78.8231 189.569 76.0727C176.764 70.0142 164.357 56.7665 168.177 41.4865C169.705 35.3745 177.398 27.9255 184.29 29.9119C187.827 30.9433 190.577 33.4186 193.572 35.4432C195.382 36.7543 197.464 37.641 199.664 38.0378C201.863 38.4346 204.124 38.3312 206.278 37.7352C215.316 35.4432 219.395 30.8057 226.753 25.5112C227.444 24.935 228.249 24.5101 229.115 24.2641C229.981 24.018 230.889 23.9561 231.78 24.0825C233.854 24.2525 235.843 24.9841 237.533 26.1988C239.23 27.013 240.697 28.2365 241.804 29.7591C244.096 33.0595 243.821 38.377 244.096 42.2199C244.371 46.0628 243.477 48.7903 240.658 51.5407C236.692 55.376 232.689 59.0737 228.716 62.8403Z"
                fill="#263238"
              />
              <path
                d="M226.47 66.1102C231.566 60.6247 236.555 55.0551 241.574 49.5085C241.574 49.5085 241.574 49.4244 241.528 49.455C237.265 53.9015 232.941 58.2792 228.731 62.7792C224.522 67.2791 220.648 72.0083 216.163 76.0422C206.071 85.0956 192.777 78.1432 185.749 68.9828C185.428 68.5703 184.801 69.128 185.137 69.5329C191.563 77.3868 202.098 84.2857 212.435 79.3961C218.096 76.768 222.298 70.5872 226.47 66.1102Z"
                fill="#263238"
              />
              <path
                d="M227.692 25.58C227.799 25.4883 227.654 25.3279 227.54 25.4196C221.672 30.0036 215.262 35.9628 207.576 36.9942C203.789 37.4978 199.937 36.8426 196.529 35.1147C193.832 33.7472 191.815 31.5621 189.47 29.7209C180.302 22.524 168.513 32.54 169.384 42.7776C169.384 42.9916 169.774 42.9686 169.766 42.7776C169.468 35.2981 174.633 28.2616 182.464 27.8338C188.751 27.4747 192.396 34.0757 197.812 36.2378C209.12 40.7683 219.64 32.8074 227.692 25.58Z"
                fill="#263238"
              />
              <path
                d="M66.5034 39.9966C68.6349 36.2989 120.923 40.3863 165.266 44.9168H165.304C185.313 46.9643 204.719 47.3387 216.736 49.3633C224.376 50.6468 228.196 53.9473 228.96 55.1009C231.512 59.0126 235.638 71.0685 213.505 83.155C196.773 92.323 177.872 100.016 162.752 115.243C147.633 130.47 137.792 150.647 137.082 165.102C136.371 179.557 145.211 194.47 144.347 192.858C144.08 192.369 140.184 192.155 135.133 188.388C128.937 183.804 122.145 174.736 117.21 171.748C107.102 165.636 92.5787 164.788 82.6314 152.075C72.134 138.652 71.668 117.13 67.9397 99.688C63.4092 78.5099 48.1215 71.9242 66.5034 39.9966Z"
                fill="#37474F"
              />
              <path
                d="M69.4147 107.557C68.9639 104.876 68.4902 102.209 67.9401 99.688C66.7921 94.7697 65.1355 89.9842 62.9971 85.4088C62.9971 85.4088 111.014 79.167 123.972 86.3944C131.062 90.3443 108.998 89.756 69.4147 107.557Z"
                fill="#263238"
              />
              <path
                d="M124.797 178.533C122.039 175.675 119.449 173.093 117.203 171.741C114.599 170.238 111.872 168.96 109.051 167.921C114.277 148.874 119.212 135.871 128.609 127.956C134.629 122.875 117.355 154.016 124.797 178.533Z"
                fill="#263238"
              />
              <path
                d="M71.8289 122.509C71.401 120.087 71.0114 117.65 70.6294 115.212C86.3831 110.865 100.135 103.554 100.051 105.624C99.9364 107.878 82.4408 117.138 71.8289 122.509Z"
                fill="#263238"
              />
              <path
                d="M47.7627 80.8936C47.7627 80.8936 45.6922 61.2741 61.4306 39.7445C62.9586 37.6512 86.2683 30.7217 101.258 31.1877C116.248 31.6538 127.035 37.3456 144.378 41.9525C161.721 46.5594 209.318 46.2691 220.343 49.9974C227.944 52.5568 228.93 55.1162 228.93 55.1162C228.93 55.1162 220.152 51.1893 214.658 50.6468C192.953 48.5076 153.179 55.5517 143.102 54.2453C130.809 52.6409 117.226 49.9516 106.957 51.1893C95.4516 52.595 55.1124 74.6441 47.7627 80.8936Z"
                fill="#455A64"
              />
              <path
                d="M220.511 96.525C219.525 101.978 217.525 107.198 214.613 111.912C201.923 132.349 175.61 165.766 169.613 175.087C158.703 192.086 107.271 226.512 107.271 226.512L91.2266 201.583C91.2266 201.583 140.436 157.79 141.062 156.652C144.63 150.188 172.967 108.726 173.043 107.397C173.731 93.7975 185.504 82.116 185.504 82.116L220.511 96.525Z"
                fill="#263238"
              />
              <path
                d="M220.503 96.525C219.623 101.479 217.897 106.245 215.4 110.613C198.76 111.706 179.431 107.259 173.158 105.67C174.717 92.812 185.504 82.116 185.504 82.116L220.503 96.525Z"
                fill="#455A64"
              />
              <path
                d="M83.4569 263.016C82.1963 261.755 66.519 216.863 66.7406 214.693C66.7406 214.319 72.3484 211.973 81.5011 208.367C82.1352 208.115 127.463 168.043 127.463 168.043L149.062 198.152L92.3499 236.979C92.3499 236.979 89.4008 256.079 88.8966 258.424C88.3924 260.77 84.7175 264.277 83.4569 263.016Z"
                fill="#FFC727"
              />
              <path
                opacity="0.3"
                d="M149.061 198.152L141.261 203.5L120.121 174.56L127.463 168.074L149.061 198.152Z"
                fill="white"
              />
              <path
                opacity="0.1"
                d="M149.069 198.152L122.459 216.358L122.619 172.329C125.599 169.693 127.471 168.051 127.471 168.051L149.069 198.152Z"
                fill="black"
              />
              <path
                opacity="0.1"
                d="M174.182 110.972C172.114 114.752 169.957 118.477 167.711 122.15C165.488 125.832 163.188 129.469 160.873 133.098C158.558 136.727 156.174 140.302 153.737 143.847C151.3 147.392 148.832 150.922 146.166 154.322L149.413 148.737C150.513 146.88 151.613 145.031 152.736 143.198C154.967 139.523 157.275 135.894 159.612 132.273C161.95 128.651 164.311 125.06 166.733 121.508C169.155 117.955 171.615 114.433 174.182 110.972Z"
                fill="white"
              />
              <path
                d="M158.527 190.902L154.593 161.572C154.593 161.572 201.082 147.782 202.274 145.138C202.748 144.107 172.608 124.296 172.906 102.11C173.059 91.0319 185.328 82.1236 185.328 82.1236L213.291 93.8128C213.291 93.8128 209.295 103.561 210.525 105.204C213.192 108.78 248.267 136.528 246.296 153.955C244.248 172.016 158.527 190.902 158.527 190.902Z"
                fill="#263238"
              />
              <path
                d="M210.525 105.189C197.736 100.819 183.38 105.953 174.182 110.537C173.32 107.819 172.89 104.984 172.906 102.133C173.059 91.0548 185.328 82.1465 185.328 82.1465L213.298 93.8357C213.298 93.8357 209.303 103.508 210.525 105.189Z"
                fill="#455A64"
              />
              <path
                d="M200.7 97.1591C202.714 97.9258 204.574 99.0461 206.193 100.467C207.014 101.158 207.792 101.898 208.524 102.683C209.254 103.466 209.923 104.304 210.525 105.189C208.883 103.821 207.324 102.4 205.704 101.048C204.902 100.368 204.085 99.7109 203.252 99.0615C202.419 98.4121 201.586 97.7627 200.7 97.1591Z"
                fill="#263238"
              />
              <path
                d="M205.789 98.7101C206.413 98.9427 206.988 99.2899 207.485 99.7338C207.989 100.168 208.44 100.661 208.829 101.201C209.602 102.284 210.098 103.541 210.273 104.86C209.899 104.31 209.586 103.752 209.242 103.218C208.898 102.683 208.562 102.156 208.203 101.644C207.47 100.609 206.663 99.6282 205.789 98.7101Z"
                fill="#263238"
              />
              <path
                d="M202.312 145.123C203.348 145.5 204.336 146.001 205.253 146.613C206.177 147.214 207.057 147.877 207.889 148.599C208.719 149.315 209.505 150.08 210.242 150.891C210.978 151.709 211.652 152.58 212.259 153.496C210.594 152.053 209.028 150.57 207.393 149.157C206.583 148.446 205.75 147.759 204.91 147.079C204.069 146.399 203.183 145.75 202.312 145.123Z"
                fill="#37474F"
              />
              <path
                d="M174.182 110.521C174.609 111.969 175.177 113.371 175.878 114.708C176.206 115.388 176.565 116.053 176.924 116.718C177.283 117.382 177.688 118.024 178.078 118.658C178.468 119.292 178.88 119.934 179.3 120.56L180.576 122.425C181.485 123.632 182.364 124.854 183.334 126.015C185.191 128.399 187.246 130.599 189.294 132.83L192.464 136.07C193.541 137.132 194.642 138.171 195.711 139.24C194.55 138.27 193.419 137.261 192.266 136.276L188.973 133.136C186.822 130.985 184.782 128.725 182.861 126.367C180.944 124.007 179.208 121.507 177.665 118.887C176.088 116.291 174.913 113.47 174.182 110.521V110.521Z"
                fill="#37474F"
              />
              <path
                opacity="0.1"
                d="M183.877 85.172C181.973 87.423 180.413 89.9435 179.247 92.6516C178.073 95.3097 177.379 98.1552 177.199 101.056C177.058 103.933 177.508 106.809 178.521 109.505C179.039 110.85 179.659 112.153 180.378 113.402C181.088 114.678 181.86 115.923 182.67 117.138C184.297 119.577 186.062 121.921 187.957 124.159C189.836 126.451 191.838 128.582 193.885 130.706C195.933 132.83 198.072 134.87 200.249 136.857C202.427 138.843 204.665 140.799 206.95 142.686C202.005 139.38 197.356 135.653 193.052 131.547C188.689 127.478 184.785 122.943 181.409 118.024C180.579 116.781 179.8 115.508 179.071 114.204C178.323 112.881 177.684 111.498 177.161 110.071C176.129 107.182 175.735 104.104 176.008 101.048C176.668 94.9912 179.457 89.3655 183.877 85.172V85.172Z"
                fill="white"
              />
              <path
                d="M127.387 215.564C126.684 213.921 128.846 166.423 129.87 164.49C130.038 164.154 136.081 164.055 145.914 164.116C146.602 164.116 191.28 149.31 191.28 149.31L206.896 180.282L145.349 194.714C145.349 194.714 135.508 211.331 134.164 213.333C132.819 215.335 128.09 217.199 127.387 215.564Z"
                fill="#FFC727"
              />
              <path
                opacity="0.3"
                d="M206.896 180.282L197.125 182.574L182.853 152.106L191.28 149.348L206.896 180.282Z"
                fill="white"
              />
              <path
                d="M222.94 63.4515C231.107 80.9394 242.109 97.3731 247.961 98.16C255.838 99.2143 273.563 93.0106 282.463 88.9462C285.076 87.7467 275.358 67.5542 272.531 68.853C269.147 70.381 251.789 78.6474 251.414 78.6933C250.65 78.7926 233.842 64.269 229.9 60.7011C223.36 54.7419 219.304 55.6892 222.94 63.4515Z"
                fill="#AD6359"
              />
              <path
                d="M295.52 82.1542C292.082 85.4776 282.387 89.5115 279.675 89.5879C276.963 89.6643 269.544 73.4064 270.82 70.9387C272.096 68.4709 284.572 58.1875 289.431 57.7444C294.29 57.3013 299.065 78.7085 295.52 82.1542Z"
                fill="#AD6359"
              />
              <path
                d="M282.097 59.96C281.448 62.4048 284.702 61.7707 284.702 61.7707C284.702 61.7707 280.233 63.8182 280.538 66.5991C280.844 69.3801 284.748 68.3793 285.031 68.3181C284.794 68.4251 280.737 70.4115 281.333 73.1772C281.929 75.9429 285.726 74.4683 285.97 74.369C285.779 74.5371 283.312 76.8826 284.236 78.8843C285.841 82.3146 292.319 76.5006 295.375 76.7909C295.375 76.7909 295.467 82.0243 295.498 82.1771C295.498 82.1771 301.778 76.768 301.946 72.6271C301.978 72.0247 301.805 71.4292 301.453 70.9389C301.102 70.4485 300.594 70.0927 300.013 69.9302C300.013 69.9302 302.228 68.4022 301.831 66.2171C301.625 65.0941 299.638 64.4294 299.638 64.4294C300.122 64.0536 300.493 63.5517 300.71 62.9788C300.927 62.406 300.982 61.7844 300.868 61.1824C300.494 59.6544 298.576 59.2189 298.576 59.2189C298.576 59.2189 299.654 57.2096 298.76 55.758C296.957 52.8319 283.487 54.6884 282.097 59.96Z"
                fill="#AD6359"
              />
              <path
                d="M298.278 59.1043C298.288 59.1043 298.298 59.1003 298.305 59.0931C298.313 59.086 298.317 59.0762 298.317 59.0661C298.317 59.056 298.313 59.0463 298.305 59.0391C298.298 59.0319 298.288 59.0279 298.278 59.0279C293.523 58.5264 288.728 59.4801 284.526 61.763C284.389 61.8394 284.458 62.0839 284.618 62.0304C289.006 60.3986 293.607 59.413 298.278 59.1043V59.1043Z"
                fill="#263238"
              />
              <path
                d="M299.699 64.3683C299.753 64.3683 299.745 64.2766 299.699 64.2689C294.449 63.7632 289.192 65.1535 284.878 68.1883C284.725 68.2952 284.71 68.5473 284.878 68.4327C287.88 66.5075 295.314 64.5975 299.699 64.3683Z"
                fill="#263238"
              />
              <path
                d="M285.741 74.6746C289.989 71.7485 294.749 70.4803 299.822 69.8767C299.883 69.8767 299.867 69.7774 299.822 69.7697C297.255 69.3877 294.061 70.1059 291.624 70.8775C289.349 71.5513 287.289 72.8075 285.649 74.5218C285.588 74.5906 285.657 74.7358 285.741 74.6746Z"
                fill="#263238"
              />
              <path
                d="M284.702 61.7477C283.892 62.2216 283.125 62.7662 282.41 63.3751C281.684 63.941 281.123 64.6899 280.783 65.5448C280.651 65.9452 280.67 66.38 280.836 66.7672C281.006 67.1514 281.268 67.4875 281.6 67.7452C281.961 67.9707 282.365 68.1173 282.786 68.1753C283.208 68.2332 283.637 68.2012 284.045 68.0813L286.062 67.5847L284.343 68.7536C283.572 69.2648 282.89 69.8998 282.326 70.6331C282.047 70.9568 281.838 71.3356 281.715 71.7449C281.591 72.1542 281.555 72.5849 281.608 73.0091C281.656 73.4092 281.842 73.7802 282.133 74.0588C282.424 74.3374 282.803 74.5064 283.205 74.5371C284.097 74.5832 284.986 74.3991 285.787 74.0023L288.033 72.948L286.245 74.6212C285.749 75.0902 285.313 75.6189 284.946 76.195C284.578 76.7273 284.378 77.3583 284.373 78.0057C284.382 78.2968 284.472 78.5797 284.632 78.8226C284.793 79.0655 285.018 79.2588 285.283 79.3809C285.914 79.5649 286.584 79.5649 287.216 79.3809C288.59 79.0006 289.934 78.5153 291.234 77.9293C291.899 77.6619 292.564 77.3868 293.251 77.1653C293.922 76.8795 294.646 76.7414 295.375 76.7604C294.659 76.8231 293.961 77.0228 293.32 77.3486C292.67 77.639 292.029 77.9675 291.379 78.2884C290.096 78.9765 288.75 79.5418 287.361 79.9768C286.619 80.2201 285.823 80.244 285.069 80.0456C284.664 79.8915 284.313 79.6217 284.061 79.2699C283.808 78.9181 283.664 78.4997 283.648 78.0668C283.629 77.2539 283.858 76.4545 284.305 75.7748C284.699 75.1268 285.174 74.5313 285.718 74.0023L286.184 74.6746C285.24 75.1572 284.187 75.3837 283.128 75.3317C282.553 75.281 282.013 75.0327 281.6 74.6288C281.195 74.2096 280.929 73.6763 280.836 73.1008C280.765 72.5633 280.81 72.0168 280.967 71.4978C281.123 70.9788 281.389 70.4991 281.745 70.0906C282.376 69.2934 283.135 68.6066 283.991 68.0584L284.289 68.7307C283.777 68.8578 283.244 68.8724 282.725 68.7735C282.207 68.6746 281.716 68.4645 281.287 68.1577C280.88 67.8229 280.567 67.3886 280.378 66.8971C280.192 66.4046 280.192 65.8616 280.378 65.3691C280.792 64.4694 281.448 63.7023 282.272 63.1535C283.026 62.5942 283.841 62.1226 284.702 61.7477Z"
                fill="#263238"
              />
              <path
                d="M272.6 68.8147C272.6 68.8147 280.477 50.112 286.276 56.7741C288.002 58.7529 292.716 68.937 290.692 69.9302C288.071 71.1984 285.344 67.3173 283.968 64.5822C283.968 64.5822 282.181 71.3206 277.092 71.4582C276.174 71.4702 275.269 71.2302 274.477 70.7642C273.685 70.2981 273.036 69.6239 272.6 68.8147V68.8147Z"
                fill="#AD6359"
              />
              <path
                d="M285.795 56.2546C286.563 56.9485 287.224 57.7516 287.758 58.6383C288.329 59.5117 288.839 60.4229 289.286 61.3657C290.191 63.238 290.93 65.186 291.494 67.1874C291.642 67.7196 291.714 68.2701 291.708 68.8224C291.703 69.1406 291.627 69.4537 291.486 69.7392C291.409 69.8935 291.308 70.0352 291.189 70.1594C291.066 70.2825 290.92 70.381 290.761 70.4497C290.197 70.7144 289.558 70.7686 288.958 70.6025C288.408 70.4387 287.891 70.1802 287.43 69.8385C286.575 69.1807 285.839 68.3824 285.252 67.4777C284.674 66.6114 284.163 65.7021 283.724 64.7579L284.389 64.6815C284.159 65.4421 283.858 66.1789 283.487 66.8818C283.125 67.5831 282.692 68.2461 282.196 68.8606C281.694 69.4712 281.105 70.0042 280.447 70.4421C279.794 70.8746 279.066 71.1804 278.3 71.3436C279.022 71.0879 279.695 70.7135 280.294 70.2358C280.876 69.7574 281.39 69.2022 281.822 68.5855C282.258 67.971 282.634 67.316 282.945 66.6297C283.263 65.9488 283.519 65.2405 283.709 64.5134L283.923 63.6119L284.374 64.437C284.847 65.327 285.375 66.1869 285.955 67.0117C286.483 67.8129 287.133 68.5269 287.88 69.128C288.644 69.6628 289.607 70.0219 290.318 69.6628C291.028 69.3037 290.852 68.2799 290.638 67.3708C290.405 66.3861 290.119 65.4145 289.783 64.4599C289.454 63.4897 289.118 62.527 288.736 61.5797C288.038 59.6629 287.045 57.8664 285.795 56.2546Z"
                fill="#263238"
              />
              <path
                d="M260.086 74.2773L267.099 96.5785C267.099 96.5785 251.155 100.207 246.357 97.8696C241.559 95.5318 229.167 79.0065 223.788 66.6908C218.41 54.3751 222.535 53.3208 232.727 62.4048C242.919 71.4887 251.063 77.9751 251.43 77.8681C251.797 77.7612 260.086 74.2773 260.086 74.2773Z"
                fill="#FFC727"
              />
              <path
                d="M256.618 77.0507C256.618 76.9819 256.48 77.0125 256.495 77.0507C257.769 83.5678 259.399 90.0103 261.377 96.3493C261.377 96.4181 261.515 96.3875 261.5 96.3493C260.226 89.8322 258.596 83.3897 256.618 77.0507Z"
                fill="#263238"
              />
              <path
                opacity="0.1"
                d="M238.648 90.3595C233.346 83.8655 227.188 74.4454 223.788 66.6755C219.426 56.7435 221.305 54.1154 227.608 58.3097L238.648 90.3595Z"
                fill="black"
              />
              <path
                d="M223.101 87.9147L220.511 96.525L211.075 100.108L185.504 82.116C185.504 82.116 199.478 57.668 214.727 53.1909C222.367 50.9448 227.547 54.5738 228.907 60.151C229.243 61.5644 232.078 75.1024 230.015 81.0311C229.419 82.6045 228.494 84.0325 227.301 85.2196C226.109 86.4068 224.677 87.3256 223.101 87.9147V87.9147Z"
                fill="#FFC727"
              />
              <path
                d="M213.245 81.7722C214.753 82.4593 216.191 83.2909 217.539 84.2552C218.211 84.7518 218.853 85.2866 219.487 85.852C219.808 86.127 220.129 86.3868 220.457 86.6542C220.785 86.9332 221.153 87.1599 221.55 87.3265C221.588 87.3265 221.55 87.4105 221.55 87.4029C221.162 87.3075 220.784 87.1771 220.419 87.0132C220.064 86.8365 219.727 86.6268 219.411 86.3868C218.723 85.8978 218.066 85.3553 217.379 84.8587C216.011 83.8426 214.636 82.8265 213.192 81.9479C213.1 81.9021 213.169 81.7416 213.245 81.7722Z"
                fill="#263238"
              />
              <path
                d="M208.822 82.4063C210.156 82.6294 211.471 82.9538 212.756 83.3766C213.396 83.5976 214.023 83.8526 214.636 84.1406L215.507 84.5761C215.828 84.7365 216.118 84.9581 216.439 85.1185C216.477 85.1185 216.439 85.2026 216.439 85.1873C216.133 85.0574 215.797 84.9886 215.484 84.874L214.529 84.5379C213.895 84.3163 213.253 84.0947 212.626 83.8655C211.358 83.3995 210.09 82.9564 208.806 82.5438C208.707 82.5285 208.753 82.391 208.822 82.4063Z"
                fill="#263238"
              />
              <path
                opacity="0.1"
                d="M222.245 79.0753L214.704 67.9591L215.354 64.1467L229.778 70.3733V72.8105L222.245 79.0753Z"
                fill="black"
              />
              <path
                opacity="0.1"
                d="M222.245 77.8682L215.927 68.555L216.462 65.3538L228.563 70.572V72.6118L222.245 77.8682Z"
                fill="black"
              />
              <path
                d="M212.725 50.6774C193.809 48.5764 178.521 50.8913 174.594 54.7877C171.347 58.0194 160.758 72.5431 155.945 81.5888C154.6 84.1329 174.716 96.1048 175.809 93.2016C177.505 88.7551 189.721 67.684 189.866 67.3326C190.164 66.5686 210.059 60.9608 215.078 59.6926C224.407 57.4617 222.757 51.7928 212.725 50.6774Z"
                fill="#AD6359"
              />
              <path
                d="M159.146 116.496C158.47 116.321 157.863 115.943 157.407 115.413C156.951 114.883 156.667 114.227 156.595 113.532C155.479 113.934 154.257 113.934 153.141 113.532C151.216 112.714 151.652 109.337 151.652 109.337C150.403 109.502 149.134 109.289 148.007 108.726C146.242 107.763 146.197 104.287 146.197 104.287C144.968 103.81 143.951 102.907 143.332 101.743C141.804 98.5573 144.684 94.0115 146.487 91.093C148.29 88.1745 156.136 81.6118 157.504 80.206L176.336 91.559C176.336 91.559 171.966 106.923 169.353 110.048C167.123 112.676 161.752 117.031 159.146 116.496Z"
                fill="#AD6359"
              />
              <path
                d="M156.976 113.547C159.987 111.308 162.164 108.306 164.509 105.426C164.563 105.365 164.464 105.28 164.41 105.349C162.118 108.237 159.268 110.628 156.854 113.417C156.785 113.493 156.9 113.608 156.976 113.547Z"
                fill="#263238"
              />
              <path
                d="M151.934 109.36C152.568 108.787 153.123 108.132 153.584 107.412C154.119 106.648 154.646 105.945 155.158 105.204C156.182 103.676 157.175 102.186 158.122 100.62C158.161 100.551 158.069 100.467 158.023 100.544C156.999 102.026 155.953 103.5 154.86 104.944C154.32 105.662 153.77 106.381 153.21 107.099C152.642 107.737 152.148 108.436 151.735 109.184C151.712 109.211 151.7 109.245 151.702 109.28C151.705 109.316 151.721 109.348 151.747 109.372C151.773 109.395 151.808 109.407 151.843 109.405C151.878 109.403 151.911 109.387 151.934 109.36V109.36Z"
                fill="#263238"
              />
              <path
                d="M146.242 104.165C146.808 103.638 147.278 103.018 147.633 102.331C148.091 101.644 148.542 100.956 149.008 100.269C149.925 98.9011 150.849 97.5259 151.82 96.1889C151.865 96.1277 151.766 96.0437 151.72 96.1125C150.727 97.4648 149.719 98.8094 148.741 100.169C148.259 100.842 147.778 101.506 147.304 102.186C146.815 102.761 146.432 103.418 146.174 104.127C146.158 104.165 146.212 104.188 146.242 104.165Z"
                fill="#263238"
              />
              <path
                d="M181.967 83.3537L161.82 70.3504C161.82 70.3504 170.751 55.185 175.404 52.5874C180.057 49.9898 198.767 48.8285 212.076 50.494C225.63 52.1901 225.561 57.6069 212.283 60.7851C199.004 63.9633 190.325 67.2256 190.211 67.5847C190.096 67.9438 181.967 83.3537 181.967 83.3537Z"
                fill="#FFC727"
              />
              <path
                d="M183.434 81.0235C184.618 78.8995 190.31 67.6993 190.47 67.6229C190.799 67.4625 195.948 65.6518 197.476 65.117C198.775 64.6586 200.081 64.2231 201.388 63.7953C202.465 63.6959 203.542 63.5966 204.604 63.398C204.62 63.398 204.636 63.3915 204.647 63.3801C204.659 63.3686 204.665 63.3531 204.665 63.3369C204.665 63.3207 204.659 63.3051 204.647 63.2936C204.636 63.2822 204.62 63.2757 204.604 63.2757C203.86 63.2901 203.117 63.3539 202.381 63.4667C203.817 63.0007 205.254 62.5423 206.682 62.0686C206.682 62.0686 206.682 62.0151 206.682 62.0228C203.481 62.7409 190.218 66.8895 190.172 67.0728C190.126 67.2562 183.38 80.5269 183.296 80.8248C183.273 80.9089 183.396 81.0846 183.434 81.0235Z"
                fill="#263238"
              />
              <path
                d="M182.632 77.532C182.693 77.5702 182.754 77.4632 182.693 77.425C177.251 73.6223 171.607 70.118 165.786 66.9276C165.771 66.9231 165.755 66.9235 165.741 66.929C165.726 66.9345 165.714 66.9447 165.706 66.9579C165.698 66.9711 165.695 66.9866 165.697 67.0019C165.699 67.0172 165.706 67.0314 165.717 67.0423C171.159 70.8452 176.806 74.3471 182.632 77.532V77.532Z"
                fill="#263238"
              />
              <path
                d="M215.033 50.9601C215.033 50.9601 218.486 63.4668 223.635 64.8267C228.785 66.1866 230.947 60.8692 230.947 60.8692C230.947 60.8692 225.003 52.1061 215.033 50.9601Z"
                fill="#AD6359"
              />
              <path
                d="M221.053 53.764C220.946 54.5662 222.657 60.724 226.103 61.8547C227.226 62.2214 229.495 56.1782 229.495 56.1782L229.77 55.7656L233.537 50.0586L227.998 42.5637L227.173 41.5399C227.173 41.5399 226.241 43.1673 225.11 45.2072L224.949 45.4975C224.88 45.6062 224.816 45.7184 224.758 45.8336C224.583 46.1316 224.407 46.4448 224.239 46.7581C224.071 47.0713 223.979 47.2241 223.857 47.4762L223.46 48.2402C222.536 50.0262 221.732 51.8715 221.053 53.764V53.764Z"
                fill="#AD6359"
              />
              <path
                d="M225.11 45.2072C225.071 47.2002 225.468 49.1778 226.273 51.0015C227.078 52.8252 228.272 54.4511 229.77 55.7656L233.537 50.0586L227.998 42.5637L227.173 41.5399C227.173 41.5399 226.241 43.152 225.11 45.2072Z"
                fill="#263238"
              />
              <path
                d="M245.746 39.3931C246.785 51.3574 239.741 53.3285 237.158 53.55C234.813 53.7563 226.814 54.146 224.537 42.3498C222.26 30.5536 227.494 26.3058 232.827 25.5418C238.159 24.7778 244.699 27.4212 245.746 39.3931Z"
                fill="#AD6359"
              />
              <path
                d="M240 45.444C239.71 45.9651 239.292 46.4041 238.786 46.7199C238.502 46.8785 238.177 46.9478 237.854 46.9185C237.151 46.8421 237.036 46.2233 237.09 45.6656C237.113 45.3736 237.175 45.086 237.273 44.8099C238.093 45.3035 239.047 45.5254 240 45.444Z"
                fill="#263238"
              />
              <path
                d="M238.786 46.7275C238.502 46.8861 238.177 46.9554 237.854 46.9261C237.151 46.8497 237.036 46.2309 237.09 45.6732C237.449 45.6341 237.812 45.7167 238.119 45.9078C238.427 46.0989 238.661 46.3875 238.786 46.7275V46.7275Z"
                fill="#FF9BBC"
              />
              <path
                d="M242.277 37.72C242.01 37.8116 241.743 37.8575 241.475 37.9262C241.201 38.0374 240.899 38.0588 240.612 37.9874C240.526 37.9452 240.457 37.8757 240.416 37.7899C240.374 37.7041 240.363 37.6069 240.383 37.5137C240.445 37.3367 240.554 37.1796 240.698 37.0587C240.842 36.9378 241.015 36.8575 241.2 36.8261C241.569 36.7082 241.969 36.7299 242.323 36.8872C242.401 36.928 242.465 36.9904 242.509 37.0668C242.552 37.1433 242.573 37.2306 242.568 37.3183C242.563 37.4061 242.533 37.4906 242.482 37.5618C242.43 37.633 242.359 37.6879 242.277 37.72V37.72Z"
                fill="#263238"
              />
              <path
                d="M233.995 38.2318C234.255 38.1388 234.511 38.0316 234.759 37.9109C235.046 37.8361 235.299 37.6665 235.477 37.4296C235.521 37.3456 235.535 37.2493 235.517 37.1564C235.499 37.0635 235.45 36.9794 235.378 36.9177C235.22 36.8145 235.038 36.7558 234.85 36.7477C234.661 36.7397 234.474 36.7826 234.308 36.8719C233.937 37.0099 233.632 37.2827 233.453 37.6359C233.426 37.7138 233.42 37.7977 233.437 37.8785C233.453 37.9594 233.491 38.0342 233.547 38.0953C233.602 38.1563 233.673 38.2012 233.752 38.2252C233.831 38.2493 233.915 38.2515 233.995 38.2318V38.2318Z"
                fill="#263238"
              />
              <path
                d="M235.722 40.5238C235.722 40.5238 235.661 40.5697 235.669 40.6002C235.783 41.4101 235.783 42.3574 235.073 42.7089C235.073 42.7089 235.073 42.7624 235.073 42.7547C235.974 42.5332 235.928 41.2726 235.722 40.5238Z"
                fill="#263238"
              />
              <path
                d="M234.904 39.7598C233.583 39.8056 233.774 42.4338 234.996 42.3956C236.218 42.3574 236.005 39.714 234.904 39.7598Z"
                fill="#263238"
              />
              <path
                d="M234.4 39.9355C234.186 40.096 233.98 40.3787 233.697 40.4245C233.414 40.4703 233.117 40.2182 232.895 39.9737H232.849C232.849 40.478 233.109 40.9822 233.659 41.0204C234.209 41.0586 234.476 40.5773 234.568 40.0654C234.576 39.9967 234.484 39.8668 234.4 39.9355Z"
                fill="#263238"
              />
              <path
                d="M240.742 39.798C240.742 39.798 240.803 39.798 240.803 39.8592C240.803 40.6843 241.001 41.6164 241.758 41.8379V41.8838C240.841 41.815 240.635 40.5773 240.742 39.798Z"
                fill="#263238"
              />
              <path
                d="M241.414 38.8965C242.72 38.7132 242.987 41.3337 241.78 41.5094C240.573 41.6851 240.313 39.0493 241.414 38.8965Z"
                fill="#263238"
              />
              <path
                d="M241.979 39.0111C242.201 39.1257 242.43 39.3626 242.682 39.3549C242.934 39.3473 243.156 39.034 243.309 38.7437C243.309 38.7437 243.309 38.7437 243.354 38.7437C243.416 39.248 243.309 39.7828 242.835 39.9279C242.361 40.0731 242.033 39.6682 241.865 39.1639C241.834 39.1104 241.888 38.9653 241.979 39.0111Z"
                fill="#263238"
              />
              <path
                d="M240.031 43.7326C240.031 43.7326 240.306 44.9397 240.352 45.5127C240.352 45.5662 240.222 45.6044 240.023 45.6273C239.541 45.7635 239.031 45.7642 238.548 45.6294C238.066 45.4946 237.63 45.2296 237.288 44.8633C237.242 44.8175 237.288 44.7487 237.372 44.7793C238.147 45.2171 239.041 45.3939 239.924 45.2835C239.924 45.1231 239.389 43.236 239.481 43.2284C239.93 43.23 240.377 43.2917 240.81 43.4117C240.314 40.8905 239.427 38.4687 238.977 35.9475C238.977 35.8558 239.091 35.8176 239.122 35.894C240.15 38.4643 240.918 41.1313 241.414 43.8549C241.49 44.1452 240.268 43.809 240.031 43.7326Z"
                fill="#263238"
              />
              <path
                d="M225.561 42.9075C227.509 42.9075 227.639 38.8125 227.639 38.8125C227.639 38.8125 231.574 38.5298 232.445 32.7692C232.461 34.475 231.978 36.1483 231.054 37.5824C231.054 37.5824 237.93 36.3142 240.413 30.2939C240.413 30.2939 239.473 33.3499 238.465 34.473C240.185 33.8003 241.626 32.564 242.552 30.9662C242.552 30.9662 244.019 34.2285 245.02 35.0765C245.02 35.0765 243.813 22.9671 232.666 25.1445C232.666 25.1445 225.668 26.1454 223.559 31.9136C221.451 37.6818 225.561 42.9075 225.561 42.9075Z"
                fill="#263238"
              />
              <path
                d="M226.913 42.9457C226.913 42.9457 224.468 39.0722 222.726 39.8897C220.984 40.7072 222.726 46.2615 224.652 47.1019C224.896 47.2268 225.163 47.3011 225.436 47.3201C225.71 47.3391 225.985 47.3026 226.244 47.2126C226.503 47.1227 226.741 46.9812 226.944 46.7967C227.147 46.6123 227.311 46.3886 227.425 46.1392L226.913 42.9457Z"
                fill="#AD6359"
              />
              <path
                d="M223.253 41.5017C223.253 41.5017 223.215 41.5017 223.253 41.5552C224.621 42.1817 225.301 43.5187 225.752 44.8863C225.676 44.7426 225.571 44.6168 225.442 44.5175C225.314 44.4182 225.166 44.3476 225.008 44.3107C224.85 44.2737 224.686 44.2712 224.527 44.3033C224.368 44.3353 224.217 44.4013 224.086 44.4966C224.048 44.4966 224.086 44.5807 224.124 44.573C224.374 44.5085 224.638 44.5223 224.88 44.6125C225.122 44.7026 225.33 44.8649 225.477 45.0773C225.721 45.4349 225.923 45.8194 226.08 46.2233C226.141 46.3455 226.37 46.292 226.325 46.1469C226.432 44.3285 225.163 41.7691 223.253 41.5017Z"
                fill="#263238"
              />
              <path
                d="M222.107 51.9991C221.695 50.5857 219.815 53.2521 220.855 55.0551C222.383 57.7138 225.484 61.0219 226.203 61.1213C226.921 61.2206 229.755 58.4778 230.122 57.8513C230.489 57.2249 229.992 55.6587 229.74 55.7733C229.488 55.8879 227.012 58.8751 226.684 58.9897C226.355 59.1043 223.001 55.0475 222.107 51.9991Z"
                fill="#455A64"
              />
              <path
                d="M116.141 226.527L120.526 227.345L121.504 231.967L122.482 227.345L126.867 226.527L122.505 225.465L121.504 221.095L120.503 225.465L116.141 226.527Z"
                fill="#FFC727"
              />
              <path
                d="M149.26 36.0315L153.645 36.8414L154.631 41.4636L155.609 36.8414L159.994 36.0239L155.624 34.9619L154.631 30.5918L153.63 34.9619L149.26 36.0315Z"
                fill="#FFC727"
              />
              <path
                d="M275.305 183.3L279.69 184.11L280.668 188.732L281.646 184.11L286.031 183.3L281.669 182.231L280.668 177.868L279.667 182.231L275.305 183.3Z"
                fill="#FFC727"
              />
              <path
                d="M234.568 133.518L238.954 134.328L239.932 138.958L240.91 134.328L245.295 133.518L240.932 132.448L239.932 128.086L238.931 132.448L234.568 133.518Z"
                fill="#FFC727"
              />
              <path
                d="M51.873 133.518L54.3255 133.976L54.8679 136.559L55.418 133.976L57.8705 133.518L55.4256 132.922L54.8679 130.485L54.3102 132.922L51.873 133.518Z"
                fill="#FFC727"
              />
              <path
                d="M285.924 119.162L288.377 119.621L288.927 122.203L289.469 119.621L291.922 119.162L289.485 118.566L288.927 116.129L288.361 118.566L285.924 119.162Z"
                fill="#FFC727"
              />
              <path
                d="M117.218 48.5535L119.67 49.0119L120.22 51.5942L120.763 49.0119L123.215 48.5535L120.778 47.9575L120.22 45.5204L119.663 47.9575L117.218 48.5535Z"
                fill="#FFC727"
              />
              <path
                d="M66.0146 180L68.4671 180.45L69.0172 183.033L69.5596 180.45L72.012 180L69.5672 179.396L69.0172 176.959L68.4518 179.396L66.0146 180Z"
                fill="#FFC727"
              />
              <path
                d="M24.0786 79.0141L26.5311 79.4649L27.0735 82.0472L27.6236 79.4649L30.076 79.0141L27.6312 78.4182L27.0735 75.9734L26.5158 78.4182L24.0786 79.0141Z"
                fill="#FFC727"
              />
              <path
                d="M95.3901 82.0549L97.8426 82.5056L98.3927 85.088L98.9427 82.5056L101.395 82.0472L98.9504 81.4513L98.3927 79.0142L97.8349 81.4513L95.3901 82.0549Z"
                fill="#FFC727"
              />
              <path
                d="M222.062 29.7744L224.506 30.2327L225.056 32.8151L225.606 30.2327L228.059 29.7744L225.614 29.1784L225.056 26.7413L224.499 29.1784L222.062 29.7744Z"
                fill="#FFC727"
              />
              <path
                d="M255.112 69.7697L257.557 70.2281L258.107 72.8105L258.657 70.2281L261.102 69.7697L258.665 69.1738L258.107 66.7366L257.549 69.1738L255.112 69.7697Z"
                fill="#FFC727"
              />
              <path
                d="M217.531 199.451L219.984 199.902L220.534 202.492L221.076 199.902L223.529 199.451L221.091 198.855L220.534 196.41L219.968 198.855L217.531 199.451Z"
                fill="#FFC727"
              />
              <path
                d="M98.6143 183.568C98.8028 183.568 98.9835 183.642 99.1167 183.776C99.25 183.909 99.3248 184.09 99.3248 184.278C99.3248 184.467 99.25 184.647 99.1167 184.781C98.9835 184.914 98.8028 184.989 98.6143 184.989C98.4259 184.989 98.2452 184.914 98.1119 184.781C97.9787 184.647 97.9038 184.467 97.9038 184.278C97.9038 184.09 97.9787 183.909 98.1119 183.776C98.2452 183.642 98.4259 183.568 98.6143 183.568V183.568Z"
                fill="#FFC727"
              />
              <path
                d="M100.395 95.104C100.583 95.104 100.764 95.1789 100.897 95.3121C101.03 95.4453 101.105 95.6261 101.105 95.8145C101.105 96.0029 101.03 96.1837 100.897 96.3169C100.764 96.4502 100.583 96.525 100.395 96.525C100.206 96.525 100.025 96.4502 99.8922 96.3169C99.7589 96.1837 99.6841 96.0029 99.6841 95.8145C99.6841 95.6261 99.7589 95.4453 99.8922 95.3121C100.025 95.1789 100.206 95.104 100.395 95.104V95.104Z"
                fill="#FFC727"
              />
              <path
                d="M198.828 42.9686C199.003 42.9868 199.165 43.0691 199.283 43.1996C199.4 43.3302 199.465 43.4996 199.465 43.6753C199.465 43.851 199.4 44.0205 199.283 44.151C199.165 44.2815 199.003 44.3638 198.828 44.382C198.654 44.3638 198.492 44.2815 198.374 44.151C198.257 44.0205 198.191 43.851 198.191 43.6753C198.191 43.4996 198.257 43.3302 198.374 43.1996C198.492 43.0691 198.654 42.9868 198.828 42.9686V42.9686Z"
                fill="#FFC727"
              />
              <path
                d="M235.775 118.452C235.964 118.452 236.145 118.527 236.278 118.66C236.411 118.793 236.486 118.974 236.486 119.162C236.486 119.351 236.411 119.532 236.278 119.665C236.145 119.798 235.964 119.873 235.775 119.873C235.587 119.873 235.406 119.798 235.273 119.665C235.14 119.532 235.065 119.351 235.065 119.162C235.065 118.974 235.14 118.793 235.273 118.66C235.406 118.527 235.587 118.452 235.775 118.452V118.452Z"
                fill="#FFC727"
              />
              <path
                d="M261.538 159.28C261.726 159.28 261.907 159.355 262.04 159.488C262.173 159.621 262.248 159.802 262.248 159.991C262.248 160.179 262.173 160.36 262.04 160.493C261.907 160.626 261.726 160.701 261.538 160.701C261.349 160.701 261.169 160.626 261.035 160.493C260.902 160.36 260.827 160.179 260.827 159.991C260.827 159.802 260.902 159.621 261.035 159.488C261.169 159.355 261.349 159.28 261.538 159.28V159.28Z"
                fill="#FFC727"
              />
              <path
                d="M286.94 151.434C287.074 151.434 287.202 151.487 287.297 151.581C287.391 151.676 287.445 151.804 287.445 151.938C287.445 152.072 287.391 152.2 287.297 152.294C287.202 152.389 287.074 152.442 286.94 152.442C286.807 152.442 286.678 152.389 286.584 152.294C286.489 152.2 286.436 152.072 286.436 151.938C286.436 151.804 286.489 151.676 286.584 151.581C286.678 151.487 286.807 151.434 286.94 151.434V151.434Z"
                fill="#FFC727"
              />
              <path
                d="M248.733 60.617C248.866 60.617 248.995 60.6702 249.089 60.7647C249.184 60.8593 249.237 60.9875 249.237 61.1213C249.237 61.255 249.184 61.3833 249.089 61.4778C248.995 61.5724 248.866 61.6255 248.733 61.6255C248.599 61.6255 248.471 61.5724 248.376 61.4778C248.282 61.3833 248.229 61.255 248.229 61.1213C248.229 60.9875 248.282 60.8593 248.376 60.7647C248.471 60.6702 248.599 60.617 248.733 60.617V60.617Z"
                fill="#FFC727"
              />
              <path
                d="M172.463 115.197C172.585 115.212 172.697 115.272 172.779 115.364C172.86 115.456 172.905 115.575 172.905 115.698C172.905 115.821 172.86 115.939 172.779 116.032C172.697 116.124 172.585 116.183 172.463 116.198C172.341 116.183 172.228 116.124 172.147 116.032C172.065 115.939 172.021 115.821 172.021 115.698C172.021 115.575 172.065 115.456 172.147 115.364C172.228 115.272 172.341 115.212 172.463 115.197V115.197Z"
                fill="#FFC727"
              />
              <path
                d="M236.196 214.899C236.329 214.899 236.458 214.952 236.552 215.047C236.647 215.141 236.7 215.27 236.7 215.403C236.7 215.537 236.647 215.665 236.552 215.76C236.458 215.855 236.329 215.908 236.196 215.908C236.062 215.908 235.934 215.855 235.839 215.76C235.745 215.665 235.691 215.537 235.691 215.403C235.691 215.27 235.745 215.141 235.839 215.047C235.934 214.952 236.062 214.899 236.196 214.899V214.899Z"
                fill="#FFC727"
              />
              <path
                d="M156.762 205.548C157.107 205.574 157.428 205.728 157.663 205.981C157.897 206.234 158.028 206.567 158.028 206.912C158.028 207.257 157.897 207.589 157.663 207.842C157.428 208.095 157.107 208.25 156.762 208.275C156.418 208.25 156.097 208.095 155.862 207.842C155.627 207.589 155.497 207.257 155.497 206.912C155.497 206.567 155.627 206.234 155.862 205.981C156.097 205.728 156.418 205.574 156.762 205.548Z"
                fill="#FFC727"
              />
              <path
                d="M69.0093 139.462C69.37 139.462 69.7159 139.605 69.971 139.86C70.226 140.115 70.3693 140.461 70.3693 140.822C70.3693 141.182 70.226 141.528 69.971 141.783C69.7159 142.038 69.37 142.182 69.0093 142.182C68.6487 142.182 68.3028 142.038 68.0477 141.783C67.7927 141.528 67.6494 141.182 67.6494 140.822C67.6494 140.461 67.7927 140.115 68.0477 139.86C68.3028 139.605 68.6487 139.462 69.0093 139.462V139.462Z"
                fill="#FFC727"
              />
              <path
                d="M140.222 26.4204C140.582 26.4204 140.928 26.5637 141.183 26.8187C141.438 27.0737 141.582 27.4196 141.582 27.7803C141.582 28.141 141.438 28.4869 141.183 28.7419C140.928 28.9969 140.582 29.1402 140.222 29.1402C139.861 29.1402 139.515 28.9969 139.26 28.7419C139.005 28.4869 138.862 28.141 138.862 27.7803C138.862 27.4196 139.005 27.0737 139.26 26.8187C139.515 26.5637 139.861 26.4204 140.222 26.4204V26.4204Z"
                fill="#FFC727"
              />
              <path
                d="M214.322 22.7455C214.666 22.7713 214.988 22.9262 215.222 23.1791C215.457 23.432 215.587 23.7643 215.587 24.1093C215.587 24.4543 215.457 24.7866 215.222 25.0395C214.988 25.2924 214.666 25.4473 214.322 25.473C213.978 25.4473 213.656 25.2924 213.422 25.0395C213.187 24.7866 213.057 24.4543 213.057 24.1093C213.057 23.7643 213.187 23.432 213.422 23.1791C213.656 22.9262 213.978 22.7713 214.322 22.7455Z"
                fill="#FFC727"
              />
              <path
                d="M192.296 215.747C192.64 215.773 192.962 215.928 193.197 216.181C193.431 216.434 193.562 216.766 193.562 217.111C193.562 217.456 193.431 217.788 193.197 218.041C192.962 218.294 192.64 218.449 192.296 218.475C191.952 218.449 191.631 218.294 191.396 218.041C191.161 217.788 191.031 217.456 191.031 217.111C191.031 216.766 191.161 216.434 191.396 216.181C191.631 215.928 191.952 215.773 192.296 215.747Z"
                fill="#FFC727"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="contents">
        <div className="image-container">
          <svg
            width="461"
            height="461"
            viewBox="0 0 461 461"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.563 325.687C39.563 325.687 109.239 285.636 152.443 285.636C204.334 285.636 254.785 303.486 273.871 309.377C324.111 324.857 421.391 325.687 421.391 325.687H39.563Z"
              fill="#DBDBDB"
            />
            <path
              d="M421.437 325.687C421.437 325.687 381.874 302.416 337.185 302.416C305.984 302.416 261.212 307.238 219.049 315.149C202.988 318.164 119.408 325.715 119.408 325.715L421.437 325.687Z"
              fill="#C7C7C7"
            />
            <path
              d="M419.436 92.3752H331.312C331.312 92.3752 340.052 68.5138 353.495 68.5138C366.938 68.5138 371.16 84.9807 371.16 84.9807C371.16 84.9807 380.233 76.0281 387.683 76.0281C395.132 76.0281 401.614 87.8574 401.614 87.8574C401.614 87.8574 412.134 81.4956 419.436 92.3752Z"
              fill="#EBEBEB"
            />
            <path
              d="M300.572 79.5963H259.386C259.386 79.5963 268.606 66.2641 275.835 66.2641C283.063 66.2641 285.23 75.1522 285.23 75.1522C285.23 75.1522 290.347 71.0124 295.086 71.75C299.825 72.4876 300.572 79.5963 300.572 79.5963Z"
              fill="#EBEBEB"
            />
            <path
              d="M121.778 135.534H41.564C41.564 135.534 52.5542 111.009 64.3005 109.478C76.0468 107.948 81.671 127.697 81.671 127.697C81.671 127.697 89.2498 120.717 95.2151 120.717C101.18 120.717 105.772 129.937 105.772 129.937C105.772 129.937 117.694 123.613 121.778 135.534Z"
              fill="#EBEBEB"
            />
            <path
              d="M172.847 56.9151H118.661C118.661 56.9151 127.964 39.1481 138.069 38.89C148.174 38.6318 153.467 52.3419 153.467 52.3419C153.467 52.3419 169.178 39.7382 172.847 56.9151Z"
              fill="#EBEBEB"
            />
            <path
              d="M188.088 146.036H151.484C151.484 146.036 157.763 134.05 164.586 133.865C171.409 133.681 174.977 142.91 174.977 142.91C174.977 142.91 185.58 134.428 188.088 146.036Z"
              fill="#EBEBEB"
            />
            <path
              d="M323.622 142.043H287.064C287.064 142.043 293.352 130.057 300.166 129.882C306.98 129.707 310.566 138.955 310.566 138.955C310.566 138.955 321.16 130.445 323.622 142.043Z"
              fill="#EBEBEB"
            />
            <path
              d="M199.346 303.605C197.76 305.191 179.301 305.901 172.608 305.901C165.914 305.901 147.437 305.191 145.87 303.605C144.302 302.02 166.642 179.329 172.608 179.329C178.573 179.329 200.931 302.029 199.346 303.605Z"
              fill="#455A64"
            />
            <path
              d="M199.714 272.34C195.16 274.083 178.259 280.961 174.617 282.971C174.617 282.197 174.617 281.431 174.617 280.666C178.702 278.26 182.786 275.89 186.871 273.511C191.26 270.957 195.971 268.68 200.065 265.674C200.258 265.527 200.148 265.121 199.871 265.232C195.362 267.076 191.177 269.897 186.963 272.359C182.75 274.821 178.665 277.301 174.608 279.836C174.608 273.954 174.584 268.075 174.534 262.198C181.194 259.436 187.631 256.162 193.786 252.407C193.998 252.287 193.86 251.9 193.611 252.001C187.022 254.652 180.642 257.796 174.525 261.405C174.525 258.344 174.525 255.293 174.461 252.232C174.295 236.493 174.267 220.727 173.861 204.988C177.872 202.96 181.993 201.18 185.995 199.152C186.262 199.014 186.078 198.553 185.792 198.663C181.735 200.249 177.817 202.13 173.806 203.891C173.585 195.759 173.281 187.645 172.783 179.532C172.773 179.484 172.747 179.442 172.709 179.411C172.671 179.38 172.624 179.364 172.575 179.364C172.527 179.364 172.48 179.38 172.442 179.411C172.404 179.442 172.378 179.484 172.368 179.532C171.805 194.616 171.851 209.709 172.036 224.802C167.887 221.492 163.461 218.56 159.239 215.352C159.073 215.222 158.916 215.499 159.082 215.619C163.498 218.984 167.629 222.709 172.054 226.056V228.61C167.555 226.554 162.991 224.645 158.446 222.691C158.086 222.543 157.773 223.05 158.132 223.225C162.742 225.447 167.352 227.716 172.073 229.808C172.183 237.286 172.312 244.763 172.405 252.232C172.58 265.287 172.866 278.343 173.142 291.389C164.666 287.062 156.125 282.885 147.52 278.859C147.188 278.702 146.902 279.163 147.234 279.348C155.649 284.163 164.32 288.518 173.207 292.394C173.437 303.246 173.668 314.089 173.806 324.931C173.823 325.055 173.884 325.169 173.978 325.251C174.072 325.333 174.193 325.379 174.318 325.379C174.443 325.379 174.564 325.333 174.658 325.251C174.752 325.169 174.813 325.055 174.83 324.931C174.673 311.101 174.654 297.271 174.617 283.441C179.098 282.335 196.017 275.088 200.037 273.106C200.452 272.912 200.157 272.174 199.714 272.34Z"
              fill="#37474F"
            />
            <path
              d="M167.251 299.779C169.095 301.623 190.817 302.462 198.71 302.462C206.602 302.462 228.306 301.642 230.168 299.779C232.031 297.917 205.744 153.661 198.71 153.661C191.675 153.661 165.389 297.917 167.251 299.779Z"
              fill="#37474F"
            />
            <path
              d="M166.817 263.019C172.174 265.066 192.043 273.161 196.321 275.512C196.321 274.59 196.321 273.668 196.321 272.801C191.539 269.98 186.739 267.177 181.92 264.393C176.766 261.387 171.225 258.713 166.421 255.173C166.181 255.007 166.31 254.518 166.633 254.656C171.935 256.86 176.858 260.142 181.8 263.037C186.742 265.932 191.518 268.846 196.331 271.824C196.331 264.909 196.358 257.997 196.414 251.088C188.585 247.837 181.018 243.991 173.779 239.582C173.53 239.434 173.696 238.973 173.981 239.093C181.728 242.214 189.23 245.912 196.423 250.157C196.423 246.561 196.423 242.965 196.497 239.37C196.699 220.865 196.736 202.333 197.207 183.819C192.495 181.45 187.645 179.347 182.943 176.959C182.63 176.803 182.851 176.268 183.174 176.397C187.959 178.241 192.56 180.472 197.243 182.528C197.502 172.976 197.861 163.434 198.442 153.9C198.442 153.834 198.468 153.771 198.515 153.724C198.562 153.678 198.625 153.651 198.691 153.651C198.757 153.651 198.82 153.678 198.867 153.724C198.914 153.771 198.94 153.834 198.94 153.9C199.595 171.63 199.539 189.379 199.318 207.127C204.195 203.227 209.405 199.751 214.365 196.008C214.559 195.86 214.743 196.183 214.559 196.331C209.368 200.277 204.509 204.629 199.299 208.593C199.299 209.598 199.299 210.603 199.299 211.599C204.592 209.183 209.958 206.934 215.305 204.647C215.72 204.463 216.098 205.062 215.674 205.265C210.225 207.883 204.795 210.539 199.281 213.01C199.152 221.796 199.004 230.592 198.894 239.37C198.691 254.721 198.35 270.063 198.027 285.414C208.015 280.362 218.074 275.444 228.204 270.662C228.591 270.478 228.923 271.022 228.545 271.243C218.647 276.904 208.451 282.026 197.999 286.585C197.732 299.337 197.465 312.088 197.299 324.839C197.299 324.998 197.236 325.15 197.123 325.263C197.011 325.375 196.858 325.438 196.699 325.438C196.54 325.438 196.388 325.375 196.276 325.263C196.163 325.15 196.1 324.998 196.1 324.839C196.275 308.575 196.303 292.311 196.349 276.047C191.084 274.747 171.188 266.228 166.458 263.895C165.96 263.692 166.301 262.816 166.817 263.019Z"
              fill="#455A64"
            />
            <path
              d="M104.315 316.43C106.583 318.699 132.999 319.703 142.606 319.703C152.213 319.703 178.619 318.699 180.887 316.43C183.155 314.162 151.208 138.613 142.606 138.613C134.004 138.613 102.047 314.162 104.315 316.43Z"
              fill="#37474F"
            />
            <path
              d="M103.79 271.695C110.308 274.184 134.483 284.031 139.748 286.899C139.748 285.802 139.748 284.704 139.748 283.598C133.921 280.168 128.081 276.76 122.23 273.373C115.951 269.685 109.211 266.458 103.356 262.152C103.071 261.949 103.227 261.359 103.624 261.525C110.078 264.208 116.071 268.191 122.064 271.723C128.057 275.254 133.884 278.794 139.748 282.418C139.748 274.003 139.781 265.588 139.849 257.173C130.321 253.221 121.111 248.542 112.3 243.177C111.995 242.993 112.198 242.44 112.549 242.587C121.977 246.382 131.106 250.882 139.858 256.049C139.858 251.669 139.904 247.299 139.951 242.919C140.19 220.395 140.236 197.843 140.808 175.318C135.082 172.423 129.172 169.878 123.447 166.965C123.069 166.781 123.336 166.117 123.742 166.273C129.55 168.542 135.156 171.243 140.854 173.742C141.168 162.124 141.61 150.507 142.32 138.899C142.332 138.829 142.369 138.765 142.424 138.719C142.479 138.673 142.548 138.648 142.62 138.648C142.691 138.648 142.761 138.673 142.815 138.719C142.87 138.765 142.907 138.829 142.919 138.899C143.722 160.474 143.657 182.077 143.38 203.679C149.318 198.931 155.652 194.745 161.701 190.144C161.931 189.969 162.162 190.365 161.922 190.541C155.606 195.344 149.696 200.683 143.362 205.468C143.362 206.685 143.362 207.902 143.316 209.156C149.77 206.215 156.288 203.476 162.788 200.683C163.305 200.47 163.757 201.199 163.24 201.448C156.611 204.629 150 207.902 143.288 210.861C143.141 221.566 142.956 232.261 142.818 242.947C142.578 261.627 142.163 280.306 141.767 298.977C153.919 292.83 166.16 286.853 178.49 281.044C178.96 280.823 179.412 281.487 178.905 281.754C166.862 288.64 154.455 294.87 141.739 300.415C141.407 315.942 141.085 331.459 140.882 346.976C140.882 347.169 140.805 347.355 140.668 347.491C140.532 347.628 140.347 347.705 140.153 347.705C139.96 347.705 139.775 347.628 139.638 347.491C139.502 347.355 139.425 347.169 139.425 346.976C139.637 327.181 139.674 307.386 139.72 287.599C133.266 286.014 109.1 275.613 103.347 272.847C102.739 272.488 103.154 271.455 103.79 271.695Z"
              fill="#455A64"
            />
            <path
              d="M208.547 316.43C210.816 318.699 237.222 319.703 246.829 319.703C256.436 319.703 282.851 318.699 285.11 316.43C287.369 314.162 255.394 138.613 246.829 138.613C238.264 138.613 206.279 314.162 208.547 316.43Z"
              fill="#37474F"
            />
            <path
              d="M208.012 271.695C214.54 274.184 238.715 284.031 243.97 286.899C243.97 285.802 243.97 284.704 243.97 283.598C238.137 280.168 232.298 276.76 226.452 273.373C220.173 269.685 213.434 266.458 207.588 262.152C207.302 261.949 207.459 261.359 207.856 261.525C214.31 264.208 220.293 268.191 226.296 271.723C232.298 275.254 238.116 278.794 243.97 282.418C243.97 274.003 244.007 265.588 244.081 257.173C234.552 253.223 225.341 248.544 216.532 243.177C216.227 242.993 216.43 242.44 216.78 242.587C226.208 246.384 235.337 250.884 244.09 256.049C244.09 251.669 244.09 247.299 244.182 242.919C244.422 220.395 244.468 197.843 245.04 175.318C239.305 172.423 233.404 169.879 227.679 166.965C227.301 166.781 227.559 166.117 227.964 166.273C233.782 168.542 239.379 171.243 245.086 173.742C245.39 162.124 245.833 150.507 246.543 138.899C246.555 138.829 246.592 138.765 246.647 138.719C246.701 138.673 246.771 138.648 246.842 138.648C246.914 138.648 246.983 138.673 247.038 138.719C247.093 138.765 247.13 138.829 247.142 138.899C247.953 160.474 247.88 182.077 247.612 203.679C253.55 198.931 259.875 194.745 265.923 190.144C266.154 189.969 266.384 190.365 266.154 190.541C259.838 195.344 253.928 200.683 247.585 205.468C247.585 206.685 247.585 207.902 247.538 209.156C253.992 206.215 260.511 203.476 267.02 200.683C267.527 200.47 267.988 201.199 267.463 201.448C260.834 204.629 254.232 207.902 247.52 210.861C247.363 221.566 247.179 232.261 247.041 242.947C246.801 261.627 246.386 280.306 245.989 298.977C258.141 292.83 270.386 286.853 282.722 281.044C283.192 280.823 283.598 281.487 283.137 281.754C271.09 288.639 258.68 294.868 245.962 300.415C245.63 315.942 245.307 331.459 245.114 346.976C245.093 347.156 245.007 347.323 244.872 347.444C244.737 347.565 244.562 347.632 244.381 347.632C244.199 347.632 244.024 347.565 243.889 347.444C243.754 347.323 243.668 347.156 243.648 346.976C243.86 327.181 243.897 307.386 243.952 287.599C237.544 286.014 213.332 275.613 207.579 272.847C206.97 272.488 207.385 271.455 208.012 271.695Z"
              fill="#455A64"
            />
            <path
              d="M363.01 318.035C359.746 321.299 321.714 322.746 307.874 322.746C294.035 322.746 256.003 321.299 252.739 318.035C249.475 314.771 295.538 61.94 307.874 61.94C320.211 61.94 366.274 314.771 363.01 318.035Z"
              fill="#455A64"
            />
            <path
              d="M363.775 253.605C354.38 257.192 319.565 271.372 312.042 275.503C312.042 273.917 312.042 272.331 312.042 270.745C320.438 265.828 328.856 260.911 337.295 255.993C346.331 250.729 356.04 246.036 364.467 239.84C364.882 239.536 364.651 238.687 364.079 238.918C354.795 242.79 346.165 248.525 337.498 253.605C328.831 258.686 320.478 263.747 312.042 269.012C312.005 256.897 311.953 244.779 311.885 232.657C325.457 227.218 339.084 219.952 351.531 212.493C351.964 212.235 351.678 211.433 351.171 211.645C337.931 217.113 324.175 223.557 311.848 231.007C311.802 224.701 311.774 218.403 311.71 212.106C311.359 179.661 311.295 147.179 310.474 114.734C318.726 110.575 327.227 106.897 335.479 102.748C336.023 102.48 335.636 101.531 335.064 101.752C326.683 105.025 318.625 108.897 310.41 112.512C309.958 95.7681 309.322 79.0431 308.298 62.3272C308.283 62.2243 308.232 62.1303 308.153 62.0623C308.074 61.9943 307.974 61.9569 307.87 61.9569C307.766 61.9569 307.665 61.9943 307.586 62.0623C307.508 62.1303 307.456 62.2243 307.441 62.3272C306.279 93.3986 306.381 124.507 306.768 155.615C298.212 148.792 289.102 142.753 280.399 136.133C280.057 135.875 279.726 136.447 280.067 136.696C289.167 143.62 297.677 151.291 306.805 158.197C306.805 159.949 306.805 161.71 306.869 163.461C297.594 159.229 288.19 155.283 278.813 151.263C278.084 150.95 277.43 152.01 278.177 152.361C287.719 156.971 297.234 161.581 306.897 165.932C307.118 181.339 307.386 196.746 307.579 212.143C307.939 239.038 308.501 265.932 309.101 292.827C291.601 283.976 273.969 275.371 256.205 267.011C255.523 266.689 254.942 267.638 255.606 268.025C272.956 277.944 290.829 286.919 309.147 294.911C309.617 317.26 310.069 339.609 310.364 361.959C310.388 362.222 310.51 362.466 310.705 362.644C310.901 362.822 311.155 362.92 311.419 362.92C311.683 362.92 311.938 362.822 312.133 362.644C312.329 362.466 312.45 362.222 312.475 361.959C312.162 333.46 312.115 304.951 312.042 276.443C321.262 274.166 356.141 259.23 364.421 255.145C365.287 254.739 364.679 253.264 363.775 253.605Z"
              fill="#37474F"
            />
            <path
              d="M37.5809 316.661C40.9462 320.026 80.1496 321.52 94.413 321.52C108.676 321.52 147.889 320.026 151.236 316.661C154.583 313.296 107.118 52.72 94.413 52.72C81.7078 52.72 34.2156 313.296 37.5809 316.661Z"
              fill="#455A64"
            />
            <path
              d="M36.7971 250.258C46.4781 253.946 82.3624 268.56 90.1072 272.82V267.924C81.4526 262.835 72.7797 257.773 64.0883 252.739C54.7669 247.317 44.7263 242.486 36.078 236.097C35.6538 235.783 35.8936 234.916 36.4744 235.175C46.054 239.167 54.9144 245.077 63.8763 250.314C72.8381 255.551 81.3942 260.815 90.1164 266.191C90.1532 253.701 90.2055 241.211 90.2731 228.721C76.2864 223.115 62.2351 215.628 49.3824 207.939C48.9306 207.671 49.2349 206.851 49.7512 207.063C63.3876 212.705 77.5772 219.344 90.3192 227.042C90.3192 220.588 90.393 214.061 90.4575 207.57C90.8171 174.138 90.8816 140.66 91.7299 107.219C83.229 102.932 74.4608 99.1427 65.96 94.8277C65.4068 94.5419 65.794 93.5738 66.3933 93.8043C75.0232 97.1696 83.3304 101.18 91.8036 104.868C92.2646 87.6177 92.9192 70.3763 93.9703 53.1533C93.9703 53.031 94.0189 52.9138 94.1053 52.8273C94.1918 52.7409 94.3091 52.6923 94.4313 52.6923C94.5536 52.6923 94.6708 52.7409 94.7573 52.8273C94.8438 52.9138 94.8923 53.031 94.8923 53.1533C96.0909 85.1744 95.9895 117.242 95.593 149.29C104.398 142.255 113.803 136.041 122.764 129.209C123.115 128.951 123.456 129.532 123.106 129.799C113.729 136.935 104.961 144.837 95.5562 151.927C95.5562 153.771 95.5562 155.541 95.4824 157.358C105.044 152.987 114.743 148.921 124.396 144.791C125.152 144.459 125.825 145.547 125.06 145.916C115.213 150.636 105.412 155.44 95.4455 159.893C95.2242 175.779 94.9569 191.656 94.7448 207.524C94.3852 235.248 93.8228 262.964 93.1866 290.679C111.221 281.563 129.394 272.691 147.704 264.061C148.396 263.729 149.005 264.715 148.313 265.112C130.429 275.344 112.005 284.602 93.1221 292.846C92.6334 315.896 92.2001 338.946 91.8589 361.95C91.8589 362.238 91.7443 362.515 91.5403 362.719C91.3363 362.923 91.0595 363.037 90.771 363.037C90.4824 363.037 90.2057 362.923 90.0017 362.719C89.7977 362.515 89.683 362.238 89.683 361.95C90.0057 332.575 90.0518 303.19 90.1348 273.816C80.6198 271.464 44.6894 256.076 36.1517 251.863C35.2389 251.429 35.8659 249.862 36.7971 250.258Z"
              fill="#37474F"
            />
            <path
              d="M322.7 321.225C325.733 324.258 361.074 325.604 373.926 325.604C386.779 325.604 422.119 324.258 425.153 321.225C428.186 318.191 385.387 83.3488 373.926 83.3488C362.466 83.3488 319.666 318.191 322.7 321.225Z"
              fill="#37474F"
            />
            <path
              d="M321.99 261.369C330.722 264.706 363.065 277.872 370.054 281.708C370.054 280.242 370.054 278.767 370.054 277.301C362.254 272.691 354.38 268.164 346.598 263.609C338.199 258.722 329.182 254.389 321.354 248.608C320.967 248.322 321.179 247.539 321.704 247.76C330.344 251.356 338.356 256.685 346.405 261.405C354.454 266.126 362.217 270.865 370.054 275.715C370.091 264.454 370.14 253.197 370.202 241.942C357.444 236.656 345.114 230.392 333.322 223.207C332.916 222.967 333.193 222.23 333.654 222.423C346.268 227.5 358.482 233.519 370.192 240.43C370.238 234.575 370.257 228.721 370.321 222.912C370.644 192.772 370.699 162.595 371.465 132.455C363.794 128.582 355.901 125.171 348.24 121.28C347.732 121.031 348.083 120.146 348.627 120.358C356.399 123.391 363.895 126.996 371.529 130.352C371.944 114.798 372.534 99.2533 373.484 83.7268C373.498 83.6309 373.547 83.5434 373.621 83.4801C373.694 83.4169 373.788 83.3821 373.885 83.3821C373.982 83.3821 374.076 83.4169 374.149 83.4801C374.223 83.5434 374.271 83.6309 374.286 83.7268C375.365 112.595 375.273 141.499 374.913 170.395C382.851 164.051 391.325 158.409 399.411 152.296C399.724 152.056 400.028 152.582 399.715 152.821C391.26 159.275 383.359 166.384 374.876 172.792L374.821 177.688C383.432 173.751 392.173 170.091 400.877 166.356C401.559 166.061 402.167 167.039 401.476 167.371C392.606 171.63 383.764 175.964 374.738 179.974C374.535 194.293 374.295 208.603 374.102 222.912C373.779 247.898 373.226 272.884 372.7 297.871C388.952 289.646 405.333 281.656 421.843 273.899C422.47 273.604 423.014 274.489 422.396 274.821C406.264 284.041 389.644 292.379 372.608 299.798C372.165 320.561 371.741 341.288 371.474 362.088C371.45 362.332 371.337 362.558 371.155 362.723C370.974 362.888 370.737 362.979 370.492 362.979C370.247 362.979 370.01 362.888 369.829 362.723C369.647 362.558 369.534 362.332 369.51 362.088C369.805 335.608 369.851 309.128 369.916 282.639C361.341 280.518 328.951 266.652 321.253 262.853C320.589 262.42 321.151 261.046 321.99 261.369Z"
              fill="#455A64"
            />
            <path
              d="M35.626 325.687L84.3445 325.466L133.063 325.383L230.5 325.226L327.937 325.383L376.655 325.466L425.374 325.687L376.655 325.918L327.937 325.992L230.5 326.148L133.063 325.992L84.3445 325.909L35.626 325.687Z"
              fill="#263238"
            />
            <path
              d="M237.166 192.283C236.631 193.205 183.017 202.185 180.361 201.761C180.232 201.743 180.105 201.709 179.983 201.66C176.627 200.563 160.28 188.862 159.036 187.83C155.975 185.377 164.835 164.365 168.025 160.677C170.146 158.224 174.479 156.841 174.479 156.841C174.479 156.841 182.556 119.288 189.333 110.806C191.029 108.676 224.369 103.845 230.675 105.836C233.376 106.694 240.374 112.29 240.688 113.406C241.038 115.084 237.71 191.38 237.166 192.283Z"
              fill="#FFC727"
            />
            <path
              opacity="0.4"
              d="M237.166 192.283C236.631 193.205 183.017 202.185 180.361 201.761C180.232 201.743 180.105 201.709 179.983 201.66C176.627 200.563 160.28 188.862 159.036 187.83C155.975 185.377 164.835 164.365 168.025 160.677C170.146 158.224 174.479 156.841 174.479 156.841C174.479 156.841 182.556 119.288 189.333 110.806C191.029 108.676 224.369 103.845 230.675 105.836C233.376 106.694 240.374 112.29 240.688 113.406C241.038 115.084 237.71 191.38 237.166 192.283Z"
              fill="black"
            />
            <path
              opacity="0.4"
              d="M237.166 192.283C236.631 193.205 183.017 202.185 180.361 201.761C180.232 201.743 180.105 201.709 179.983 201.66C183.441 187.065 199.714 118.56 200.35 118.053C200.987 117.546 232.962 113.83 240.669 113.443C241.038 115.084 237.71 191.38 237.166 192.283Z"
              fill="black"
            />
            <path
              d="M241.887 102.277C241.656 107.146 239.96 111.083 237.977 111.497L192.799 115.48L193.657 96.6994L237.793 92.8177C238.009 92.7274 238.242 92.6864 238.475 92.6979H238.715H238.872V92.744C240.771 93.3525 242.099 97.4185 241.887 102.277Z"
              fill="#FFC727"
            />
            <path
              d="M197.068 106.279C196.828 111.461 194.901 115.591 192.762 115.499C190.623 115.407 189.074 111.119 189.323 105.929C189.572 100.738 191.49 96.6164 193.629 96.7086C195.768 96.8008 197.308 101.088 197.068 106.279Z"
              fill="#FFC727"
            />
            <path
              d="M196.967 101.485C196.677 100.706 196.323 99.9536 195.907 99.2349C195.583 98.5318 195.044 97.9503 194.367 97.5753C194.284 97.5753 194.192 97.6398 194.265 97.7043C195.4 98.7001 195.971 100.47 196.414 101.881C196.905 103.424 197.13 105.039 197.078 106.657C197.023 109.649 195.86 112.514 193.814 114.697C193.74 114.761 193.814 114.872 193.934 114.807C195.169 113.814 196.162 112.553 196.838 111.119C197.49 109.669 197.838 108.1 197.861 106.509C197.867 104.794 197.564 103.092 196.967 101.485Z"
              fill="#263238"
            />
            <path
              d="M230.592 126.369C246.487 140.411 280.942 157.662 286.742 150.812C293.933 142.384 287.249 116.559 285.995 113.756C284.584 110.594 258.455 118.145 260.28 121.363C261.368 123.262 262.06 125.291 261.875 125.291C260.031 125.291 255.421 122.432 237.654 116.771C227.789 113.618 220.072 117.094 230.592 126.369Z"
              fill="#EB9481"
            />
            <path
              d="M261.921 125.217C262.733 127.199 263.406 129.2 264.143 131.173C264.881 133.146 265.665 135.101 266.439 137.101C265.21 135.344 264.221 133.431 263.498 131.413C262.753 129.41 262.224 127.332 261.921 125.217Z"
              fill="#263238"
            />
            <path
              d="M279.855 96.2384C283.257 100.848 286.511 112.991 286.17 116.227C285.829 119.464 265.361 125.687 262.641 123.76C259.921 121.833 249.687 105.421 249.927 99.576C250.166 93.7305 276.333 91.4624 279.855 96.2384Z"
              fill="#EB9481"
            />
            <path
              d="M250.221 86.3914C248.497 84.363 241.859 79.1998 240.079 80.7211C238.3 82.2424 242.062 86.8801 243.638 88.7148C246.884 92.4951 249.17 98.9859 250.249 102.148C251.328 105.311 257.505 99.5576 257.505 99.5576C257.505 99.5576 254.684 91.6376 250.221 86.3914Z"
              fill="#EB9481"
            />
            <path
              d="M253.928 105.827C253.928 105.827 255.652 111.451 259.008 111.534C262.364 111.617 261.774 106.814 261.774 106.473C261.876 106.768 263.618 111.894 266.965 111.627C270.478 111.341 269.187 106.62 269.104 106.316C269.279 106.574 271.677 109.875 274.194 109.082C278.518 107.726 272.645 99.115 273.474 95.5376C273.474 95.5376 279.698 96.2568 279.882 96.2384C279.882 96.2384 274.461 87.9404 269.574 87.0829C268.868 86.9456 268.135 87.0535 267.498 87.3888C266.861 87.7241 266.358 88.2667 266.071 88.9269C266.071 88.9269 264.614 86.0595 261.949 86.1609C260.576 86.2347 259.478 88.4843 259.478 88.4843C259.115 87.8529 258.584 87.3338 257.945 86.9841C257.306 86.6344 256.583 86.4676 255.855 86.502C253.965 86.7049 252.895 88.9822 252.739 89.8766C251.494 96.81 253.928 105.827 253.928 105.827Z"
              fill="#EB9481"
            />
            <path
              d="M252.932 89.2957H252.849C251.506 94.8537 251.879 100.688 253.919 106.03C253.992 106.196 254.297 106.159 254.25 105.965C253.007 100.502 252.563 94.8868 252.932 89.2957Z"
              fill="#263238"
            />
            <path
              d="M259.414 88.4382C259.414 88.3829 259.312 88.3737 259.294 88.4382C257.864 94.5886 258.682 101.048 261.599 106.648C261.71 106.841 261.995 106.906 261.894 106.648C260.087 102.785 258.99 93.6844 259.414 88.4382Z"
              fill="#263238"
            />
            <path
              d="M269.436 106.629C266.67 101.097 265.877 95.2887 265.969 89.1666C265.969 89.0929 265.859 89.0929 265.84 89.1666C264.983 92.1447 265.333 96.0447 265.84 99.0597C266.281 101.868 267.447 104.512 269.224 106.731C269.316 106.823 269.491 106.749 269.436 106.629Z"
              fill="#263238"
            />
            <path
              d="M253.928 105.827C254.361 106.873 254.886 107.879 255.495 108.833C256.055 109.781 256.857 110.564 257.819 111.101C258.269 111.329 258.79 111.379 259.275 111.239C259.763 111.092 260.204 110.822 260.557 110.456C260.881 110.063 261.118 109.606 261.253 109.115C261.388 108.624 261.418 108.11 261.341 107.607L261.073 105.136L262.189 107.358C262.674 108.353 263.318 109.263 264.097 110.05C264.436 110.435 264.853 110.743 265.321 110.955C265.788 111.166 266.295 111.276 266.808 111.276C267.284 111.276 267.746 111.111 268.115 110.811C268.484 110.51 268.739 110.092 268.836 109.626C269.025 108.573 268.949 107.489 268.615 106.473L267.776 103.651L269.482 106.039C269.959 106.702 270.516 107.303 271.141 107.828C271.724 108.326 272.438 108.646 273.198 108.75C273.545 108.79 273.897 108.731 274.212 108.58C274.527 108.428 274.792 108.189 274.977 107.892C275.302 107.17 275.411 106.37 275.29 105.587C275.058 103.9 274.698 102.232 274.212 100.599C273.99 99.7604 273.769 98.9214 273.585 98.0731C273.359 97.2316 273.312 96.3523 273.446 95.4915C273.406 96.3503 273.534 97.2087 273.824 98.0178C274.064 98.8384 274.341 99.659 274.627 100.47C275.237 102.106 275.697 103.794 276 105.514C276.173 106.444 276.074 107.404 275.715 108.28C275.465 108.733 275.089 109.104 274.632 109.348C274.176 109.592 273.658 109.698 273.142 109.653C272.185 109.541 271.283 109.146 270.551 108.519C269.858 107.944 269.238 107.284 268.707 106.556L269.629 106.113C270.044 107.296 270.145 108.567 269.924 109.801C269.78 110.49 269.398 111.107 268.846 111.544C268.294 111.953 267.632 112.187 266.946 112.217C266.297 112.213 265.656 112.072 265.065 111.804C264.474 111.535 263.946 111.145 263.517 110.658C262.671 109.779 261.977 108.767 261.46 107.662L262.309 107.422C262.381 108.049 262.316 108.684 262.117 109.283C261.917 109.882 261.59 110.43 261.156 110.889C260.698 111.333 260.133 111.651 259.515 111.811C258.891 111.96 258.233 111.871 257.671 111.562C256.662 110.932 255.851 110.031 255.329 108.962C254.751 107.97 254.281 106.919 253.928 105.827Z"
              fill="#263238"
            />
            <path
              d="M260.41 121.271C260.41 121.271 239.462 108.962 248.285 103.135C250.904 101.402 263.738 97.4093 264.586 99.9725C265.693 103.282 260.64 105.947 257.21 107.118C257.21 107.118 264.918 110.299 264.31 116.338C264.177 117.44 263.743 118.483 263.055 119.354C262.366 120.224 261.451 120.888 260.41 121.271Z"
              fill="#EB9481"
            />
            <path
              d="M247.584 103.66C248.533 102.86 249.592 102.202 250.728 101.706C251.852 101.182 253.011 100.735 254.195 100.369C256.56 99.5935 258.988 99.0258 261.451 98.6724C262.106 98.5847 262.77 98.5847 263.424 98.6724C263.801 98.7326 264.16 98.8742 264.476 99.0873C264.821 99.2995 265.082 99.6255 265.213 100.009C265.438 100.721 265.398 101.491 265.102 102.176C264.826 102.798 264.442 103.366 263.968 103.854C263.055 104.764 261.991 105.509 260.824 106.058C259.702 106.615 258.54 107.09 257.348 107.478V106.666C258.214 107.066 259.041 107.544 259.819 108.095C260.594 108.634 261.311 109.252 261.958 109.939C262.605 110.628 263.143 111.412 263.554 112.263C263.971 113.104 264.221 114.018 264.291 114.955C264.105 114.057 263.768 113.196 263.295 112.41C262.817 111.639 262.237 110.935 261.571 110.317C260.914 109.701 260.197 109.152 259.432 108.676C258.671 108.203 257.869 107.798 257.035 107.468L256.002 107.081L257.053 106.666C258.187 106.252 259.29 105.759 260.354 105.191C261.411 104.671 262.373 103.979 263.203 103.144C263.593 102.807 263.891 102.376 264.07 101.893C264.249 101.409 264.303 100.888 264.227 100.378C264.024 99.5668 262.668 99.5299 261.525 99.6313C260.321 99.7564 259.123 99.9441 257.939 100.194C256.731 100.424 255.541 100.673 254.352 100.977C251.973 101.522 249.691 102.427 247.584 103.66Z"
              fill="#263238"
            />
            <path
              d="M261.138 123.069L249.226 142.504C249.226 142.504 234.474 132.685 226.803 125.244C219.132 117.804 219.344 112.336 234.649 115.693C243.62 117.614 252.465 120.078 261.138 123.069Z"
              fill="#FFC727"
            />
            <path
              d="M261.138 123.069L249.226 142.504C249.226 142.504 234.474 132.685 226.803 125.244C219.132 117.804 219.344 112.336 234.649 115.693C243.62 117.614 252.465 120.078 261.138 123.069Z"
              fill="#455A64"
            />
            <path
              d="M246.58 139.379C247.999 136.502 249.487 133.659 251.042 130.85C251.807 129.467 252.554 128.084 253.347 126.701C254.14 125.318 255.09 123.935 255.91 122.515C255.966 122.414 256.122 122.515 256.067 122.589C255.329 123.981 254.684 125.429 253.956 126.83C253.227 128.232 252.388 129.689 251.595 131.118C250.04 133.927 248.411 136.693 246.709 139.416C246.699 139.426 246.687 139.434 246.674 139.438C246.66 139.442 246.646 139.443 246.632 139.439C246.619 139.435 246.606 139.427 246.597 139.416C246.588 139.406 246.582 139.393 246.58 139.379Z"
              fill="#263238"
            />
            <path
              d="M207.57 170.044C207.57 170.044 229.578 280.62 231.136 288.78C231.496 290.624 230.214 389.61 230.214 389.61H271.133C271.133 389.61 275.069 303.154 273.096 286.853C271.123 270.552 246.174 170.044 246.174 170.044H207.57Z"
              fill="#EB9481"
            />
            <path
              d="M207.57 170.054C207.57 170.054 218.283 223.862 225.3 259.183L246.174 170.054H207.57Z"
              fill="#263238"
            />
            <path
              d="M260.078 225.337L216.578 230.565L207.57 170.044H246.202L260.078 225.337Z"
              fill="#FFC727"
            />
            <path
              opacity="0.2"
              d="M260.078 225.337L216.578 230.565L207.57 170.044H246.202L260.078 225.337Z"
              fill="black"
            />
            <path
              d="M218.2 222.202C222.857 221.28 227.568 220.699 232.279 220.164C236.991 219.63 241.61 219.132 246.275 218.652C248.94 218.385 251.623 218.108 254.306 217.97C254.325 217.965 254.345 217.964 254.365 217.968C254.384 217.972 254.403 217.98 254.418 217.992C254.434 218.004 254.447 218.019 254.456 218.037C254.465 218.055 254.469 218.075 254.469 218.094C254.469 218.114 254.465 218.134 254.456 218.152C254.447 218.17 254.434 218.185 254.418 218.197C254.403 218.209 254.384 218.217 254.365 218.221C254.345 218.225 254.325 218.224 254.306 218.219C249.696 219.086 244.929 219.639 240.236 220.257C235.543 220.874 230.924 221.446 226.259 221.944C223.585 222.23 220.911 222.46 218.219 222.562C218.192 222.569 218.164 222.57 218.137 222.565C218.11 222.56 218.084 222.55 218.062 222.533C218.039 222.517 218.021 222.496 218.008 222.472C217.995 222.448 217.987 222.421 217.986 222.393C217.984 222.366 217.989 222.338 218 222.313C218.01 222.287 218.027 222.264 218.047 222.246C218.068 222.228 218.092 222.214 218.119 222.207C218.145 222.199 218.173 222.197 218.2 222.202Z"
              fill="#263238"
            />
            <path
              d="M213.591 173.576C216.824 185.168 219.897 196.795 222.811 208.455C223.225 210.096 223.613 211.737 224.009 213.378C224.464 215.051 224.828 216.747 225.097 218.459C225.097 218.478 225.089 218.497 225.076 218.511C225.062 218.525 225.043 218.532 225.023 218.532C225.004 218.532 224.985 218.525 224.971 218.511C224.957 218.497 224.95 218.478 224.95 218.459C223.945 215.584 223.096 212.657 222.405 209.69C221.621 206.805 220.884 203.9 220.128 200.996C218.634 195.197 217.14 189.388 215.73 183.57C214.924 180.245 214.128 176.92 213.342 173.594C213.339 173.561 213.35 173.529 213.372 173.503C213.393 173.478 213.424 173.463 213.457 173.46C213.49 173.458 213.523 173.469 213.548 173.49C213.573 173.512 213.588 173.543 213.591 173.576Z"
              fill="#263238"
            />
            <path
              d="M301.411 427.107C299.152 427.863 234.631 427.67 232.169 426.112C231.247 425.531 230.721 416.126 230.417 404.749C230.343 402.296 230.297 399.77 230.26 397.179C230.205 394.127 230.168 391.039 230.15 388.042C230.067 374.563 230.555 362.696 230.555 362.696H272.257V388.042V397.179L271.99 404.758C271.99 404.758 296.653 415.887 299.161 417.887C301.669 419.888 303.661 426.37 301.411 427.107Z"
              fill="#EB9481"
            />
            <path
              d="M301.411 427.107C299.152 427.863 234.63 427.67 232.169 426.112C231.247 425.531 230.721 416.126 230.417 404.749C230.343 402.296 230.297 399.77 230.26 397.179C230.205 394.127 230.168 391.039 230.149 388.042H272.239V397.179L271.99 404.758C271.99 404.758 296.653 415.887 299.161 417.887C301.669 419.888 303.66 426.37 301.411 427.107Z"
              fill="#DBDBDB"
            />
            <path
              d="M301.604 427.209C300.138 427.688 272.653 427.79 252.646 427.375C248.036 427.273 243.776 427.144 240.365 426.997C235.654 426.785 232.491 426.526 231.984 426.204C230.85 425.466 230.306 411.673 230.048 397.105H272.257L272.036 404.721C272.036 404.721 296.884 415.905 299.373 417.915C301.862 419.925 303.863 426.443 301.604 427.209Z"
              fill="#FFC727"
            />
            <path
              d="M300.683 424.609C289.803 424.314 245.916 424.129 235.147 424.664C235.055 424.664 235.055 424.729 235.147 424.729C245.916 425.263 289.803 425.088 300.683 424.784C300.913 424.784 300.913 424.618 300.683 424.609Z"
              fill="#263238"
            />
            <path
              d="M273.585 402.305C269.307 401.494 264.07 402.14 260.787 405.182C260.668 405.302 260.787 405.477 260.972 405.431C265.066 404.124 269.288 403.258 273.566 402.849C273.63 402.84 273.689 402.808 273.732 402.76C273.776 402.712 273.8 402.65 273.803 402.585C273.805 402.52 273.784 402.457 273.744 402.406C273.705 402.355 273.648 402.319 273.585 402.305Z"
              fill="#263238"
            />
            <path
              d="M276.664 404.177C272.386 403.366 267.149 404.011 263.876 407.054C263.747 407.164 263.876 407.349 264.051 407.303C268.146 405.997 272.368 405.132 276.646 404.721C276.71 404.712 276.769 404.68 276.812 404.632C276.855 404.584 276.88 404.522 276.882 404.457C276.884 404.392 276.864 404.329 276.824 404.278C276.784 404.226 276.728 404.191 276.664 404.177Z"
              fill="#263238"
            />
            <path
              d="M279.753 406.049C275.475 405.237 270.238 405.883 266.956 408.916C266.827 409.036 266.956 409.22 267.14 409.174C271.235 407.87 275.457 407.008 279.735 406.602C279.771 406.603 279.807 406.597 279.841 406.584C279.875 406.572 279.907 406.552 279.933 406.528C279.96 406.503 279.981 406.473 279.996 406.44C280.011 406.407 280.019 406.371 280.021 406.335C280.022 406.298 280.016 406.262 280.003 406.228C279.99 406.194 279.971 406.163 279.946 406.136C279.921 406.11 279.892 406.088 279.858 406.073C279.825 406.058 279.79 406.05 279.753 406.049Z"
              fill="#263238"
            />
            <path
              d="M282.833 407.92C278.555 407.109 273.318 407.755 270.045 410.788C269.915 410.908 270.045 411.092 270.22 411.046C274.313 409.736 278.536 408.871 282.814 408.464C282.878 408.455 282.937 408.423 282.98 408.375C283.023 408.327 283.048 408.265 283.051 408.2C283.053 408.135 283.032 408.072 282.992 408.021C282.953 407.97 282.896 407.934 282.833 407.92Z"
              fill="#263238"
            />
            <path
              d="M281.514 392.431C279.845 390.117 276.711 391.149 274.913 392.643C271.894 395.271 269.615 398.644 268.302 402.425C268.296 402.442 268.295 402.46 268.297 402.478C268.299 402.496 268.305 402.513 268.315 402.528C268.325 402.543 268.338 402.556 268.353 402.565C268.368 402.574 268.386 402.58 268.403 402.582C268.403 402.905 268.708 403.255 269.076 403.117C272.617 401.817 276.554 400.867 279.587 398.507C281.348 397.151 283.1 394.616 281.514 392.431ZM274.028 400.056C272.303 400.729 270.552 401.328 268.855 402.066C270.155 400.166 271.363 398.212 272.847 396.442C273.548 395.575 274.309 394.758 275.125 393.998C276.397 392.846 281.45 390.393 280.657 395.086C280.288 397.668 276.084 399.226 274.028 400.056Z"
              fill="#263238"
            />
            <path
              d="M257.422 401.282C260.944 402.794 265.001 402.73 268.753 403.126C269.141 403.172 269.334 402.757 269.261 402.444C269.278 402.438 269.293 402.429 269.306 402.416C269.319 402.404 269.329 402.388 269.335 402.372C269.341 402.355 269.343 402.337 269.342 402.319C269.34 402.301 269.334 402.284 269.325 402.269C267.111 398.929 264.059 396.23 260.474 394.441C258.363 393.445 255.071 393.224 254.02 395.888C253.043 398.387 255.394 400.397 257.422 401.282ZM255.495 398.221C253.587 393.869 259.082 394.985 260.612 395.778C261.571 396.319 262.495 396.919 263.378 397.576C265.208 398.973 266.965 400.462 268.643 402.038C266.799 401.734 264.955 401.605 263.111 401.374C260.99 401.07 256.555 400.618 255.495 398.221Z"
              fill="#263238"
            />
            <path
              opacity="0.1"
              d="M256.399 427.448L252.646 427.375C248.036 427.273 243.776 427.153 240.365 426.997C235.654 426.785 232.5 426.526 231.975 426.204C231.117 425.641 230.592 417.574 230.288 407.358L256.399 427.448Z"
              fill="black"
            />
            <path
              d="M217.878 384.474L175.789 383.948C175.789 383.948 185.47 240.448 189.065 210.612C189.065 210.612 182.243 194.441 195.012 170.044H246.239C246.239 170.044 242.809 193.297 236.926 208.031C236.926 208.031 233.119 209.054 226.213 212.862L217.878 384.474Z"
              fill="#EB9481"
            />
            <path
              d="M225.456 230.887H185.22L188.272 210.603C188.272 210.603 182.159 190.024 194.108 170.035H246.238C246.238 170.035 244.081 191.841 237.682 208.243L231.136 211.147L225.456 230.887Z"
              fill="#FFC727"
            />
            <path
              opacity="0.2"
              d="M225.456 230.887H185.22L188.272 210.603C188.272 210.603 182.159 190.024 194.108 170.035H246.238C246.238 170.035 244.081 191.841 237.682 208.243L231.136 211.147L225.456 230.887Z"
              fill="black"
            />
            <path
              d="M231.136 211.138C231.191 210.88 231.717 210.889 231.671 211.138C229.55 223.124 226.203 228.877 225.963 229.43C225.958 229.447 225.947 229.461 225.933 229.471C225.919 229.481 225.902 229.486 225.885 229.486C225.868 229.486 225.851 229.481 225.837 229.471C225.823 229.461 225.812 229.447 225.807 229.43C225.622 228.85 230.177 216.089 231.136 211.138Z"
              fill="#263238"
            />
            <path
              d="M238.872 207.45C234.256 209.132 229.796 211.212 225.539 213.664C225.504 213.681 225.477 213.712 225.464 213.749C225.451 213.786 225.453 213.827 225.47 213.863C225.487 213.898 225.518 213.925 225.555 213.938C225.592 213.951 225.633 213.949 225.669 213.932C230.159 212.005 234.741 210.161 239.121 207.985C239.189 207.95 239.242 207.891 239.267 207.818C239.293 207.746 239.289 207.666 239.256 207.596C239.224 207.527 239.166 207.472 239.094 207.445C239.022 207.418 238.942 207.419 238.872 207.45Z"
              fill="#263238"
            />
            <path
              d="M240.301 176.581C240.301 176.434 240.015 176.397 240.015 176.581C240.015 181.911 239.71 186.604 239.268 191.592C239.056 193.906 237.193 206.685 233.183 205.754C232.51 205.597 232.168 204.942 232.067 203.91C232.083 202.587 232.259 201.271 232.593 199.991C233.044 197.308 233.395 194.625 233.625 191.924C234.094 186.888 234.042 181.818 233.469 176.794C233.469 176.759 233.455 176.726 233.431 176.702C233.406 176.678 233.374 176.664 233.339 176.664C233.305 176.664 233.272 176.678 233.248 176.702C233.224 176.726 233.21 176.759 233.21 176.794C233.323 183.772 232.914 190.75 231.984 197.668C231.486 200.996 229.808 205.966 233.284 206.519C236.76 207.072 239.12 198.654 239.554 196.377C240.659 189.839 240.91 183.184 240.301 176.581Z"
              fill="#263238"
            />
            <path
              d="M233.266 206.085C232.9 206.946 232.592 207.83 232.344 208.732C232.083 209.427 231.954 210.165 231.966 210.907C231.972 210.937 231.987 210.963 232.007 210.985C232.028 211.006 232.055 211.021 232.084 211.028C232.113 211.035 232.143 211.033 232.171 211.023C232.199 211.013 232.224 210.995 232.243 210.972C232.657 210.317 232.968 209.602 233.165 208.851C233.469 208.031 233.792 207.219 234.087 206.39C234.108 206.286 234.092 206.178 234.041 206.085C233.989 205.993 233.907 205.921 233.807 205.885C233.708 205.848 233.599 205.848 233.499 205.885C233.4 205.922 233.317 205.993 233.266 206.085Z"
              fill="#263238"
            />
            <path
              d="M195.953 192.228C199.742 191.85 203.642 191.896 207.155 190.199C210.668 188.503 213.001 185.101 214.826 181.699C215.941 179.588 216.787 177.345 217.343 175.023C217.343 174.999 217.353 174.975 217.37 174.958C217.387 174.941 217.411 174.931 217.435 174.931C217.46 174.931 217.483 174.941 217.501 174.958C217.518 174.975 217.528 174.999 217.528 175.023C217.387 177.197 216.863 179.329 215.979 181.321C215.19 183.287 214.182 185.159 212.973 186.899C211.848 188.558 210.367 189.947 208.639 190.965C206.879 191.909 204.948 192.492 202.96 192.68C200.628 192.938 198.275 192.938 195.944 192.68C195.884 192.678 195.827 192.653 195.785 192.61C195.744 192.567 195.721 192.509 195.722 192.449C195.723 192.389 195.748 192.332 195.792 192.291C195.835 192.249 195.893 192.227 195.953 192.228Z"
              fill="#263238"
            />
            <path
              d="M190.734 214.881C191.263 213.028 191.642 211.135 191.868 209.22C191.969 207.321 190.946 205.689 190.393 203.937C188.161 197.124 189.065 189.674 191.49 183.045C192.943 179.278 194.694 175.634 196.727 172.147C196.782 172.054 196.911 172.147 196.865 172.23C193.546 178.684 190.614 185.626 189.959 192.947C189.614 196.478 189.945 200.042 190.937 203.449C191.425 205.062 192.347 206.611 192.486 208.307C192.481 210.101 192.201 211.882 191.656 213.591C191.176 215.711 189.683 222.11 189.037 224.267C188.982 224.452 188.65 224.415 188.687 224.212C189.01 222.294 190.3 216.845 190.734 214.881Z"
              fill="#263238"
            />
            <path
              d="M187.839 225.632C192.569 225.282 197.317 225.291 202.056 225.337C206.795 225.383 211.442 225.457 216.126 225.549C218.818 225.604 221.51 225.669 224.184 225.853C224.218 225.853 224.251 225.867 224.275 225.891C224.3 225.915 224.313 225.948 224.313 225.982C224.313 226.016 224.3 226.049 224.275 226.073C224.251 226.098 224.218 226.111 224.184 226.111C219.463 226.397 214.706 226.36 209.967 226.397C205.228 226.434 200.581 226.397 195.888 226.397C193.196 226.351 190.522 226.25 187.839 226.028C187.786 226.028 187.736 226.007 187.699 225.97C187.662 225.933 187.641 225.883 187.641 225.83C187.641 225.778 187.662 225.727 187.699 225.69C187.736 225.653 187.786 225.632 187.839 225.632Z"
              fill="#263238"
            />
            <path
              d="M245.934 428.592C243.657 429.283 179.163 427.458 176.784 425.826C175.862 425.217 175.585 415.794 175.567 404.426C175.567 401.967 175.567 399.441 175.567 396.847C175.567 393.795 175.641 390.707 175.696 387.71C175.954 374.24 177.282 361.249 177.282 361.249L218.431 363.443L217.767 388.771L217.527 397.908L217.121 405.477C217.121 405.477 241.499 417.223 243.961 419.307C246.423 421.391 248.202 427.9 245.934 428.592Z"
              fill="#EB9481"
            />
            <path
              d="M245.934 428.592C243.657 429.283 179.163 427.458 176.784 425.826C175.862 425.217 175.585 415.794 175.567 404.426C175.567 401.967 175.567 399.441 175.567 396.847C175.567 393.795 175.641 390.707 175.696 387.71L217.767 388.77L217.527 397.908L217.121 405.477C217.121 405.477 241.499 417.223 243.961 419.307C246.423 421.391 248.202 427.9 245.934 428.592Z"
              fill="#DBDBDB"
            />
            <path
              d="M246.174 428.73C244.69 429.173 217.214 428.573 197.225 427.651C192.615 427.439 188.365 427.209 184.953 426.969C180.251 426.637 177.098 426.296 176.6 425.955C175.484 425.199 175.291 411.387 175.401 396.829L217.592 397.861L217.186 405.459C217.186 405.459 241.702 417.27 244.182 419.344C246.663 421.419 248.405 427.983 246.174 428.73Z"
              fill="#FFC727"
            />
            <path
              d="M245.252 426.065C234.391 425.494 190.513 424.221 179.735 424.47C179.642 424.47 179.642 424.526 179.735 424.535C190.494 425.337 234.372 426.268 245.252 426.25C245.492 426.25 245.501 426.084 245.252 426.065Z"
              fill="#263238"
            />
            <path
              d="M218.744 403.089C214.485 402.167 209.239 402.683 205.882 405.634C205.753 405.754 205.882 405.938 206.058 405.892C210.181 404.689 214.422 403.932 218.707 403.633C218.772 403.626 218.833 403.597 218.878 403.55C218.923 403.503 218.951 403.442 218.955 403.377C218.96 403.312 218.941 403.247 218.902 403.194C218.864 403.142 218.808 403.105 218.744 403.089Z"
              fill="#263238"
            />
            <path
              d="M221.778 405.035C217.527 404.113 212.272 404.629 208.916 407.589C208.787 407.699 208.916 407.884 209.091 407.847C213.217 406.64 217.461 405.879 221.75 405.579C221.814 405.57 221.874 405.54 221.918 405.492C221.962 405.445 221.988 405.383 221.992 405.318C221.995 405.253 221.975 405.189 221.936 405.137C221.897 405.086 221.841 405.049 221.778 405.035Z"
              fill="#263238"
            />
            <path
              d="M224.811 406.989C220.561 406.067 215.305 406.574 211.903 409.534C211.774 409.645 211.903 409.829 212.078 409.792C216.219 408.582 220.479 407.822 224.783 407.524C224.818 407.526 224.854 407.521 224.887 407.509C224.92 407.497 224.95 407.479 224.976 407.455C225.003 407.432 225.024 407.403 225.039 407.372C225.054 407.34 225.063 407.306 225.065 407.27C225.066 407.235 225.061 407.2 225.049 407.167C225.038 407.134 225.02 407.103 224.996 407.077C224.972 407.051 224.944 407.03 224.912 407.015C224.88 407 224.846 406.991 224.811 406.989Z"
              fill="#263238"
            />
            <path
              d="M227.854 408.935C223.594 408.013 218.348 408.529 214.992 411.479C214.863 411.599 214.992 411.774 215.167 411.738C219.291 410.534 223.532 409.776 227.817 409.479C227.882 409.472 227.942 409.443 227.988 409.396C228.033 409.349 228.06 409.287 228.065 409.222C228.069 409.157 228.05 409.093 228.012 409.04C227.973 408.987 227.917 408.95 227.854 408.935Z"
              fill="#263238"
            />
            <path
              d="M226.923 393.417C225.309 391.057 222.147 392.007 220.321 393.463C217.227 396.01 214.858 399.327 213.452 403.08C213.452 403.163 213.452 403.218 213.554 403.237C213.549 403.32 213.563 403.403 213.596 403.479C213.628 403.556 213.679 403.624 213.742 403.677C213.806 403.731 213.881 403.769 213.962 403.789C214.043 403.808 214.127 403.809 214.208 403.79C217.776 402.573 221.741 401.725 224.839 399.457C226.637 398.138 228.453 395.658 226.923 393.417ZM219.242 400.849C217.5 401.485 215.739 402.029 214.024 402.693C215.307 400.781 216.686 398.934 218.154 397.161C218.881 396.313 219.663 395.515 220.496 394.773C221.796 393.648 226.904 391.334 226.028 395.999C225.53 398.627 221.28 400.083 219.242 400.849Z"
              fill="#263238"
            />
            <path
              d="M202.609 401.651C206.095 403.255 210.151 403.292 213.895 403.762C213.978 403.766 214.061 403.749 214.137 403.714C214.212 403.679 214.279 403.626 214.33 403.561C214.381 403.495 214.416 403.418 214.432 403.336C214.448 403.254 214.444 403.169 214.42 403.089C214.438 403.085 214.455 403.077 214.469 403.065C214.483 403.052 214.494 403.037 214.501 403.019C214.507 403.002 214.509 402.983 214.506 402.965C214.503 402.946 214.496 402.929 214.485 402.914C212.361 399.519 209.377 396.745 205.836 394.874C203.753 393.814 200.47 393.519 199.382 396.156C198.304 398.654 200.581 400.72 202.609 401.651ZM200.765 398.544C198.967 394.146 204.453 395.4 205.938 396.239C206.903 396.786 207.827 397.402 208.704 398.083C210.501 399.528 212.222 401.067 213.858 402.693C212.014 402.352 210.17 402.167 208.372 401.891C206.187 401.559 201.761 400.969 200.765 398.544Z"
              fill="#263238"
            />
            <path
              d="M245.252 161.35L247.225 173.769L193.131 173.659C193.131 173.659 194.68 133.745 209.82 118.274C217.389 110.529 225.973 111.378 231.293 117.112C232.639 118.56 248.544 138.134 250.046 146.543C251.328 153.974 245.252 161.35 245.252 161.35Z"
              fill="#37474F"
            />
            <path
              d="M227.402 114.088H215.416C215.939 113.837 216.474 113.612 217.02 113.415H225.89C226.409 113.605 226.914 113.83 227.402 114.088Z"
              fill="#455A64"
            />
            <path
              d="M231.634 117.49H210.548L211.313 116.808H231.007L231.274 117.076C231.373 117.155 231.493 117.294 231.634 117.49Z"
              fill="#455A64"
            />
            <path
              d="M234.391 120.883H207.515C207.681 120.653 207.865 120.432 208.049 120.21H233.865L234.391 120.883Z"
              fill="#455A64"
            />
            <path
              d="M237.009 124.276H205.2L205.624 123.594H236.493C236.659 123.825 236.834 124.055 237.009 124.276Z"
              fill="#455A64"
            />
            <path
              d="M239.517 127.679H203.338C203.449 127.448 203.559 127.208 203.688 126.987H239.029L239.517 127.679Z"
              fill="#455A64"
            />
            <path
              d="M241.905 131.072H201.761C201.863 130.841 201.955 130.611 202.056 130.389H241.435C241.564 130.611 241.748 130.832 241.905 131.072Z"
              fill="#455A64"
            />
            <path
              d="M244.155 134.455H200.415L200.673 133.782H243.731L244.155 134.455Z"
              fill="#455A64"
            />
            <path
              d="M246.248 137.857H199.226L199.447 137.175H245.805C245.98 137.378 246.109 137.627 246.248 137.857Z"
              fill="#455A64"
            />
            <path
              d="M248.083 141.25H198.23C198.285 141.02 198.35 140.799 198.414 140.577H247.723L248.083 141.25Z"
              fill="#455A64"
            />
            <path
              d="M249.52 144.643H197.308C197.372 144.422 197.427 144.201 197.483 143.97H249.262C249.373 144.201 249.447 144.422 249.52 144.643Z"
              fill="#455A64"
            />
            <path
              d="M250.184 148.046H196.542C196.589 147.815 196.644 147.594 196.69 147.354H250.166C250.166 147.594 250.175 147.824 250.184 148.046Z"
              fill="#455A64"
            />
            <path
              d="M250.046 150.756C250.046 150.977 249.972 151.208 249.936 151.439H195.842C195.888 151.217 195.925 150.977 195.971 150.756H250.046Z"
              fill="#455A64"
            />
            <path
              d="M249.189 154.149L248.94 154.831H195.224L195.335 154.149H249.189Z"
              fill="#455A64"
            />
            <path
              d="M247.677 157.542C247.557 157.782 247.428 158.022 247.299 158.224H194.68C194.68 158.003 194.754 157.773 194.782 157.542H247.677Z"
              fill="#455A64"
            />
            <path
              d="M245.252 161.35V161.654H194.219C194.236 161.428 194.267 161.203 194.311 160.981H245.51C245.344 161.184 245.252 161.35 245.252 161.35Z"
              fill="#455A64"
            />
            <path
              d="M245.814 165.038H193.813C193.813 164.817 193.869 164.595 193.887 164.365H245.704L245.814 165.038Z"
              fill="#455A64"
            />
            <path
              d="M246.349 168.413H193.472C193.472 168.191 193.472 167.961 193.537 167.73H246.247L246.349 168.413Z"
              fill="#455A64"
            />
            <path
              d="M246.893 171.805H193.224C193.224 171.603 193.224 171.372 193.27 171.132H246.746L246.893 171.805Z"
              fill="#455A64"
            />
            <path
              d="M236.152 157.358C233.27 157.64 230.413 158.136 227.605 158.842C226.213 159.211 224.839 159.644 223.493 160.105C222.811 160.336 222.128 160.539 221.437 160.741C220.726 160.976 219.989 161.125 219.242 161.184C219.234 161.18 219.225 161.179 219.216 161.18C219.207 161.18 219.198 161.183 219.19 161.188C219.182 161.194 219.176 161.2 219.172 161.208C219.167 161.217 219.165 161.226 219.165 161.235C219.165 161.244 219.167 161.253 219.172 161.261C219.176 161.269 219.182 161.276 219.19 161.281C219.198 161.286 219.207 161.289 219.216 161.29C219.225 161.291 219.234 161.289 219.242 161.285C219.95 161.31 220.658 161.288 221.363 161.221C222.045 161.14 222.72 161.007 223.382 160.824C224.802 160.465 226.194 160.041 227.605 159.663C230.454 158.907 233.294 158.151 236.189 157.597C236.327 157.57 236.29 157.339 236.152 157.358Z"
              fill="#263238"
            />
            <path
              d="M243.297 159.847C240.919 159.621 238.531 159.529 236.142 159.571C234.953 159.571 233.764 159.69 232.574 159.81C232.012 159.875 231.44 159.939 230.878 160.022C230.315 160.105 229.642 160.271 229.034 160.345C228.969 160.345 228.969 160.456 229.034 160.456C229.624 160.4 230.223 160.456 230.813 160.456L232.602 160.391C233.791 160.345 234.981 160.327 236.17 160.271C238.558 160.17 240.928 160.096 243.316 160.078C243.408 160.05 243.408 159.866 243.297 159.847Z"
              fill="#263238"
            />
            <path
              d="M244.33 133.985C243.205 132.298 242.025 130.657 240.799 129.043C240.541 128.389 240.246 127.743 239.951 127.107C239.59 126.379 239.171 125.682 238.697 125.023C238.697 125.023 238.614 125.023 238.641 125.023C239.01 125.733 239.333 126.462 239.72 127.162C239.941 127.568 240.135 127.983 240.329 128.389C239.102 126.793 237.83 125.226 236.53 123.686C236.53 123.686 236.475 123.686 236.53 123.686C238.918 127.236 241.453 130.684 243.758 134.289C246.053 137.874 248.119 141.6 249.945 145.446C249.945 145.519 250.111 145.445 250.093 145.381C248.726 141.327 246.785 137.489 244.33 133.985Z"
              fill="#263238"
            />
            <path
              d="M218.615 115.462C218.818 116.541 223.603 123.659 228.481 123.64C230.066 123.64 230.398 114.955 230.398 114.955L230.564 114.319L232.943 105.44L222.7 98.2483L221.215 97.3263C221.215 97.3263 220.727 99.7973 220.146 102.858L220.063 103.292C220.063 103.467 219.989 103.633 219.961 103.799C219.869 104.251 219.777 104.721 219.694 105.191C219.611 105.661 219.565 105.901 219.51 106.279C219.454 106.657 219.39 107.026 219.325 107.404C218.904 110.07 218.667 112.763 218.615 115.462Z"
              fill="#EB9481"
            />
            <path
              d="M232.943 105.449L231.367 111.341C226.24 112.834 221.225 111.212 218.966 110.271C219.058 109.349 219.187 108.363 219.325 107.395C219.39 107.017 219.445 106.648 219.51 106.27C219.574 105.892 219.63 105.551 219.694 105.191C219.759 104.831 219.869 104.269 219.962 103.79C219.962 103.624 220.026 103.467 220.063 103.292C220.1 103.116 220.118 102.997 220.146 102.849C220.727 99.7604 221.215 97.3171 221.215 97.3171L222.7 98.2391L232.943 105.449Z"
              fill="#263238"
            />
            <path
              d="M235.497 97.0313C237.203 104.536 247.243 111.387 247.391 125.788C247.455 132.242 238.383 141.214 242.099 152.978C243.067 156.021 222.792 142.274 231.671 115.619C233.523 109.556 234.804 103.333 235.497 97.0313Z"
              fill="#263238"
            />
            <path
              d="M232.086 117.094C228.591 125.918 226.747 137.166 232.537 145.455C234.318 147.769 236.449 149.791 238.853 151.448C238.899 151.448 238.936 151.448 238.899 151.383C236.791 149.857 234.894 148.059 233.257 146.036C231.8 144.038 230.728 141.787 230.094 139.397C228.917 134.652 228.902 129.693 230.048 124.94C230.61 122.294 231.459 119.74 232.261 117.149C232.344 117.094 232.132 117.002 232.086 117.094Z"
              fill="#263238"
            />
            <path
              d="M242.08 108.141C240.117 105.541 237.959 103.024 236.548 100.046C236.548 100.046 236.484 100.046 236.502 100.046C238.651 104.933 242.68 108.648 245.077 113.397C247.397 117.821 248.384 122.824 247.917 127.798C247.613 130.442 246.836 133.01 245.621 135.377C245.575 135.451 245.685 135.525 245.732 135.451C247.943 131.51 248.832 126.963 248.267 122.478C247.695 117.168 245.252 112.373 242.08 108.141Z"
              fill="#263238"
            />
            <path
              d="M234.889 102.619C234.718 105.006 234.184 107.354 233.303 109.58C232.445 111.793 231.394 113.922 230.537 116.117C228.536 120.711 227.63 125.708 227.891 130.712C228.124 133.565 228.927 136.343 230.251 138.881C227.854 134.188 227.642 128.564 228.637 123.483C229.118 121.075 229.822 118.717 230.74 116.439C231.606 114.273 232.584 112.152 233.432 109.985C234.432 107.651 234.983 105.148 235.054 102.609C235.054 102.598 235.051 102.588 235.046 102.578C235.042 102.568 235.035 102.559 235.027 102.552C235.019 102.545 235.009 102.539 234.999 102.536C234.989 102.532 234.978 102.53 234.967 102.531C234.956 102.532 234.945 102.534 234.935 102.539C234.926 102.544 234.917 102.55 234.91 102.559C234.902 102.567 234.897 102.576 234.893 102.586C234.889 102.597 234.888 102.608 234.889 102.619Z"
              fill="#263238"
            />
            <path
              d="M235.801 105.163L238.18 104.297C238.597 104.141 238.936 103.827 239.122 103.423C239.309 103.019 239.328 102.557 239.176 102.139C239.1 101.932 238.984 101.742 238.834 101.58C238.684 101.417 238.504 101.286 238.304 101.194C238.103 101.101 237.887 101.049 237.666 101.04C237.446 101.032 237.225 101.067 237.018 101.143L234.64 102.065C234.433 102.14 234.243 102.256 234.081 102.404C233.918 102.553 233.787 102.733 233.695 102.932C233.602 103.132 233.55 103.348 233.541 103.568C233.533 103.788 233.567 104.007 233.644 104.214C233.805 104.625 234.122 104.957 234.526 105.135C234.931 105.313 235.389 105.323 235.801 105.163Z"
              fill="#FFC727"
            />
            <path
              d="M211.654 90.2361C208.731 106.104 217.905 109.598 221.326 110.271C224.433 110.843 235.082 112.392 239.637 96.9114C244.192 81.431 237.738 75.0508 230.693 73.3728C223.649 71.6947 214.586 74.3593 211.654 90.2361Z"
              fill="#EB9481"
            />
            <path
              d="M215.748 88.1893C216.126 88.0602 216.495 88.0049 216.873 87.9127C217.258 87.7628 217.681 87.7401 218.081 87.8482C218.198 87.9096 218.292 88.0077 218.349 88.1275C218.405 88.2473 218.421 88.3823 218.394 88.512C218.298 88.7558 218.139 88.9697 217.934 89.1317C217.728 89.2938 217.483 89.3981 217.223 89.434C216.709 89.595 216.154 89.5589 215.665 89.3326C215.561 89.2729 215.476 89.1852 215.42 89.0795C215.364 88.9737 215.339 88.8543 215.347 88.7349C215.356 88.6155 215.398 88.5009 215.469 88.4044C215.54 88.3079 215.637 88.2333 215.748 88.1893Z"
              fill="#263238"
            />
            <path
              d="M227.439 88.1524C227.126 87.9273 226.799 87.721 226.462 87.5347C226.149 87.2665 225.757 87.1079 225.346 87.0829C225.215 87.1034 225.094 87.1656 225.001 87.2603C224.908 87.3549 224.848 87.477 224.83 87.6084C224.841 87.8721 224.921 88.1282 225.061 88.3514C225.202 88.5746 225.399 88.7571 225.632 88.8808C226.073 89.1949 226.614 89.3389 227.153 89.2865C227.276 89.2669 227.39 89.2117 227.482 89.1276C227.574 89.0436 227.639 88.9344 227.67 88.8137C227.7 88.693 227.695 88.5659 227.654 88.4484C227.612 88.3309 227.538 88.2279 227.439 88.1524Z"
              fill="#263238"
            />
            <path
              d="M224.11 92.7255C224.11 92.7255 224.193 92.7993 224.184 92.8454C223.981 93.9702 223.945 95.2979 224.913 95.8142C224.913 95.8142 224.913 95.888 224.913 95.8788C223.668 95.5192 223.742 93.7674 224.11 92.7255Z"
              fill="#263238"
            />
            <path
              d="M225.291 91.6929C227.135 91.822 226.747 95.4915 225.042 95.3809C223.336 95.2703 223.751 91.5915 225.291 91.6929Z"
              fill="#263238"
            />
            <path
              d="M225.991 91.9603C226.296 92.2092 226.572 92.6057 226.913 92.6887C227.255 92.7716 227.734 92.4305 228.066 92.0894C228.066 92.0894 228.131 92.0894 228.121 92.1355C228.057 92.8454 227.716 93.5369 226.95 93.5646C226.185 93.5922 225.826 92.9099 225.724 92.1816C225.743 92.0525 225.89 91.8681 225.991 91.9603Z"
              fill="#263238"
            />
            <path
              d="M217.859 91.7851C217.859 91.7851 217.758 91.7851 217.758 91.8773C217.684 93.0206 217.407 94.3114 216.338 94.588V94.6525C217.592 94.5972 217.97 92.8731 217.859 91.7851Z"
              fill="#263238"
            />
            <path
              d="M216.956 90.4943C215.112 90.1716 214.632 93.8319 216.32 94.127C218.007 94.422 218.514 90.7617 216.956 90.4943Z"
              fill="#263238"
            />
            <path
              d="M216.163 90.6326C215.84 90.7801 215.508 91.0936 215.158 91.0752C214.808 91.0567 214.513 90.6049 214.31 90.1532H214.254C214.135 90.8447 214.254 91.6099 214.918 91.8312C215.582 92.0525 216.043 91.4993 216.31 90.8262C216.357 90.7801 216.283 90.5681 216.163 90.6326Z"
              fill="#263238"
            />
            <path
              d="M218.791 96.9667C218.791 96.9667 218.357 98.6356 218.265 99.4377C219.83 99.6267 221.36 100.036 222.811 100.655C223.152 100.811 223.179 100.516 222.811 100.231C221.722 99.3958 220.409 98.9046 219.04 98.82C219.04 98.5895 219.75 96.266 219.63 96.2384C219.009 96.2234 218.389 96.2884 217.786 96.432C218.588 92.9284 219.952 89.5907 220.699 86.0871C220.699 85.9581 220.542 85.9027 220.496 86.0134C218.928 89.5524 217.72 93.2407 216.891 97.0221C216.744 97.4738 218.459 97.0682 218.791 96.9667Z"
              fill="#263238"
            />
            <path
              d="M238.945 97.2157C236.29 97.0682 236.419 91.4624 236.419 91.4624C236.419 91.4624 231.072 90.7709 230.325 82.8417C230.172 85.1674 230.701 87.4871 231.846 89.517C231.846 89.517 222.552 87.2673 219.639 78.8402C219.639 78.8402 220.681 83.0722 221.981 84.7041C221.981 84.7041 218.173 83.0722 216.67 79.6055C216.67 79.6055 214.411 83.9389 212.982 85.0268C212.982 85.0268 215.573 68.5784 230.62 72.3678C230.62 72.3678 240.107 74.2855 242.532 82.3162C244.957 90.3468 238.945 97.2157 238.945 97.2157Z"
              fill="#263238"
            />
            <path
              d="M236.889 97.6582C236.889 97.6582 240.872 92.9837 243.03 94.4589C245.187 95.9341 241.85 102.941 239.084 103.679C238.733 103.793 238.363 103.835 237.995 103.803C237.627 103.772 237.27 103.667 236.943 103.495C236.617 103.323 236.328 103.088 236.094 102.803C235.86 102.518 235.685 102.189 235.58 101.835L236.889 97.6582Z"
              fill="#EB9481"
            />
            <path
              d="M242.025 96.4412V96.515C240.08 97.0958 238.927 98.737 238.06 100.47C238.187 100.292 238.351 100.144 238.54 100.036C238.73 99.9273 238.941 99.8616 239.159 99.8432C239.376 99.8248 239.596 99.854 239.801 99.9289C240.006 100.004 240.192 100.122 240.347 100.277C240.393 100.277 240.347 100.387 240.282 100.369C239.964 100.232 239.611 100.198 239.273 100.27C238.934 100.343 238.626 100.519 238.392 100.775C237.999 101.201 237.655 101.671 237.369 102.176C237.258 102.333 236.963 102.222 237.046 102.029C237.258 99.576 239.434 96.432 242.025 96.4412Z"
              fill="#263238"
            />
            <path
              d="M237.313 102.766C237.298 102.922 237.329 103.079 237.402 103.217C237.476 103.355 237.589 103.468 237.726 103.542C237.864 103.617 238.021 103.648 238.176 103.634C238.332 103.619 238.48 103.559 238.602 103.46C238.723 103.362 238.813 103.23 238.86 103.08C238.906 102.931 238.907 102.771 238.863 102.621C238.819 102.471 238.732 102.337 238.612 102.237C238.492 102.136 238.345 102.073 238.189 102.056C238.085 102.045 237.98 102.054 237.879 102.084C237.778 102.113 237.685 102.162 237.603 102.228C237.522 102.294 237.454 102.376 237.404 102.468C237.355 102.561 237.324 102.662 237.313 102.766Z"
              fill="white"
            />
            <path
              d="M206.934 120.662C186.179 135.221 164.927 165.038 167.647 173.336C170.69 182.602 194.099 165.462 194.275 163.996C194.404 162.88 206.03 144.238 214.559 126.701C222.432 110.483 212.06 117.094 206.934 120.662Z"
              fill="#EB9481"
            />
            <path
              d="M206.454 148.507L182.381 140.328C182.381 140.328 202.665 121.049 210.188 117.057C218.689 112.567 219.132 117.896 216.504 126.655C213.876 135.414 206.454 148.507 206.454 148.507Z"
              fill="#455A64"
            />
            <path
              d="M207.238 144.219C206.454 143.814 198.94 141.204 197.326 140.67C195.713 140.135 189.028 137.904 187.276 137.489C187.261 137.484 187.244 137.486 187.23 137.493C187.216 137.501 187.205 137.513 187.199 137.528C187.193 137.543 187.193 137.559 187.199 137.574C187.205 137.589 187.216 137.601 187.23 137.609C188.853 138.337 195.584 140.614 197.234 141.186C198.884 141.758 206.362 144.182 207.21 144.33C207.284 144.348 207.293 144.247 207.238 144.219Z"
              fill="#263238"
            />
            <path
              d="M214.734 133.856C214.227 134.538 213.738 135.23 213.24 135.921C213.91 134.385 214.525 132.826 215.084 131.247C215.084 131.247 215.029 131.182 215.001 131.247C213.415 134.077 211.94 137 210.557 139.941C209.174 142.882 207.708 145.658 206.546 148.626C206.546 148.719 206.648 148.755 206.694 148.682C208.4 145.908 209.939 143.036 211.304 140.079C211.802 139.074 212.226 138.06 212.733 137.028C213.529 136.078 214.216 135.042 214.78 133.939C214.826 133.865 214.761 133.819 214.734 133.856Z"
              fill="#263238"
            />
            <path
              d="M208.464 116.172C207.542 115.379 213.074 114.263 214.586 115.047C216.098 115.831 223.981 128.352 224.728 146.036C225.475 163.72 190.789 184.105 188.982 181.754C188.598 181.019 188.39 180.205 188.376 179.376C188.361 178.547 188.541 177.726 188.899 176.978C189.941 175.392 215.13 159.921 215.932 148.737C216.67 138.761 212.595 119.528 208.464 116.172Z"
              fill="#263238"
            />
            <path
              d="M287.922 186.309L295.086 151.18L306.325 120.017L284.345 123.069L269.122 119.104L251.715 123.41L232.574 117.915L230.998 151.54L220.976 184.999L235.313 189.453L254.177 184.769L268.256 190.393L287.922 186.309Z"
              fill="#DBDBDB"
            />
            <path
              d="M268.256 190.393L284.345 123.069L269.122 119.104L254.177 184.769L268.256 190.393Z"
              fill="#EBEBEB"
            />
            <path
              d="M235.313 189.453L251.715 123.41L232.574 117.915L230.998 151.54L220.976 184.999L235.313 189.453Z"
              fill="#EBEBEB"
            />
            <path
              d="M168.007 174.406C171.372 177.762 180.417 180.445 207.653 175.484C211.424 174.793 211.645 146.349 207.579 146.902C202.453 147.566 185.645 151.429 184.262 151.955C174 155.818 164.642 171.059 168.007 174.406Z"
              fill="#EB9481"
            />
            <path
              d="M241.416 142.845C241.824 143.651 241.977 144.562 241.853 145.457C241.73 146.351 241.336 147.187 240.725 147.852C242.064 148.594 243.101 149.781 243.657 151.208C244.514 153.771 240.891 156.242 240.891 156.242C242.119 157.304 242.999 158.711 243.417 160.28C243.989 162.816 240.651 165.812 240.651 165.812C241.245 167.409 241.245 169.167 240.651 170.764C238.881 174.968 232.012 176.065 227.651 176.812C223.29 177.559 210.225 175.586 207.699 175.466L204.306 147.363C204.306 147.363 221.27 138.623 226.517 138.475C230.933 138.365 239.72 139.831 241.416 142.845Z"
              fill="#EB9481"
            />
            <path
              d="M240.448 147.437C235.718 146.441 230.942 146.902 226.157 147.087C226.135 147.087 226.114 147.095 226.099 147.111C226.083 147.127 226.074 147.148 226.074 147.17C226.074 147.192 226.083 147.213 226.099 147.228C226.114 147.244 226.135 147.253 226.157 147.253C230.915 147.013 235.663 147.714 240.421 147.668C240.447 147.664 240.471 147.652 240.49 147.633C240.509 147.614 240.521 147.589 240.524 147.563C240.527 147.537 240.521 147.51 240.508 147.487C240.494 147.464 240.473 147.447 240.448 147.437Z"
              fill="#263238"
            />
            <path
              d="M240.716 155.892C239.617 155.77 238.508 155.792 237.415 155.956C236.253 156.067 235.092 156.187 233.93 156.334C231.606 156.62 229.32 156.952 226.987 157.358C226.886 157.358 226.886 157.542 226.987 157.524C229.301 157.247 231.597 156.998 233.948 156.823C235.11 156.731 236.272 156.648 237.443 156.574C238.546 156.57 239.647 156.45 240.725 156.214C240.761 156.205 240.793 156.183 240.815 156.153C240.837 156.123 240.849 156.087 240.848 156.049C240.847 156.012 240.833 155.976 240.809 155.948C240.785 155.919 240.752 155.899 240.716 155.892Z"
              fill="#263238"
            />
            <path
              d="M240.559 165.84C239.564 165.744 238.56 165.819 237.59 166.061L234.418 166.495C232.307 166.781 230.196 167.057 228.066 167.26C227.964 167.26 227.974 167.435 228.066 167.426C230.223 167.232 232.39 167.066 234.52 166.845L237.691 166.504C238.666 166.488 239.631 166.301 240.54 165.951C240.551 165.947 240.561 165.94 240.568 165.931C240.575 165.923 240.58 165.912 240.582 165.901C240.584 165.89 240.583 165.878 240.579 165.867C240.575 165.857 240.568 165.847 240.559 165.84Z"
              fill="#263238"
            />
            <path
              d="M204.297 147.382C201.844 147.981 199.373 148.525 196.921 149.087C194.468 149.65 191.997 150.166 189.545 150.793C187.092 151.293 184.706 152.079 182.436 153.135C180.166 154.21 177.959 155.414 175.825 156.74C177.798 155.138 179.922 153.733 182.169 152.545C184.443 151.378 186.861 150.517 189.36 149.982C191.831 149.41 194.302 148.885 196.791 148.451C199.281 148.018 201.779 147.649 204.297 147.382Z"
              fill="#263238"
            />
            <path
              d="M27.6602 410.945H142.486C143.913 409.034 145.013 406.9 145.741 404.629C146.709 401.125 145.805 396.488 142.163 394.883C139.812 393.86 137.277 394.708 134.852 394.773C134.486 394.837 134.11 394.798 133.765 394.661C133.42 394.525 133.12 394.295 132.897 393.998C132.638 393.498 132.575 392.919 132.722 392.376C133.036 391.131 134.234 390.338 135.23 389.656C135.268 389.631 135.301 389.599 135.325 389.561C135.349 389.522 135.365 389.479 135.37 389.434C135.375 389.389 135.37 389.343 135.356 389.3C135.341 389.257 135.317 389.218 135.285 389.185C134.257 388.325 132.968 387.84 131.628 387.808C130.288 387.776 128.977 388.2 127.909 389.01C126.665 387.683 127.209 385.663 128.029 384.207C128.85 382.75 130.325 381.441 131.339 379.993C132.21 378.862 132.609 377.438 132.455 376.019C132.091 374.584 131.22 373.33 130.002 372.488C128.038 370.921 124.645 369.15 122.313 371.022C119.786 373.05 121.391 376.858 119.75 379.32C119.553 379.686 119.274 380.002 118.935 380.242C118.596 380.482 118.206 380.64 117.795 380.703C117.421 380.68 117.059 380.561 116.744 380.357C116.429 380.154 116.172 379.873 115.997 379.541C115.407 378.712 114.937 377.697 113.932 377.356C114.199 374.811 114.854 372.322 115.103 369.768C115.453 366.08 114.632 361.332 110.788 359.755C110.041 359.439 109.236 359.281 108.425 359.293C107.614 359.304 106.814 359.483 106.076 359.82C105.329 360.233 104.709 360.842 104.282 361.581C103.855 362.32 103.637 363.161 103.651 364.015C103.55 366.191 104.288 368.33 104.029 370.469C103.873 371.806 103.218 373.235 101.632 372.903C100.554 372.578 99.555 372.032 98.7003 371.299C97.5201 370.487 95.5009 369.584 94.2654 370.792C93.5278 371.501 93.6385 372.636 93.0023 373.382C92.6551 373.721 92.2391 373.981 91.7825 374.145C91.326 374.309 90.8395 374.373 90.3562 374.332C88.4292 374.332 86.576 373.889 84.6398 374.055C82.8085 374.187 81.0277 374.715 79.4212 375.604C77.883 376.478 76.6552 377.809 75.9084 379.412C75.263 380.804 74.1382 384.022 72.0452 382.63C71.2128 381.896 70.5411 380.999 70.0722 379.993C69.5282 379.071 68.9842 378.149 68.3941 377.301C67.3545 375.629 65.9284 374.231 64.2359 373.226C62.5135 372.326 60.53 372.059 58.6311 372.472C56.7322 372.885 55.0384 373.951 53.845 375.485C52.6801 377.062 52.097 378.994 52.1946 380.952C52.3237 383.211 53.8634 385.129 53.9556 387.406C54.0211 387.943 53.943 388.488 53.7292 388.986C53.5154 389.483 53.1736 389.914 52.7386 390.237C51.5584 390.937 50.1016 390.301 48.8846 390.024C47.6676 389.748 45.547 389.895 44.9938 391.371C44.9001 391.698 44.889 392.044 44.9613 392.377C45.0337 392.71 45.1874 393.02 45.4087 393.279C45.6668 393.629 45.9803 393.934 46.2108 394.312C46.5243 394.837 46.4597 395.068 45.9711 395.381C44.5512 396.303 42.615 395.999 40.9923 396.156C31.4865 397.041 28.1119 408.271 27.6602 410.945Z"
              fill="#37474F"
            />
            <path
              d="M108.842 392.2C110.244 398.544 111.608 404.776 109.995 410.945H111.313C111.793 409.728 112.235 408.492 112.742 407.257C117.463 405.062 122.552 406.832 127.494 406.215C131.575 405.768 135.334 403.792 138.014 400.683C138.034 400.663 138.05 400.639 138.061 400.613C138.072 400.587 138.077 400.559 138.077 400.531C138.077 400.502 138.072 400.474 138.061 400.448C138.05 400.422 138.034 400.398 138.014 400.378C137.994 400.359 137.971 400.343 137.944 400.332C137.918 400.321 137.89 400.315 137.862 400.315C137.834 400.315 137.806 400.321 137.78 400.332C137.754 400.343 137.73 400.359 137.71 400.378C135.637 402.098 133.282 403.445 130.749 404.362C131.284 403.735 131.791 403.089 132.362 402.518C133.201 401.66 134.133 400.941 135.036 400.157C135.082 400.111 135.036 400.037 134.962 400.065C133.953 400.717 133.008 401.464 132.141 402.296C131.328 402.996 130.59 403.777 129.937 404.629C128.287 405.106 126.576 405.342 124.857 405.33C120.939 405.33 116.559 404.454 113.019 406.445C113.323 405.698 113.627 404.952 113.941 404.223C115.332 401.149 116.953 398.184 118.791 395.354C120.695 392.593 122.366 389.679 123.788 386.641C124.994 383.658 125.791 380.525 126.157 377.328C126.157 377.163 125.936 377.089 125.899 377.264C124.894 382.879 122.211 387.719 119.205 392.459C120.127 389.693 120.865 386.927 121.971 384.243C122.054 384.05 121.778 383.884 121.676 384.078C120.081 387.295 118.366 390.882 117.887 394.487L117.278 395.409C115.153 398.768 113.35 402.322 111.894 406.021C111.931 402.069 111.448 398.129 110.456 394.303C109.422 390.258 108.78 386.124 108.538 381.957C108.538 381.579 108.538 381.21 108.538 380.841C110.84 376.048 111.796 370.72 111.304 365.425C111.304 365.355 111.276 365.287 111.226 365.236C111.175 365.186 111.107 365.158 111.036 365.158C110.966 365.158 110.898 365.186 110.847 365.236C110.797 365.287 110.769 365.355 110.769 365.425C110.82 368.297 110.607 371.167 110.133 374C109.745 375.883 109.208 377.733 108.529 379.532C108.662 376.202 108.97 372.881 109.451 369.584C109.451 369.298 109.036 369.261 108.971 369.519C106.952 377.098 107.192 384.686 108.842 392.2Z"
              fill="#455A64"
            />
            <path
              d="M83.3306 383.644C84.2036 385.39 85.1827 387.08 86.2625 388.706C86.5226 390.095 86.9147 391.457 87.4335 392.772C88.1345 394.538 89.1673 396.153 90.4761 397.53C92.0527 399.198 93.6293 400.637 94.0903 402.868C92.7466 405.376 91.9722 408.149 91.8222 410.991H92.7442C93.5463 405.855 96.1556 401.651 98.5159 396.967C100.581 392.855 102.296 387.507 100.249 383.054C100.129 382.796 99.7514 382.98 99.8067 383.239C101.208 389.185 98.7095 394.173 95.9343 399.291C95.5102 400.083 95.0676 400.895 94.6435 401.725C94.3741 400.708 93.8829 399.763 93.2052 398.959C91.7945 397.179 90.1349 395.741 89.0654 393.703C86.7143 389.213 87.0923 384.363 86.4285 379.514C86.4285 379.246 86.032 379.357 86.0044 379.569C85.6494 382.178 85.6494 384.824 86.0044 387.434C85.336 386.062 84.5655 384.743 83.6994 383.487C83.6663 383.465 83.6283 383.452 83.5887 383.448C83.5491 383.445 83.5093 383.451 83.4727 383.466C83.4361 383.482 83.404 383.506 83.3792 383.537C83.3544 383.568 83.3377 383.605 83.3306 383.644Z"
              fill="#455A64"
            />
            <path
              d="M58.7871 380.491C59.239 383.009 60.2923 385.382 61.8574 387.406C63.056 388.983 64.9184 389.988 66.0894 391.546C67.0851 393.639 68.21 395.649 69.3532 397.659C70.4965 399.669 72.7739 402.665 71.7136 405.219C71.7028 405.245 71.6985 405.272 71.7013 405.3C71.704 405.328 71.7136 405.354 71.7292 405.377C71.7448 405.4 71.7659 405.419 71.7905 405.431C71.8152 405.444 71.8426 405.45 71.8703 405.45C70.5795 407.004 69.8719 408.961 69.8696 410.982H70.432C71.0497 403.55 81.6251 401.577 81.7173 393.897C81.7173 393.546 81.1641 393.464 81.0995 393.814C80.3158 397.981 77.0612 400.323 74.1292 403.034C73.5096 403.614 72.9247 404.229 72.3774 404.878C73.115 403.338 72.5802 401.632 71.8519 400.102C70.6809 397.668 69.2334 395.372 67.9887 392.984C66.6348 390.512 65.4995 387.927 64.5957 385.258C63.8304 382.525 63.4609 379.696 63.4985 376.858C63.4985 376.692 63.2404 376.646 63.2035 376.812C62.217 380.961 63.5446 385.691 65.1766 389.591C64.5681 389.019 63.9042 388.475 63.3326 387.876C61.3779 385.719 60.373 383.063 59.3127 380.417C59.2818 380.371 59.2386 380.335 59.188 380.312C59.1375 380.29 59.0816 380.282 59.0268 380.29C58.972 380.297 58.9204 380.32 58.8781 380.356C58.8357 380.391 58.8042 380.438 58.7871 380.491Z"
              fill="#455A64"
            />
            <path
              d="M37.4792 402.831C39.9871 403.191 42.4212 403.753 44.9751 403.919C47.5788 404.059 50.19 403.926 52.766 403.523C55.9469 403.034 59.1462 402.287 62.2995 402.601C61.3519 402.172 60.4286 401.692 59.5335 401.162C56.3847 399.264 53.9259 396.408 52.5171 393.012C52.3972 392.68 52.8674 392.551 53.0426 392.79C54.3504 394.764 55.8414 396.61 57.4959 398.304C59.5454 399.955 61.8096 401.32 64.2265 402.361C66.0414 403.162 67.6472 404.37 68.9194 405.892C69.2421 406.325 70.8188 408.511 69.8414 408.981C69.8184 408.997 69.7911 409.005 69.7631 409.005C69.7351 409.005 69.7078 408.997 69.6847 408.981L69.6202 408.916C69.6088 408.909 69.5994 408.898 69.5929 408.886C69.5864 408.874 69.583 408.861 69.583 408.847C69.583 408.833 69.5864 408.82 69.5929 408.808C69.5994 408.796 69.6088 408.785 69.6202 408.778C69.823 408.778 67.9421 406.132 67.9052 406.104C67.2019 405.39 66.4084 404.77 65.5449 404.26C65.1024 404.002 64.6229 403.771 64.208 403.541C59.9115 402.711 55.5136 404.279 51.2447 404.795C46.773 405.33 41.4531 405.284 37.2303 403.523C37.1849 403.506 37.1432 403.481 37.1075 403.449C37.0718 403.416 37.0428 403.377 37.0223 403.333C37.0017 403.29 36.99 403.242 36.9877 403.194C36.9854 403.146 36.9927 403.098 37.009 403.052C37.0254 403.007 37.0505 402.965 37.083 402.929C37.1155 402.894 37.1546 402.865 37.1983 402.844C37.242 402.824 37.2893 402.812 37.3375 402.81C37.3857 402.807 37.4338 402.815 37.4792 402.831Z"
              fill="#455A64"
            />
            <path
              d="M93.3894 408.658C94.6526 406.814 96.7178 405.781 98.5711 404.62C101.119 403.193 103.05 400.875 103.992 398.11C104.075 397.861 104.527 397.88 104.49 398.184C103.771 404.03 97.7228 405.717 93.7582 408.953C93.5646 409.11 93.2142 408.907 93.3894 408.658Z"
              fill="#455A64"
            />
            <path
              d="M119.648 404.97C120.57 402.739 122.718 401.162 124.461 399.613C125.486 398.772 126.413 397.82 127.227 396.773C128.225 395.242 128.989 393.57 129.495 391.813C129.506 391.77 129.534 391.734 129.572 391.711C129.61 391.689 129.655 391.682 129.698 391.693C129.741 391.704 129.777 391.732 129.8 391.77C129.822 391.808 129.829 391.853 129.818 391.896C129.294 394.663 127.988 397.223 126.056 399.272C124.037 401.273 121.833 402.96 119.915 405.09C119.86 405.228 119.593 405.108 119.648 404.97Z"
              fill="#455A64"
            />
            <path
              d="M114.217 382.75C114.291 382.887 114.405 382.998 114.544 383.069C114.683 383.139 114.84 383.166 114.994 383.145C115.149 383.124 115.293 383.056 115.408 382.951C115.523 382.846 115.603 382.708 115.637 382.556V382.39C115.684 382.247 115.684 382.091 115.637 381.948C115.601 381.81 115.527 381.685 115.425 381.586C115.323 381.487 115.195 381.417 115.056 381.385C114.894 381.38 114.733 381.418 114.589 381.495C114.446 381.572 114.326 381.685 114.241 381.824C114.155 381.962 114.108 382.121 114.104 382.284C114.1 382.446 114.139 382.607 114.217 382.75Z"
              fill="#455A64"
            />
            <path
              d="M41.3057 400.618C41.3796 400.755 41.4936 400.867 41.6325 400.937C41.7713 401.008 41.9284 401.034 42.0827 401.013C42.2371 400.992 42.3813 400.925 42.4962 400.819C42.6111 400.714 42.6911 400.576 42.7256 400.425C42.7344 400.37 42.7344 400.314 42.7256 400.259C42.7552 400.109 42.7358 399.954 42.6703 399.816C42.6356 399.677 42.5629 399.551 42.4602 399.452C42.3575 399.352 42.2291 399.284 42.0894 399.254C41.9315 399.258 41.7774 399.303 41.6417 399.384C41.5061 399.465 41.3935 399.579 41.3149 399.716C41.2362 399.853 41.194 400.008 41.1924 400.166C41.1908 400.324 41.2298 400.48 41.3057 400.618Z"
              fill="#455A64"
            />
            <path
              d="M112.263 383.893C112.259 383.872 112.259 383.85 112.263 383.829C112.243 383.748 112.243 383.663 112.264 383.583C112.285 383.502 112.326 383.428 112.383 383.368L112.484 383.294C112.53 383.254 112.584 383.226 112.643 383.212C112.702 383.198 112.763 383.198 112.822 383.213C112.881 383.227 112.935 383.255 112.981 383.295C113.026 383.335 113.061 383.385 113.083 383.441C113.286 383.884 112.779 384.465 112.401 384.096C112.362 384.051 112.328 384.001 112.3 383.948V383.902L112.263 383.893Z"
              fill="#455A64"
            />
            <path
              d="M66.9927 380.353V380.288C67.0374 380.217 67.0983 380.157 67.1703 380.114C67.2424 380.071 67.3237 380.045 67.4076 380.039C67.4471 380.031 67.4879 380.031 67.5274 380.039C67.5874 380.042 67.6458 380.059 67.6976 380.089C67.7495 380.119 67.7932 380.161 67.825 380.212C67.8568 380.263 67.8757 380.321 67.8801 380.381C67.8844 380.441 67.8742 380.501 67.8501 380.556C67.6934 381.017 66.9281 381.072 66.9281 380.556C66.9185 380.498 66.9185 380.438 66.9281 380.38L66.9927 380.353Z"
              fill="#455A64"
            />
            <path
              d="M112.051 381.109C112.122 381.076 112.203 381.073 112.277 381.098C112.351 381.124 112.412 381.177 112.447 381.247C112.46 381.276 112.467 381.307 112.467 381.339C112.467 381.371 112.46 381.402 112.447 381.431C112.447 381.501 112.422 381.567 112.378 381.62C112.334 381.673 112.272 381.709 112.204 381.721C112.136 381.733 112.066 381.721 112.006 381.686C111.946 381.652 111.9 381.598 111.876 381.533C111.847 381.453 111.849 381.365 111.881 381.287C111.914 381.208 111.974 381.145 112.051 381.109Z"
              fill="#455A64"
            />
            <path
              d="M96.0543 372.488C96.1255 372.456 96.2064 372.452 96.2802 372.478C96.354 372.504 96.4151 372.557 96.4507 372.626C96.4634 372.655 96.47 372.687 96.47 372.718C96.47 372.75 96.4634 372.782 96.4507 372.811C96.4504 372.88 96.4259 372.947 96.3814 372.999C96.3369 373.052 96.2753 373.088 96.2072 373.1C96.1392 373.112 96.0691 373.1 96.0091 373.065C95.9492 373.031 95.9031 372.977 95.8791 372.912C95.8503 372.832 95.8523 372.745 95.8847 372.666C95.9171 372.588 95.9776 372.524 96.0543 372.488Z"
              fill="#455A64"
            />
            <path
              d="M65.5173 377.734C65.5894 377.763 65.6483 377.818 65.6823 377.888C65.7164 377.958 65.7233 378.038 65.7017 378.112C65.681 378.172 65.6423 378.223 65.5911 378.26C65.5426 378.311 65.4775 378.343 65.4074 378.35C65.3374 378.357 65.267 378.339 65.2091 378.299C65.1512 378.259 65.1096 378.2 65.0917 378.132C65.0738 378.063 65.0809 377.991 65.1116 377.928C65.1427 377.851 65.2016 377.788 65.2767 377.752C65.3519 377.716 65.4377 377.71 65.5173 377.734Z"
              fill="#455A64"
            />
            <path
              d="M439.324 410.945H316.698C315.174 408.903 313.999 406.622 313.222 404.196C312.18 400.452 313.148 395.492 317.048 393.786C319.556 392.689 322.267 393.602 324.857 393.666C325.247 393.733 325.647 393.692 326.014 393.548C326.382 393.403 326.702 393.16 326.941 392.846C327.22 392.309 327.289 391.688 327.135 391.103C326.803 389.776 325.521 388.927 324.452 388.199C324.411 388.173 324.377 388.138 324.352 388.098C324.327 388.057 324.311 388.011 324.306 387.963C324.3 387.915 324.306 387.867 324.321 387.822C324.337 387.776 324.363 387.735 324.396 387.701C325.497 386.772 326.882 386.246 328.322 386.211C329.763 386.175 331.172 386.633 332.316 387.507C333.644 386.088 333.063 383.93 332.187 382.372C331.311 380.814 329.735 379.449 328.656 377.872C327.718 376.67 327.287 375.147 327.457 373.631C327.83 372.082 328.755 370.722 330.058 369.805C332.16 368.136 335.783 366.237 338.273 368.238C340.965 370.414 339.241 374.47 341.039 377.126C341.252 377.516 341.551 377.853 341.913 378.11C342.276 378.367 342.693 378.538 343.131 378.61C343.531 378.584 343.917 378.456 344.253 378.238C344.588 378.02 344.863 377.719 345.049 377.365C345.676 376.443 346.183 375.402 347.262 375.024C346.967 372.304 346.266 369.648 346.008 366.919C345.63 362.991 346.506 357.902 350.618 356.224C351.416 355.885 352.275 355.716 353.142 355.727C354.009 355.738 354.863 355.929 355.652 356.288C356.447 356.733 357.108 357.384 357.564 358.173C358.02 358.961 358.254 359.858 358.243 360.769C358.344 363.093 357.561 365.379 357.837 367.712C358.013 369.132 358.704 370.635 360.401 370.303C361.552 369.958 362.62 369.377 363.535 368.597C364.789 367.721 366.956 366.753 368.274 368.053C369.049 368.809 368.948 370.008 369.621 370.819C369.993 371.179 370.439 371.454 370.927 371.626C371.416 371.797 371.935 371.862 372.451 371.815C374.507 371.815 376.489 371.345 378.555 371.52C380.513 371.657 382.418 372.223 384.133 373.18C385.775 374.113 387.087 375.534 387.885 377.246C388.568 378.739 389.775 382.215 392.016 380.675C392.882 379.902 393.581 378.961 394.072 377.909C394.653 376.987 395.234 375.964 395.87 375.033C396.975 373.245 398.496 371.752 400.305 370.681C402.14 369.725 404.253 369.444 406.274 369.885C408.296 370.326 410.099 371.463 411.369 373.097C412.614 374.78 413.239 376.841 413.139 378.933C413.001 381.348 411.35 383.395 411.249 385.792C411.179 386.366 411.263 386.949 411.491 387.48C411.719 388.011 412.084 388.472 412.549 388.817C413.812 389.563 415.379 388.89 416.67 388.595C417.961 388.3 420.238 388.448 420.828 390.034C420.93 390.382 420.942 390.75 420.865 391.104C420.787 391.458 420.623 391.788 420.386 392.062C420.109 392.44 419.777 392.772 419.528 393.168C419.196 393.731 419.261 393.971 419.787 394.321C421.308 395.344 423.364 394.976 425.097 395.142C435.258 396.082 438.872 408.086 439.324 410.945Z"
              fill="#455A64"
            />
            <path
              d="M352.6 390.928C351.098 397.705 349.613 404.362 351.374 410.954H349.963C349.447 409.645 348.949 408.326 348.433 407.017C343.39 404.666 337.959 406.556 332.63 405.901C328.472 405.394 324.046 403.366 321.391 400.028C321.348 399.984 321.324 399.925 321.325 399.864C321.326 399.802 321.351 399.744 321.395 399.701C321.439 399.658 321.499 399.634 321.56 399.635C321.621 399.636 321.68 399.661 321.723 399.705C323.936 401.541 326.45 402.979 329.154 403.956C328.592 403.292 328.048 402.601 327.43 401.974C326.508 401.052 325.54 400.296 324.581 399.457C324.526 399.41 324.581 399.327 324.655 399.364C325.736 400.055 326.746 400.852 327.67 401.743C328.539 402.49 329.33 403.324 330.03 404.232C331.792 404.74 333.617 404.995 335.451 404.989C339.628 404.989 344.312 404.067 348.101 406.169C347.778 405.376 347.456 404.583 347.105 403.799C345.612 400.517 343.88 397.349 341.924 394.321C339.888 391.374 338.102 388.262 336.585 385.018C335.297 381.831 334.444 378.485 334.05 375.07C334.05 374.885 334.289 374.802 334.326 374.996C335.405 380.989 338.309 386.161 341.481 391.232C340.504 388.3 339.711 385.313 338.475 382.455C338.383 382.252 338.678 382.068 338.789 382.28C340.495 385.709 342.32 389.545 342.846 393.39C343.058 393.731 343.27 394.072 343.491 394.413C345.758 398.003 347.684 401.796 349.244 405.745C349.023 401.531 349.927 397.096 350.784 393.233C351.881 388.91 352.564 384.492 352.822 380.039C352.822 379.643 352.822 379.246 352.822 378.85C350.355 373.719 349.332 368.014 349.862 362.346C349.862 362.27 349.892 362.197 349.946 362.144C349.999 362.09 350.072 362.06 350.148 362.06C350.224 362.06 350.296 362.09 350.35 362.144C350.404 362.197 350.434 362.27 350.434 362.346C350.381 365.415 350.606 368.482 351.107 371.511C351.522 373.529 352.096 375.511 352.822 377.439C352.686 373.881 352.363 370.333 351.854 366.808C351.854 366.504 352.296 366.467 352.37 366.735C354.61 374.747 354.371 382.888 352.6 390.928Z"
              fill="#37474F"
            />
            <path
              d="M379.864 381.782C378.927 383.643 377.88 385.447 376.729 387.185C376.447 388.653 376.028 390.092 375.475 391.481C374.725 393.367 373.62 395.091 372.221 396.561C370.534 398.341 368.856 399.881 368.358 402.269C369.803 404.944 370.631 407.908 370.782 410.945H369.778C368.92 405.413 366.09 400.959 363.609 395.962C361.397 391.564 359.562 385.82 361.765 381.09C361.894 380.823 362.3 381.016 362.236 381.293C360.733 387.646 363.406 392.975 366.366 398.442C366.827 399.291 367.288 400.157 367.758 401.042C368.034 399.938 368.561 398.913 369.298 398.046C370.792 396.147 372.571 394.607 373.714 392.431C376.232 387.636 375.826 382.455 376.536 377.264C376.536 376.987 376.96 377.107 376.988 377.328C377.365 380.119 377.365 382.947 376.988 385.737C377.702 384.273 378.525 382.865 379.449 381.524C379.491 381.489 379.542 381.469 379.596 381.466C379.65 381.462 379.703 381.476 379.749 381.504C379.795 381.533 379.831 381.575 379.851 381.625C379.872 381.674 379.876 381.729 379.864 381.782Z"
              fill="#37474F"
            />
            <path
              d="M406.086 378.407C405.6 381.094 404.474 383.624 402.803 385.783C401.522 387.471 399.53 388.549 398.286 390.209C397.225 392.44 396.008 394.588 394.8 396.737C393.593 398.885 391.112 402.093 392.274 404.823C392.329 404.961 392.219 405.053 392.099 405.062C393.474 406.711 394.231 408.788 394.238 410.935H393.694C393.021 402.988 381.708 400.886 381.625 392.689C381.625 392.311 382.224 392.219 382.289 392.597C383.128 397.05 386.613 399.549 389.739 402.444C390.394 403.049 391.01 403.695 391.583 404.38C390.799 402.73 391.361 400.913 392.145 399.272C393.399 396.672 394.911 394.21 396.276 391.666C397.724 389.028 398.934 386.267 399.89 383.414C400.71 380.492 401.107 377.468 401.07 374.433C401.07 374.258 401.347 374.212 401.383 374.387C402.444 378.813 401.015 383.875 399.272 388.042C399.927 387.424 400.627 386.853 401.208 386.198C403.301 383.893 404.371 381.063 405.505 378.223C405.541 378.163 405.597 378.116 405.663 378.092C405.729 378.067 405.801 378.065 405.868 378.086C405.935 378.108 405.993 378.151 406.032 378.209C406.072 378.267 406.091 378.337 406.086 378.407Z"
              fill="#37474F"
            />
            <path
              d="M428.859 402.278C426.167 402.665 423.576 403.292 420.847 403.44C418.074 403.587 415.293 403.445 412.549 403.015C409.147 402.49 405.726 401.697 402.361 402.093C403.384 401.641 404.379 401.127 405.339 400.554C408.703 398.527 411.33 395.477 412.835 391.85C412.973 391.49 412.466 391.361 412.273 391.61C410.715 393.657 409.424 395.741 407.488 397.474C405.339 399.401 402.878 400.526 400.296 401.817C398.363 402.673 396.65 403.96 395.289 405.579C394.939 406.04 393.261 408.345 394.284 408.879C394.31 408.897 394.341 408.906 394.372 408.906C394.403 408.906 394.434 408.897 394.46 408.879L394.524 408.806C394.534 408.793 394.54 408.778 394.543 408.763C394.546 408.747 394.545 408.731 394.541 408.716C394.536 408.7 394.528 408.686 394.517 408.675C394.506 408.663 394.493 408.654 394.478 408.649C394.257 408.649 396.276 405.828 396.322 405.8C397.082 405.05 397.934 404.399 398.858 403.864C399.319 403.587 399.78 403.338 400.277 403.098C404.887 402.176 409.571 403.891 414.107 404.435C418.893 405.007 424.572 404.961 429.09 403.08C429.196 403.049 429.286 402.978 429.34 402.881C429.393 402.784 429.406 402.67 429.376 402.564C429.345 402.457 429.274 402.367 429.177 402.314C429.08 402.26 428.966 402.247 428.859 402.278Z"
              fill="#37474F"
            />
            <path
              d="M369.114 408.501C367.768 406.528 365.555 405.431 363.582 404.186C360.862 402.661 358.8 400.185 357.792 397.234C357.699 396.967 357.22 396.986 357.257 397.308C358.022 403.559 364.485 405.357 368.727 408.815C368.92 408.981 369.298 408.769 369.114 408.501Z"
              fill="#37474F"
            />
            <path
              d="M341.057 404.555C340.089 402.176 337.775 400.489 335.912 398.839C334.824 397.935 333.835 396.918 332.962 395.805C331.905 394.163 331.088 392.378 330.537 390.504C330.519 390.467 330.489 390.438 330.452 390.421C330.414 390.404 330.372 390.401 330.333 390.412C330.293 390.423 330.259 390.447 330.236 390.481C330.212 390.515 330.202 390.555 330.205 390.596C330.749 393.563 332.143 396.307 334.216 398.498C336.373 400.646 338.734 402.444 340.781 404.721C340.882 404.832 341.14 404.758 341.057 404.555Z"
              fill="#37474F"
            />
            <path
              d="M346.866 380.786C346.786 380.933 346.663 381.051 346.514 381.126C346.365 381.202 346.197 381.23 346.032 381.206C345.866 381.183 345.712 381.111 345.589 380.998C345.466 380.885 345.381 380.737 345.344 380.574C345.336 380.516 345.336 380.457 345.344 380.399C345.314 380.237 345.334 380.07 345.4 379.919C345.44 379.775 345.519 379.644 345.628 379.54C345.737 379.436 345.871 379.363 346.017 379.329C346.737 379.191 347.262 380.141 346.866 380.786Z"
              fill="#37474F"
            />
            <path
              d="M424.766 399.908C424.686 400.055 424.565 400.174 424.416 400.25C424.268 400.325 424.1 400.354 423.935 400.332C423.77 400.31 423.615 400.238 423.492 400.126C423.368 400.015 423.282 399.868 423.244 399.705C423.236 399.647 423.236 399.588 423.244 399.53C423.214 399.372 423.234 399.208 423.299 399.06C423.34 398.914 423.418 398.782 423.527 398.676C423.635 398.571 423.77 398.496 423.917 398.461C424.087 398.459 424.255 398.503 424.403 398.587C424.551 398.671 424.674 398.793 424.76 398.939C424.846 399.086 424.892 399.253 424.893 399.423C424.894 399.593 424.85 399.761 424.766 399.908Z"
              fill="#37474F"
            />
            <path
              d="M348.949 382.04C348.946 382.015 348.946 381.991 348.949 381.966C348.971 381.879 348.97 381.788 348.948 381.701C348.925 381.614 348.881 381.534 348.82 381.468C348.789 381.436 348.751 381.411 348.71 381.394C348.661 381.353 348.604 381.324 348.542 381.309C348.481 381.294 348.416 381.293 348.354 381.308C348.293 381.322 348.235 381.351 348.186 381.391C348.137 381.432 348.099 381.484 348.074 381.542C347.852 382.021 348.396 382.639 348.802 382.243C348.844 382.196 348.878 382.143 348.903 382.086L348.949 382.04Z"
              fill="#37474F"
            />
            <path
              d="M397.317 378.26V378.195C397.271 378.119 397.206 378.055 397.129 378.01C397.052 377.965 396.964 377.94 396.875 377.937H396.746C396.682 377.942 396.62 377.962 396.565 377.996C396.511 378.03 396.465 378.076 396.431 378.131C396.398 378.186 396.378 378.248 396.374 378.312C396.369 378.376 396.38 378.44 396.405 378.499C396.58 378.988 397.4 379.053 397.41 378.499C397.423 378.439 397.423 378.376 397.41 378.315L397.317 378.26Z"
              fill="#37474F"
            />
            <path
              d="M349.171 379.071C349.095 379.036 349.008 379.031 348.929 379.059C348.85 379.087 348.784 379.144 348.746 379.219C348.723 379.281 348.723 379.35 348.746 379.412C348.745 379.486 348.771 379.559 348.818 379.616C348.865 379.673 348.931 379.712 349.004 379.725C349.077 379.739 349.152 379.726 349.217 379.689C349.281 379.651 349.33 379.593 349.355 379.523C349.389 379.438 349.389 379.344 349.354 379.26C349.32 379.175 349.254 379.108 349.171 379.071Z"
              fill="#37474F"
            />
            <path
              d="M366.264 369.814C366.188 369.783 366.103 369.781 366.025 369.808C365.947 369.835 365.881 369.89 365.84 369.962C365.814 370.027 365.814 370.1 365.84 370.165C365.839 370.239 365.864 370.311 365.912 370.368C365.959 370.426 366.025 370.464 366.098 370.478C366.171 370.491 366.246 370.478 366.31 370.441C366.375 370.404 366.424 370.345 366.449 370.275C366.479 370.189 366.477 370.095 366.443 370.01C366.409 369.925 366.346 369.856 366.264 369.814Z"
              fill="#37474F"
            />
            <path
              d="M398.894 375.457C398.815 375.486 398.751 375.545 398.715 375.62C398.679 375.696 398.674 375.783 398.701 375.862C398.718 375.929 398.761 375.985 398.82 376.019C398.872 376.071 398.941 376.103 399.014 376.109C399.086 376.116 399.159 376.096 399.22 376.055C399.28 376.013 399.324 375.952 399.343 375.881C399.363 375.811 399.357 375.736 399.328 375.669C399.294 375.586 399.232 375.519 399.152 375.479C399.072 375.44 398.98 375.432 398.894 375.457Z"
              fill="#37474F"
            />
            <path
              d="M228.592 432.151H60.7877C58.7041 429.361 57.0966 426.245 56.0302 422.931C54.6103 417.823 55.9288 411.037 61.2672 408.695C64.7062 407.192 68.4034 408.446 71.9531 408.538C73.0319 408.538 74.212 408.428 74.8021 407.404C75.1898 406.674 75.2822 405.822 75.0603 405.025C74.6085 403.181 72.8567 402.038 71.3723 401.042C71.3167 401.008 71.2695 400.962 71.2342 400.907C71.1989 400.853 71.1765 400.791 71.1685 400.726C71.1605 400.661 71.1672 400.596 71.1882 400.534C71.2091 400.472 71.2436 400.416 71.2893 400.369C72.7962 399.1 74.691 398.383 76.6607 398.336C78.6304 398.289 80.5571 398.915 82.1228 400.111C83.9668 398.156 83.1554 395.215 81.9568 393.085C80.666 390.799 78.6007 389.075 77.1163 386.917C75.8323 385.273 75.2462 383.19 75.4844 381.118C75.9889 379 77.2517 377.14 79.0341 375.89C81.9107 373.594 86.8803 371.004 90.2733 373.733C93.9613 376.711 91.6102 382.27 94.0258 385.894C94.3175 386.429 94.7274 386.891 95.2242 387.244C95.7211 387.597 96.2919 387.832 96.8932 387.932C97.4389 387.894 97.9659 387.718 98.4242 387.419C98.8825 387.12 99.2568 386.71 99.5117 386.226C100.378 385.009 101.07 383.534 102.536 383.017C102.139 379.329 101.181 375.641 100.821 371.953C100.305 366.578 101.512 359.608 107.137 357.312C108.226 356.845 109.401 356.613 110.585 356.629C111.77 356.644 112.938 356.909 114.015 357.404C115.105 358.009 116.011 358.897 116.637 359.975C117.264 361.053 117.587 362.28 117.574 363.526C117.712 366.707 116.652 369.842 117.011 373.023C117.251 374.968 118.191 377.024 120.524 376.572C122.156 376.259 123.474 375.162 124.811 374.24C126.526 373.041 129.486 371.732 131.265 373.493C132.335 374.526 132.187 376.167 133.109 377.282C134.031 378.398 135.626 378.629 136.991 378.647C139.757 378.693 142.523 378.002 145.344 378.241C148.022 378.427 150.625 379.202 152.969 380.509C155.216 381.773 157.011 383.707 158.105 386.041C159.027 388.079 160.696 392.827 163.757 390.734C165.038 389.812 165.794 388.199 166.578 386.899C167.362 385.599 168.164 384.234 169.03 382.962C170.547 380.514 172.631 378.468 175.106 376.997C177.624 375.679 180.524 375.288 183.3 375.893C186.077 376.498 188.552 378.06 190.292 380.307C191.993 382.61 192.846 385.431 192.707 388.291C192.523 391.61 190.273 394.395 190.126 397.677C190.071 399.189 190.504 400.996 191.905 401.826C193.639 402.849 195.778 401.918 197.548 401.513C199.318 401.107 202.425 401.31 203.227 403.476C203.365 403.951 203.382 404.452 203.277 404.935C203.173 405.418 202.95 405.867 202.628 406.242C202.25 406.759 201.789 407.211 201.457 407.755C201.005 408.52 201.088 408.861 201.808 409.331C203.882 410.723 206.713 410.253 209.082 410.456C223.032 411.811 227.965 428.241 228.592 432.151Z"
              fill="#263238"
            />
            <path
              d="M109.921 404.758C107.874 414.033 105.846 423.143 108.252 432.169H106.325C105.615 430.38 104.933 428.573 104.232 426.775C97.3267 423.558 89.8954 426.148 82.6024 425.254C76.9136 424.553 70.8561 421.787 67.2326 417.223C67.203 417.194 67.1793 417.16 67.163 417.122C67.1467 417.083 67.1381 417.042 67.1377 417.001C67.1373 416.959 67.145 416.918 67.1605 416.88C67.176 416.841 67.199 416.806 67.228 416.776C67.2571 416.747 67.2917 416.723 67.3299 416.707C67.3681 416.69 67.4091 416.682 67.4506 416.681C67.4922 416.681 67.5334 416.689 67.5719 416.704C67.6104 416.72 67.6455 416.743 67.6752 416.772C70.6939 419.283 74.1255 421.251 77.8172 422.589C77.0427 421.667 76.3051 420.745 75.4661 419.879C74.2398 418.634 72.8753 417.583 71.5568 416.431C71.483 416.375 71.5568 416.255 71.6674 416.301C73.1515 417.233 74.5411 418.308 75.8164 419.51C77.0074 420.529 78.0889 421.669 79.0434 422.912C81.44 423.608 83.924 423.956 86.4194 423.945C92.1451 423.945 98.553 422.654 103.735 425.568C103.292 424.48 102.813 423.392 102.37 422.313C100.346 417.829 97.9918 413.502 95.326 409.368C92.6798 405.247 89.9415 401.162 88.0145 396.635C86.2467 392.277 85.0804 387.699 84.5478 383.026C84.5478 382.777 84.8797 382.667 84.9258 382.925C86.401 391.131 90.384 398.212 94.7082 405.145C93.3805 401.135 92.2926 397.05 90.6053 393.159C90.4855 392.883 90.8819 392.634 91.0294 392.92C93.3621 397.612 95.8699 402.859 96.5614 408.133C96.8565 408.594 97.1515 409.055 97.4834 409.525C100.585 414.438 103.216 419.633 105.339 425.042C105.044 419.27 106.261 413.204 107.441 407.911C108.778 401.937 110.06 396.017 110.207 389.868C110.207 389.314 110.207 388.78 110.207 388.236C106.829 381.23 105.423 373.437 106.141 365.693C106.141 365.59 106.182 365.492 106.254 365.419C106.327 365.346 106.426 365.306 106.528 365.306C106.631 365.306 106.729 365.346 106.802 365.419C106.875 365.492 106.916 365.59 106.916 365.693C106.844 369.892 107.153 374.089 107.838 378.232C108.4 380.995 109.183 383.708 110.179 386.346C109.992 381.476 109.549 376.62 108.852 371.796C108.806 371.391 109.451 371.335 109.552 371.704C112.687 382.63 112.346 393.749 109.921 404.758Z"
              fill="#455A64"
            />
            <path
              d="M147.234 392.237C145.956 394.782 144.521 397.246 142.938 399.613C142.555 401.623 141.984 403.593 141.232 405.496C140.203 408.075 138.691 410.434 136.779 412.448C134.474 414.882 132.169 416.993 131.496 420.257C133.34 424.028 134.787 428.029 134.815 432.132H133.432C132.252 424.618 128.435 418.468 124.986 411.627C121.971 405.616 119.454 397.797 122.46 391.288C122.626 390.91 123.179 391.186 123.096 391.555C121.04 400.24 124.7 407.533 128.757 415.02C129.384 416.182 130.03 417.371 130.657 418.579C131.042 417.071 131.761 415.67 132.759 414.476C134.806 411.885 137.24 409.783 138.798 406.805C142.246 400.24 141.693 393.141 142.661 386.051C142.716 385.654 143.242 385.829 143.279 386.134C143.795 389.949 143.795 393.816 143.279 397.631C144.238 395.623 145.347 393.69 146.598 391.85C146.649 391.766 146.732 391.705 146.828 391.682C146.924 391.658 147.025 391.674 147.11 391.726C147.194 391.777 147.255 391.86 147.278 391.956C147.301 392.052 147.286 392.153 147.234 392.237Z"
              fill="#455A64"
            />
            <path
              d="M183.109 387.627C182.452 391.32 180.911 394.8 178.619 397.769C176.867 400.065 174.148 401.531 172.442 403.818C170.985 406.869 169.325 409.811 167.666 412.752C165.905 415.868 162.659 420.072 164.218 423.816C164.291 424.009 164.144 424.129 163.978 424.148C165.858 426.407 166.894 429.249 166.91 432.188H166.089C165.167 421.317 149.724 418.431 149.585 407.211C149.585 406.694 150.397 406.574 150.507 407.091C151.66 413.185 156.417 416.596 160.705 420.561C161.607 421.396 162.46 422.282 163.259 423.216C162.189 420.948 162.954 418.468 164.033 416.228C165.739 412.669 167.85 409.303 169.685 405.818C171.662 402.205 173.318 398.426 174.636 394.524C175.918 390.439 176.13 386.484 176.24 382.243C176.24 382.189 176.259 382.138 176.294 382.097C176.328 382.057 176.376 382.03 176.429 382.023C176.482 382.015 176.536 382.026 176.581 382.055C176.625 382.083 176.659 382.127 176.674 382.178C178.121 388.236 176.167 395.16 173.788 400.858C174.71 400.019 175.632 399.226 176.434 398.35C179.292 395.188 180.758 391.315 182.316 387.443C182.361 387.363 182.431 387.3 182.515 387.263C182.599 387.226 182.693 387.217 182.782 387.238C182.871 387.259 182.951 387.308 183.011 387.378C183.07 387.448 183.104 387.536 183.109 387.627Z"
              fill="#455A64"
            />
            <path
              d="M214.264 420.284C210.576 420.81 207.035 421.677 203.311 421.88C199.502 422.083 195.683 421.888 191.915 421.299C187.259 420.58 182.584 419.455 177.983 419.98C179.38 419.366 180.738 418.667 182.049 417.887C186.383 415.223 190.55 410.806 192.311 405.975C192.496 405.486 191.804 405.302 191.546 405.643C189.407 408.409 187.646 411.286 184.99 413.665C182.049 416.301 178.638 417.841 175.153 419.602C172.506 420.775 170.163 422.538 168.302 424.756C167.823 425.392 165.536 428.582 166.928 429.274C166.963 429.301 167.005 429.315 167.048 429.315C167.092 429.315 167.134 429.301 167.168 429.274L167.251 429.182C167.306 429.117 167.251 428.988 167.196 428.97C166.892 428.914 169.648 425.107 169.694 425.07C170.73 424.045 171.892 423.156 173.152 422.424C173.788 422.045 174.443 421.704 175.107 421.372C181.385 420.165 187.812 422.451 194.054 423.216C200.6 424 208.372 423.926 214.55 421.372C214.694 421.335 214.817 421.241 214.893 421.112C214.968 420.983 214.989 420.83 214.951 420.686C214.913 420.541 214.819 420.418 214.69 420.343C214.562 420.268 214.408 420.247 214.264 420.284Z"
              fill="#455A64"
            />
            <path
              d="M132.528 428.813C130.684 426.112 127.651 424.599 124.94 422.903C121.105 420.497 118.486 417.731 117.02 413.388C116.891 413.019 116.237 413.047 116.292 413.489C117.343 422.046 126.185 424.498 131.966 429.237C132.261 429.468 132.768 429.163 132.528 428.813Z"
              fill="#455A64"
            />
            <path
              d="M94.1272 423.41C92.8088 420.146 89.6463 417.878 87.0924 415.582C85.6058 414.346 84.2551 412.955 83.0632 411.433C81.4497 409.248 80.6568 406.703 79.744 404.177C79.7243 404.119 79.6831 404.071 79.6289 404.042C79.5746 404.014 79.5115 404.007 79.4524 404.023C79.3934 404.04 79.3429 404.078 79.3114 404.131C79.2799 404.184 79.2698 404.246 79.283 404.306C80.205 408.418 81.7448 412.106 84.815 415.121C87.8853 418.136 90.9924 420.524 93.7861 423.631C93.8967 423.788 94.2194 423.622 94.1272 423.41Z"
              fill="#455A64"
            />
            <path
              d="M102.075 390.928C101.968 391.129 101.801 391.293 101.598 391.397C101.394 391.501 101.164 391.54 100.938 391.509C100.712 391.478 100.501 391.378 100.333 391.223C100.165 391.068 100.049 390.865 100 390.642C99.987 390.563 99.987 390.482 100 390.402V390.356C99.9665 390.139 99.992 389.916 100.074 389.711C100.13 389.51 100.239 389.329 100.39 389.186C100.541 389.043 100.728 388.944 100.932 388.9C101.909 388.697 102.619 390.006 102.075 390.928Z"
              fill="#37474F"
            />
            <path
              d="M208.667 417.048C208.56 417.25 208.395 417.414 208.192 417.518C207.989 417.623 207.759 417.663 207.533 417.632C207.307 417.602 207.096 417.504 206.928 417.35C206.76 417.196 206.643 416.994 206.593 416.772C206.584 416.689 206.584 416.605 206.593 416.523C206.596 416.508 206.596 416.492 206.593 416.477C206.554 416.259 206.58 416.035 206.666 415.831C206.723 415.633 206.831 415.453 206.98 415.311C207.129 415.168 207.314 415.068 207.515 415.02C207.754 415.012 207.992 415.07 208.201 415.188C208.411 415.305 208.584 415.478 208.703 415.686C208.821 415.895 208.881 416.132 208.874 416.372C208.868 416.612 208.796 416.846 208.667 417.048Z"
              fill="#37474F"
            />
            <path
              d="M104.924 392.597C104.928 392.566 104.928 392.535 104.924 392.505C104.953 392.385 104.952 392.261 104.922 392.142C104.891 392.023 104.832 391.913 104.749 391.822C104.705 391.781 104.655 391.747 104.601 391.721C104.535 391.663 104.455 391.622 104.369 391.601C104.284 391.58 104.194 391.58 104.109 391.601C104.023 391.622 103.943 391.663 103.877 391.721C103.81 391.778 103.758 391.851 103.725 391.933C103.421 392.578 104.159 393.427 104.712 392.855C104.776 392.796 104.827 392.724 104.859 392.643C104.867 392.644 104.874 392.644 104.881 392.642C104.889 392.641 104.895 392.638 104.901 392.634C104.907 392.629 104.913 392.624 104.916 392.617C104.92 392.611 104.923 392.604 104.924 392.597Z"
              fill="#37474F"
            />
            <path
              d="M171.114 387.424C171.119 387.394 171.119 387.363 171.114 387.332C171.05 387.227 170.961 387.14 170.855 387.077C170.748 387.014 170.629 386.978 170.506 386.973C170.448 386.965 170.389 386.965 170.33 386.973C170.243 386.979 170.158 387.006 170.083 387.052C170.008 387.097 169.945 387.16 169.899 387.235C169.853 387.31 169.826 387.394 169.819 387.482C169.812 387.569 169.826 387.657 169.86 387.738C170.1 388.411 171.225 388.494 171.234 387.738C171.247 387.655 171.247 387.571 171.234 387.489C171.243 387.473 171.244 387.454 171.239 387.437C171.234 387.42 171.222 387.405 171.206 387.397C171.19 387.388 171.172 387.386 171.155 387.391C171.137 387.397 171.123 387.409 171.114 387.424Z"
              fill="#37474F"
            />
            <path
              d="M105.237 388.531C105.133 388.485 105.015 388.48 104.907 388.518C104.799 388.556 104.709 388.633 104.656 388.734C104.638 388.776 104.629 388.821 104.629 388.867C104.629 388.913 104.638 388.959 104.656 389.001C104.657 389.102 104.694 389.2 104.759 389.277C104.825 389.354 104.915 389.406 105.014 389.423C105.114 389.441 105.217 389.423 105.304 389.373C105.392 389.322 105.46 389.243 105.495 389.149C105.537 389.032 105.533 388.904 105.485 388.79C105.438 388.676 105.349 388.583 105.237 388.531Z"
              fill="#37474F"
            />
            <path
              d="M128.619 375.872C128.516 375.824 128.399 375.819 128.292 375.856C128.185 375.894 128.097 375.973 128.048 376.075C128.028 376.116 128.018 376.162 128.018 376.208C128.018 376.254 128.028 376.3 128.048 376.342C128.038 376.447 128.068 376.552 128.131 376.636C128.195 376.721 128.287 376.778 128.391 376.798C128.495 376.817 128.602 376.798 128.692 376.742C128.782 376.687 128.848 376.6 128.877 376.499C128.921 376.381 128.919 376.251 128.871 376.134C128.824 376.018 128.733 375.924 128.619 375.872Z"
              fill="#37474F"
            />
            <path
              d="M173.272 383.598C173.166 383.638 173.08 383.716 173.03 383.817C172.981 383.918 172.971 384.034 173.004 384.142C173.014 384.189 173.034 384.233 173.063 384.271C173.092 384.309 173.128 384.341 173.17 384.363C173.242 384.433 173.336 384.475 173.435 384.484C173.534 384.492 173.634 384.466 173.716 384.409C173.799 384.353 173.859 384.27 173.887 384.174C173.915 384.079 173.91 383.976 173.871 383.884C173.825 383.77 173.738 383.677 173.627 383.624C173.516 383.571 173.389 383.561 173.272 383.598Z"
              fill="#37474F"
            />
            <path
              d="M265.923 432.151H391.039C392.59 430.066 393.787 427.738 394.579 425.263C395.639 421.446 394.653 416.384 390.679 414.642C388.116 413.526 385.359 414.457 382.713 414.522C382.315 414.595 381.905 414.555 381.528 414.407C381.152 414.258 380.825 414.008 380.583 413.683C380.299 413.138 380.23 412.506 380.39 411.913C380.731 410.557 382.04 409.691 383.156 408.944C383.196 408.917 383.23 408.881 383.256 408.84C383.281 408.798 383.297 408.752 383.302 408.703C383.307 408.655 383.302 408.606 383.286 408.56C383.27 408.514 383.245 408.472 383.211 408.437C382.088 407.49 380.675 406.955 379.207 406.92C377.738 406.885 376.302 407.352 375.134 408.243C373.779 406.796 374.369 404.601 375.263 403.006C376.158 401.411 377.762 400.019 378.868 398.396C379.822 397.168 380.259 395.617 380.085 394.072C379.71 392.492 378.769 391.105 377.439 390.172C375.291 388.466 371.594 386.53 369.058 388.568C366.292 390.79 368.062 394.929 366.292 397.631C366.079 398.031 365.775 398.376 365.406 398.638C365.036 398.901 364.61 399.073 364.162 399.143C363.755 399.121 363.36 398.993 363.017 398.771C362.674 398.55 362.395 398.243 362.208 397.88C361.562 396.958 361.046 395.87 359.949 395.492C360.244 392.726 360.963 389.96 361.23 387.194C361.608 383.183 360.714 377.974 356.519 376.287C355.707 375.939 354.832 375.765 353.949 375.776C353.066 375.787 352.195 375.983 351.393 376.351C350.581 376.802 349.906 377.465 349.44 378.268C348.974 379.072 348.735 379.986 348.747 380.915C348.636 383.285 349.447 385.627 349.161 387.996C348.986 389.444 348.239 390.974 346.543 390.642C345.369 390.286 344.28 389.693 343.344 388.9C342.071 387.978 339.858 387.056 338.512 388.346C337.719 389.112 337.83 390.338 337.148 391.168C336.767 391.536 336.311 391.818 335.812 391.995C335.312 392.172 334.781 392.239 334.253 392.191C332.16 392.191 330.141 391.702 328.029 391.887C326.032 392.024 324.09 392.6 322.34 393.574C320.667 394.528 319.33 395.978 318.514 397.723C317.813 399.244 316.587 402.785 314.301 401.227C313.418 400.423 312.703 399.451 312.198 398.369C311.608 397.373 311.018 396.377 310.354 395.427C309.224 393.604 307.671 392.08 305.827 390.983C303.95 390.001 301.787 389.71 299.718 390.162C297.648 390.614 295.803 391.779 294.505 393.454C293.236 395.169 292.601 397.271 292.707 399.401C292.846 401.872 294.551 403.956 294.625 406.399C294.696 406.985 294.61 407.58 294.377 408.122C294.144 408.665 293.772 409.136 293.297 409.488C292.016 410.253 290.421 409.562 289.102 409.257C287.784 408.953 285.46 409.11 284.861 410.723C284.759 411.08 284.747 411.455 284.826 411.818C284.905 412.18 285.072 412.516 285.313 412.798C285.59 413.185 285.94 413.517 286.18 413.923C286.521 414.494 286.456 414.743 285.931 415.094C284.373 416.145 282.243 415.767 280.5 415.933C270.072 416.993 266.394 429.237 265.923 432.151Z"
              fill="#263238"
            />
            <path
              d="M354.371 411.719C355.901 418.634 357.413 425.42 355.625 432.151H357.063C357.589 430.814 358.096 429.468 358.621 428.131C363.766 425.734 369.307 427.66 374.738 426.997C378.979 426.471 383.497 424.415 386.198 421.004C386.242 420.96 386.267 420.9 386.267 420.838C386.267 420.775 386.242 420.716 386.198 420.672C386.154 420.628 386.095 420.603 386.032 420.603C385.97 420.603 385.91 420.628 385.866 420.672C383.61 422.547 381.046 424.016 378.288 425.014C378.859 424.332 379.412 423.631 380.039 422.995C380.961 422.073 381.966 421.28 382.953 420.423C383.008 420.377 382.953 420.285 382.87 420.321C381.769 421.03 380.741 421.846 379.8 422.755C378.91 423.513 378.103 424.363 377.393 425.291C375.596 425.814 373.733 426.072 371.861 426.056C367.592 426.056 362.826 425.134 358.953 427.273C359.276 426.462 359.617 425.651 359.967 424.848C361.485 421.5 363.251 418.271 365.25 415.186C367.328 412.178 369.151 409.001 370.7 405.689C372.013 402.44 372.882 399.029 373.281 395.547C373.281 395.363 373.032 395.28 373.005 395.473C371.898 401.586 368.929 406.869 365.702 412.069C366.698 409.082 367.546 406.03 368.763 403.117C368.855 402.905 368.56 402.72 368.45 402.932C366.707 406.436 364.845 410.308 364.31 414.273C364.098 414.623 363.877 414.965 363.655 415.315C361.341 418.979 359.377 422.853 357.792 426.886C358.013 422.58 357.1 418.062 356.224 414.116C355.099 409.71 354.401 405.205 354.14 400.664C354.14 400.259 354.14 399.853 354.14 399.447C356.659 394.221 357.704 388.406 357.165 382.63C357.152 382.562 357.117 382.5 357.063 382.456C357.01 382.411 356.943 382.387 356.874 382.387C356.805 382.387 356.738 382.411 356.685 382.456C356.632 382.5 356.596 382.562 356.584 382.63C356.63 385.761 356.399 388.889 355.892 391.979C355.469 394.038 354.883 396.061 354.14 398.027C354.282 394.396 354.611 390.773 355.127 387.175C355.173 386.871 354.684 386.834 354.611 387.111C352.315 395.234 352.564 403.532 354.371 411.719Z"
              fill="#455A64"
            />
            <path
              d="M326.563 402.398C327.517 404.304 328.586 406.152 329.763 407.93C330.048 409.426 330.474 410.893 331.035 412.309C331.801 414.232 332.927 415.991 334.354 417.491C336.078 419.335 337.793 420.884 338.3 423.318C336.827 426.048 335.98 429.071 335.82 432.169H336.853C337.729 426.563 340.541 422.027 343.15 416.882C345.4 412.401 347.271 406.574 344.994 401.725C344.865 401.439 344.45 401.642 344.524 401.918C346.045 408.372 343.325 413.83 340.301 419.436C339.831 420.294 339.379 421.179 338.881 422.082C338.6 420.958 338.064 419.914 337.314 419.031C335.792 417.094 333.976 415.527 332.814 413.305C330.242 408.418 330.657 403.163 329.938 397.834C329.892 397.548 329.504 397.668 329.477 397.898C329.094 400.744 329.094 403.628 329.477 406.473C328.75 404.98 327.912 403.543 326.969 402.176C326.929 402.149 326.883 402.133 326.835 402.13C326.787 402.128 326.74 402.139 326.698 402.161C326.655 402.184 326.62 402.219 326.597 402.26C326.573 402.302 326.561 402.35 326.563 402.398Z"
              fill="#455A64"
            />
            <path
              d="M299.826 398.959C300.315 401.706 301.463 404.294 303.172 406.501C304.472 408.216 306.501 409.267 307.782 411.009C308.87 413.287 310.106 415.481 311.341 417.666C312.577 419.851 315.075 423.124 313.914 425.909C313.903 425.937 313.9 425.967 313.904 425.997C313.907 426.026 313.918 426.055 313.936 426.079C313.953 426.104 313.976 426.124 314.003 426.137C314.029 426.151 314.059 426.158 314.089 426.158C312.688 427.841 311.918 429.961 311.913 432.151H312.558C313.231 424.046 324.756 421.898 324.858 413.535C324.858 413.148 324.249 413.056 324.185 413.443C323.327 417.98 319.778 420.533 316.587 423.484C315.914 424.105 315.277 424.764 314.679 425.457C315.481 423.77 314.9 421.926 314.098 420.248C312.826 417.601 311.258 415.094 309.894 412.494C308.415 409.804 307.181 406.986 306.206 404.076C305.366 401.098 304.962 398.014 305.007 394.92C305.013 394.876 305.002 394.832 304.975 394.796C304.948 394.761 304.908 394.737 304.864 394.731C304.82 394.725 304.776 394.737 304.74 394.764C304.705 394.79 304.681 394.83 304.675 394.874C303.606 399.392 305.053 404.555 306.833 408.796C306.169 408.169 305.45 407.579 304.86 406.952C302.73 404.601 301.642 401.715 300.48 398.82C300.471 398.777 300.454 398.737 300.429 398.7C300.404 398.664 300.372 398.633 300.335 398.609C300.299 398.585 300.257 398.569 300.214 398.561C300.171 398.553 300.127 398.553 300.084 398.562C300.041 398.571 300 398.589 299.964 398.614C299.928 398.638 299.897 398.67 299.873 398.707C299.849 398.744 299.832 398.785 299.824 398.828C299.816 398.871 299.817 398.916 299.826 398.959Z"
              fill="#455A64"
            />
            <path
              d="M276.6 423.309C279.366 423.696 281.985 424.341 284.769 424.498C287.607 424.646 290.453 424.498 293.261 424.055C296.728 423.53 300.213 422.719 303.652 423.078C302.607 422.62 301.592 422.099 300.609 421.52C297.182 419.449 294.504 416.339 292.966 412.641C292.828 412.272 293.344 412.134 293.537 412.392C295.123 414.476 296.442 416.596 298.424 418.376C300.609 420.34 303.154 421.483 305.754 422.792C307.727 423.669 309.474 424.984 310.862 426.637C311.221 427.107 312.927 429.495 311.885 430.002C311.859 430.02 311.829 430.029 311.798 430.029C311.766 430.029 311.736 430.02 311.71 430.002L311.646 429.929C311.599 429.929 311.646 429.781 311.646 429.772C311.876 429.772 309.802 426.895 309.802 426.858C309.029 426.096 308.165 425.434 307.229 424.885C306.75 424.609 306.261 424.35 305.772 424.111C301.089 423.189 296.294 424.913 291.647 425.475C286.77 426.056 280.98 426.001 276.37 424.092C276.266 424.062 276.178 423.991 276.127 423.896C276.075 423.801 276.063 423.689 276.093 423.585C276.124 423.481 276.194 423.394 276.29 423.342C276.385 423.29 276.496 423.278 276.6 423.309Z"
              fill="#455A64"
            />
            <path
              d="M337.526 429.652C338.909 427.642 341.159 426.508 343.178 425.245C345.954 423.691 348.059 421.166 349.088 418.155C349.18 417.878 349.669 417.897 349.632 418.228C348.848 424.609 342.256 426.443 337.932 429.965C337.729 430.15 337.342 429.919 337.526 429.652Z"
              fill="#455A64"
            />
            <path
              d="M366.145 425.632C367.131 423.198 369.482 421.483 371.391 419.805C374.142 417.684 376.076 414.678 376.868 411.295C376.886 411.255 376.918 411.223 376.958 411.204C376.999 411.186 377.044 411.182 377.086 411.195C377.129 411.207 377.165 411.234 377.19 411.271C377.214 411.308 377.224 411.353 377.218 411.396C376.66 414.423 375.235 417.223 373.115 419.455C370.921 421.64 368.505 423.484 366.43 425.798C366.32 425.964 366.08 425.789 366.145 425.632Z"
              fill="#455A64"
            />
            <path
              d="M360.225 401.42C360.304 401.572 360.428 401.696 360.58 401.775C360.732 401.854 360.905 401.884 361.075 401.861C361.244 401.837 361.403 401.762 361.528 401.645C361.653 401.529 361.739 401.376 361.774 401.208C361.783 401.15 361.783 401.091 361.774 401.033C361.804 400.871 361.785 400.704 361.719 400.554C361.677 400.405 361.596 400.27 361.484 400.163C361.372 400.056 361.234 399.981 361.083 399.945C360.354 399.761 359.82 400.729 360.225 401.42Z"
              fill="#37474F"
            />
            <path
              d="M280.777 420.893C280.856 421.045 280.98 421.169 281.132 421.248C281.284 421.327 281.457 421.357 281.626 421.333C281.796 421.31 281.954 421.235 282.08 421.118C282.205 421.001 282.291 420.849 282.326 420.681V420.506C282.35 420.344 282.331 420.178 282.271 420.026C282.224 419.88 282.141 419.748 282.03 419.641C281.919 419.535 281.783 419.458 281.634 419.418C281.462 419.418 281.292 419.463 281.142 419.549C280.992 419.635 280.868 419.759 280.781 419.909C280.694 420.058 280.648 420.227 280.647 420.4C280.647 420.573 280.691 420.743 280.777 420.893Z"
              fill="#37474F"
            />
            <path
              d="M358.096 402.665C358.092 402.644 358.092 402.622 358.096 402.601C358.073 402.512 358.073 402.419 358.095 402.33C358.118 402.242 358.163 402.16 358.225 402.093C358.256 402.062 358.294 402.037 358.336 402.02C358.385 401.975 358.444 401.942 358.508 401.926C358.572 401.909 358.64 401.908 358.705 401.924C358.769 401.939 358.829 401.97 358.879 402.014C358.929 402.059 358.967 402.114 358.99 402.176C359.211 402.656 358.658 403.292 358.243 402.886C358.201 402.84 358.167 402.787 358.142 402.73L358.096 402.665Z"
              fill="#37474F"
            />
            <path
              d="M308.76 398.811C308.755 398.79 308.755 398.768 308.76 398.747C308.807 398.668 308.873 398.602 308.952 398.556C309.031 398.509 309.12 398.483 309.211 398.479C309.254 398.47 309.298 398.47 309.34 398.479C309.406 398.481 309.47 398.5 309.527 398.532C309.584 398.565 309.632 398.611 309.668 398.666C309.703 398.721 309.724 398.784 309.73 398.85C309.736 398.915 309.725 398.981 309.7 399.042C309.525 399.549 308.686 399.613 308.677 399.042C308.663 398.978 308.663 398.912 308.677 398.848V398.802L308.76 398.811Z"
              fill="#37474F"
            />
            <path
              d="M357.865 399.632C357.944 399.601 358.031 399.6 358.111 399.629C358.191 399.658 358.257 399.714 358.298 399.788C358.312 399.82 358.319 399.855 358.319 399.89C358.319 399.925 358.312 399.959 358.298 399.991C358.313 400.073 358.295 400.158 358.247 400.226C358.2 400.294 358.127 400.341 358.045 400.355C357.963 400.37 357.879 400.352 357.81 400.304C357.742 400.257 357.695 400.184 357.681 400.102C357.646 400.015 357.645 399.918 357.68 399.83C357.714 399.743 357.78 399.672 357.865 399.632Z"
              fill="#37474F"
            />
            <path
              d="M340.439 390.2C340.516 390.165 340.604 390.162 340.683 390.191C340.763 390.221 340.827 390.28 340.863 390.356C340.879 390.386 340.887 390.419 340.887 390.453C340.887 390.487 340.879 390.52 340.863 390.55C340.879 390.632 340.862 390.717 340.815 390.786C340.769 390.855 340.696 390.903 340.614 390.919C340.574 390.927 340.532 390.926 340.492 390.918C340.451 390.91 340.413 390.894 340.379 390.871C340.309 390.824 340.262 390.752 340.246 390.67C340.214 390.581 340.216 390.484 340.252 390.397C340.287 390.31 340.354 390.24 340.439 390.2Z"
              fill="#37474F"
            />
            <path
              d="M307.155 395.953C307.233 395.986 307.297 396.046 307.334 396.122C307.372 396.199 307.38 396.286 307.358 396.368C307.349 396.402 307.333 396.433 307.311 396.46C307.288 396.488 307.26 396.509 307.229 396.525C307.179 396.584 307.109 396.624 307.032 396.634C306.955 396.645 306.876 396.627 306.812 396.583C306.747 396.54 306.702 396.474 306.683 396.398C306.665 396.322 306.675 396.243 306.712 396.174C306.746 396.089 306.809 396.019 306.891 395.978C306.973 395.937 307.067 395.928 307.155 395.953Z"
              fill="#37474F"
            />
            <path
              d="M163.544 59.1279C163.955 63.0962 165.461 66.8721 167.895 70.0333C170.328 73.1944 173.594 75.6161 177.325 77.0273C181.057 78.4386 185.107 78.7839 189.024 78.0245C192.941 77.2651 196.569 75.431 199.502 72.7274L210.216 74.3132L204.841 65.0102C206.078 61.9818 206.607 58.7112 206.39 55.4472C206.173 52.1832 205.213 49.0118 203.586 46.1743C201.958 43.3367 199.705 40.9078 196.997 39.0722C194.289 37.2367 191.199 36.0429 187.96 35.5817C184.721 35.1205 181.42 35.404 178.308 36.4107C175.195 37.4174 172.353 39.1207 169.998 41.3911C167.643 43.6614 165.837 46.439 164.717 49.5125C163.597 52.5861 163.193 55.8746 163.535 59.1279H163.544Z"
              fill="white"
            />
            <path
              d="M169.98 41.3794C172.322 39.0661 175.165 37.3231 178.29 36.2855C181.414 35.2478 184.735 34.9433 187.996 35.3956C191.277 35.8236 194.416 37.0002 197.17 38.8346C199.929 40.686 202.233 43.1384 203.909 46.0078C205.582 48.8871 206.57 52.1121 206.799 55.4339C207.027 58.7558 206.49 62.0857 205.228 65.167V64.7982L210.575 74.1196L210.972 74.8111L210.216 74.682L199.428 73.0408L199.677 72.9579C196.682 75.6707 192.986 77.4911 189.01 78.2133C188.027 78.3925 187.031 78.4943 186.032 78.5175C185.036 78.5729 184.037 78.5544 183.044 78.4622C181.06 78.272 179.111 77.8066 177.254 77.0792C175.396 76.3691 173.648 75.3974 172.063 74.1933C171.27 73.5998 170.513 72.9594 169.795 72.2756C169.117 71.579 168.479 70.8432 167.887 70.072C164.665 65.8682 163.099 60.6283 163.485 55.3462C163.871 50.0641 166.182 45.1074 169.98 41.4162V41.3794ZM167.951 69.9614C168.553 70.7445 169.206 71.4868 169.906 72.1834C170.623 72.8612 171.381 73.4954 172.174 74.0827C173.76 75.2535 175.509 76.1854 177.365 76.8487C179.211 77.5353 181.145 77.9605 183.109 78.1118C184.088 78.1856 185.071 78.1856 186.05 78.1118C187.029 78.0736 188.004 77.9564 188.964 77.7615C192.822 76.9843 196.388 75.1486 199.262 72.46L199.364 72.3586H199.511L210.28 73.8706L209.902 74.4331L204.481 65.1577L204.38 64.9826L204.463 64.7889C205.664 61.8227 206.179 58.6229 205.968 55.4294C205.758 52.2359 204.827 49.1315 203.245 46.3489C201.625 43.5723 199.423 41.1788 196.791 39.3325C194.139 37.5007 191.101 36.3021 187.913 35.8289C183.692 35.1508 179.366 35.7638 175.5 37.5877C171.634 39.4115 168.41 42.3609 166.25 46.0493C164.09 49.7376 163.094 53.9927 163.395 58.2565C163.695 62.5203 165.277 66.5938 167.933 69.9429L167.951 69.9614Z"
              fill="#263238"
            />
            <path
              d="M180.279 62.5761C180.26 61.384 180.476 60.1998 180.915 59.091C181.461 57.9282 182.379 56.9808 183.524 56.3987C183.92 56.159 184.446 55.8916 184.99 55.5874C185.589 55.2743 186.159 54.9103 186.696 54.4994C187.237 54.0835 187.708 53.5821 188.088 53.015C188.478 52.4351 188.68 51.7497 188.669 51.0511C188.678 50.5439 188.567 50.0418 188.346 49.5852C188.141 49.1782 187.86 48.815 187.516 48.5156C187.16 48.2209 186.75 47.9985 186.308 47.861C185.854 47.7225 185.382 47.651 184.907 47.649C184.364 47.6426 183.825 47.7429 183.321 47.944C182.859 48.137 182.425 48.3913 182.03 48.7C181.65 49.0032 181.304 49.3463 180.998 49.7235C180.703 50.1107 180.445 50.4703 180.232 50.8114L176.784 48.4419C177.113 47.6446 177.574 46.9089 178.149 46.266C178.712 45.6352 179.368 45.0942 180.094 44.6617C180.827 44.22 181.618 43.8848 182.445 43.6659C184.282 43.1912 186.214 43.2263 188.033 43.7673C188.997 44.0554 189.894 44.5352 190.67 45.178C191.475 45.8413 192.126 46.6719 192.578 47.6121C193.368 49.4388 193.521 51.4782 193.011 53.4022C192.82 54.0307 192.531 54.625 192.154 55.1633C191.781 55.6802 191.344 56.1479 190.854 56.5555C190.315 57.0035 189.745 57.4132 189.148 57.7817C188.623 58.1044 188.097 58.4087 187.562 58.7037C187.058 58.9707 186.577 59.2791 186.124 59.6257C185.695 59.9716 185.33 60.3897 185.045 60.8612C184.756 61.3721 184.613 61.9525 184.63 62.5393L180.279 62.5761ZM180.362 71.7962V66.384H184.75V71.8515L180.362 71.7962Z"
              fill="#FFC727"
            />
          </svg>
        </div>

        <div className="talk">
          <p>
            I'll walk you through the main sections of the app so you'll
            understand how to use it, feel free to jump to any section.
          </p>
          <ul>
            <li>
              <a href="#section-1">Graph</a>
            </li>
            <li>
              <a href="#section-2">Projectile</a>
            </li>
            <li>
              <a href="#section-3">Motion due to gravity</a>
            </li>
            <li>
              <a href="#section-4">Equation of motion calculator</a>
            </li>
          </ul>
        </div>
      </section>
      <main>
        {sections.map((section, index) => (
          <Section
            key={section.title}
            title={section.title}
            text={section.text}
            svg={section.svg}
            reverse={index % 2 !== 0}
            id={`section-${index + 1}`}
          />
        ))}
      </main>
      <section className="closure">
        <p>That's the end of the main sections, I hope I was able to help 🤞</p>
        <svg
          width="749"
          height="749"
          viewBox="0 0 749 749"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M641.848 304.588C616.082 227.232 548.687 162.159 467.481 142.909C375.713 121.143 277.1 156.601 201.975 208.821C174.562 227.876 148.991 250.496 129.157 277.49C61.4176 369.796 175.266 418.811 172.404 464.934C169.543 511.058 96.0065 521.139 152.211 584.565C208.416 647.99 385.72 633.564 524.09 560.057C569.779 535.79 613.64 502.04 635.511 453.819C657.786 404.64 657.727 352.285 641.848 304.588Z"
            fill="#FFC100"
          />
          <path
            opacity="0.7"
            d="M641.848 304.588C616.082 227.232 548.687 162.159 467.481 142.909C375.713 121.143 277.1 156.601 201.975 208.821C174.562 227.876 148.991 250.496 129.157 277.49C61.4176 369.796 175.266 418.811 172.404 464.934C169.543 511.058 96.0065 521.139 152.211 584.565C208.416 647.99 385.72 633.564 524.09 560.057C569.779 535.79 613.64 502.04 635.511 453.819C657.786 404.64 657.727 352.285 641.848 304.588Z"
            fill="white"
          />
          <path
            d="M268.232 548.777C252.847 558.844 235.5 585.703 226.827 596.608C218.154 607.514 218.169 623.183 214.528 627.377C210.888 631.572 198.305 618.704 201.046 609.192C203.788 599.679 208.536 597.732 207.488 593.253C206.439 588.774 203.848 585.973 206.649 580.101C209.45 574.228 217.554 579.831 225.674 574.228C233.793 568.626 241.897 544.568 251.963 519.402C262.03 494.235 283.302 494.774 285.818 490.865C288.335 486.955 302.596 436.023 317.156 438.554C331.717 441.086 358.022 466.807 349.648 480.858C341.274 494.909 331.462 494.58 319.688 502.684C307.914 510.788 309.337 512.481 301.502 520.87C293.668 529.258 288.02 530.666 283.871 531.775C283.871 531.775 277.999 538.216 274.359 542.965C270.718 547.714 268.232 548.777 268.232 548.777Z"
            fill="white"
          />
          <path
            d="M240.204 563.997C245.043 554.919 259.574 533.108 274.658 519.791C289.743 506.474 337.649 486.475 337.649 486.475L346.967 484.618C347.916 483.393 348.792 482.113 349.588 480.783C357.977 466.807 331.687 441.071 317.142 438.554C302.596 436.038 288.32 486.94 285.804 490.865C283.287 494.789 262.03 494.22 251.949 519.402C241.867 544.583 233.763 568.641 225.659 574.228C217.555 579.816 209.435 574.228 206.634 580.1C203.833 585.973 206.35 588.774 207.473 593.253C208.597 597.732 203.833 599.694 201.032 609.192C198.23 618.689 210.829 631.572 214.514 627.377C215.892 625.247 216.834 622.864 217.285 620.367C214.98 614.149 214.315 607.442 215.353 600.893C217.21 585.808 235.351 573.09 240.204 563.997Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M240.204 563.997C245.043 554.919 259.574 533.108 274.658 519.791C289.743 506.474 337.649 486.475 337.649 486.475L346.967 484.618C347.916 483.393 348.792 482.113 349.588 480.783C357.977 466.807 331.687 441.071 317.142 438.554C302.596 436.038 288.32 486.94 285.804 490.865C283.287 494.789 262.03 494.22 251.949 519.402C241.867 544.583 233.763 568.641 225.659 574.228C217.555 579.816 209.435 574.228 206.634 580.1C203.833 585.973 206.35 588.774 207.473 593.253C208.597 597.732 203.833 599.694 201.032 609.192C198.23 618.689 210.829 631.572 214.514 627.377C215.892 625.247 216.834 622.864 217.285 620.367C214.98 614.149 214.315 607.442 215.353 600.893C217.21 585.808 235.351 573.09 240.204 563.997Z"
            fill="white"
          />
          <path
            d="M268.232 548.777C252.847 558.844 235.5 585.703 226.827 596.608C218.154 607.514 218.169 623.183 214.528 627.377C210.888 631.572 198.305 618.704 201.046 609.192C203.788 599.679 208.536 597.732 207.488 593.253C206.439 588.774 203.848 585.973 206.649 580.101C209.45 574.228 217.554 579.831 225.674 574.228C233.793 568.626 241.897 544.568 251.963 519.402C262.03 494.235 283.302 494.774 285.818 490.865C288.335 486.955 302.596 436.023 317.156 438.554C331.717 441.086 358.022 466.807 349.648 480.858C341.274 494.909 331.462 494.58 319.688 502.684C307.914 510.788 309.337 512.481 301.502 520.87C293.668 529.258 288.02 530.666 283.871 531.775C283.871 531.775 277.999 538.216 274.359 542.965C270.718 547.714 268.232 548.777 268.232 548.777Z"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M266.105 550.275C262.696 550.064 259.347 549.274 256.203 547.938C250.062 545.362 247.65 538.696 246.751 532.794C239.021 552.642 232.37 569.644 225.779 574.228C217.66 579.831 209.556 574.228 206.754 580.101C203.953 585.973 206.47 588.774 207.593 593.253C208.717 597.732 203.953 599.694 201.152 609.192C198.351 618.689 210.949 631.572 214.634 627.377C218.319 623.183 218.274 607.514 226.932 596.608C235.186 586.197 251.275 561.286 266.105 550.275Z"
            fill="#FFC100"
          />
          <path
            opacity="0.2"
            d="M214.529 627.377C214.741 627.124 214.932 626.854 215.099 626.568L215.233 626.344C215.398 626.044 215.563 625.715 215.728 625.34C215.728 625.34 215.728 625.205 215.803 625.145C215.937 624.816 216.072 624.471 216.192 624.112C216.239 623.999 216.279 623.884 216.312 623.767C216.462 623.348 216.597 622.913 216.731 622.464L216.866 621.985C216.956 621.64 217.061 621.281 217.166 620.906L217.301 620.367C214.996 614.149 214.33 607.442 215.368 600.893C217.181 585.748 235.352 573.03 240.205 563.937C243.824 557.465 247.851 551.231 252.264 545.272C248.953 542.036 247.425 537.183 246.751 532.749L245.433 536.104L245.223 536.674L243.905 540.029L242.662 543.175L242.452 543.699C242.048 544.718 241.643 545.721 241.239 546.695L241.029 547.219C240.624 548.223 240.22 549.212 239.816 550.215L238.617 553.032L238.392 553.556C238.003 554.455 237.614 555.324 237.224 556.177L237.044 556.597L235.951 558.964L235.831 559.218C235.441 560.027 235.067 560.806 234.692 561.555C234.618 561.72 234.528 561.87 234.453 562.005C234.078 562.754 233.704 563.503 233.329 564.177L233.194 564.431L232.131 566.304L231.966 566.589C231.592 567.218 231.232 567.802 230.858 568.371L230.633 568.701C230.258 569.27 229.884 569.794 229.524 570.289L229.419 570.408C229.075 570.873 228.715 571.307 228.371 571.712L228.176 571.936C227.817 572.356 227.442 572.715 227.083 573.06L226.873 573.255C226.517 573.577 226.142 573.877 225.749 574.153C223.525 575.675 220.945 576.594 218.259 576.82C216.761 576.97 215.473 576.97 214.2 576.985C213.028 576.966 211.856 577.036 210.694 577.194C209.834 577.268 209.009 577.569 208.304 578.067C207.598 578.564 207.038 579.24 206.68 580.026C205.923 581.5 205.489 583.119 205.407 584.774C205.391 585.31 205.421 585.846 205.496 586.377C205.527 586.629 205.572 586.879 205.631 587.126C206.051 589.118 206.964 590.946 207.519 593.118C207.644 593.633 207.7 594.162 207.683 594.691C207.564 596.698 206.185 598.391 204.687 601.013C203.149 603.525 201.95 606.23 201.122 609.057C200.485 611.536 200.626 614.151 201.527 616.547C202.19 618.416 203.108 620.185 204.253 621.805C204.628 622.344 205.017 622.853 205.422 623.303C208.657 627.317 212.717 629.475 214.529 627.377Z"
            fill="black"
          />
          <path
            d="M266.105 550.275C262.696 550.064 259.347 549.274 256.203 547.938C250.062 545.362 247.65 538.696 246.751 532.794C239.021 552.642 232.37 569.644 225.779 574.228C217.66 579.831 209.556 574.228 206.754 580.101C203.953 585.973 206.47 588.774 207.593 593.253C208.717 597.732 203.953 599.694 201.152 609.192C198.351 618.689 210.949 631.572 214.634 627.377C218.319 623.183 218.274 607.514 226.932 596.608C235.186 586.197 251.275 561.286 266.105 550.275Z"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M200.732 399.097C200.732 399.097 214.439 417.553 228.985 417.343C243.53 417.133 252.009 404.25 259.484 405.134C265.01 405.97 270.426 407.417 275.632 409.448C275.632 409.448 327.583 339.836 339.537 328.047C351.491 316.258 358.397 302.761 341.979 298.596C325.561 294.432 291.272 301.817 274.075 316.932C256.877 332.047 202.38 392.191 202.38 392.191L200.732 399.097Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M200.732 399.097C200.732 399.097 214.439 417.553 228.985 417.343C243.53 417.133 252.009 404.25 259.484 405.134C265.01 405.97 270.426 407.417 275.632 409.448C275.632 409.448 327.583 339.836 339.537 328.047C351.491 316.258 358.397 302.761 341.979 298.596C325.561 294.432 291.272 301.817 274.075 316.932C256.877 332.047 202.38 392.191 202.38 392.191L200.732 399.097Z"
            fill="black"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M200.732 399.097C200.732 399.097 214.439 417.553 228.985 417.343C243.53 417.133 252.009 404.25 259.484 405.134C265.01 405.97 270.426 407.417 275.632 409.448C275.632 409.448 327.583 339.836 339.537 328.047C351.491 316.258 358.397 302.761 341.979 298.596C325.561 294.432 291.272 301.817 274.075 316.932C256.877 332.047 202.38 392.191 202.38 392.191L200.732 399.097Z"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M396.97 236.564C396.97 236.564 401.164 226.498 409.553 222.019C415.146 219.23 421.281 217.696 427.529 217.525L449.34 204.043C449.34 204.043 455.497 182.771 476.484 174.083C497.471 165.394 586.707 132.962 587.545 132.408C588.384 131.854 598.736 126.806 598.736 127.645C598.747 129.085 598.462 130.513 597.897 131.839C597.058 134.086 576.355 147.508 576.355 147.508C576.355 147.508 586.422 141.351 586.707 144.512C586.991 147.673 586.707 148.422 583.066 150.669C579.426 152.916 572.715 157.095 571.322 157.934C569.929 158.773 564.611 163.806 560.402 164.376C556.192 164.945 545.586 165.769 544.748 166.608C543.909 167.446 516.48 194.021 507.537 201.586C498.594 209.151 484.034 216.131 484.034 216.131C484.034 216.131 464.455 237.103 449.58 248.024C434.705 258.944 424.683 261.731 424.683 261.731L423.559 262.839C423.559 262.839 424.398 272.636 424.398 273.759C424.398 274.883 432.517 302.566 428.892 317.95C425.267 333.335 418.256 339.776 418.256 339.776C418.256 339.776 417.148 357.962 412.669 364.673C408.19 371.384 395.876 379.503 387.203 385.945C378.53 392.386 377.421 406.647 376.852 408.325C376.283 410.003 369.362 438.539 365.662 445.52C361.962 452.501 350.682 456.441 348.809 456.995C347.791 457.294 337.364 473.113 327.328 472.334C320.836 471.876 314.729 469.084 310.134 464.475C305.539 459.866 302.766 453.751 302.326 447.258C302.167 444.493 302.267 441.72 302.626 438.974C304.858 421.897 311.614 414.811 311.614 414.811C311.614 414.811 325.95 358.801 324.542 343.971C323.133 329.141 322.864 319.913 327.058 311.524C331.253 303.135 344.959 290.267 366.231 281.025C387.503 271.782 390.004 265.64 390.004 255.02C390.22 248.266 392.67 241.776 396.97 236.564Z"
            fill="white"
          />
          <path
            d="M428.114 291.541L427.949 291.466C427.949 291.466 426.736 309.637 423.71 321.755C420.684 333.874 407.966 341.739 407.966 341.739L401.3 359.909C401.3 359.909 386.155 373.826 376.463 373.826C366.771 373.826 365.513 365.961 365.513 365.961C356.39 358.202 336.601 352.854 323.763 355.88C321.756 371.744 316.168 395.742 313.277 407.636C318.685 410.527 327.359 413.253 340.077 411.995C353.216 410.561 366.049 407.079 378.111 401.674C379.384 396.581 381.856 389.84 387.099 385.96L390.02 383.818C381.242 387.473 370.096 399.382 361.902 400.475C352.81 401.689 349.784 399.876 350.398 396.236C351.012 392.596 363.61 394.903 367.954 393.24C372.299 391.577 368.569 390.828 359.476 389.615C350.383 388.401 352.21 384.761 352.21 384.761C352.21 384.761 366.966 385.99 369.767 384.761C372.568 383.533 392.237 378.769 401.225 370.83C410.213 362.891 410.992 346.038 410.992 346.038L417.973 342.548C418.122 340.885 418.182 339.851 418.182 339.851C418.182 339.851 425.178 333.425 428.818 318.025C430.571 310.565 429.597 300.319 428.114 291.541Z"
            fill="#FFC100"
          />
          <path
            d="M502.055 195.234C484.559 202.814 481.083 200.477 481.083 200.477C482.6 201.571 484.023 202.788 485.338 204.117C487.869 206.574 484.574 214.469 475.241 221.479C465.909 228.49 435.574 247.17 430.331 247.17C425.088 247.17 425.088 229.688 425.088 229.688C422.881 240.531 422.436 251.66 423.77 262.644L424.624 261.805C424.624 261.805 434.69 259.004 449.52 248.099C464.351 237.193 483.974 216.206 483.974 216.206C483.974 216.206 498.52 209.211 507.478 201.661C512.391 197.511 522.862 187.624 531.446 179.415C522.023 185.356 512.203 190.641 502.055 195.234Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M502.055 195.234C484.559 202.814 481.083 200.477 481.083 200.477C482.6 201.571 484.023 202.788 485.338 204.117C487.869 206.574 484.574 214.469 475.241 221.479C465.909 228.49 435.574 247.17 430.331 247.17C425.088 247.17 425.088 229.688 425.088 229.688C422.881 240.531 422.436 251.66 423.77 262.644L424.624 261.805C424.624 261.805 434.69 259.004 449.52 248.099C464.351 237.193 483.974 216.206 483.974 216.206C483.974 216.206 498.52 209.211 507.478 201.661C512.391 197.511 522.862 187.624 531.446 179.415C522.023 185.356 512.203 190.641 502.055 195.234Z"
            fill="white"
          />
          <path
            opacity="0.5"
            d="M428.114 291.541L427.949 291.466C427.949 291.466 426.736 309.637 423.71 321.755C420.684 333.874 407.966 341.739 407.966 341.739L401.3 359.909C401.3 359.909 386.155 373.826 376.463 373.826C366.771 373.826 365.513 365.961 365.513 365.961C356.39 358.202 336.601 352.854 323.763 355.88C321.756 371.744 316.168 395.742 313.277 407.636C318.685 410.527 327.359 413.253 340.077 411.995C353.216 410.561 366.049 407.079 378.111 401.674C379.384 396.581 381.856 389.84 387.099 385.96L390.02 383.818C381.242 387.473 370.096 399.382 361.902 400.475C352.81 401.689 349.784 399.876 350.398 396.236C351.012 392.596 363.61 394.903 367.954 393.24C372.299 391.577 368.569 390.828 359.476 389.615C350.383 388.401 352.21 384.761 352.21 384.761C352.21 384.761 366.966 385.99 369.767 384.761C372.568 383.533 392.237 378.769 401.225 370.83C410.213 362.891 410.992 346.038 410.992 346.038L417.973 342.548C418.122 340.885 418.182 339.851 418.182 339.851C418.182 339.851 425.178 333.425 428.818 318.025C430.571 310.565 429.597 300.319 428.114 291.541Z"
            fill="white"
          />
          <path
            d="M396.97 236.564C396.97 236.564 401.164 226.498 409.553 222.019C415.146 219.23 421.281 217.696 427.529 217.525L449.34 204.043C449.34 204.043 455.497 182.771 476.484 174.083C497.471 165.394 586.707 132.962 587.545 132.408C588.384 131.854 598.736 126.806 598.736 127.645C598.747 129.085 598.462 130.513 597.897 131.839C597.058 134.086 576.355 147.508 576.355 147.508C576.355 147.508 586.422 141.351 586.707 144.512C586.991 147.673 586.707 148.422 583.066 150.669C579.426 152.916 572.715 157.095 571.322 157.934C569.929 158.773 564.611 163.806 560.402 164.376C556.192 164.945 545.586 165.769 544.748 166.608C543.909 167.446 516.48 194.021 507.537 201.586C498.594 209.151 484.034 216.131 484.034 216.131C484.034 216.131 464.455 237.103 449.58 248.024C434.705 258.944 424.683 261.731 424.683 261.731L423.559 262.839C423.559 262.839 424.398 272.636 424.398 273.759C424.398 274.883 432.517 302.566 428.892 317.95C425.267 333.335 418.256 339.776 418.256 339.776C418.256 339.776 417.148 357.962 412.669 364.673C408.19 371.384 395.876 379.503 387.203 385.945C378.53 392.386 377.421 406.647 376.852 408.325C376.283 410.003 369.362 438.539 365.662 445.52C361.962 452.501 350.682 456.441 348.809 456.995C347.791 457.294 337.364 473.113 327.328 472.334C320.836 471.876 314.729 469.084 310.134 464.475C305.539 459.866 302.766 453.751 302.326 447.258C302.167 444.493 302.267 441.72 302.626 438.974C304.858 421.897 311.614 414.811 311.614 414.811C311.614 414.811 325.95 358.801 324.542 343.971C323.133 329.141 322.864 319.913 327.058 311.524C331.253 303.135 344.959 290.267 366.231 281.025C387.503 271.782 390.004 265.64 390.004 255.02C390.22 248.266 392.67 241.776 396.97 236.564V236.564Z"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M417.934 333.162C420.894 320.582 416.764 308.849 408.711 306.954C400.658 305.059 391.73 313.72 388.77 326.3C385.81 338.879 389.94 350.613 397.993 352.507C406.046 354.402 414.974 345.741 417.934 333.162Z"
            fill="#FFC100"
          />
          <path
            d="M367.01 385.96C351.895 389.315 346.038 382.035 346.038 382.035C346.038 382.035 347.716 393.225 363.67 394.903"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M402.528 318.535C402.528 318.535 411.202 339.507 404.206 355.46C397.21 371.414 387.129 377.496 368.119 380.642"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M384.342 386.229C384.342 386.229 372.868 396.581 363.91 399.936C354.951 403.292 347.971 409.179 340.421 399.097"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M474.417 204.387C474.417 204.387 481.413 199.638 485.322 204.117C489.232 208.596 483.929 216.101 483.929 216.101"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M425.747 225.089C424.231 232.578 423.126 240.145 422.436 247.754C422.047 252.815 422.421 257.905 423.544 262.854"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M359.865 326.804L376.628 317.906"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M587.441 132.498C586.692 132.992 515.822 158.788 485.577 170.547C488.304 170.667 502.594 171.866 506.384 184.254C508.051 189.536 508.821 195.061 508.661 200.597C518.608 191.954 543.909 167.431 544.718 166.623C545.527 165.814 556.178 164.945 560.372 164.391C564.567 163.836 569.885 158.788 571.293 157.949C572.701 157.11 579.397 152.916 583.037 150.684C586.677 148.452 586.962 147.598 586.677 144.527C586.393 141.456 576.326 147.523 576.326 147.523C576.326 147.523 597.028 134.041 597.867 131.854C598.432 130.528 598.718 129.1 598.706 127.66C598.631 126.896 588.28 131.929 587.441 132.498Z"
            fill="#FFC100"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M576.251 147.598L566.454 152.631"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M378.77 399.442C375.639 400.655 371.684 402.288 367.909 404.1C357.427 409.146 346.121 412.262 334.534 413.298C325.426 414.062 317.681 409.988 313.442 407.111C312.289 411.845 311.54 414.826 311.54 414.826C311.54 414.826 304.784 421.912 302.552 438.989C302.193 441.735 302.093 444.508 302.252 447.273C302.691 453.766 305.465 459.881 310.06 464.49C314.655 469.099 320.762 471.891 327.254 472.349C337.29 473.128 347.716 457.369 348.735 457.01C350.682 456.456 361.962 452.516 365.587 445.535C369.213 438.554 376.223 410.018 376.778 408.34C377.047 407.531 377.497 403.801 378.77 399.442Z"
            fill="#263238"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M318.774 423.08C318.774 423.08 330.758 417.912 342.862 422.211"
            stroke="white"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M344.061 408.37C328.617 410.107 319.673 404.46 315.135 399.996C314.101 404.49 313.202 408.145 312.543 410.767C320.459 415.694 329.807 417.806 339.073 416.759C355.73 414.706 370.845 407.89 377.541 404.505C377.601 404.155 377.676 403.796 377.766 403.426C377.991 402.333 378.29 401.149 378.65 399.891C378.65 399.816 378.65 399.741 378.725 399.651C378.844 399.262 378.964 398.857 379.099 398.453C379.106 398.393 379.106 398.333 379.099 398.273C379.562 396.889 380.107 395.533 380.732 394.214C369.886 401.928 357.277 406.796 344.061 408.37Z"
            fill="#FFC100"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M297.143 310.086C297.143 310.086 294.432 311.464 304.214 305.038C313.996 298.611 311.045 307.914 317.696 291.406C324.347 274.898 331.687 262.599 343.716 258.12C355.745 253.641 391.278 260.083 391.278 260.083L399.666 265.955L387.982 288.605C385.169 287.22 382.092 286.453 378.958 286.354C375.824 286.256 372.706 286.829 369.811 288.035C360.299 292.23 355.251 297.263 356.329 301.742C357.408 306.221 366.396 318.535 366.396 318.535C366.396 318.535 324.032 301.892 317.321 305.517C310.61 309.142 290.163 316.572 289.039 317.142C287.916 317.711 297.143 310.086 297.143 310.086Z"
            fill="#FFC100"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M323.224 296.978C324.647 294.896 326.22 292.484 327.822 289.713C335.103 277.415 349.648 272.097 349.648 272.097"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M350.712 285.534C346.785 286.497 343.087 288.227 339.832 290.626C336.577 293.025 333.829 296.044 331.747 299.51"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M342.937 325.53C342.937 325.53 325.875 323.014 312.977 333.919C300.08 344.825 301.533 356.524 301.533 356.524C301.533 356.524 288.935 362.112 286.418 368.508C284.947 372.287 283.941 376.231 283.422 380.252C283.422 380.252 276.711 386.694 271.108 393.12C265.506 399.547 260.757 400.61 259.634 409.074C258.51 417.538 259.079 438.165 265.236 458.583C271.393 479 275.587 487.959 277.22 491.539C278.853 495.119 293.444 513.634 295.96 514.203C298.477 514.773 300.993 515.312 302.956 514.203C304.918 513.095 319.434 509.709 318.909 505.53C318.801 503.298 318.017 501.151 316.662 499.373L316.108 498.534C316.108 498.534 318.625 493.771 316.947 491.539C315.269 489.307 313.861 489.022 310.79 486.221C307.719 483.42 306.042 482.581 302.402 482.581C298.761 482.581 294.912 482.865 294.912 482.865C294.912 482.865 289.309 480.618 289.309 464.395C289.309 448.172 294.342 434.18 296.799 426.945C298.282 422.807 299.131 418.469 299.316 414.077C299.316 414.077 301.278 416.878 314.985 410.437C328.691 403.996 331.777 385.825 331.777 385.825L311.584 389.031C321.47 388.164 331.228 386.194 340.675 383.158C356.345 378.125 363.056 377.286 369.137 353.498"
            fill="white"
          />
          <path
            d="M316.333 377.391C313.457 373.541 329.815 362.411 334.144 358.142C338.473 353.873 320.183 365.362 315.854 366.321C311.524 367.28 307.675 364.388 310.086 350.921C311.826 342.46 315.936 334.667 321.935 328.451C318.68 329.803 315.65 331.641 312.947 333.904C300.08 344.81 301.488 356.569 301.488 356.569C301.488 356.569 288.89 362.156 286.373 368.553C284.902 372.332 283.896 376.276 283.377 380.297C283.377 380.297 276.666 386.739 271.063 393.165C265.461 399.591 260.712 400.655 259.589 409.119C258.465 417.582 259.034 438.21 265.191 458.628C271.348 479.045 275.542 488.003 277.175 491.584C278.808 495.164 293.399 513.679 295.915 514.248C298.432 514.818 300.949 515.357 302.911 514.248C304.873 513.14 319.389 509.754 318.865 505.575C318.74 504.562 318.535 503.56 318.25 502.579C312.888 503.253 303.076 506.683 300.439 506.683C297.563 506.683 294.672 502.354 290.343 497.531C286.013 492.707 279.272 480.214 278.359 464.814C277.445 449.415 284.126 434.974 284.126 427.754C284.126 420.534 275.468 437.386 277.385 430.166C279.302 422.945 287.017 412.354 292.784 409.463C298.552 406.572 305.308 404.655 307.764 399.846C310.221 395.038 299.106 398.348 302.956 394.543C306.806 390.738 331.837 385.795 340.016 381.061C348.195 376.328 319.224 381.241 316.333 377.391Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M316.333 377.391C313.457 373.541 329.815 362.411 334.144 358.142C338.473 353.873 320.183 365.362 315.854 366.321C311.524 367.28 307.675 364.388 310.086 350.921C311.826 342.46 315.936 334.667 321.935 328.451C318.68 329.803 315.65 331.641 312.947 333.904C300.08 344.81 301.488 356.569 301.488 356.569C301.488 356.569 288.89 362.156 286.373 368.553C284.902 372.332 283.896 376.276 283.377 380.297C283.377 380.297 276.666 386.739 271.063 393.165C265.461 399.591 260.712 400.655 259.589 409.119C258.465 417.582 259.034 438.21 265.191 458.628C271.348 479.045 275.542 488.003 277.175 491.584C278.808 495.164 293.399 513.679 295.915 514.248C298.432 514.818 300.949 515.357 302.911 514.248C304.873 513.14 319.389 509.754 318.865 505.575C318.74 504.562 318.535 503.56 318.25 502.579C312.888 503.253 303.076 506.683 300.439 506.683C297.563 506.683 294.672 502.354 290.343 497.531C286.013 492.707 279.272 480.214 278.359 464.814C277.445 449.415 284.126 434.974 284.126 427.754C284.126 420.534 275.468 437.386 277.385 430.166C279.302 422.945 287.017 412.354 292.784 409.463C298.552 406.572 305.308 404.655 307.764 399.846C310.221 395.038 299.106 398.348 302.956 394.543C306.806 390.738 331.837 385.795 340.016 381.061C348.195 376.328 319.224 381.241 316.333 377.391Z"
            fill="white"
          />
          <path
            d="M342.937 325.53C342.937 325.53 325.875 323.014 312.977 333.919C300.08 344.825 301.533 356.524 301.533 356.524C301.533 356.524 288.935 362.112 286.418 368.508C284.947 372.287 283.941 376.231 283.422 380.252C283.422 380.252 276.711 386.694 271.108 393.12C265.506 399.547 260.757 400.61 259.634 409.074C258.51 417.538 259.079 438.165 265.236 458.583C271.393 479 275.587 487.959 277.22 491.539C278.853 495.119 293.444 513.634 295.96 514.203C298.477 514.773 300.993 515.312 302.956 514.203C304.918 513.095 319.434 509.709 318.909 505.53C318.801 503.298 318.017 501.151 316.662 499.373L316.108 498.534C316.108 498.534 318.625 493.771 316.947 491.539C315.269 489.307 313.861 489.022 310.79 486.221C307.719 483.42 306.042 482.581 302.402 482.581C298.761 482.581 294.912 482.865 294.912 482.865C294.912 482.865 289.309 480.618 289.309 464.395C289.309 448.172 294.342 434.18 296.799 426.945C298.282 422.807 299.131 418.469 299.316 414.077C299.316 414.077 301.278 416.878 314.985 410.437C328.691 403.996 331.777 385.825 331.777 385.825L311.584 389.031C321.47 388.164 331.228 386.194 340.675 383.158C356.345 378.125 363.056 377.286 369.137 353.498"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M299.285 414.212L297.683 401.374"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M378.455 314.895C386.574 312.378 388.536 302.311 393.285 291.676C397.039 283.78 401.271 276.121 405.958 268.741C397.77 268.854 389.627 267.525 381.9 264.816C369.302 260.322 354.472 263.423 351.685 266.494C348.899 269.565 349.169 265.655 349.723 275.168C350.277 284.68 353.917 298.387 357.213 303.15C360.509 307.914 362.531 310.64 362.531 310.64"
            fill="white"
          />
          <path
            d="M402.363 268.711C395.363 268.43 388.443 267.118 381.826 264.816C369.228 260.322 354.397 263.423 351.611 266.494C348.825 269.565 349.094 265.655 349.649 275.168C350.203 284.68 353.843 298.387 357.139 303.15L358.337 304.828L403.052 269.056L402.363 268.711Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M402.363 268.711C395.363 268.43 388.443 267.118 381.826 264.816C369.228 260.322 354.397 263.423 351.611 266.494C348.825 269.565 349.094 265.655 349.649 275.168C350.203 284.68 353.843 298.387 357.139 303.15L358.337 304.828L403.052 269.056L402.363 268.711Z"
            fill="white"
          />
          <path
            d="M378.455 314.895C386.574 312.378 388.536 302.311 393.285 291.676C397.039 283.78 401.271 276.121 405.958 268.741C397.77 268.854 389.627 267.525 381.9 264.816C369.302 260.322 354.472 263.423 351.685 266.494C348.899 269.565 349.169 265.655 349.723 275.168C350.277 284.68 353.917 298.387 357.213 303.15C360.509 307.914 362.531 310.64 362.531 310.64"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M376.507 298.387C381.474 298.425 386.424 297.816 391.233 296.574C391.877 294.971 392.551 293.338 393.285 291.676C397.039 283.78 401.271 276.121 405.958 268.741C397.77 268.854 389.627 267.525 381.9 264.816C369.302 260.322 354.472 263.423 351.685 266.494C348.899 269.565 349.169 265.655 349.723 275.168C350.134 280.635 351.082 286.049 352.554 291.331C357.078 295.106 364.493 298.267 376.507 298.387Z"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M379.144 310.461L372.403 280.785"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M386.949 212.956C387.756 209.647 388.346 206.289 388.717 202.904C389.286 197.586 376.508 188.164 363.356 189.287C350.203 190.411 354.967 203.279 353.289 207.473C351.611 211.667 339.013 207.188 335.658 214.738C332.302 222.288 338.174 224.535 338.174 226.722C338.174 228.909 327.823 234.841 329.186 247.994C330.549 261.146 353.244 273.999 358.277 275.123C363.311 276.246 369.467 271.483 369.467 267.633C369.467 263.783 377.856 262.315 380.103 258.645C382.35 254.975 376.463 242.421 376.733 239.62C377.002 236.819 385.721 225.644 382.89 222.842C380.058 220.041 386.949 212.956 386.949 212.956Z"
            fill="#263238"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M373.556 216.101C373.556 216.101 377.9 215.622 377.9 205.99C377.9 196.358 363.939 198.77 362.007 202.619C360.074 206.469 361.527 213.69 356.719 215.622C351.91 217.555 344.195 217.54 344.195 221.389V226.692"
            stroke="white"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M361.019 223.801C361.019 223.801 343.207 222.842 334.055 239.201"
            stroke="white"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M363.46 228.13C363.46 228.13 351.476 228.61 345.17 236.789"
            stroke="white"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M383.983 214.723C384.777 213.69 395.128 224.445 395.533 225.659C395.941 227.137 396.266 228.638 396.506 230.153C396.553 230.436 396.657 230.707 396.812 230.949C396.966 231.191 397.168 231.399 397.405 231.561L404.64 236.519C405.107 236.846 405.427 237.343 405.531 237.904C405.635 238.464 405.514 239.043 405.195 239.515L402.678 243.14C402.459 243.449 402.327 243.81 402.295 244.187C402.264 244.564 402.334 244.942 402.498 245.283C404.521 249.627 411.681 265.056 411.202 266.255C410.639 267.726 409.535 268.926 408.116 269.61C406.723 270.164 380.987 278.838 377.901 279.122C375.534 279.332 369.842 269.61 367.325 265.086C367.029 264.588 366.547 264.227 365.985 264.084C365.424 263.941 364.828 264.026 364.329 264.322C363.251 264.945 362.034 265.289 360.789 265.323C359.544 265.357 358.31 265.08 357.199 264.517C351.596 261.985 345.215 257.237 347.956 251.919C350.697 246.601 355.236 246.331 357.199 247.724C358.502 248.653 360.809 250.6 362.202 251.769C362.538 252.061 362.957 252.24 363.4 252.283C363.843 252.326 364.288 252.23 364.674 252.009L365.857 251.319C366.14 251.166 366.384 250.95 366.571 250.689C366.759 250.429 366.886 250.129 366.942 249.812C366.998 249.496 366.982 249.171 366.896 248.861C366.809 248.551 366.654 248.265 366.441 248.024C365.993 247.455 365.639 246.818 365.393 246.136C365.393 246.136 373.497 239.141 370.711 235.231C367.924 231.321 360.36 225.434 361.198 222.363C362.037 219.292 373.182 215.367 377.976 215.367C379.759 215.308 383.399 215.502 383.983 214.723Z"
            fill="white"
          />
          <path
            d="M370.636 235.186C373.422 239.096 365.318 246.091 365.318 246.091C365.564 246.773 365.918 247.41 366.367 247.979C366.579 248.22 366.734 248.506 366.821 248.816C366.907 249.126 366.923 249.451 366.867 249.767C366.811 250.084 366.684 250.384 366.496 250.644C366.309 250.905 366.065 251.121 365.782 251.275L364.599 251.964C364.213 252.185 363.768 252.281 363.325 252.238C362.882 252.195 362.463 252.016 362.127 251.724C360.734 250.555 358.427 248.608 357.124 247.679C355.161 246.286 350.682 246.556 347.881 251.874C345.08 257.192 351.521 261.94 357.124 264.472C358.235 265.035 359.469 265.312 360.714 265.278C361.959 265.244 363.176 264.9 364.254 264.277C364.753 263.981 365.349 263.896 365.91 264.039C366.472 264.182 366.954 264.543 367.25 265.041C369.767 269.535 375.459 279.287 377.826 279.077C380.912 278.793 406.648 270.089 408.041 269.565C409.46 268.881 410.564 267.681 411.127 266.21C411.127 266.21 400.012 271.468 393.96 266.015C387.908 260.562 380.028 252.698 377.602 249.057C375.175 245.417 380.223 237.373 375.175 229.673C370.126 221.974 361.049 222.288 361.049 222.288C360.285 225.374 367.835 231.246 370.636 235.186Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M370.636 235.186C373.422 239.096 365.318 246.091 365.318 246.091C365.564 246.773 365.918 247.41 366.367 247.979C366.579 248.22 366.734 248.506 366.821 248.816C366.907 249.126 366.923 249.451 366.867 249.767C366.811 250.084 366.684 250.384 366.496 250.644C366.309 250.905 366.065 251.121 365.782 251.275L364.599 251.964C364.213 252.185 363.768 252.281 363.325 252.238C362.882 252.195 362.463 252.016 362.127 251.724C360.734 250.555 358.427 248.608 357.124 247.679C355.161 246.286 350.682 246.556 347.881 251.874C345.08 257.192 351.521 261.94 357.124 264.472C358.235 265.035 359.469 265.312 360.714 265.278C361.959 265.244 363.176 264.9 364.254 264.277C364.753 263.981 365.349 263.896 365.91 264.039C366.472 264.182 366.954 264.543 367.25 265.041C369.767 269.535 375.459 279.287 377.826 279.077C380.912 278.793 406.648 270.089 408.041 269.565C409.46 268.881 410.564 267.681 411.127 266.21C411.127 266.21 400.012 271.468 393.96 266.015C387.908 260.562 380.028 252.698 377.602 249.057C375.175 245.417 380.223 237.373 375.175 229.673C370.126 221.974 361.049 222.288 361.049 222.288C360.285 225.374 367.835 231.246 370.636 235.186Z"
            fill="white"
          />
          <path
            d="M383.983 214.723C384.777 213.69 395.128 224.445 395.533 225.659C395.941 227.137 396.266 228.638 396.506 230.153C396.553 230.436 396.657 230.707 396.812 230.949C396.966 231.191 397.168 231.399 397.405 231.561L404.64 236.519C405.107 236.846 405.427 237.343 405.531 237.904C405.635 238.464 405.514 239.043 405.195 239.515L402.678 243.14C402.459 243.449 402.327 243.81 402.295 244.187C402.264 244.564 402.334 244.942 402.498 245.283C404.521 249.627 411.681 265.056 411.202 266.255C410.639 267.726 409.535 268.926 408.116 269.61C406.723 270.164 380.987 278.838 377.901 279.122C375.534 279.332 369.842 269.61 367.325 265.086C367.029 264.588 366.547 264.227 365.985 264.084C365.424 263.941 364.828 264.026 364.329 264.322C363.251 264.945 362.034 265.289 360.789 265.323C359.544 265.357 358.31 265.08 357.199 264.517C351.596 261.985 345.215 257.237 347.956 251.919C350.697 246.601 355.236 246.331 357.199 247.724C358.502 248.653 360.809 250.6 362.202 251.769C362.538 252.061 362.957 252.24 363.4 252.283C363.843 252.326 364.288 252.23 364.674 252.009L365.857 251.319C366.14 251.166 366.384 250.95 366.571 250.689C366.759 250.429 366.886 250.129 366.942 249.812C366.998 249.496 366.982 249.171 366.896 248.861C366.809 248.551 366.654 248.265 366.441 248.024V248.024C365.993 247.455 365.639 246.818 365.393 246.136C365.393 246.136 373.497 239.141 370.711 235.231C367.924 231.321 360.36 225.434 361.198 222.363C362.037 219.292 373.182 215.367 377.976 215.367C379.759 215.308 383.399 215.502 383.983 214.723Z"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M391.832 229.703C391.832 229.703 385.84 229.703 384.148 230.557C382.455 231.411 380.298 237.388 380.298 237.388L385.855 233.973L392.252 232.699L393.96 228.011L391.832 229.703Z"
            fill="#263238"
          />
          <path d="M392.252 235.68L387.129 238.242H392.252" fill="white" />
          <path
            d="M392.252 235.68L387.129 238.242H392.252"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M386.859 509.889C377.17 512.871 367.871 516.999 359.161 522.188C346.039 530.292 324.183 543.175 314.401 543.774C304.619 544.373 301.533 541.257 295.661 539.025C289.789 536.793 286.673 544.059 286.673 548.253C286.673 552.447 286.673 554.41 283.872 558.335C281.07 562.259 273.835 576.73 273.835 576.73C273.835 576.73 269.91 592.399 273.835 592.953C277.76 593.508 280.262 588.205 288.381 581.494C296.5 574.783 309.353 560.222 320.827 559.113C332.302 558.005 383.504 552.672 404.715 542.635C425.927 532.599 424.579 535.355 430.736 530.651C436.892 525.948 434.645 516.945 431.575 510.788C429.941 507.308 427.551 504.238 424.579 501.8"
            fill="white"
          />
          <path
            d="M417.358 536.973C414.842 536.524 412.864 535.865 412.864 534.936C412.864 532.509 420.13 532.509 423.77 527.67C427.41 522.832 423.156 517.978 418.317 512.526C416.46 510.444 414.168 507.462 411.696 504.556L386.919 509.889C377.229 512.871 367.931 516.999 359.221 522.188C346.039 530.292 324.183 543.175 314.401 543.774C304.619 544.373 301.533 541.257 295.661 539.025C289.789 536.793 286.673 544.059 286.673 548.253C286.673 552.447 286.673 554.41 283.872 558.335C281.07 562.259 273.835 576.73 273.835 576.73C273.835 576.73 269.91 592.399 273.835 592.953C277.76 593.508 280.262 588.205 288.381 581.494C296.5 574.783 309.353 560.222 320.827 559.113C332.302 558.005 383.504 552.672 404.715 542.635C410.348 539.969 414.348 538.216 417.358 536.973Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M417.358 536.973C414.842 536.524 412.864 535.865 412.864 534.936C412.864 532.509 420.13 532.509 423.77 527.67C427.41 522.832 423.156 517.978 418.317 512.526C416.46 510.444 414.168 507.462 411.696 504.556L386.919 509.889C377.229 512.871 367.931 516.999 359.221 522.188C346.039 530.292 324.183 543.175 314.401 543.774C304.619 544.373 301.533 541.257 295.661 539.025C289.789 536.793 286.673 544.059 286.673 548.253C286.673 552.447 286.673 554.41 283.872 558.335C281.07 562.259 273.835 576.73 273.835 576.73C273.835 576.73 269.91 592.399 273.835 592.953C277.76 593.508 280.262 588.205 288.381 581.494C296.5 574.783 309.353 560.222 320.827 559.113C332.302 558.005 383.504 552.672 404.715 542.635C410.348 539.969 414.348 538.216 417.358 536.973Z"
            fill="white"
          />
          <path
            d="M386.859 509.889C377.17 512.871 367.871 516.999 359.161 522.188C346.039 530.292 324.183 543.175 314.401 543.774C304.619 544.373 301.533 541.257 295.661 539.025C289.789 536.793 286.673 544.059 286.673 548.253C286.673 552.447 286.673 554.41 283.872 558.335C281.07 562.259 273.835 576.73 273.835 576.73C273.835 576.73 269.91 592.399 273.835 592.953C277.76 593.508 280.262 588.205 288.381 581.494C296.5 574.783 309.353 560.222 320.827 559.113C332.302 558.005 383.504 552.672 404.715 542.635C425.927 532.599 424.579 535.355 430.736 530.651C436.892 525.948 434.645 516.945 431.575 510.788C429.941 507.308 427.551 504.238 424.579 501.8"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M432.787 513.814C432.787 513.814 426.121 487.764 381.541 450.089C351.581 424.743 338.174 419.32 321.111 434.42C304.049 449.52 307.405 459.332 313.621 468.874C319.838 478.416 344.945 496.572 365.647 505.815C386.349 515.057 407.336 527.91 419.081 526.787"
            fill="white"
          />
          <path
            d="M399.487 494.954C393.42 494.355 404.326 506.474 391.608 503.433C378.89 500.392 334.684 462.867 325.591 450.748C318.101 440.771 324.587 432.458 327.089 429.776C324.969 431.104 322.965 432.607 321.097 434.27C304.035 449.385 307.39 459.167 313.607 468.724C319.824 478.281 344.93 496.422 365.632 505.665C386.335 514.908 407.322 527.76 419.066 526.637L424.654 521.394C423.65 518.548 421.073 515.627 418.302 512.496C413.449 507.073 405.539 495.568 399.487 494.954Z"
            fill="#FFC100"
          />
          <path
            opacity="0.5"
            d="M399.487 494.954C393.42 494.355 404.326 506.474 391.608 503.433C378.89 500.392 334.684 462.867 325.591 450.748C318.101 440.771 324.587 432.458 327.089 429.776C324.969 431.104 322.965 432.607 321.097 434.27C304.035 449.385 307.39 459.167 313.607 468.724C319.824 478.281 344.93 496.422 365.632 505.665C386.335 514.908 407.322 527.76 419.066 526.637L424.654 521.394C423.65 518.548 421.073 515.627 418.302 512.496C413.449 507.073 405.539 495.568 399.487 494.954Z"
            fill="white"
          />
          <path
            d="M432.787 513.814C432.787 513.814 426.121 487.764 381.541 450.089C351.581 424.743 338.174 419.32 321.111 434.42C304.049 449.52 307.405 459.332 313.621 468.874C319.838 478.416 344.945 496.572 365.647 505.815C386.349 515.057 407.336 527.91 419.081 526.787"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M364.194 538.426C361.363 532.179 362.052 525.154 363.416 519.731C361.992 520.51 360.569 521.319 359.161 522.188C346.039 530.292 324.183 543.175 314.401 543.774C304.619 544.373 301.533 541.257 295.661 539.025C289.789 536.793 286.673 544.059 286.673 548.253C286.673 552.447 286.673 554.41 283.872 558.335C281.07 562.259 273.835 576.73 273.835 576.73C273.835 576.73 269.91 592.399 273.835 592.953C277.76 593.508 280.262 588.205 288.381 581.494C296.5 574.783 309.353 560.222 320.827 559.113C340.023 557.291 359.113 554.486 378.021 550.71C371.971 548.601 367.001 544.185 364.194 538.426Z"
            fill="#FFC100"
          />
          <path
            opacity="0.2"
            d="M364.194 538.426C361.363 532.179 362.052 525.154 363.416 519.731C361.992 520.51 360.569 521.319 359.161 522.188C346.039 530.292 324.183 543.175 314.401 543.774C304.619 544.373 301.533 541.257 295.661 539.025C289.789 536.793 286.673 544.059 286.673 548.253C286.673 552.447 286.673 554.41 283.872 558.335C281.07 562.259 273.835 576.73 273.835 576.73C273.835 576.73 269.91 592.399 273.835 592.953C277.76 593.508 280.262 588.205 288.381 581.494C296.5 574.783 309.353 560.222 320.827 559.113C340.023 557.291 359.113 554.486 378.021 550.71C371.971 548.601 367.001 544.185 364.194 538.426Z"
            fill="black"
          />
          <path
            d="M364.194 538.426C361.363 532.179 362.052 525.154 363.416 519.731C361.992 520.51 360.569 521.319 359.161 522.188C346.039 530.292 324.183 543.175 314.401 543.774C304.619 544.373 301.533 541.257 295.661 539.025C289.789 536.793 286.673 544.059 286.673 548.253C286.673 552.447 286.673 554.41 283.872 558.335C281.07 562.259 273.835 576.73 273.835 576.73C273.835 576.73 269.91 592.399 273.835 592.953C277.76 593.508 280.262 588.205 288.381 581.494C296.5 574.783 309.353 560.222 320.827 559.113C340.023 557.291 359.113 554.486 378.021 550.71C371.971 548.601 367.001 544.185 364.194 538.426V538.426Z"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M315.644 465.024C315.644 465.024 376.837 504.182 394.783 510.713C412.729 517.244 408.654 504.991 408.654 504.991"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M370.306 541.707C370.306 541.707 387.443 543.34 398.858 532.719"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M366.546 322.43C366.546 322.43 344.855 308.243 319.748 311.239C294.642 314.235 264.832 339.911 245.508 361.872C226.183 383.833 140.273 503.613 140.273 503.613L137.607 484.034C136.359 474.81 138.797 465.466 144.393 458.029L158.039 439.858C158.039 439.858 159.403 417.508 171.521 406.033C179.568 398.506 188.311 391.76 197.631 385.885C200.762 383.728 232.085 352.345 254.181 329.905C276.276 307.465 303.091 291.391 327.388 298.192C351.686 304.993 361.423 310.176 367.085 315.179C372.748 320.183 372.942 319.673 372.942 319.673L366.546 322.43Z"
            fill="#FFC100"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M219.293 375.668L224.341 369.991"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M158.039 439.858L217.21 377.616"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M301.922 307.914C300.334 308.543 298.746 309.247 297.144 310.071"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M369.273 321.815C369.273 321.815 338.669 297.203 306.656 306.326"
            stroke="#263238"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M316.079 498.699C316.079 498.699 318.595 493.936 316.917 491.704C315.24 489.472 313.832 489.187 310.761 486.386C307.69 483.584 306.012 482.746 302.372 482.746C298.732 482.746 294.882 483.03 294.882 483.03C294.882 483.03 289.279 480.783 289.279 464.56C289.427 454.544 291.073 444.607 294.163 435.079C289.26 437.981 283.766 439.743 278.089 440.232C274.684 440.602 271.241 440.102 268.081 438.779C264.922 437.456 262.149 435.353 260.023 432.667C260.933 441.479 262.648 450.189 265.147 458.688C271.303 479.105 275.498 488.063 277.131 491.644C278.763 495.224 293.354 513.739 295.871 514.308C298.387 514.878 300.904 515.417 302.866 514.308C304.829 513.2 319.344 509.814 318.82 505.635C318.711 503.403 317.928 501.256 316.573 499.478L316.079 498.699Z"
            fill="#FFC100"
          />
          <path
            opacity="0.2"
            d="M318.88 505.695C318.88 505.245 318.745 504.841 318.67 504.467C318.67 504.347 318.67 504.227 318.67 504.107C318.67 503.987 318.55 503.568 318.49 503.328C318.43 503.088 318.371 502.924 318.326 502.744C312.963 503.418 303.151 506.848 300.514 506.848C297.638 506.848 294.747 502.519 290.418 497.696C286.089 492.872 279.348 480.379 278.434 464.979C277.85 455.752 280.037 446.883 281.879 439.678C280.681 439.918 279.452 440.097 278.134 440.232C274.729 440.602 271.286 440.102 268.126 438.779C264.967 437.456 262.194 435.353 260.068 432.667C260.068 433.057 260.158 433.461 260.203 433.851C260.278 434.54 260.368 435.229 260.458 435.948C260.458 436.412 260.593 436.907 260.653 437.446C260.712 437.985 260.847 438.734 260.937 439.393C261.027 440.053 261.102 440.397 261.177 440.891C261.252 441.386 261.402 442.21 261.521 442.869L261.791 444.367L262.151 446.404L262.465 447.902C262.615 448.606 262.78 449.325 262.945 450.044C263.049 450.524 263.154 451.003 263.274 451.467C263.469 452.276 263.679 453.085 263.888 453.879C263.978 454.283 264.083 454.688 264.188 455.077C264.517 456.291 264.862 457.504 265.221 458.703C271.378 479.12 275.573 488.078 277.205 491.659C277.342 491.948 277.497 492.228 277.67 492.497C277.969 493.007 278.359 493.621 278.838 494.325C279.632 495.493 280.651 496.887 281.834 498.415L282.538 499.328C287.512 505.875 294.343 513.949 296.02 514.308C298.537 514.863 301.054 515.417 303.016 514.308C303.743 513.966 304.494 513.676 305.263 513.44L306.416 513.065C311.21 511.507 319.299 508.841 318.88 505.695Z"
            fill="black"
          />
          <path
            d="M314.475 493.711L310.955 496.632C310.955 496.632 313.562 496.452 316.632 499.538"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M316.079 498.699C316.079 498.699 318.595 493.936 316.917 491.704C315.24 489.472 313.832 489.187 310.761 486.386C307.69 483.584 306.012 482.746 302.372 482.746C298.732 482.746 294.882 483.03 294.882 483.03C294.882 483.03 289.279 480.783 289.279 464.56C289.427 454.544 291.073 444.607 294.163 435.079C289.26 437.981 283.766 439.743 278.089 440.232C274.684 440.602 271.241 440.102 268.081 438.779C264.922 437.456 262.149 435.353 260.023 432.667C260.933 441.479 262.648 450.189 265.147 458.688C271.303 479.105 275.498 488.063 277.131 491.644C278.763 495.224 293.354 513.739 295.871 514.308C298.387 514.878 300.904 515.417 302.866 514.308C304.829 513.2 319.344 509.814 318.82 505.635C318.711 503.403 317.928 501.256 316.573 499.478L316.079 498.699Z"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M534.547 206.664L486.312 251.949"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M481.787 256.188L473.968 263.528"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M185.078 493.561L176.659 501.47"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M247.365 435.109L191.85 487.21"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M299.601 597.223L294.028 602.451"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M334.384 564.566L305.232 591.92"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M98.5239 519.087L91.7979 525.409"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M162.519 459.047L107.542 510.638"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M260.143 304.274L251.709 312.183"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M322.43 245.822L267.453 297.428"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M522.593 229.509L451.872 295.87"
            stroke="#263238"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M626.479 387.757C616.278 382.2 611.649 386.829 607.949 382.2C604.249 377.571 618.135 365.512 590.332 353.528C590.332 353.528 588.475 327.568 550.47 326.564C512.466 325.56 522.668 352.524 512.466 359.011C502.265 365.497 499.493 355.296 489.292 361.797C479.091 368.298 483.735 381.271 475.391 383.114C467.047 384.956 455.917 374.77 445.73 381.256C435.544 387.742 435.529 393.24 430.9 393.24C426.271 393.24 416.999 389.54 411.426 393.24C405.854 396.94 399.367 401.584 399.367 401.584H633.894C633.894 401.584 636.65 393.315 626.479 387.757Z"
            fill="white"
          />
          <path
            d="M286.717 237.748C282.778 235.605 280.995 237.388 279.557 235.605C278.119 233.823 283.497 229.164 272.771 224.52C272.771 224.52 272.052 214.499 257.386 214.139C242.721 213.78 246.661 224.161 242.721 226.662C238.781 229.164 237.718 225.164 233.733 227.726C229.748 230.288 231.591 235.216 228.37 235.965C225.15 236.714 220.88 232.744 216.925 235.246C212.971 237.748 212.986 239.89 211.203 239.89C209.421 239.89 205.84 238.467 203.713 239.89C201.586 241.313 199.069 243.11 199.069 243.11H289.564C289.564 243.11 290.612 239.89 286.717 237.748Z"
            fill="white"
          />
        </svg>
      </section>
      <Copyright longPage={true} />
    </section>
  );
}

// TODO

// Add shapes, animation and make responsive

export default Help;
