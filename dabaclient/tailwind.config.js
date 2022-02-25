module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'media',
  theme: {
    letterSpacing:{
      'verytight':'-0.035rem'
    },
    fontSize: {
      'textnew': ['18px', '24.52px'],
      'textnewmed': ['16px', '22px'],
      'textnewfoot': ['14px', '19px'],
      'textnewuser':['12px','16.34px'],
      'personalheader':['36px','49.03px'],
      'profileheader':['24px','33px'],
      'profilesubheader': ['13px','18px']
    },
   /* fontFamily:{
      'sans':['"Noto Sans"']
    },*/
    borderRadius:{
      '24px':'24px',
      '8px':'8px',
      'full':'9999px',
      '12px':'12px'
    },
      extend: {
        padding:{
          '49.95px':'49.95px',
          '28.32px':'28.32px'
        },
        colors:{
          'b-col-gray' : '#BDBDBD',
          'button-color':'#2F80ED',
          'footcolor':'#828282',
          'personalcolor':'#E0E0E0',
          'borderbottomcolor':'#D3D3D3'
        },
        margin:{
          '14.5px':'14.5px',
          '22.51px':'22.51px',
          '34.66px':'34.66px',
          '41.01px':'41.01px',
          '20.93px':'20.93px',
          '22.51px':'22.51px',
          '27.07px':'27.07px',
          '80.07px':'80.07px',
          '60.07px':'50px',
          '11px':'11px',
          '8px':'8px',
          '4px':'4px',
          '44.06px':'44.06px',
          '29.51px':'29.51px',
          '187.97px':'187.97px',
          '27.5px':'27.5px',
          '54.52px':'54.52px',
          '24px':'24px'
        },
        spacing: {
          '197.44px': '197.44px',
          '483.08px':'483.08px',
          '248.25px':'248.25px',
          '473.83px':'473.83px',
          //just in case login needs height
          '677.37px':'677.37px',
          '10%':'10%',
          '20%':'20%',
          '25%':'25%',
          '30%':'30%',
          '50%': '50%',
          '150%':'150%',
          '318.88px':'318.88px',
          '50px':'50px',
          '66px':'66px',
          '356.48px':'356.48px',
          '18px':'18px',
          '42px':'42px',
          '120%':'120%',
          '100%':'100%',
          '544.37px':'544.37px',
          '102%':'102%',
          '26.63px':'26.63px',
          '72px':'72px',
          '24px':'24px',
          '109.18px':'109.18px',
          '32px':'32px',
          '7.18px':'7.18px',
          '4.59px':'4.59px',
          '14.75px':'14.75px',
          '28.06px':'28.06px',
          '17.24px':'17.24px',
          '16px':'16px',
          '102px':'102px',
          '591.11px':'591.11px',
          '574.89px':'574.89px',
          '896px':'896px',
          '208px':'208px',
          '49px':'49px',
          '845.91px':'845.91px',
          '823.24px':'823.24px',
          '580.54px':'580.54px',
          '95.34px':'95.34px',
          '38px':'38px',
          '0.2px':'0.2px',
          '72px':'72px',
          '297.04px':'297.04px',
          '294.1px':'294.1px',
          '79.2px':'79.2px',
          '201.96px':'201.96px',
          '22px':'22px',
          '150px':'150px',
          '296.57px':'296.57px',
          '297.52px':'297.52px',
          '845.91px': '845.91px',
          '827.56px':'827.56px',
          '25.89px':'25.89px',
          '416.93px':'416.93px',
          '101px':'101px',
          '105px':'105px',
          '296.57px':'296.57px',
          '28.32px':'28.32px',
          '76px':'76px',
          '83px':'83px' 
        }
      },
      screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
      },
  },
  variants: {
      extend: {}, 
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
],
}