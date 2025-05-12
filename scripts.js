// Yorum formu işle
document.addEventListener("DOMContentLoaded", () => {
    const yorumForm = document.getElementById("yorumForm");
    if (yorumForm) {
        yorumForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const yorum = {
                ad: document.getElementById("yorumAd").value,
                metin: document.getElementById("yorumMetni").value
            };

            const yorumlar = JSON.parse(localStorage.getItem("yorumlar")) || [];
            yorumlar.push(yorum);
            localStorage.setItem("yorumlar", JSON.stringify(yorumlar));
            alert("Yorumunuz eklendi!");
            this.reset();
        });
    }

    // Yorumları listele
    const yorumContainer = document.getElementById("yorumListesi");
    if (yorumContainer) {
        const yorumlar = JSON.parse(localStorage.getItem("yorumlar")) || [];
        if (yorumlar.length === 0) {
            yorumContainer.innerHTML = "<p>Henüz yorum yok.</p>";
            return;
        }

        yorumlar.forEach((yorum, index) => {
            const div = document.createElement("div");
            div.className = "yorum-karti";
            div.innerHTML = `
                <h4>${yorum.ad}:</h4>
                <p>${yorum.metin}</p>
                <hr>
            `;
            yorumContainer.appendChild(div);
        });
    }
});
