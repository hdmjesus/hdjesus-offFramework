const Form = () => {
  `
   <section class="data" id="form-start">
			<article class="information">

				<figure class="dataInformation__image">
					<img src="../src/images/app.svg" alt="Aplicacion">
				</figure>

				<div class="information__descriptions">
					<h2>¿Que quieres crear?</h2>
					<p>Descubre lo que quieres crear y hagamoslo realidad</p>
				</div>

			</article>

			<article class="information__form">

				<form action="" class="inputs" onsubmit="return validar();">
					<input type="text" placeholder="Name" id="name" required/>
					<input type="email" name="contacto" placeholder="E-mail" id="email" required/>
					<input type="submit" value="Enviar" class="btn-form" id="btn-form"/>
				</form>

			</article>

		</section>
		
		<section class="data data-off"  id="question1">
			<div class="data__count">
				<h4>1/8</h4>
			</div>
			<article class="dataType"></article>
			<div class="data-title">
				<h3>¿Que tipo de web estas buscando?</h3>
			</div>
			<form action="" class="dataType__form" >
		
		
				<div class="seleccion" id="tienda">
					
					<img src="/src/images/tiendaOnline.svg" alt="Tienda">
					<p>E-commerse/Tienda online</p>
				</div>
			
					<div class="seleccion" id="blog">
			
						<img src="/src/images/blog.svg" alt="blog">
					<p >Web con blog</p>
				</div>

					<div class="seleccion" id="coportativa">
							
							<img src="/src/images/coportativa.svg" alt="Empresas">
					<p>Web para empresas/Corporativa</p>
				</div>

					<div class="seleccion" id="otro" >
						
							<img src="/src/images/otro.svg" alt="otro">
					<p>Otro</p>
					</div>

							
			</form>
		</section>

		<section class="data data-off" id="question2">
			<div class="data__count">
				<h4>2/8</h4>
			</div>
			
			<div class="data-title">
				<h3>¿Que tipo de diseño quieres que tenga tu web?</h3>
			</div>
			<form action="" class="data__form"  data-question-id="2">
				<div class="seleccion" id="plantilla">
				
					<img src="/src/images/plantilla.svg" alt="plantilla">
					<p>Plantilla</p>
				</div>
					<div class="seleccion" id="custom">
				
						<img src="/src/images/amedida.svg" alt="custom">
					<p>Personalizada</p>
					</div>

					<div class="seleccion" id="offdesing">
			
							<img src="/src/images/sinDiseño.svg" alt="Sin diseño">
					<p>Sin diseño</p>
					</div>

					<div class="seleccion" id="nothing">
						
							<img src="/src/images/idk.svg" alt="No lo se">
					<p>Otro</p>
					</div>

			
			
					
			</form>
		</section>

		<section class="data data-off"  id="question3">
			<div class="data__count">
				<h4>3/8</h4>
			</div>
			
			<div class="data-title">
				<h3>¿Que tan grande necesitas que sea la web?</h3>
			</div>
			<form action="" class="data__form" data-question-id="3">
				<div class="seleccion" id="pequeña">
				
					<img src="/src/images/pequeña.svg" alt=" pagina pequeña">
					<p>Pequeña:Menos de 3 paginas/50 productos</p>
				</div>
					<div class="seleccion" id="mediana">
				
						<img src="/src/images/mediana.svg" alt=" pagina mediana">
					<p>Mediana:Menos de 10 paginas/ 200 productos</p>
				</div>

					<div class="seleccion" id="grande">
					
							<img src="/src/images/grande.svg" alt="Pagina grande">
				<p>Grande:Mas de 10 paginas/ 200 productos</p>
				</div>

					<div class="seleccion" id="otrotamaño">
				
							<img src="/src/images/otro.svg" alt="otro">
					<p>Otro</p>
				</div>

			
			
					
			</form>
		</section>

			<section class="data data-off"  id="question4">
			<div class="data__count">
				<h4>4/8</h4>
			</div>
			
			<div class="data-title">
				<h3>¿En tu pagina se van a realizar pagos?</h3>
			</div>
			<form action="" class="data__form" data-question-id="4">
				<div class="seleccion" id="pagoOn">
					
					<img src="/src/images/dinero.svg" alt="Si">
					<p>Si</p>
				</div>
					<div class="seleccion" id="pagoOff">
						<input type="checkbox" name="pagoOff" >
						<img src="/src/images/nodinero.svg" alt=" no">
					<p>No</p>
				</div>

				<div class="seleccion" id="pagoIDK">
				
					<img src="/src/images/otro.svg" alt="otro">
					<p>No lo se</p>
				</div>

			
			
					
			</form>
		</section>

			<section class="data data-off"  id="question5">
			<div class="data__count">
				<h4>5/8</h4>
			</div>
			
			<div class="data-title">
				<h3>¿La web estara integrada con otra web, App o ERP?</h3>
			</div>
			<form action="" class="data__form" data-question-id="5">
				<div class="seleccion" id="integrationOn">
		
					<img src="/src/images/si.svg" alt="Si">
					<p>Si</p>
				</div>
					<div class="seleccion" id="integrationOff">
						
						<img src="/src/images/nodinero.svg" alt=" no">
					<p>No</p>
				</div>

			<div class="seleccion"  id="idk-integration">
	
					<img src="/src/images/otro.svg" alt="otro">
					<p>No lo se</p>
				</div>

			
			
					
			</form>
		</section>

			<section class="data data-off"  id="question6">
			<div class="data__count">
				<h4>6/8</h4>
			</div>
			
			<div class="data-title">
				<h3>¿Tu pagina necesita login o registro de usuario	?</h3>
			</div>
			<form action="" class="data__form" data-question-id="6">
				<div class="seleccion" id="loginOn">
					
					<img src="/src/images/si-login.svg" alt="Si">
					<p>Si</p>
				</div>
					<div class="seleccion"  id="loginOff">
				
						<img src="/src/images/404.svg" alt=" no">
					<p>No</p>
				</div>

			<div class="seleccion"  id="idk-loggin">
			
					<img src="/src/images/otro.svg" alt="otro">
					<p>No lo se</p>
				</div>

			
			
					
			</form>
		</section>

			<section class="data data-off" id="question7" >
			<div class="data__count">
				<h4>7/8</h4>
			</div>
			
			<div class="data-title">
				<h3>¿Tu pagina necesita un directorio / Buscador interno?</h3>
			</div>
			<form action="" class="data__form" data-question-id="7">
				<div class="seleccion"  id="searchOn">

					<img src="/src/images/buscador.svg" alt="Si">
					<p>Si</p>
				</div>
					<div class="seleccion" id="searchOff">
			
						<img src="/src/images/404.svg" alt=" no">
					<p>No</p>
				</div>

			<div class="seleccion" id="idk-search">
					
					<img src="/src/images/otro.svg" alt="otro">
					<p>No lo se</p>
				</div>

			
			
					
			</form>
		</section>

			<section class="data data-off"  id="question8">
			<div class="data__count">
				<h4>8/8</h4>
			</div>
			
			<div class="data-title">
				<h3>¿En que estado se encuentra tu web?</h3>
			</div>
			<form action="" class="data__form" data-question-id="8">
				<div class="seleccion" id="idea">
					
					<img src="/src/images/idea.svg" alt="Una idea">
					<p>Solamente es una idea</p>
						</div>

					<div class="seleccion" id="boceto">
				
						<img src="/src/images/boceto.svg" alt="Boceto preparado">
					<p>Boceto preparado</p>
				</div>

				</div>
					<div class="seleccion" id="desarrollo">
					
						<img src="/src/images/desarrollo.svg" alt=" En desarrollo">
					<p>Web en desarrollo</p>
				</div>

				<div class="seleccion"  id="lanzada">
					
					<img src="/src/images/lanzada.svg" alt="Web lanzada">
					<p>Web lanzada</p>
				</div>

			
			
					
			</form>
		</section>

		<section class="data data-off" id="form-end">
			<article class="finish">
				<div class="finish__description">
					<p>¡Bien! ¡Hemos terminado!</p>
					<h2>La informacion Suministrada me ayuda a entender mejor tu requerimiento</h2>
				</div>
				<div class="finish__button">
					<a href="./index.html" class="btn-form" > Volver</a>
				</div>		
			</article>
		</section>`;
  return view;
};
export default Form;
