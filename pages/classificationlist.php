<form id="myform">
    <div class="container-fluid">
        <div class="card bg-white" >
            <div class="card-header card-color">
                <p class="h2 text-center text-uppercase font-weight-bold pt-2">Affichage des classes de chaque liste</p>
            </div>
            <div class="card-body container-fluid" >
                <div class="row">
                    <div class="col-sm-6 mb-2">
                        <label for='IdFilere'>Choisissez la filiere : </label>


                        <input class="form-control" type="text" id='codefil' name='codefil' required>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="submit" name="submit" value="Chercher" />
                    </div>
                </div>
                <div class="row table-responsive m-auto rounded">
                    <table class="table table-hover">
                        <thead>
                            <tr class="text-uppercase bg-light">
                                <th scope="col">Id</th>
                                <th scope="col">Code</th>

                                <th scope="col">CodeFilere</th>
                            </tr>
                        </thead>

                        <tbody id="table-content">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</form>
<script src="script/classificationparlist.js" type="text/javascript"></script>
