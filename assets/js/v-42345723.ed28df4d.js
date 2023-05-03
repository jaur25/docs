"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7156],{973:(e,a,n)=>{n.r(a),n.d(a,{default:()=>i});var o=n(8e3);const r=[(0,o.uE)('<p>ADempiere contempla diferentes funcionalidades que le permiten a las empresas controlar los movimientos monetarios realizados en las diferentes cajas que la misma utiliza para gestionar las operaciones de compra, venta, préstamos, reembolso, entre otras operaciones que requieren del proceso que es realizado en caja.</p><p>El procedimiento cierre de caja permite controlar y dar seguimiento al dinero que la empresa asigna, presta, reembolsa, entre otras acciones que generan un ingreso o egreso a las diferentes cajas. El mismo debe realizarce a diario, ya que inicialmente el saldo en caja corresponde al monto <strong>0,00</strong>. De igual manera, al final del día el monto de la caja debe corresponder a los mismos <strong>0,00</strong>.</p><p>El monto de la caja al final del día luego del proceso de cierre de caja, puede ser diferente al <strong>0,00</strong>, sólo en aquellos casos en los que la caja amerite un monto diferente y dependiento del proceso que se realice en la misma.</p><p>El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en ADempiere un cierre de caja, en su versión 3.9.2 para la localización Venezuela.</p><ul><li>Registro de Cierre de Caja</li><li>Cierre de Caja Nómina</li></ul><h2 id="registro-de-cierre-de-caja" tabindex="-1"><a class="header-anchor" href="#registro-de-cierre-de-caja" aria-hidden="true">#</a> Registro de Cierre de Caja</h2><p>Ubique y seleccione en el menú de ADempiere, la carpeta <strong>Gestión de Saldos Pendientes</strong>, luego seleccione la ventana <strong>Diario de Caja</strong>, por último seleccione la ventana <strong>Cierre de Caja</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image17.png" alt="Campo"></p><p>Imagen 1. Menú de ADempiere</p><p>Podrá visualizar la ventana <strong>Cierre de Caja</strong>, donde debe seleccionar el icono <strong>Registro Nuevo</strong> y proceder al llenado de los campos correspondientes.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image18.png" alt="Campo"></p><p>Imagen 2. Ventana Cierre de Caja y Selección de Icono Registro Nuevo</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual está realizando el cierre de caja.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image19.png" alt="Campo"></p><p>Imagen 3. Campo Organización</p><p>Seleccione el tipo de documento a generar en el campo <strong>Tipo de Documento</strong>, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image20.png" alt="Campo"></p><p>Imagen 4. Campo Tipo de Documento</p><p>Seleccione en el campo <strong>Cuenta Bancaria</strong>, la cuenta bancaria a la cual se le realizará el cierre de caja.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image21.png" alt="Campo"></p><p>Imagen 5. Campo Cuenta Bancaria</p><p>Introduzca en el campo <strong>Nombre</strong>, el nombre de referencia del cierre de caja que está realizando.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image22.png" alt="Campo"></p><p>Imagen 6. Campo Nombre</p><p>Introduzca en el campo <strong>Descripción</strong>, una breve descripción referente al documento que está realizando.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image23.png" alt="Campo"></p><p>Imagen 7. Campo Descripción</p><p>Seleccione la opción <strong>Crear a partir de Pagos</strong>, para realizar el cierre de caja desde un ingreso generado anteriormente, este puede ser una selección de pago o una transferencia bancaria. Para ejemplificar el registro es utilizado el caso de una transferencia bancaria.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image24.png" alt="Campo"></p><p>Imagen 8. Opción Crear a Partir</p><p>Podrá visualizar la siguiente ventana de búsqueda inteligente, donde debe seleccionar la opción <strong>Comenzar Búsqueda</strong> para buscar las transferencias entre cuentas realizadas.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image25.png" alt="Campo"></p><p>Imagen 9. Ventana de Búsqueda Inteligente y Selección de Opción Comenzar Búsqueda</p><p>Seleccione el registro de la transferencia creada anteriormente y la opción <strong>OK</strong>, para cargar la información a la pestaña <strong>Línea de Cierre de Caja</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image26.png" alt="Campo"></p><p>Imagen 10. Selección de Transferencia y Opción OK</p><p>Seleccione el icono <strong>Refrescar</strong> en la barra de herramientas de ADempiere, para refrescar el registro en la ventana <strong>Cierre de Caja</strong>.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image27.png" alt="Campo"></p><p>Imagen 11. Icono Refrescar</p><p>Seleccione la opción <strong>Completar</strong>, ubicada en la parte inferior del documento.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image28.png" alt="Campo"></p><p>Imagen 12. Opción Completar</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>, para completar el documento.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image29.png" alt="Campo"></p><p>Imagen 13. Acción Completar y Opción OK</p><p>Note</p><p>Recuerde que el procedimiento para gestionar el cierre de caja debe realizarce diariamente.</p><h2 id="cierre-de-caja-nomina" tabindex="-1"><a class="header-anchor" href="#cierre-de-caja-nomina" aria-hidden="true">#</a> Cierre de Caja Nómina</h2><p>El último paso que debemos seguir para terminar de registrar el proceso de pago de nómina en ADempiere es el cierre de caja, donde llamaremos los pagos registrados en nuestra selección de pago y se cruzaran con la transferencia bancaria que realizamos previamente. Recuerde que para poder realizar este paso debemos de tener completo los pasos realizados anteriormente los cuales son: <strong>Seleccion de Pago</strong>, <strong>Imprimir Exportar Pagos de Nómina</strong> y la <strong>Transferencia Bancaria</strong>.</p><p>Nos dirigimos a la ventana <strong>Cierre de Caja</strong>, ubicado en el menú <strong>Gestión de Saldos Pendientes</strong> en el sub directorio <strong>Diario de Caja</strong>, registramos los datos de la siguiente manera:</p><p>Seleccionamos en el campo <strong>Cuenta de la Caja</strong> el nombre de la cuenta que se dispone para registrar los pagos de la nómina, en este caso será una caja y estará identificada porque indica el nombre del banco y al final la palabra tránsito.</p><p>Seleccionamos el <strong>Tipo de Documento</strong> denominado <strong>Cierre de Caja Nómina</strong>, ese tipo de documento indica el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento<strong>Tipo de Documento</strong> elaborado por ERPyA.</p><p>Seleccione en el Campo <strong>Nombre</strong> un nombre referente a ese cierre de caja.</p><p>Seleccione en el Campo <strong>Fecha de Estado de Cuenta</strong> la fecha que registró en la selección de pago.</p><p>Seleccione en el campo <strong>Descripción</strong>una información adicional que le ayude a identificar su cierre de caja, este campo no es obligatorio por lo tanto es opcional colocar la información en él.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image30.png" alt="Campo"></p><p>Imagen 1. Registro Cierre de Caja</p><p>Seguidamente nos dirigimos a seleccionar el campo que dice <strong>Crear a Partir de Caja</strong>,</p><p><img src="/assets/img/docs/balance-management/bam-balance-image31.png" alt="Campo"></p><p>Imagen 2 .Campo Crear a Partir de Caja</p><p>Luego nos aparecerá una ventana donde estará seleccionada el nombre de nuestra caja de nómina, también tendrá otras opciones disponibles de las cuales usted puede seleccionar la que más se adapte a su búsqueda para encontrar los movimientos que posee su caja. En este caso utilizaremos la fecha para encontrar los movimientos que posee la caja durante esa fecha.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image32.png" alt="Campo"></p><p>Imagen 3. Búsqueda de Parámetros</p><p>Posteriormente aparecen los movimientos que tenga registrados en su caja, en la fecha que determinó en su búsqueda. En este caso nos aparecen el pago generado a los empleados en la selección de pago y por otro lado tendremos el monto total de la transferencia que realizamos con el monto total de la nómina.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image33.png" alt="Campo"></p><p>Imagen 4. Pagos a Cruzar</p><p>Note</p><p>Cabe destacar que en el ejemplo que presentamos se evidencia la transferencia realizada y el pago de un solo empleado que fue con el que realizamos el proceso de nómina, sólo para este caso en específico, en su proceso le deben aparecer todos los empleados qué le procesaron la nómina</p><p>Seleccione todos los pagos de los empleados y el monto de la transferencia bancaria</p><p>Seguidamente nos dirigimos a la ventana principal de nuestro cierre de caja y en la pestaña llamada línea del cierre de caja visualizaremos los movimientos seleccionados para el cierre de la caja</p><p>Por último nos dirigimos a la ventana principal de nuestro cierre de caja y en el campo <strong>Saldo Final</strong> nos debe quedar un saldo de cero (0), eso quiere decir que los montos de la caja están correctos, el egreso de dinero que salió de nuestra caja para el pago de la nómina de los empleados y en monto ingresado a nuestra caja a través de la transferencia bancaria está correcto.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image34.png" alt="Campo"></p><p>Imagen 5. Saldo Final</p><p>Warning</p><p>Cabe destacar que el saldo final del cierre de la caja siempre debe quedar en cero 0. Sí no es así posiblemente esté realizando un procedimiento incorrecto</p><p>Al finalizar este proceso proceda a finalizar el proceso completando su cierre de caja.</p><p><img src="/assets/img/docs/balance-management/bam-balance-image35.png" alt="Campo"></p><p>Imagen 6. Completar el cierre de Caja</p>',78)],s={},i=(0,n(3860).Z)(s,[["render",function(e,a){return(0,o.wg)(),(0,o.iD)("div",null,r)}]])},8870:(e,a,n)=>{n.r(a),n.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-42345723","path":"/docs/balance-management/close-box.html","title":"Cierre de Caja","lang":"en-US","frontmatter":{"title":"Cierre de Caja","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"ADempiere contempla diferentes funcionalidades que le permiten a las empresas controlar los movimientos monetarios realizados en las diferentes cajas que la misma utiliza para gest","head":[["meta",{"property":"og:url","content":"https://docs-md.erpya.com/docs/balance-management/close-box.html"}],["meta",{"property":"og:title","content":"Cierre de Caja"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-03T16:00:59.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2023-05-03T16:00:59.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Registro de Cierre de Caja","slug":"registro-de-cierre-de-caja","children":[]},{"level":2,"title":"Cierre de Caja Nómina","slug":"cierre-de-caja-nomina","children":[]}],"git":{"createdTime":1678384676000,"updatedTime":1683129659000,"contributors":[{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":3},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":4.68,"words":1404},"filePathRelative":"docs/balance-management/close-box.md","localizedDate":"March 9, 2023"}')}}]);