## Les bases

### Sommaire de la page

1. [Liens utiles](#liens-utiles)
2. [Définition et étymologie](#définition-et-étymologie)
3. [La forme d'une fractale](#la-forme-dune-fractale)

### 1. Liens utiles

[Les Fractales - Micmaths](https://www.youtube.com/watch?v=iFA3g_4myFw)

### 2. Définition et étymologie

---

Définition du dictionnaire de l'académie française :

FRACTAL, FRACTALE

→ adjectif (pluriel Fractals, fractales).

Étymologie : xxe siècle. Dérivé savant du latin *fractus*, participe passé de *frangere*, « briser ».

Marque de domaine : MATHÉMATIQUES.

Dont la forme est caractérisée par sa grande irrégularité, sa fragmentation. *Un objet fractal* ou, subst., *une fractale*. *La géométrie des fractales*.

___

Une fractale est une forme disposant de détails infinis. C'est-à-dire qu'il est impossible de zoomer sur un point jusqu'à avoir une ligne droite ou une forme non-lisse, contrairement au cercle par exemple.

Le mot fractal a été forgé à partir du mot *fractus* (brisé/fracturé) par Benoît Mandelbrot en 1974.

### 3. La dimension d'une fractale

Une fractale n'est ni une ligne ni une surface.

- la longueur d'une ligne est mesurée en mètre ($m$), on dit qu'elle est de dimension 1.
- l'aire d'une surface est par exemple mesurée en $m^2$, on dit qu'elle est de dimension 2.

Dans l'image ci-dessous :

$I$ = itération

$D$ = dimension

$N$ = nombre de surfaces obtenues

![dimension-entiere.png](/Users/alice/Documents/GitHub/Projet-DNA__Alice-Massart/recherches/img/les-bases/dimension-entiere.png)

- une fractale est mesurée avec une dimension se situant **ENTRE** 1 et 2. Cette dimension non-entière est appelée dimension fractale.
  
  Exemples concrets :
  
  $D$ = dimension fractale
  
  $0 < D < 1$ : Poussière de Cantor ($D≈0,63$)
  
  $1 < D < 2$ : Koch ($D≈1,26$)
  
  $2 < D < 3$ : Éponge de Menger ($D ≈ 2,73$)

Fractales naturelles réelles :

- côtes : $1 < D < 2$  → $D ≈ 1,15 / 1,25$

- nuages : $2 < D < 3$  → $D ≈ 2,3/2,4$ ([Les nuages, un exemple de structures fractales auto-organisées issues du (…) - Matière et Révolution](https://www.matierevolution.fr/spip.php?article5747))

- turbulences 3D : $2 < D < 3$  → $D ≈ 2,7$

- Réseaux vasculaires : $2 < D < 3$  → $D≈2,7$

[Liste de fractales par dimension de Hausdorff — Wikipédia](https://fr.wikipedia.org/wiki/Liste_de_fractales_par_dimension_de_Hausdorff)

#### La dimension de Hausdorff

#### La dimension de Minkowski

En géométrie fractale, la dimension de Minkowski-Bouligand est une manière de déterminer la dimension fractale d'un sous-ensemble $S$ dans un espace euclidien 
$ℝ^{n}$ ou, plus généralement, dans un espace métrique.

Pour calculer cette dimension pour une fractale $S$, placer cette fractale dans un réseau carré et compter le nombre de cases nécessaires pour recouvrir l'ensemble. La dimension de Minkowski est calculée en observant comment ce nombre de cases évolue à mesure que le réseau s'affine à l'infini.

![dimension-minkowski.png](/Users/alice/Documents/GitHub/Projet-DNA__Alice-Massart/recherches/img/les-bases/dimension-minkowski.png)

La dimension de Minkowski peut être vue comme la façon dont on peut recouvrir un ensemble avec de petits objets de même taille alors que la dimension de Hausdorff considère des recouvrements par des petits objets de taille variant, peut-être, de manière très significative. De plus, la dimension de Hausdorff s'appuie sur une mesure, ce qui n'est pas le cas pour la dimension de Minkowski, ce qui occasionne certaines propriétés jugées indésirables.

Malgré cela, la dimension de Minkowski est couramment utilisée pour la mesure d'objets fractals, car la mesure de Hausdorff est difficile à mettre en application.

src : [Dimension de Minkowski-Bouligand — Wikipédia](https://fr.wikipedia.org/wiki/Dimension_de_Minkowski-Bouligand)
