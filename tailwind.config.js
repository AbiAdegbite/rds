/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    
      theme: {

          letterSpacing: {
              sm:'0.005em', //0.5%
              md:'0.04em', //4%
              lg:'0.055em', //5.5%
          },

          lineHeight: {
              sm: '130%',
              lg: '140%',

          },

          fontSize: {
              h1:'67.34px',
              h2: '50.52px',
              h3: '37.9px',
              h4: '28.43px',
              h5: '21.33px',
              base: '16px',
              'mob-h1': '39.31px',
              'mob-h2':'33.18px',
              'mob-h3':'27.65px',
              'mob-h4':'23.04',
              'mob-h5':'19.2px',
          },


          screens: {
              'sm': '480px', /*480px*/
              'md': '768px', /*768px*/
              'lg': '1024px', /*first:976px*/
              'xl': '1280px', /*1440px*/
          },

          borderRadius:{
              xsm: "4px",
              sm: "10px",
              lg: "90px",
              full: "999px",
          },

          colors: {

              'primary': {
                  0: '#FFE0E0',
                  50: '#FFCACA',
                  100: '#FFB3B3',
                  200: '#FF8686',
                  300: '#FF5A5A',
                  400: '#FF2D2D',
                  500: '#FF0000',
                  600: '#D20000',
                  700: '#A50000',
                  800: '#790000',
                  900: '#4C0000',

              },

              'secondary': {
                  0: '#FAFAFA',
                  50: '#E7E7E7',
                  100: '#D5D5D5',
                  200: '#B0B0B0',
                  300: '#8B8B8B',
                  400: '#676767',
                  500: '#424242',
                  600: '#353535',
                  700: '#282828',
                  800: '#1A1A1A',
                  900: '#0D0D0D',

              },

              'neutrals':{
                  white: '#FFFFFF',
              },

              'accent':{
                  light:'#d2ddfb',
                  dark:'#1C54E9',  
              },

              'status':{
                  error:'#CB1B27',
                  warning: '#E86100',
                  success: '#0F9E06',

              },

          },

        extend: {
            spacing: {
                'spacing00': '0px',
                'spacing01': '5px',
                'spacing02': '10px',
                'spacing03': '15px',
                'spacing04': '20px',
                'spacing05': '25px',
                'spacing06': '30px',
                'spacing07': '35px',
                'spacing08': '40px',
                'spacing09': '50px',
                'spacing10': '60px',
                'spacing11': '70px',
                'spacing12': '100px',
            },
        },
      },
    
  plugins: []
}
