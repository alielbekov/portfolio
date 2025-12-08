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
        } else if (userAnswer === '0.3') {
            result = 'human';
        } else {
            result = 'wrong';
        }
        showResult = true;
    }
</script>

<main class="p-4 md:p-6 bg-black text-green-500 pt-4 mx-auto w-full max-w-full md:max-w-2xl lg:max-w-3xl">
    <div>
        <h1 class="text-2xl md:text-3xl font-bold">Hi, I'm Ali.</h1>
        <div class="pt-2 pl-4 space-y-1">
            <p>I love building software.</p>
            <p>I play soccer on weekends.</p>
            <p class="break-words">Occasional contributor to <a class="text-blue-500 underline hover:text-green-600" href="https://github.com/ricky0123/vad">Ricky's VAD</a></p>
        </div>
    </div>
    <div class="pt-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-2">Currently</h2>
        <ul class="list-disc pl-6 space-y-1">
            <li class="break-words">Reading <a class="text-blue-500 underline hover:text-green-600" href="https://www.amazon.com/Scalability-Startup-Engineers-Artur-Ejsmont/dp/0071843655" target="_blank">Scalability Rules by Artur Ejsmont</a></li>
            <li class="break-words"><s>Understanding Cisco Networking Technologies (Completed!)</s></li>
            <li class="break-words">Tinkering with <a class="text-blue-500 underline hover:text-green-600" href="https://n8n.io" target="_blank">n8n</a></li>
            <li class="break-words">Looking into <a class="text-blue-500 underline hover:text-green-600" href="https://platform.openai.com/docs/guides/realtime" target="_blank">Realtime Audio API by ChatGPT</a></li>
            <li class="break-words">WEX OTR Card Management Web Service - "SOAP" servers</li>
        </ul>
    </div>
    <div class="pt-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-2">Featured projects</h2>
        <ol class="list-disc pl-6 space-y-2">
            <li class="break-words"> <a class= "text-blue-500 underline hover:text-green-600" href="https://all-in-hackathon-20299.devpost.com/submissions/search?utf8=%E2%9C%93&terms=voicesync&sort=alpha" target="_blank">VoiceSync</a>, a speech-to-text note-taking editor (1st place at All-In Hackathon, Most Interactive Project)</li>
            <li class="break-words"> <a class= "text-blue-500 underline hover:text-green-600" href="https://www.youtube.com/@interviewprep-ing" target="_blank">InterviewPrep</a>, an AI interviewer for IELTS, TOEFL, and DET</li>
            <li class="break-words"> <a class= "text-blue-500 underline hover:text-green-600" href="https://alumni.langapex.org" target="_blank">Alumni.Langapex.org</a>, a website for alumni of the Langapex Learning Center</li>
            <li class="break-words"> <a class= "text-blue-500 underline hover:text-green-600" href="https://universalban.com" target="_blank">Universal Ban</a>, a Chrome extension that blocks social media content you don't want to see</li>
            <li class="break-words"> <a class= "text-blue-500 underline hover:text-green-600" href="" target="_blank">Multimodal Cat‑Friendly Home Detector (2nd place at CalHacks)</a></li>
        </ol>
    </div>


    <div class="pt-8 border-t border-gray-800 mt-8">
        <p class="mb-2">What does <code class="bg-gray-900 px-1">0.1 + 0.2</code> equal?</p>
        <form onsubmit={(e) => { e.preventDefault(); checkAnswer(); }} class="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
            <input
                required
                type="text" 
                bind:value={userAnswer}
                placeholder="Enter your answer..."
                class="bg-gray-900 border border-gray-700 px-3 py-2 rounded text-green-500 focus:outline-none focus:border-green-500 flex-1"
            />
            <button 
                type="submit"
                class="bg-green-700 hover:bg-green-600 px-4 py-2 rounded transition-colors"
            >
                Submit
            </button>
        </form>
        {#if showResult}
            {#if result === 'human'}
                <div class="mt-3 text-green-400 break-words">
                    <p class="text-lg md:text-xl font-bold">🎉 You're human!</p>
                    <p class="mt-2">You're right. Mathematically, 0.1 + 0.2 equals 0.3, but computers use binary floating-point arithmetic and can't represent these decimals exactly.</p>
                    <p class="mt-2">In most programming languages, <code class="bg-gray-900 px-1 break-all">0.1 + 0.2</code> actually equals <code class="bg-gray-900 px-1 break-all">0.30000000000000004</code> due to rounding errors.</p>
                    <p class="mt-2">Learn more: <a class="text-blue-500 underline hover:text-green-600" href="https://en.wikipedia.org/wiki/Floating-point_arithmetic" target="_blank">Floating-point arithmetic on Wikipedia</a></p>
                </div>
            {:else if result === 'robot'}   
                <div class="mt-3 text-red-400 break-words">
                    <p class="text-lg md:text-xl font-bold">Hmmmm. Fishy fishy</p>
                    <p class="mt-2">Close but no cigar. Yes, computers use binary floating-point arithmetic and can't represent these decimals exactly.</p>
                    <p class="mt-2">In most programming languages, <code class="bg-gray-900 px-1 break-all">0.1 + 0.2</code> actually equals <code class="bg-gray-900 px-1 break-all">0.30000000000000004</code> due to rounding errors.</p>
                    <p class="mt-2">Learn more: <a class="text-blue-500 underline hover:text-green-600" href="https://en.wikipedia.org/wiki/Floating-point_arithmetic" target="_blank">Floating-point arithmetic on Wikipedia</a></p>
                </div>
            {:else if result === 'exact'}
                <div class="mt-3 text-red-400 break-words">
                    <p class="text-lg md:text-xl font-bold">👀 Wow! did not expect that!</p>
                    <p class="mt-2">a programmer? or a robot?</p>
                    <p class="mt-2">In most programming languages, <code class="bg-gray-900 px-1 break-all">0.1 + 0.2</code> actually equals <code class="bg-gray-900 px-1 break-all">0.30000000000000004</code> due to rounding errors.</p>
                    <p class="mt-2">Learn more: <a class="text-blue-500 underline hover:text-green-600" href="https://en.wikipedia.org/wiki/Floating-point_arithmetic" target="_blank">Floating-point arithmetic on Wikipedia</a></p>
                </div>
            {:else if result === 'wrong'}
                <div class="mt-3 text-red-400 break-words">
                    <p class="text-lg md:text-xl font-bold">Wow! a wrong answer? Haven't seen that in a while</p>
                    <p class="mt-2">You must be a human</p>
                    <p class="mt-2">In most programming languages, <code class="bg-gray-900 px-1 break-all">0.1 + 0.2</code> actually equals <code class="bg-gray-900 px-1 break-all">0.30000000000000004</code> due to rounding errors.</p>
                    <p class="mt-2">Learn more: <a class="text-blue-500 underline hover:text-green-600" href="https://en.wikipedia.org/wiki/Floating-point_arithmetic" target="_blank">Floating-point arithmetic on Wikipedia</a></p>
                </div>
            {/if}
        {/if}
    </div>

</main> 