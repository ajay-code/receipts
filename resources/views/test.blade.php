<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style>
    @page{ 
        size: 21cm 10cm;
        margin: 0;
      }
     @font-face {
          font-family: "Arial";
          src: url('fonts/arial/Arial.ttf') format('truetype');
        }
    .page-break {
    }
     body{
        font-family: "Arial";
        font-size: 12px;
        font-weight: normal;
        margin: 0;
    }
    .page{
        page-break-after: always;
    }
    @media print{
        .sender{
            position : relative;
            left: 4cm;
            top: 1cm;
        }
        .receiver{
        position : relative;
        left: 4cm;
        top: 6cm;
        }
    } 
    

    </style>

</head>

<body>
        <div class="page">
            <div class="sender">
                Ajay Singh <br>
                Suchi pind, jalandhar <br>
                Punjab <br>    
                946483738 <br>
                <span onclick="printl()">ajay@gmail.com</span>
            </div>
            <br>
            <br>
            <br>
            <div class="receiver">
                Sukhjeet Singh <br>
                Lamma pind, jalandhar <br>
                Punjab <br>  
                56342234453 <br>
                sukhi@gmail.com
                products x 4 <br>
            </div>
            
        </div>

        {{-- <div class="page-break"></div> --}}

       <div class="page">
            <div class="sender">
                Ajay Singh <br>
                Suchi pind, jalandhar <br>
                Punjab <br>    
                946483738 <br>
                <span onclick="printl()">ajay@gmail.com</span>
            </div>
            <br>
            <br>
            <br>
            <div class="receiver">
                Sukhjeet Singh <br>
                Lamma pind, jalandhar <br>
                Punjab <br>  
                56342234453 <br>
                sukhi@gmail.com
                products x 4 <br>
            </div>
            
        </div>
        
    
    
    <script type="text/javascript">
    printl = function(){
            this.print();
      }
  </script>
</body>
</html>