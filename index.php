<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Kumar+One|Kumar+One+Outline" rel="stylesheet"> 
    <title>Quentin Dherret</title>
</head>
<body>
    <?php include('header.php') ?>
    <div id="hamburger">
            <ul>
                <li><a href="contact.php">contact</a></li>
            </ul>
        </div>
    <main>
        <!-- Slider buttons -->
        <div class="slider-wrapper">
                <input type="radio" name="slider" class="slide-radio1" checked id="slider1">
                <input type="radio" name="slider" class="slide-radio2" id="slider2">
                <input type="radio" name="slider" class="slide-radio3" id="slider3">
                <input type="radio" name="slider" class="slide-radio4" id="slider4">
        <!-- Slider 1-->
        <div class="slider slide1">
            <div class="slider1content">
                <div id="work">
                    <h1>développeur web</h1>
                </div>
                <img src="img/peinture.png" alt="coup de peinture">
                <div class="circle">
                    <!-- Replace it by pic-->
                </div>
                <div id="name">
                    <h1><span class="caps">Q</span>UENTIN</h1>
                    <h1><span class="caps">D</span>HERRET</h1>
                </div>
                <div class="pagination">
                    <p id="pagination">01</p>
                    <hr>
                    <h4>about me</h4>
                </div>
            </div>
        </div>
        <!-- Slider 2 -->
        <div class="slider slide2">
                <div class="slider2content">
                    <div class="projects" id="one">
                        <img src="img/peinture.png" alt="coup de peinture">
                        <div class="details one">
                            <div class="hoverImg">
                                <h3>dataviz:<br>formats d'image</h3>
                            </div>
                        </div>
                    </div>
                    <div class="projects" id="two">
                        <img src="img/peinture.png" alt="coup de peinture">
                        <div class="details two">
                            <div class="hoverImg">
                                <h3>wikiHtml</h3>
                            </div>
                        </div>
                    </div>
                    <div class="projects" id="three">
                        <img src="img/peinture.png" alt="coup de peinture">
                        <div class="details three">
                            <div class="hoverImg">
                                <h3>shi-fu-mi</h3>
                            </div>
                        </div>
                    </div>
                    <div class="projects" id="four">
                        <img src="img/peinture.png" alt="coup de peinture">
                        <div class="details four">
                            <div class="hoverImg">
                                <h3>puissance 4</h3>
                            </div>
                        </div>
                    </div>
                    <div class="projects" id="five">
                        <img src="img/peinture.png" alt="coup de peinture">
                        <div class="details five">
                            <div class="hoverImg">
                                <h3>calculatrice</h3>
                            </div>
                        </div>
                    </div>
                    <div class="projects" id="six">
                        <img src="img/peinture.png" alt="coup de peinture">
                        <div class="details six">
                            <div class="hoverImg">
                                <a href="multiplication/index.php">
                                <h3>multiplication</h3></a>
                            </div>
                        </div>
                    </div>
                    <div class="pagination">
                        <p id="pagination">02</p>
                        <hr>
                        <h4>projets</h4>
                    </div>
                </div>
            </div>
        <!-- Slider 3 -->
        <div class="slider slide3">
            <div class="slider3content">
                <div id="competences">
                    <div class="comp" id="prog">
                        <img src="img/peinturejaune.png" alt="" srcset="">
                        <h2>PROGRAMMATION</h2>
                    </div>
                    <div class="hoverComp" id="hoverProg">
                        <img src="img/peinturebleu2.png" alt="">
                        <div class="modalHover">
                            <div class="contentModal">
                                <h2>HTML</h2>
                                <h2>CSS</h2>
                                <h2>JavaScript</h2>
                                <h2>PHP</h2>
                            </div>
                        </div>
                    </div>
                    <div class="comp" id="proj">
                        <img src="img/peinturejaune.png" alt="" srcset="">
                        <h2>GESTION DE PROJET</h2>
                    </div>
                    <div class="hoverComp" id="hoverProj">
                        <img src="img/peinturebleu2.png" alt="">
                        <div class="modalHover">
                                <div class="contentModal">
                                    <h2>Préparer un projet</h2>
                                    <h2>Etablir un zoning, wireframe, mockup, spécifications techniques et fonctionnelles</h2>
                                </div>
                            </div>
                    </div>
                    <div class="comp" id="log">
                        <img src="img/peinturejaune.png" alt="" srcset="">
                        <h2>LOGICIELS</h2>
                    </div>
                    <div class="hoverComp" id="hoverLog">
                            <img src="img/peinturebleu2.png" alt="">
                            <div class="modalHover">
                                    <div class="contentModal">
                                        <h2>Travailler sur un Environnement de Développement (IDE)</h2>
                                        <h2>Adobe InDesign, Photoshop</h2>
                                        <h2>Final Cut Pro X</h2>
                                        <h2>iLife, LibreOffice, Microsoft Office</h2>
                                        <h2>Linux, macOS, Windows</h2>
                                    </div>
                                </div>
                        </div>
                    <div class="comp" id="com">
                        <img src="img/peinturejaune.png" alt="" srcset="">
                        <h2>COMMERCE</h2>
                    </div>
                    <div class="hoverComp" id="hoverCom">
                            <img src="img/peinturebleu2.png" alt="">
                            <div class="modalHover">
                                    <div class="contentModal">
                                        <h2>Marketing de produits</h2>
                                        <h2>Management d'une équipe</h2>
                                        <h2>Travail en équipe</h2>
                                    </div>
                                </div>
                        </div>
                </div>
                <div class="pagination">
                    <p id="pagination">03</p>
                    <hr>
                    <h4>compétences</h4>
                </div>
            </div>
        </div>
        <!-- Slider 4 -->
        <div class="slider slide4">
            <div class="slider4content">
                <div class="sectionXP" id="oneXP">
                    <div class="titleSection">
                        SCOLAIRE
                    </div>
                    <div class="dateXP">
                        SEPT. 2018 / MAI 2019
                    </div>
                    <div class="titleXP">
                        <div class="title">TITRE PROFESSIONNEL</div>
                        <div class="title">DEVELOPPEUR WEB/WEB MOBILE</div>
                    </div>
                    
                    <div class="dateXP">
                        JUILLET 2014
                    </div>
                    <div class="titleXP">
                        BACCALAUREAT LITTERAIRE
                    </div>
                    
                </div>
                <div class="sectionXP" id="twoXP">
                    <div class="titleSection">
                        PROFESSIONNEL
                    </div>
                    <div class="dateXP">
                        OCT. 2015 / SEPT. 2018
                    </div>
                    <div class="titleXP">
                        LECLERC SAINT AMAND MONTROND<br>
                        ASSISTANT MANAGER
                    </div>
                    <div class="dateXP">
                        FEV. 2015 / OCT. 2015
                    </div>
                    <div class="titleXP">
                        LECLERC SAINT AMAND MONTROND<br>
                        EMPLOYE LIBRE SERVICE
                    </div>
                </div>
            </div>
            <div class="pagination">
                    <p id="pagination">04</p>
                    <hr>
                    <h4>parcours</h4>
            </div>
        </div>
        <!--Slider 5-->
        </div>
    </main>
    <footer>

    </footer>
    <script src="js/index.js"></script>
</body>
</html>