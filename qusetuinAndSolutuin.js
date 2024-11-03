// Qusetion about data base movielens_movies

//1- Comment trouver tous les films appartenant à un genre spécifique, comme "Comedy" ?
//2- Écrivez une requête pour compter le nombre de films dans l'ensemble de données pour chaque genre.
//3- Comment lister tous les genres uniques disponibles dans l'ensemble de données ?
//4- Comment récupérer tous les films sortis dans une année particulière, comme 1995 ?
//5- Écrivez une requête pour trouver des films qui appartiennent à la fois aux genres "Action" et "Comedy".
//6- Comment mettre à jour le titre d'un film avec un _id spécifique ?
//7- Écrivez une requête pour supprimer les films du genre "Documentaire" de l'ensemble de données.
//8- Comment trouver les 10 genres les plus courants dans l'ensemble de données ?
//9- Comment ajouter un nouveau genre à la liste des genres d'un film spécifique ?
//10- Écrivez une rdequête pour trouver des films dont les titres contiennent un mot-clé particulier, comme "Love".
//11- Comment lister les films triés par titre dans l'ordre alphabétique ?
//12- Comment trouver le nombre total de films dans chaque genre, uniquement pour les genres ayant plus de 20 films ?
//13- Écrivez une requête pour trouver des films qui ont plus de trois genres associés.
//14- Comment renommer le champ "genres" en "categories" pour tous les documents ?
//15- Comment trouver des films qui appartiennent soit aux genres "Drame" soit "Thriller", mais pas aux deux ?

// solution this qusetion ==>
1-db.Mouvlens_moves.find({"genres":"Comedy"})
2-db.Mouvlens_moves.find({},{genres:1}).count()
3-db.Mouvlens_moves.distinct("genres")
4-db.Mouvlens_moves.find({title:{$regex:/(1995)/}})
5-db.Mouvlens_moves.find({genres:{$regex:/Action\|Comedy/}})
6-db.Mouvlens_moves.updateOne({_id: 1,title: 'Toy Story (1995)'},{$set: {title:"Toy Story  (1997)"}})
7-db.Mouvlens_moves.deleteMany({genres:"Documentaire"})
8-db.Mouvlens_moves.aggregate([{$project:{spliteTages:{$split:["$genres","|"]}}},{$unwind:"$spliteTages"},{$group:{_id:"$spliteTages",total10:{$count:{}}}},{$sort:{total10:-1}},{$limit:10}])
9-db.Mouvlens_moves.updateOne({_id:1},[{$set:{genres:{$concat:["$genres","|Fantasy"]}}}])
10-db.Mouvlens_moves.find({title:{$regex:/Love/}})
11-db.Mouvlens_moves.find().sort({title:1})
12-db.Mouvlens_moves.aggregate([{$project:{onceGenre:{$split:["$genres","|"]}}},{$unwind:"$onceGenre"},{$group:{_id:"$onceGenre",totalfilmspus20:{$count:{}}}},{$match:{totalfilmspus20:{$gt:20}}}])
13-db.Mouvlens_moves.aggregate([{$project:{title:1,numbrGenre:{$split:["$genres","|"]}}},{$unwind:"$numbrGenre"},{$group:{_id:"$title",plus3genr:{$count:{}}}},{$match:{plus3genr:{$gt:3}}}])
14-db.Mouvlens_moves.updateMany({},{$rename:{"genres":"categories"}})
15-1-db.Mouvlens_moves.aggregate([{$project:{genr:{$split:["$categories","|"]}}},{$match:{$or:[{ genr: { $all: ["Drama"], $nin: ["Thriller"] } },{ genr: { $all: ["Thriller"], $nin: ["Drama"] } }]}}])
15-2-db.Mouvlens_moves.aggregate([{$match:{categories:{$regex:/^(?!.*Thriller)(?=.*Drama).*|^(?!.*Drama)(?=.*Thriller).*/}}}])




    



// Qusetion about data base movielens_users
// Requêtes simples==>
// 1-Trouver tous les utilisateurs dans la base de données.
// 2-Récupérer tous les films notés au-dessus de 4 étoiles.
//3- Lister tous les genres de films uniques dans la base de données.
//4- Obtenir les détails d'un utilisateur par son nom d'utilisateur.
//5- Compter le nombre de films notés par un utilisateur spécifique.
// Insertion, Mises-à-jour et Suppressions ==>
//6- Insérer un nouvel utilisateur dans la base de données avec son nom d'utilisateur et son e-mail.
//7- Mettre à jour l'adresse e-mail d'un utilisateur identifié par son nom d'utilisateur.
//8- Supprimer un film de la base de données par son titre.
//9- Ajouter une nouvelle note pour un film par un utilisateur spécifique.
//10- Supprimer toutes les notes pour un film qui a été supprimé de la base de données.
// Expressions régulières ==>
//11- Trouver tous les utilisateurs dont les noms d'utilisateur commencent par la lettre 'A'.
//12- Récupérer les films dont les titres contiennent le mot "Amour".
//13- Lister tous les utilisateurs dont les adresses e-mail se terminent par '@gmail.com'.
//14- Obtenir les films dont l'année de sortie correspond au motif '20[0-2][0-9]'.
//15- Trouver tous les noms d'utilisateur qui contiennent des chiffres.
// Requêtes sur des tableaux ==>
//16- Obtenir tous les films qui ont été notés par plus de trois utilisateurs.
//17- Trouver les utilisateurs qui ont noté un film spécifique.
//18- Lister toutes les notes données à un film spécifique avec les noms d'utilisateur des évaluateurs.
//19- Récupérer les utilisateurs qui ont plusieurs évaluations dans leur historique.
//20 Compter combien de notes différentes un utilisateur a données à travers tous les films.

// solution question ==>







    // STACK OVERFLOW WEBSITE FOR PROBLEM RESOLVING 