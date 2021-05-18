<style>
    .splash__container {
        display: flex;
        justify-content: center;
    }

    .splash {
        display: flex;
        flex-direction: column;
        width: 35em;
    }

    .splash h3 {
        color: var(--colour-gray)
    }

    .splash * {
        padding: 0;
        margin: 0;
    }

    .splash__header {
        align-self: flex-start;
    }

    .splash__main {
        align-self: center;
        text-shadow: 0 0 10px var(--colour-green-2);
        font-size: 4em;
    }

    .splash__footer {
        align-self: flex-end;
    }
</style>

<div class="splash__container">
    <div class="splash">
        <h3 class="font-mono splash__header">welcome to the website of</h3>
        <h1 class="font-mono splash__main"><span class="gradient-text-green">kadenscott</span></h1>
        <h3 class="font-mono splash__footer">a <strong>software engineer</strong> from <span class="gradient-text-red">Ontario, CA</span></h3>
    </div>
</div>
