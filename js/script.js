function cambiarColor() {
            const colorin = [
                "linear-gradient(135deg, #ff9a9e, #fad0c4)",
                "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
                "linear-gradient(135deg, #fddb92, #d1fdff)",
                "linear-gradient(135deg, #9890e3, #b1f4cf)",
                "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
            ];
            const random = Math.floor(Math.random() * colorin.length);
            document.body.style.background = colorin[random];
        }