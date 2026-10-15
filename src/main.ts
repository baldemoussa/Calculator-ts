import './style.css'
import { addition, subtraction, multiplication, division, calculate, applyRule } from './advancedCalculator.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    <h1>Advanced Calculator</h1>
    <ol>
        <li>addition(5, 3): ${addition(5, 3)}</li>
        <li>subtraction(5, 3): ${subtraction(5, 3)}</li>
        <li>multiplication(5, 3): ${multiplication(5, 3)}</li>
        <li>division(5, 3): ${division(5, 3)}</li>
        <li>calculate([1, 2, 3, 4, 5]): ${calculate([1, 2, 3, 4, 5])}</li>
        <li>applyRule(5, calculate): ${applyRule(5, calculate)}</li>
    </ol>
</div>
`

