<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>PAPPU PORTFOLIO</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- Jquery-cdn-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

    <script src="https://js.stripe.com/v3/"></script>

    <!-- Sweetalert2 -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- Bootstrap 4 -->
   <!-- Latest compiled and minified CSS -->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>

<style>
.body{
    background: #FEFEFE;
}
</style>

<body class="body">


            <div id="app">
                <app-component></app-component>
            </div>

<script>
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
</script>

    <script src="{{ asset('js/app.js') }}"></script>
    <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
    <script type="text/javascript" src="{{ asset ('website')}}/js/sweetalert.js"></script>
    <script type="text/javascript" src="{{ asset ('website')}}/js/cart.js"></script>
    <script type="text/javascript" src="{{ asset ('website')}}/js/menu.js"></script>

</body>

</html>
