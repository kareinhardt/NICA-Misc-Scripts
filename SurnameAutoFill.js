(function() {
    // 100 German surnames
    const surnames = [
        "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann",
        "Schäfer", "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Braun", "Werner",
        "Lange", "Schubert", "Weiß", "Schwarz", "Zimmermann", "Krüger", "Hartmann", "Lenz", "Frank", "Berger",
        "Krause", "Peters", "Maier", "Lehmann", "Hahn", "Kaiser", "Keller", "Schreiber", "Huber", "Ludwig",
        "Eckhardt", "Konrad", "Jäger", "Baumann", "Stein", "Brunner", "Schuster", "Graf", "Arnold", "Döring",
        "Böhme", "Simon", "Dietrich", "Engel", "Schütz", "Friedrich", "Horn", "Busch", "Lindner", "Brandt",
        "Marx", "Sommer", "Kühn", "Heinrich", "Vogt", "Schilling", "Götz", "Fuchs", "Reuter", "Paul",
        "Meißner", "Ott", "Ulrich", "Strauß", "Jakob", "Jung", "Wendel", "Lorenz", "Thiel", "Michel",
        "Kunz", "Hauser", "Ritter", "Sturm", "Heinz", "Merten", "Pohl", "Bergmann", "Schramm", "Voigt",
        "Weidner", "Bachmann", "Ebert", "Rausch", "Ziegler", "Hennig", "Beck", "Henkel", "Brehm", "Reinhardt"
    ];

    let index = 0;

    function autoFillAndSubmit() {
        // Grab the "Last Name" input
        const lastNameInput = document.querySelector('#last_name');
        if (!lastNameInput) {
            console.log("❌ #last_name input not found.");
            return;
        }

        // Use the native setter so frameworks (React, Vue, etc.) see the update
        const nativeSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        const currentSurname = surnames[index % surnames.length];  // cycle through names

        nativeSetter.call(lastNameInput, currentSurname);
        lastNameInput.dispatchEvent(new Event('input', { bubbles: true }));
        lastNameInput.dispatchEvent(new Event('change', { bubbles: true }));

        console.log(`✅ Filled last_name with: ${currentSurname}`);

        // Click the "Update profile" button
        const updateButton = document.querySelector('button[type="submit"].bg-gray-900');
        if (updateButton) {
            updateButton.click();
            console.log('🚀 "Update profile" button clicked.');
        } else {
            console.log("❌ 'Update profile' button not found.");
        }

        // Move to the next surname
        index++;
    }

    // Run autoFillAndSubmit() every 15 seconds
    setInterval(autoFillAndSubmit, 15000);

    console.log("✅ Surname auto-fill & submit script running every 15s.");
})();
