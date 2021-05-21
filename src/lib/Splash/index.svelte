<div class="splash__container box-shadow">
    <div class="splash">
        <h3 class="splash__text splash__header gradient-blue-green text-dark">welcome to the website of</h3>
        <h1 class="splash__text splash__main"><span class="gradient-blue-green gradient-text">kaden scott</span></h1>
        <h3 class="splash__text splash__footer gradient-blue-green text-dark">a <strong>software engineer</strong> from <span class="gradient-text-red">Ontario, 🇨🇦</span></h3>
    </div>
</div>

<style>
    .splash__container {
        max-width: 80vw;
        align-self: center;
        background-color: var(--theme-colour-bg-darker);
        padding: 2em 4em;
        border-radius: 0.5em;
        margin-bottom: 3em;
    }

    .splash {
        display: flex;
        flex-direction: column;
    }

    .splash__header {
        font-size: 1.25rem;
        width: 100%;
    }

    .splash__main {
        font-size: 4.25rem;
        align-self: center;
        text-align: center;
        width: 100%;
    }

    .splash__footer {
        font-size: 1.25rem;
        text-align: right;
        width: 100%;
    }

    .splash__text {
        background-color: inherit;
    }

    @media (max-width: 1200px) {
        .splash {
            justify-content: center;
            align-items: center;
        }

        .splash__text {
            text-align: center;
        }
    }
</style>
