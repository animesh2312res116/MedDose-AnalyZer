const extMed = document.getElementById('ext-med') || true;
const extra = document.getElementById('extra') || true;

extMed.addEventListener('change', () => {
    if (extMed.value == 'yes' || extMed.value == 'Yes') {
        extra.style.display = "unset"
    }
    else {
        extra.style.display = "none"
    }
})

const html = `<form class="ser-form" id="form2">
<h1>Medical Details Collector</h1>
<div class="input-field">
    <label for="">Age:</label>
    <input type="number" name="age" id="" placeholder="Enter your Age" required>
</div>
<div class="input-field">
    <label for="">height (in cm):</label>
    <input type="number" name="ht" id="" placeholder="Enter your height" required>
</div>
<div class="input-field">
    <label for="">weight (in kg):</label>
    <input type="number" name="wt" id="" placeholder="Enter your weight" required>
</div>
<div class="input-field">
    <label for="">Blood Group:</label>
    <select required name='bdg'>
        <option value="">Select</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
    </select>
</div>
<div class="input-field">
    <label for="">Blood Pressure (e.g., 120/80):</label>
    <input type="text" name="bdp" id="" placeholder="Enter your Blood Preasure like 120/80" required>
</div>
<div class="input-field">
    <input type="submit" >
</div>
</form>
<div class="image">
<img src="./images/vecteezy_cute-doctor-women-compassionate-and-skilled-models-for_22484658.webp" alt="">
</div>`
const detail = {
    name: "",
    Gender: "",
    SelectProblem: "",
    AnyExtraMedication: "",
    age: '',
    height: "",
    weight: "",
    bloodGroup: "",
    bloodPreasure: "",
}

const form1 = document.getElementById('form1')
const detailForm = document.getElementById('detailForm')

form1.addEventListener('submit', (e) => {
    e.preventDefault()
    const formdata = new FormData(form1)
    detail.name = formdata.get("name")
    detail.Gender = formdata.get("gender")
    detail.SelectProblem = formdata.get("problem")
    detail.AnyExtraMedication = formdata.get("extra")
    console.log(detail)
    detailForm.innerHTML = html

    const form2 = document.getElementById('form2');
    form2.addEventListener('submit', nextform);
})




const nextform = (e) => {
    e.preventDefault()
    const form2 = document.getElementById('form2')
    const formdata = new FormData(form2)
    detail.age = formdata.get("age")
    detail.height = formdata.get("ht")
    detail.weight = formdata.get("wt")
    detail.bloodGroup = formdata.get("bdg")
    detail.bloodPreasure = formdata.get("bdp")
    console.log(detail)

    detailForm.innerHTML = `<div class="image"><img style="width: 90%; aspect-ratio: 1; padding-left:30px;"
    src="./images/vecteezy_expert-and-caring-doctor-women-skilled-and-nurturing-models_22483927.webp" alt="">
</div>
<div class="person-details" id="doc">
<h1>Medical Details Analysis</h1>
<h2>name : ${detail.name}</h2>
<h2>Age : ${detail.age}</h2>
<h2>Gender : ${detail.Gender}</h2>
<h2> height: ${detail.height}</h2>
<h2>weight : ${detail.weight}</h2>
<h2>bloodGroup: ${detail.bloodGroup}</h2>
<h2>bloodPreasure: ${detail.bloodPreasure} </h2>
<h2>Problem : ${detail.SelectProblem}</h2>
<hr style="width:100%;text-align:left;margin-left:0">
<h1>Suggetion</h1>
<div style="width: 90%; height: fit-content; font-weight: 500;">
    <ul>
        <li style="font-size:18px;margin-top: 10px; font-weight:550;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quisquam,
            perspiciatis voluptatum dolore ipsum a dolores sit provident ipsam veniam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. lorem100 Ad, quis nam. Mollitia quos debitis illum harum! Maiores voluptatibus a, ipsum, at quae cumque nesciunt ab, iure eligendi suscipit explicabo magni.</li>
        <li style="font-size:18px; margin-top: 10px; font-weight:550;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quisquam,
            perspiciatis voluptatum dolore ipsum a dolores sit provident ipsam veniam!</li>
        <li style="font-size:18px; margin-top: 10px; font-weight:550;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quisquam,
            perspiciatis voluptatum dolore ipsum a dolores sit provident ipsam veniam!</li>
        <li style="font-size:16px; margin-top: 10px; font-weight:550;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quisquam,
            perspiciatis voluptatum dolore ipsum a dolores sit provident ipsam veniam!</li>
    </ul>
</div>
<button class="print" id="btn">Print</button>
</div>`

    const btn = document.getElementById('btn')
    btn.addEventListener('click', print)


}

const print = () => {
    const doc = document.getElementById('doc');

    html2canvas(doc, {
        scale: 2,  // Increase the scale for better resolution
        useCORS: true,  // Enable cross-origin resource sharing if your content includes external images
        allowTaint: true,  // Allow cross-origin images to taint the canvas
        logging: true,  // Enable logging for debugging purposes
        scrollX: 0,  // Set scroll to 0 to avoid capturing the scroll position
        scrollY: 0,
        windowWidth: doc.scrollWidth,  // Use the full width of the content
        windowHeight: doc.scrollHeight  // Use the full height of the content
    }).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var pdf = new jsPDF({
            orientation: 'p',  // 'p' for portrait, 'l' for landscape
            unit: 'px',  // Set units to pixels
            format: [canvas.width, canvas.height]  // Set format to match canvas size
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('document.pdf');  // Save the PDF with a default name or use a dynamic name
    });
};
