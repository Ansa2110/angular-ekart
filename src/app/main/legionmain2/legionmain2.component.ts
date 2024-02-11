import { Component } from '@angular/core';
import { faChartBar, faGear, faFlag, faList, faPen, faInfo} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-legionmain2',
  templateUrl: './legionmain2.component.html',
  styleUrls: ['./legionmain2.component.css']
})
export class Legionmain2Component {

  services = [{
    icon: faChartBar,
    title: "Extended Warranty",
    description: "Protect your investment with our extended warranty services for hassle-free repairs and support."
  },
  {
    icon: faGear,
    title: "Repair Services",
    description: "Our expert technicians provide swift and efficient repair services to keep your laptop running smoothly."
  },
  {
    icon: faFlag,
    title: "Data Backup",
    description: "Secure your data with our reliable backup solutions, safeguarding your important files from unforeseen events."
  },
  {
    icon: faList,
    title: "Software Suite",
    description: "Get access to premium software tailored for productivity and security with our exclusive software suite."
  },
  {
    icon: faPen,
    title: "Customize Rig",
    description: "Customize your laptop with additional features and hardware to suit your specific computing needs."
  },
  {
    icon: faInfo,
    title: "Tech Help",
    description: "Need assistance? Our tech support team is ready to help with any issues, ensuring minimal downtime."
  }
  ]

}
