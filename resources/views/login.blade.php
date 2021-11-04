<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
    <form action="{{url('validar')}}" method="POST">
         <label for="Usuario">Usuario</label>
            <input type="text" name="usuario" placeholder="Usuario"><br>
            {{csrf_field()}}
        <label for="Password">Contraseña</label>
            <input type="password" name="password">
    <br>
    <br>
        <button type="submit">INGRESAR</button>
    </form>

</body>
</html>