# Menu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Aperçu du menu

Lance `ng serve` dans le terminal (en haut de page Terminal/New Terminal).Lance la commande dans le dossier Menu. Ouvre un navigateur à l'adresse `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Changement du menu

Menu/src/app/component. Choisis le menu a modifier. Modifie
Dans le fichier app.component.html ligne 12 et 15 tu dois renseigner le menu que tu souhaite visible. 
exemple : 
       Tu as le menu1 visible et tu veux mettre le menu 2
       
            <!--
            <app-menu1
              [french]="french"
              [japonaise]="japonaise"
            ></app-menu1>
            -->
            
            <!--
             <app-menu2
              [french]="french"
              [japonaise]="japonaise"
             ></app-menu2>
                -->


## Mise en ligne

->Stop le proceesus de ng serve en tapant le terminal control C
    Dans terminal au même endroit que le ng-serve.
->Vérifié que tous les fichiers modifiés sont enregistrés. Pas de notion de unsaved en haut à gauche du logiciel. Les fichiers modifiés ont la mention M à droite. Pour les enregistrer "control S".
->lancer la commande : git status. Les fichiers modifiés doivent être affiché en rouge.
->lancer la commande : git add --all. Enregistre les fichiers modifiés
->lancer la commande : git status. Les fichiers modifiés doivent être affiché en vert. Enregistrement bien effectué
->lancer la commande: git commit -m "message explicite" (ex: passage au menu hiver)
->lancer la commande : git push
->Vérifier le résultat avec le lien (peut prendre plusieurs minutes) : https://mystifying-cray-25a8ea.netlify.app/
