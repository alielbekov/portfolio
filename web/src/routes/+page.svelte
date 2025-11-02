<script>
    let userAnswer = $state('');
    let result = $state('');
    let showResult = $state(false);

    function checkAnswer() {
        if (!userAnswer.trim()) {
            return; // Don't process if input is empty
        }
        
        if (userAnswer === '0.30000000000000004') {
            result = 'exact';
        } else if (userAnswer.includes('0.3') && userAnswer.includes('000') && userAnswer !== '0.3') {
            result = 'robot';
        } else {
            result = 'human';
        }
        showResult = true;
    }
</script>

<main class="p-2 bg-black text-green-500 pt-4">
    <div>
    <h1 class="text-2xl">Hello my name is Ali</h1>
    <div class="pt-2 pl-4">
    <p>I like programming</p>
    <p>I play soccer during the weekends</p>
    <p>occasional maintainer @ <a class="text-blue-500 underline hover:text-green-600" href="https://github.com/ricky0123/vad">ricky's vad</a></p>
    </div>


    </div>
    <div class="pt-8">
        <h2>Check these out</h2>
        <ol class="list-disc pl-6">
            <li> <a class= "text-blue-500 underline hover:text-green-600" href="https://all-in-hackathon-20299.devpost.com/submissions/search?utf8=%E2%9C%93&terms=voicesync&sort=alpha" target="_blank">VoiceSync</a>, a speech-to-text text editor note taking app (1st place at all-in Hackathon, most interactive project)</li>
            <li> <a class= "text-blue-500 underline hover:text-green-600" href="https://www.youtube.com/@interviewprep-ing" target="_blank">InterviewPrep</a>, an AI interviewer for IELTS, TOELF, DET </li>
            <li> <a class= "text-blue-500 underline hover:text-green-600" href="https://alumni.langapex.org" target="_blank">Alumni.Langapex.org</a>, a website for alumni of Langapex Learning Center</li>
            <li> <a class= "text-blue-500 underline hover:text-green-600" href="https://universalban.com" target="_blank">Universal Ban</a>, a chrome extension that blocks social media content you dont like</li>
            <li> <a class= "text-blue-500 underline hover:text-green-600" href="" target="_blank">MultiModal Cat friendly home detector (2nd place at CalHacks)</a></li>
        </ol>
    </div>

    <div class="pt-8 border-t border-gray-800 mt-8">
        <h2 class="text-xl mb-2">Let's check if you're a human!</h2>
        <p class="mb-2">In JavaScript, what does <code class="bg-gray-900 px-1">0.1 + 0.2</code> equal?</p>
        <form onsubmit={(e) => { e.preventDefault(); checkAnswer(); }} class="flex gap-2 items-center">
            <input
                required
                type="text" 
                bind:value={userAnswer}
                placeholder="Enter your answer..."
                class="bg-gray-900 border border-gray-700 px-3 py-1 rounded text-green-500 focus:outline-none focus:border-green-500"
            />
            <button 
                type="submit"
                class="bg-green-700 hover:bg-green-600 px-4 py-1 rounded transition-colors"
            >
                Submit
            </button>
        </form>
        {#if showResult}
            {#if result === 'human'}
                <div class="mt-3 text-green-400">
                    <p class="text-xl font-bold">🎉 YEEEEEES! You are a human!!!</p>
                    <p class="mt-2">You made a mistake (or maybe you're just being human)! Mathematically, 0.1 + 0.2 should equal 0.3, but computers use binary floating-point arithmetic which can't represent these decimals exactly.</p>
                    <p class="mt-2">In JavaScript (and most programming languages), <code class="bg-gray-900 px-1">0.1 + 0.2</code> actually equals <code class="bg-gray-900 px-1">0.30000000000000004</code> due to rounding errors.</p>
                    <p class="mt-2">Learn more: <a class="text-blue-500 underline hover:text-green-600" href="https://en.wikipedia.org/wiki/Floating-point_arithmetic" target="_blank">Floating-point arithmetic on Wikipedia</a></p>
                </div>
            {:else if result === 'robot'}
                <div class="mt-3 text-red-400">
                    <p class="text-xl font-bold">👀 I smell ROBOT 🤖</p>
                    <p class="mt-2">Nice try! You either looked it up or you're trying too hard with all those zeros. Computers use binary floating-point arithmetic which can't represent these decimals exactly.</p>
                    <p class="mt-2">In JavaScript (and most programming languages), <code class="bg-gray-900 px-1">0.1 + 0.2</code> actually equals <code class="bg-gray-900 px-1">0.30000000000000004</code> due to rounding errors.</p>
                    <p class="mt-2">Learn more: <a class="text-blue-500 underline hover:text-green-600" href="https://en.wikipedia.org/wiki/Floating-point_arithmetic" target="_blank">Floating-point arithmetic on Wikipedia</a></p>
                </div>
            {/if}
        {/if}
    </div>

</main> 