import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterBar from "./FilterBar";

const PODetailTable = ({ onBack }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const userFilters = useMemo(() => location.state?.userFilters || {}, [location.state?.userFilters]);
  const filterFromCard = location.state?.filter || "all";

  const [filters, setFilters] = useState({
    fromDate: userFilters.fromDate || "",
    toDate: userFilters.toDate || "",
    country: userFilters.country || "",
    customer: userFilters.customer || "",
    poType: userFilters.poType || "",
    poAge: "",
  });

  const [selectedPO, setSelectedPO] = useState(null);

  const poData = [
    {
      poNumber: "PO-1001",
      year: 2024,
      month: "October",
      poType: "Urgent",
      invoiceDate: "2024-10-05",
      country: "China",
      customer: "Cisco Systems",
      poAge: 91,
    },
    {
      poNumber: "PO-1002",
      year: 2023,
      month: "May",
      poType: "Urgent",
      invoiceDate: "2023-05-19",
      country: "Canada",
      customer: "Huawei",
      poAge: 22,
    },
    {
      "poNumber": "PO-1003",
      "year": 2023,
      "month": "December",
      "poType": "Standard",
      "invoiceDate": "2023-12-22",
      "country": "Germany",
      "customer": "Cisco Systems",
      "poAge": 84
    },
    {
      "poNumber": "PO-1004",
      "year": 2023,
      "month": "April",
      "poType": "Regular",
      "invoiceDate": "2023-04-18",
      "country": "Germany",
      "customer": "Broadcom Inc.",
      "poAge": 63
    },
    {
      "poNumber": "PO-1005",
      "year": 2024,
      "month": "December",
      "poType": "Standard",
      "invoiceDate": "2024-12-08",
      "country": "USA",
      "customer": "Juniper Networks",
      "poAge": 96
    },
    {
      "poNumber": "PO-1006",
      "year": 2023,
      "month": "January",
      "poType": "Regular",
      "invoiceDate": "2023-01-09",
      "country": "China",
      "customer": "Ciena Corporation",
      "poAge": 21
    },
    {
      "poNumber": "PO-1007",
      "year": 2024,
      "month": "August",
      "poType": "Regular",
      "invoiceDate": "2024-08-09",
      "country": "Japan",
      "customer": "Juniper Networks",
      "poAge": 41
    },
    {
      "poNumber": "PO-1008",
      "year": 2024,
      "month": "August",
      "poType": "Standard",
      "invoiceDate": "2024-08-02",
      "country": "Japan",
      "customer": "Juniper Networks",
      "poAge": 86
    },
    {
      "poNumber": "PO-1009",
      "year": 2024,
      "month": "August",
      "poType": "Standard",
      "invoiceDate": "2024-08-04",
      "country": "Germany",
      "customer": "Huawei",
      "poAge": 100
    },
    {
      "poNumber": "PO-1010",
      "year": 2023,
      "month": "April",
      "poType": "Regular",
      "invoiceDate": "2023-04-08",
      "country": "India",
      "customer": "Cisco Systems",
      "poAge": 86
    },
    {
      "poNumber": "PO-1011",
      "year": 2023,
      "month": "February",
      "poType": "Urgent",
      "invoiceDate": "2023-02-28",
      "country": "India",
      "customer": "Huawei",
      "poAge": 74
    },
    {
      "poNumber": "PO-1012",
      "year": 2024,
      "month": "September",
      "poType": "Standard",
      "invoiceDate": "2024-09-26",
      "country": "China",
      "customer": "Samsung Networks",
      "poAge": 120
    },
    {
      "poNumber": "PO-1013",
      "year": 2023,
      "month": "June",
      "poType": "Urgent",
      "invoiceDate": "2023-06-10",
      "country": "Canada",
      "customer": "Fujitsu",
      "poAge": 60
    },
    {
      "poNumber": "PO-1014",
      "year": 2024,
      "month": "February",
      "poType": "Urgent",
      "invoiceDate": "2024-02-02",
      "country": "Japan",
      "customer": "Arista Networks",
      "poAge": 86
    },
    {
      "poNumber": "PO-1015",
      "year": 2024,
      "month": "April",
      "poType": "Urgent",
      "invoiceDate": "2024-04-17",
      "country": "India",
      "customer": "Qualcomm",
      "poAge": 11
    },
    {
      "poNumber": "PO-1016",
      "year": 2024,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2024-05-26",
      "country": "France",
      "customer": "Motorola Solutions",
      "poAge": 35
    },
    {
      "poNumber": "PO-1017",
      "year": 2023,
      "month": "March",
      "poType": "Urgent",
      "invoiceDate": "2023-03-12",
      "country": "Australia",
      "customer": "ZTE",
      "poAge": 8
    },
    {
      "poNumber": "PO-1018",
      "year": 2023,
      "month": "April",
      "poType": "Regular",
      "invoiceDate": "2023-04-11",
      "country": "Canada",
      "customer": "Fujitsu",
      "poAge": 3
    },
    {
      "poNumber": "PO-1019",
      "year": 2024,
      "month": "July",
      "poType": "Standard",
      "invoiceDate": "2024-07-24",
      "country": "Brazil",
      "customer": "Ciena Corporation",
      "poAge": 81
    },
    {
      "poNumber": "PO-1020",
      "year": 2024,
      "month": "November",
      "poType": "Regular",
      "invoiceDate": "2024-11-24",
      "country": "USA",
      "customer": "Qualcomm",
      "poAge": 8
    },
    {
      "poNumber": "PO-1021",
      "year": 2023,
      "month": "November",
      "poType": "Regular",
      "invoiceDate": "2023-11-25",
      "country": "France",
      "customer": "ZTE",
      "poAge": 58
    },
    {
      "poNumber": "PO-1022",
      "year": 2023,
      "month": "December",
      "poType": "Standard",
      "invoiceDate": "2023-12-04",
      "country": "France",
      "customer": "NEC Corporation",
      "poAge": 50
    },
    {
      "poNumber": "PO-1023",
      "year": 2024,
      "month": "July",
      "poType": "Standard",
      "invoiceDate": "2024-07-06",
      "country": "USA",
      "customer": "Alcatel-Lucent",
      "poAge": 74
    },
    {
      "poNumber": "PO-1024",
      "year": 2024,
      "month": "September",
      "poType": "Standard",
      "invoiceDate": "2024-09-02",
      "country": "Canada",
      "customer": "Samsung Networks",
      "poAge": 55
    },
    {
      "poNumber": "PO-1025",
      "year": 2024,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2024-07-13",
      "country": "Germany",
      "customer": "Ciena Corporation",
      "poAge": 12
    },
    {
      "poNumber": "PO-1026",
      "year": 2024,
      "month": "November",
      "poType": "Urgent",
      "invoiceDate": "2024-11-08",
      "country": "Australia",
      "customer": "NEC Corporation",
      "poAge": 91
    },
    {
      "poNumber": "PO-1027",
      "year": 2024,
      "month": "July",
      "poType": "Standard",
      "invoiceDate": "2024-07-05",
      "country": "Australia",
      "customer": "NEC Corporation",
      "poAge": 100
    },
    {
      "poNumber": "PO-1028",
      "year": 2024,
      "month": "April",
      "poType": "Regular",
      "invoiceDate": "2024-04-25",
      "country": "UK",
      "customer": "Qualcomm",
      "poAge": 56
    },
    {
      "poNumber": "PO-1029",
      "year": 2024,
      "month": "November",
      "poType": "Regular",
      "invoiceDate": "2024-11-18",
      "country": "Germany",
      "customer": "Cisco Systems",
      "poAge": 63
    },
    {
      "poNumber": "PO-1030",
      "year": 2024,
      "month": "February",
      "poType": "Urgent",
      "invoiceDate": "2024-02-04",
      "country": "Canada",
      "customer": "Huawei",
      "poAge": 84
    },
    {
      "poNumber": "PO-1031",
      "year": 2024,
      "month": "October",
      "poType": "Urgent",
      "invoiceDate": "2024-10-16",
      "country": "Japan",
      "customer": "Qualcomm",
      "poAge": 2
    },
    {
      "poNumber": "PO-1032",
      "year": 2023,
      "month": "April",
      "poType": "Standard",
      "invoiceDate": "2023-04-21",
      "country": "China",
      "customer": "Juniper Networks",
      "poAge": 86
    },
    {
      "poNumber": "PO-1033",
      "year": 2023,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2023-06-05",
      "country": "Brazil",
      "customer": "Samsung Networks",
      "poAge": 51
    },
    {
      "poNumber": "PO-1034",
      "year": 2023,
      "month": "March",
      "poType": "Urgent",
      "invoiceDate": "2023-03-04",
      "country": "Germany",
      "customer": "Huawei",
      "poAge": 44
    },
    {
      "poNumber": "PO-1035",
      "year": 2024,
      "month": "May",
      "poType": "Urgent",
      "invoiceDate": "2024-05-09",
      "country": "China",
      "customer": "Samsung Networks",
      "poAge": 2
    },
    {
      "poNumber": "PO-1036",
      "year": 2023,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2023-06-16",
      "country": "USA",
      "customer": "Nokia",
      "poAge": 5
    },
    {
      "poNumber": "PO-1037",
      "year": 2024,
      "month": "February",
      "poType": "Standard",
      "invoiceDate": "2024-02-17",
      "country": "Germany",
      "customer": "Cisco Systems",
      "poAge": 65
    },
    {
      "poNumber": "PO-1038",
      "year": 2024,
      "month": "May",
      "poType": "Regular",
      "invoiceDate": "2024-05-19",
      "country": "Australia",
      "customer": "Cisco Systems",
      "poAge": 105
    },
    {
      "poNumber": "PO-1039",
      "year": 2023,
      "month": "January",
      "poType": "Urgent",
      "invoiceDate": "2023-01-14",
      "country": "India",
      "customer": "Cisco Systems",
      "poAge": 81
    },
    {
      "poNumber": "PO-1040",
      "year": 2023,
      "month": "March",
      "poType": "Regular",
      "invoiceDate": "2023-03-24",
      "country": "China",
      "customer": "Alcatel-Lucent",
      "poAge": 30
    },
    {
      "poNumber": "PO-1041",
      "year": 2024,
      "month": "April",
      "poType": "Urgent",
      "invoiceDate": "2024-04-13",
      "country": "Brazil",
      "customer": "Ericsson",
      "poAge": 49
    },
    {
      "poNumber": "PO-1042",
      "year": 2024,
      "month": "May",
      "poType": "Urgent",
      "invoiceDate": "2024-05-01",
      "country": "China",
      "customer": "Juniper Networks",
      "poAge": 34
    },
    {
      "poNumber": "PO-1043",
      "year": 2023,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2023-06-11",
      "country": "Brazil",
      "customer": "Broadcom Inc.",
      "poAge": 78
    },
    {
      "poNumber": "PO-1044",
      "year": 2023,
      "month": "May",
      "poType": "Urgent",
      "invoiceDate": "2023-05-12",
      "country": "UK",
      "customer": "NEC Corporation",
      "poAge": 115
    },
    {
      "poNumber": "PO-1045",
      "year": 2023,
      "month": "April",
      "poType": "Standard",
      "invoiceDate": "2023-04-08",
      "country": "UK",
      "customer": "Qualcomm",
      "poAge": 87
    },
    {
      "poNumber": "PO-1046",
      "year": 2023,
      "month": "March",
      "poType": "Standard",
      "invoiceDate": "2023-03-23",
      "country": "UK",
      "customer": "Juniper Networks",
      "poAge": 83
    },
    {
      "poNumber": "PO-1047",
      "year": 2024,
      "month": "December",
      "poType": "Standard",
      "invoiceDate": "2024-12-12",
      "country": "USA",
      "customer": "Alcatel-Lucent",
      "poAge": 77
    },
    {
      "poNumber": "PO-1048",
      "year": 2023,
      "month": "November",
      "poType": "Standard",
      "invoiceDate": "2023-11-01",
      "country": "Australia",
      "customer": "Arista Networks",
      "poAge": 3
    },
    {
      "poNumber": "PO-1049",
      "year": 2023,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2023-05-16",
      "country": "Japan",
      "customer": "Samsung Networks",
      "poAge": 57
    },
    {
      "poNumber": "PO-1050",
      "year": 2024,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2024-05-19",
      "country": "Brazil",
      "customer": "Arista Networks",
      "poAge": 66
    },
    {
      "poNumber": "PO-1051",
      "year": 2024,
      "month": "April",
      "poType": "Urgent",
      "invoiceDate": "2024-04-28",
      "country": "India",
      "customer": "Ciena Corporation",
      "poAge": 100
    },
    {
      "poNumber": "PO-1052",
      "year": 2024,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2024-01-07",
      "country": "India",
      "customer": "Samsung Networks",
      "poAge": 6
    },
    {
      "poNumber": "PO-1053",
      "year": 2023,
      "month": "October",
      "poType": "Standard",
      "invoiceDate": "2023-10-05",
      "country": "France",
      "customer": "Qualcomm",
      "poAge": 62
    },
    {
      "poNumber": "PO-1054",
      "year": 2024,
      "month": "February",
      "poType": "Urgent",
      "invoiceDate": "2024-02-11",
      "country": "Germany",
      "customer": "Qualcomm",
      "poAge": 118
    },
    {
      "poNumber": "PO-1055",
      "year": 2024,
      "month": "September",
      "poType": "Urgent",
      "invoiceDate": "2024-09-27",
      "country": "Brazil",
      "customer": "Juniper Networks",
      "poAge": 9
    },
    {
      "poNumber": "PO-1056",
      "year": 2023,
      "month": "December",
      "poType": "Urgent",
      "invoiceDate": "2023-12-24",
      "country": "Canada",
      "customer": "Motorola Solutions",
      "poAge": 47
    },
    {
      "poNumber": "PO-1057",
      "year": 2023,
      "month": "October",
      "poType": "Urgent",
      "invoiceDate": "2023-10-24",
      "country": "Japan",
      "customer": "Motorola Solutions",
      "poAge": 32
    },
    {
      "poNumber": "PO-1058",
      "year": 2023,
      "month": "November",
      "poType": "Urgent",
      "invoiceDate": "2023-11-11",
      "country": "China",
      "customer": "Motorola Solutions",
      "poAge": 120
    },
    {
      "poNumber": "PO-1059",
      "year": 2024,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2024-05-13",
      "country": "Brazil",
      "customer": "Qualcomm",
      "poAge": 64
    },
    {
      "poNumber": "PO-1060",
      "year": 2024,
      "month": "February",
      "poType": "Regular",
      "invoiceDate": "2024-02-23",
      "country": "India",
      "customer": "NEC Corporation",
      "poAge": 99
    },
    {
      "poNumber": "PO-1061",
      "year": 2024,
      "month": "November",
      "poType": "Urgent",
      "invoiceDate": "2024-11-05",
      "country": "Brazil",
      "customer": "NEC Corporation",
      "poAge": 63
    },
    {
      "poNumber": "PO-1062",
      "year": 2023,
      "month": "September",
      "poType": "Urgent",
      "invoiceDate": "2023-09-08",
      "country": "China",
      "customer": "Motorola Solutions",
      "poAge": 75
    },
    {
      "poNumber": "PO-1063",
      "year": 2023,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2023-01-23",
      "country": "France",
      "customer": "Samsung Networks",
      "poAge": 50
    },
    {
      "poNumber": "PO-1064",
      "year": 2024,
      "month": "September",
      "poType": "Urgent",
      "invoiceDate": "2024-09-27",
      "country": "Canada",
      "customer": "Huawei",
      "poAge": 54
    },
    {
      "poNumber": "PO-1065",
      "year": 2023,
      "month": "February",
      "poType": "Regular",
      "invoiceDate": "2023-02-25",
      "country": "UK",
      "customer": "Ericsson",
      "poAge": 15
    },
    {
      "poNumber": "PO-1066",
      "year": 2024,
      "month": "December",
      "poType": "Regular",
      "invoiceDate": "2024-12-23",
      "country": "Germany",
      "customer": "ZTE",
      "poAge": 24
    },
    {
      "poNumber": "PO-1067",
      "year": 2023,
      "month": "August",
      "poType": "Standard",
      "invoiceDate": "2023-08-13",
      "country": "USA",
      "customer": "Alcatel-Lucent",
      "poAge": 10
    },
    {
      "poNumber": "PO-1068",
      "year": 2024,
      "month": "March",
      "poType": "Regular",
      "invoiceDate": "2024-03-09",
      "country": "UK",
      "customer": "Qualcomm",
      "poAge": 78
    },
    {
      "poNumber": "PO-1069",
      "year": 2024,
      "month": "December",
      "poType": "Regular",
      "invoiceDate": "2024-12-22",
      "country": "Brazil",
      "customer": "Huawei",
      "poAge": 73
    },
    {
      "poNumber": "PO-1070",
      "year": 2023,
      "month": "May",
      "poType": "Urgent",
      "invoiceDate": "2023-05-24",
      "country": "Brazil",
      "customer": "Nokia",
      "poAge": 54
    },
    {
      "poNumber": "PO-1071",
      "year": 2023,
      "month": "November",
      "poType": "Standard",
      "invoiceDate": "2023-11-24",
      "country": "Brazil",
      "customer": "Alcatel-Lucent",
      "poAge": 8
    },
    {
      "poNumber": "PO-1072",
      "year": 2023,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2023-07-28",
      "country": "China",
      "customer": "Juniper Networks",
      "poAge": 117
    },
    {
      "poNumber": "PO-1073",
      "year": 2024,
      "month": "November",
      "poType": "Standard",
      "invoiceDate": "2024-11-17",
      "country": "Brazil",
      "customer": "Juniper Networks",
      "poAge": 7
    },
    {
      "poNumber": "PO-1074",
      "year": 2024,
      "month": "July",
      "poType": "Standard",
      "invoiceDate": "2024-07-19",
      "country": "Australia",
      "customer": "NEC Corporation",
      "poAge": 26
    },
    {
      "poNumber": "PO-1075",
      "year": 2024,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2024-07-05",
      "country": "Australia",
      "customer": "Ciena Corporation",
      "poAge": 67
    },
    {
      "poNumber": "PO-1076",
      "year": 2023,
      "month": "December",
      "poType": "Urgent",
      "invoiceDate": "2023-12-05",
      "country": "Germany",
      "customer": "Arista Networks",
      "poAge": 57
    },
    {
      "poNumber": "PO-1077",
      "year": 2023,
      "month": "December",
      "poType": "Regular",
      "invoiceDate": "2023-12-10",
      "country": "Canada",
      "customer": "ZTE",
      "poAge": 18
    },
    {
      "poNumber": "PO-1078",
      "year": 2024,
      "month": "November",
      "poType": "Urgent",
      "invoiceDate": "2024-11-13",
      "country": "Japan",
      "customer": "NEC Corporation",
      "poAge": 68
    },
    {
      "poNumber": "PO-1079",
      "year": 2024,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2024-01-27",
      "country": "China",
      "customer": "Huawei",
      "poAge": 45
    },
    {
      "poNumber": "PO-1080",
      "year": 2024,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2024-07-02",
      "country": "Australia",
      "customer": "Broadcom Inc.",
      "poAge": 94
    },
    {
      "poNumber": "PO-1081",
      "year": 2024,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2024-01-21",
      "country": "Brazil",
      "customer": "Ericsson",
      "poAge": 85
    },
    {
      "poNumber": "PO-1082",
      "year": 2024,
      "month": "April",
      "poType": "Standard",
      "invoiceDate": "2024-04-02",
      "country": "Germany",
      "customer": "Broadcom Inc.",
      "poAge": 51
    },
    {
      "poNumber": "PO-1083",
      "year": 2023,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2023-05-03",
      "country": "Brazil",
      "customer": "Ciena Corporation",
      "poAge": 89
    },
    {
      "poNumber": "PO-1084",
      "year": 2023,
      "month": "January",
      "poType": "Urgent",
      "invoiceDate": "2023-01-25",
      "country": "Brazil",
      "customer": "Alcatel-Lucent",
      "poAge": 105
    },
    {
      "poNumber": "PO-1085",
      "year": 2023,
      "month": "March",
      "poType": "Standard",
      "invoiceDate": "2023-03-21",
      "country": "India",
      "customer": "Huawei",
      "poAge": 82
    },
    {
      "poNumber": "PO-1086",
      "year": 2024,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2024-07-01",
      "country": "USA",
      "customer": "Broadcom Inc.",
      "poAge": 84
    },
    {
      "poNumber": "PO-1087",
      "year": 2024,
      "month": "April",
      "poType": "Regular",
      "invoiceDate": "2024-04-03",
      "country": "Japan",
      "customer": "Cisco Systems",
      "poAge": 26
    },
    {
      "poNumber": "PO-1088",
      "year": 2023,
      "month": "February",
      "poType": "Standard",
      "invoiceDate": "2023-02-14",
      "country": "Japan",
      "customer": "Alcatel-Lucent",
      "poAge": 26
    },
    {
      "poNumber": "PO-1089",
      "year": 2024,
      "month": "September",
      "poType": "Standard",
      "invoiceDate": "2024-09-05",
      "country": "UK",
      "customer": "Ciena Corporation",
      "poAge": 85
    },
    {
      "poNumber": "PO-1090",
      "year": 2023,
      "month": "November",
      "poType": "Regular",
      "invoiceDate": "2023-11-21",
      "country": "China",
      "customer": "Juniper Networks",
      "poAge": 76
    },
    {
      "poNumber": "PO-1091",
      "year": 2024,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2024-07-10",
      "country": "India",
      "customer": "Arista Networks",
      "poAge": 58
    },
    {
      "poNumber": "PO-1092",
      "year": 2024,
      "month": "December",
      "poType": "Regular",
      "invoiceDate": "2024-12-03",
      "country": "China",
      "customer": "Arista Networks",
      "poAge": 16
    },
    {
      "poNumber": "PO-1093",
      "year": 2023,
      "month": "March",
      "poType": "Standard",
      "invoiceDate": "2023-03-04",
      "country": "Australia",
      "customer": "Motorola Solutions",
      "poAge": 12
    },
    {
      "poNumber": "PO-1094",
      "year": 2023,
      "month": "December",
      "poType": "Urgent",
      "invoiceDate": "2023-12-11",
      "country": "France",
      "customer": "Nokia",
      "poAge": 26
    },
    {
      "poNumber": "PO-1095",
      "year": 2023,
      "month": "May",
      "poType": "Urgent",
      "invoiceDate": "2023-05-25",
      "country": "France",
      "customer": "Juniper Networks",
      "poAge": 72
    },
    {
      "poNumber": "PO-1096",
      "year": 2023,
      "month": "August",
      "poType": "Regular",
      "invoiceDate": "2023-08-08",
      "country": "India",
      "customer": "Nokia",
      "poAge": 23
    },
    {
      "poNumber": "PO-1097",
      "year": 2024,
      "month": "February",
      "poType": "Standard",
      "invoiceDate": "2024-02-05",
      "country": "Brazil",
      "customer": "Ciena Corporation",
      "poAge": 53
    },
    {
      "poNumber": "PO-1098",
      "year": 2023,
      "month": "January",
      "poType": "Regular",
      "invoiceDate": "2023-01-11",
      "country": "Brazil",
      "customer": "NEC Corporation",
      "poAge": 41
    },
    {
      "poNumber": "PO-1099",
      "year": 2024,
      "month": "February",
      "poType": "Urgent",
      "invoiceDate": "2024-02-08",
      "country": "India",
      "customer": "Nokia",
      "poAge": 106
    },
    {
      "poNumber": "PO-1100",
      "year": 2023,
      "month": "March",
      "poType": "Urgent",
      "invoiceDate": "2023-03-08",
      "country": "France",
      "customer": "NEC Corporation",
      "poAge": 105
    },
    {
      "poNumber": "PO-1101",
      "year": 2024,
      "month": "April",
      "poType": "Urgent",
      "invoiceDate": "2024-04-13",
      "country": "Canada",
      "customer": "Broadcom Inc.",
      "poAge": 13
    },
    {
      "poNumber": "PO-1102",
      "year": 2024,
      "month": "March",
      "poType": "Regular",
      "invoiceDate": "2024-03-12",
      "country": "Brazil",
      "customer": "Ericsson",
      "poAge": 91
    },
    {
      "poNumber": "PO-1103",
      "year": 2023,
      "month": "May",
      "poType": "Urgent",
      "invoiceDate": "2023-05-28",
      "country": "Japan",
      "customer": "Alcatel-Lucent",
      "poAge": 80
    },
    {
      "poNumber": "PO-1104",
      "year": 2023,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2023-07-11",
      "country": "Australia",
      "customer": "Nokia",
      "poAge": 5
    },
    {
      "poNumber": "PO-1105",
      "year": 2023,
      "month": "February",
      "poType": "Regular",
      "invoiceDate": "2023-02-07",
      "country": "Australia",
      "customer": "Ericsson",
      "poAge": 110
    },
    {
      "poNumber": "PO-1106",
      "year": 2024,
      "month": "January",
      "poType": "Urgent",
      "invoiceDate": "2024-01-20",
      "country": "Australia",
      "customer": "ZTE",
      "poAge": 116
    },
    {
      "poNumber": "PO-1107",
      "year": 2024,
      "month": "October",
      "poType": "Regular",
      "invoiceDate": "2024-10-04",
      "country": "Australia",
      "customer": "Juniper Networks",
      "poAge": 54
    },
    {
      "poNumber": "PO-1108",
      "year": 2024,
      "month": "February",
      "poType": "Standard",
      "invoiceDate": "2024-02-03",
      "country": "China",
      "customer": "Ciena Corporation",
      "poAge": 54
    },
    {
      "poNumber": "PO-1109",
      "year": 2024,
      "month": "November",
      "poType": "Regular",
      "invoiceDate": "2024-11-27",
      "country": "USA",
      "customer": "ZTE",
      "poAge": 49
    },
    {
      "poNumber": "PO-1110",
      "year": 2024,
      "month": "March",
      "poType": "Urgent",
      "invoiceDate": "2024-03-27",
      "country": "Canada",
      "customer": "Ericsson",
      "poAge": 85
    },
    {
      "poNumber": "PO-1111",
      "year": 2023,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2023-01-08",
      "country": "Brazil",
      "customer": "NEC Corporation",
      "poAge": 106
    },
    {
      "poNumber": "PO-1112",
      "year": 2024,
      "month": "August",
      "poType": "Standard",
      "invoiceDate": "2024-08-03",
      "country": "India",
      "customer": "Nokia",
      "poAge": 45
    },
    {
      "poNumber": "PO-1113",
      "year": 2024,
      "month": "March",
      "poType": "Standard",
      "invoiceDate": "2024-03-13",
      "country": "France",
      "customer": "Nokia",
      "poAge": 40
    },
    {
      "poNumber": "PO-1114",
      "year": 2023,
      "month": "March",
      "poType": "Urgent",
      "invoiceDate": "2023-03-15",
      "country": "Canada",
      "customer": "Samsung Networks",
      "poAge": 115
    },
    {
      "poNumber": "PO-1115",
      "year": 2023,
      "month": "October",
      "poType": "Standard",
      "invoiceDate": "2023-10-02",
      "country": "Brazil",
      "customer": "Arista Networks",
      "poAge": 28
    },
    {
      "poNumber": "PO-1116",
      "year": 2024,
      "month": "October",
      "poType": "Standard",
      "invoiceDate": "2024-10-15",
      "country": "France",
      "customer": "Ciena Corporation",
      "poAge": 87
    },
    {
      "poNumber": "PO-1117",
      "year": 2024,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2024-07-20",
      "country": "Germany",
      "customer": "Samsung Networks",
      "poAge": 24
    },
    {
      "poNumber": "PO-1118",
      "year": 2024,
      "month": "December",
      "poType": "Urgent",
      "invoiceDate": "2024-12-15",
      "country": "China",
      "customer": "Ciena Corporation",
      "poAge": 75
    },
    {
      "poNumber": "PO-1119",
      "year": 2023,
      "month": "April",
      "poType": "Standard",
      "invoiceDate": "2023-04-13",
      "country": "Japan",
      "customer": "Motorola Solutions",
      "poAge": 55
    },
    {
      "poNumber": "PO-1120",
      "year": 2023,
      "month": "June",
      "poType": "Standard",
      "invoiceDate": "2023-06-28",
      "country": "Germany",
      "customer": "Juniper Networks",
      "poAge": 48
    },
    {
      "poNumber": "PO-1121",
      "year": 2023,
      "month": "January",
      "poType": "Urgent",
      "invoiceDate": "2023-01-23",
      "country": "Japan",
      "customer": "NEC Corporation",
      "poAge": 44
    },
    {
      "poNumber": "PO-1122",
      "year": 2024,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2024-01-05",
      "country": "China",
      "customer": "Huawei",
      "poAge": 2
    },
    {
      "poNumber": "PO-1123",
      "year": 2023,
      "month": "July",
      "poType": "Standard",
      "invoiceDate": "2023-07-21",
      "country": "India",
      "customer": "Fujitsu",
      "poAge": 3
    },
    {
      "poNumber": "PO-1124",
      "year": 2023,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2023-07-17",
      "country": "Japan",
      "customer": "Ciena Corporation",
      "poAge": 65
    },
    {
      "poNumber": "PO-1125",
      "year": 2024,
      "month": "March",
      "poType": "Regular",
      "invoiceDate": "2024-03-20",
      "country": "Brazil",
      "customer": "ZTE",
      "poAge": 34
    },
    {
      "poNumber": "PO-1126",
      "year": 2023,
      "month": "March",
      "poType": "Standard",
      "invoiceDate": "2023-03-08",
      "country": "Japan",
      "customer": "Broadcom Inc.",
      "poAge": 117
    },
    {
      "poNumber": "PO-1127",
      "year": 2024,
      "month": "January",
      "poType": "Urgent",
      "invoiceDate": "2024-01-13",
      "country": "UK",
      "customer": "Cisco Systems",
      "poAge": 65
    },
    {
      "poNumber": "PO-1128",
      "year": 2024,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2024-07-14",
      "country": "Germany",
      "customer": "Alcatel-Lucent",
      "poAge": 43
    },
    {
      "poNumber": "PO-1129",
      "year": 2024,
      "month": "April",
      "poType": "Standard",
      "invoiceDate": "2024-04-27",
      "country": "India",
      "customer": "Ericsson",
      "poAge": 101
    },
    {
      "poNumber": "PO-1130",
      "year": 2024,
      "month": "November",
      "poType": "Standard",
      "invoiceDate": "2024-11-25",
      "country": "Japan",
      "customer": "Motorola Solutions",
      "poAge": 61
    },
    {
      "poNumber": "PO-1131",
      "year": 2023,
      "month": "January",
      "poType": "Urgent",
      "invoiceDate": "2023-01-16",
      "country": "USA",
      "customer": "Juniper Networks",
      "poAge": 117
    },
    {
      "poNumber": "PO-1132",
      "year": 2024,
      "month": "February",
      "poType": "Regular",
      "invoiceDate": "2024-02-08",
      "country": "Australia",
      "customer": "Broadcom Inc.",
      "poAge": 12
    },
    {
      "poNumber": "PO-1133",
      "year": 2024,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2024-01-17",
      "country": "China",
      "customer": "NEC Corporation",
      "poAge": 69
    },
    {
      "poNumber": "PO-1134",
      "year": 2024,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2024-07-07",
      "country": "France",
      "customer": "Samsung Networks",
      "poAge": 79
    },
    {
      "poNumber": "PO-1135",
      "year": 2023,
      "month": "January",
      "poType": "Regular",
      "invoiceDate": "2023-01-09",
      "country": "Australia",
      "customer": "Broadcom Inc.",
      "poAge": 99
    },
    {
      "poNumber": "PO-1136",
      "year": 2024,
      "month": "October",
      "poType": "Urgent",
      "invoiceDate": "2024-10-05",
      "country": "Japan",
      "customer": "Motorola Solutions",
      "poAge": 35
    },
    {
      "poNumber": "PO-1137",
      "year": 2024,
      "month": "February",
      "poType": "Urgent",
      "invoiceDate": "2024-02-15",
      "country": "China",
      "customer": "Arista Networks",
      "poAge": 20
    },
    {
      "poNumber": "PO-1138",
      "year": 2023,
      "month": "October",
      "poType": "Urgent",
      "invoiceDate": "2023-10-07",
      "country": "Germany",
      "customer": "Qualcomm",
      "poAge": 37
    },
    {
      "poNumber": "PO-1139",
      "year": 2024,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2024-01-25",
      "country": "India",
      "customer": "ZTE",
      "poAge": 107
    },
    {
      "poNumber": "PO-1140",
      "year": 2024,
      "month": "August",
      "poType": "Regular",
      "invoiceDate": "2024-08-22",
      "country": "China",
      "customer": "Ciena Corporation",
      "poAge": 48
    },
    {
      "poNumber": "PO-1141",
      "year": 2024,
      "month": "March",
      "poType": "Urgent",
      "invoiceDate": "2024-03-24",
      "country": "Japan",
      "customer": "Alcatel-Lucent",
      "poAge": 85
    },
    {
      "poNumber": "PO-1142",
      "year": 2023,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2023-05-20",
      "country": "China",
      "customer": "NEC Corporation",
      "poAge": 92
    },
    {
      "poNumber": "PO-1143",
      "year": 2024,
      "month": "February",
      "poType": "Regular",
      "invoiceDate": "2024-02-17",
      "country": "Germany",
      "customer": "Samsung Networks",
      "poAge": 65
    },
    {
      "poNumber": "PO-1144",
      "year": 2024,
      "month": "October",
      "poType": "Standard",
      "invoiceDate": "2024-10-11",
      "country": "Canada",
      "customer": "ZTE",
      "poAge": 18
    },
    {
      "poNumber": "PO-1145",
      "year": 2023,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2023-07-02",
      "country": "France",
      "customer": "Fujitsu",
      "poAge": 88
    },
    {
      "poNumber": "PO-1146",
      "year": 2023,
      "month": "January",
      "poType": "Regular",
      "invoiceDate": "2023-01-19",
      "country": "Canada",
      "customer": "Samsung Networks",
      "poAge": 76
    },
    {
      "poNumber": "PO-1147",
      "year": 2023,
      "month": "October",
      "poType": "Urgent",
      "invoiceDate": "2023-10-13",
      "country": "USA",
      "customer": "Ciena Corporation",
      "poAge": 62
    },
    {
      "poNumber": "PO-1148",
      "year": 2023,
      "month": "July",
      "poType": "Standard",
      "invoiceDate": "2023-07-05",
      "country": "Canada",
      "customer": "NEC Corporation",
      "poAge": 19
    },
    {
      "poNumber": "PO-1149",
      "year": 2023,
      "month": "January",
      "poType": "Regular",
      "invoiceDate": "2023-01-23",
      "country": "India",
      "customer": "Qualcomm",
      "poAge": 20
    },
    {
      "poNumber": "PO-1150",
      "year": 2024,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2024-07-19",
      "country": "Canada",
      "customer": "ZTE",
      "poAge": 74
    },
    {
      "poNumber": "PO-1151",
      "year": 2023,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2023-05-21",
      "country": "Canada",
      "customer": "Ericsson",
      "poAge": 57
    },
    {
      "poNumber": "PO-1152",
      "year": 2023,
      "month": "June",
      "poType": "Standard",
      "invoiceDate": "2023-06-07",
      "country": "Germany",
      "customer": "ZTE",
      "poAge": 27
    },
    {
      "poNumber": "PO-1153",
      "year": 2023,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2023-06-20",
      "country": "Germany",
      "customer": "Ciena Corporation",
      "poAge": 34
    },
    {
      "poNumber": "PO-1154",
      "year": 2024,
      "month": "September",
      "poType": "Urgent",
      "invoiceDate": "2024-09-28",
      "country": "USA",
      "customer": "Broadcom Inc.",
      "poAge": 109
    },
    {
      "poNumber": "PO-1155",
      "year": 2023,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2023-06-23",
      "country": "Brazil",
      "customer": "Fujitsu",
      "poAge": 24
    },
    {
      "poNumber": "PO-1156",
      "year": 2023,
      "month": "July",
      "poType": "Standard",
      "invoiceDate": "2023-07-01",
      "country": "Australia",
      "customer": "Ericsson",
      "poAge": 108
    },
    {
      "poNumber": "PO-1157",
      "year": 2023,
      "month": "May",
      "poType": "Urgent",
      "invoiceDate": "2023-05-11",
      "country": "France",
      "customer": "Ericsson",
      "poAge": 34
    },
    {
      "poNumber": "PO-1158",
      "year": 2023,
      "month": "April",
      "poType": "Regular",
      "invoiceDate": "2023-04-03",
      "country": "France",
      "customer": "Juniper Networks",
      "poAge": 37
    },
    {
      "poNumber": "PO-1159",
      "year": 2024,
      "month": "September",
      "poType": "Urgent",
      "invoiceDate": "2024-09-11",
      "country": "India",
      "customer": "Huawei",
      "poAge": 81
    },
    {
      "poNumber": "PO-1160",
      "year": 2023,
      "month": "March",
      "poType": "Regular",
      "invoiceDate": "2023-03-02",
      "country": "USA",
      "customer": "Alcatel-Lucent",
      "poAge": 73
    },
    {
      "poNumber": "PO-1161",
      "year": 2024,
      "month": "January",
      "poType": "Regular",
      "invoiceDate": "2024-01-03",
      "country": "France",
      "customer": "Broadcom Inc.",
      "poAge": 53
    },
    {
      "poNumber": "PO-1162",
      "year": 2024,
      "month": "October",
      "poType": "Urgent",
      "invoiceDate": "2024-10-12",
      "country": "Brazil",
      "customer": "Alcatel-Lucent",
      "poAge": 109
    },
    {
      "poNumber": "PO-1163",
      "year": 2023,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2023-07-14",
      "country": "Brazil",
      "customer": "Broadcom Inc.",
      "poAge": 89
    },
    {
      "poNumber": "PO-1164",
      "year": 2023,
      "month": "August",
      "poType": "Urgent",
      "invoiceDate": "2023-08-23",
      "country": "USA",
      "customer": "Qualcomm",
      "poAge": 54
    },
    {
      "poNumber": "PO-1165",
      "year": 2023,
      "month": "April",
      "poType": "Regular",
      "invoiceDate": "2023-04-14",
      "country": "France",
      "customer": "Alcatel-Lucent",
      "poAge": 101
    },
    {
      "poNumber": "PO-1166",
      "year": 2024,
      "month": "August",
      "poType": "Regular",
      "invoiceDate": "2024-08-01",
      "country": "Japan",
      "customer": "Motorola Solutions",
      "poAge": 31
    },
    {
      "poNumber": "PO-1167",
      "year": 2023,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2023-05-11",
      "country": "UK",
      "customer": "ZTE",
      "poAge": 48
    },
    {
      "poNumber": "PO-1168",
      "year": 2024,
      "month": "April",
      "poType": "Urgent",
      "invoiceDate": "2024-04-20",
      "country": "France",
      "customer": "Motorola Solutions",
      "poAge": 84
    },
    {
      "poNumber": "PO-1169",
      "year": 2024,
      "month": "March",
      "poType": "Regular",
      "invoiceDate": "2024-03-22",
      "country": "Canada",
      "customer": "NEC Corporation",
      "poAge": 1
    },
    {
      "poNumber": "PO-1170",
      "year": 2023,
      "month": "May",
      "poType": "Urgent",
      "invoiceDate": "2023-05-23",
      "country": "Canada",
      "customer": "Alcatel-Lucent",
      "poAge": 41
    },
    {
      "poNumber": "PO-1171",
      "year": 2024,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2024-07-02",
      "country": "Australia",
      "customer": "Cisco Systems",
      "poAge": 81
    },
    {
      "poNumber": "PO-1172",
      "year": 2023,
      "month": "April",
      "poType": "Urgent",
      "invoiceDate": "2023-04-09",
      "country": "Brazil",
      "customer": "NEC Corporation",
      "poAge": 101
    },
    {
      "poNumber": "PO-1173",
      "year": 2024,
      "month": "September",
      "poType": "Urgent",
      "invoiceDate": "2024-09-28",
      "country": "India",
      "customer": "Broadcom Inc.",
      "poAge": 44
    },
    {
      "poNumber": "PO-1174",
      "year": 2024,
      "month": "October",
      "poType": "Regular",
      "invoiceDate": "2024-10-08",
      "country": "France",
      "customer": "Arista Networks",
      "poAge": 103
    },
    {
      "poNumber": "PO-1175",
      "year": 2024,
      "month": "July",
      "poType": "Standard",
      "invoiceDate": "2024-07-11",
      "country": "Japan",
      "customer": "Alcatel-Lucent",
      "poAge": 70
    },
    {
      "poNumber": "PO-1176",
      "year": 2024,
      "month": "August",
      "poType": "Standard",
      "invoiceDate": "2024-08-17",
      "country": "Canada",
      "customer": "Samsung Networks",
      "poAge": 40
    },
    {
      "poNumber": "PO-1177",
      "year": 2024,
      "month": "January",
      "poType": "Urgent",
      "invoiceDate": "2024-01-14",
      "country": "Japan",
      "customer": "Motorola Solutions",
      "poAge": 106
    },
    {
      "poNumber": "PO-1178",
      "year": 2024,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2024-06-05",
      "country": "India",
      "customer": "Juniper Networks",
      "poAge": 62
    },
    {
      "poNumber": "PO-1179",
      "year": 2023,
      "month": "March",
      "poType": "Urgent",
      "invoiceDate": "2023-03-08",
      "country": "Australia",
      "customer": "Motorola Solutions",
      "poAge": 36
    },
    {
      "poNumber": "PO-1180",
      "year": 2023,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2023-06-25",
      "country": "China",
      "customer": "Ciena Corporation",
      "poAge": 95
    },
    {
      "poNumber": "PO-1181",
      "year": 2023,
      "month": "December",
      "poType": "Regular",
      "invoiceDate": "2023-12-03",
      "country": "UK",
      "customer": "Ciena Corporation",
      "poAge": 62
    },
    {
      "poNumber": "PO-1182",
      "year": 2023,
      "month": "March",
      "poType": "Regular",
      "invoiceDate": "2023-03-12",
      "country": "China",
      "customer": "Juniper Networks",
      "poAge": 61
    },
    {
      "poNumber": "PO-1183",
      "year": 2024,
      "month": "April",
      "poType": "Standard",
      "invoiceDate": "2024-04-19",
      "country": "India",
      "customer": "Fujitsu",
      "poAge": 19
    },
    {
      "poNumber": "PO-1184",
      "year": 2023,
      "month": "April",
      "poType": "Standard",
      "invoiceDate": "2023-04-20",
      "country": "USA",
      "customer": "NEC Corporation",
      "poAge": 49
    },
    {
      "poNumber": "PO-1185",
      "year": 2023,
      "month": "April",
      "poType": "Regular",
      "invoiceDate": "2023-04-08",
      "country": "Japan",
      "customer": "Alcatel-Lucent",
      "poAge": 25
    },
    {
      "poNumber": "PO-1186",
      "year": 2023,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2023-05-16",
      "country": "Brazil",
      "customer": "Ciena Corporation",
      "poAge": 63
    },
    {
      "poNumber": "PO-1187",
      "year": 2024,
      "month": "October",
      "poType": "Standard",
      "invoiceDate": "2024-10-28",
      "country": "China",
      "customer": "ZTE",
      "poAge": 94
    },
    {
      "poNumber": "PO-1188",
      "year": 2024,
      "month": "April",
      "poType": "Urgent",
      "invoiceDate": "2024-04-23",
      "country": "Canada",
      "customer": "Nokia",
      "poAge": 21
    },
    {
      "poNumber": "PO-1189",
      "year": 2024,
      "month": "October",
      "poType": "Standard",
      "invoiceDate": "2024-10-21",
      "country": "Germany",
      "customer": "Broadcom Inc.",
      "poAge": 72
    },
    {
      "poNumber": "PO-1190",
      "year": 2023,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2023-01-26",
      "country": "India",
      "customer": "Alcatel-Lucent",
      "poAge": 59
    },
    {
      "poNumber": "PO-1191",
      "year": 2023,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2023-06-10",
      "country": "UK",
      "customer": "Nokia",
      "poAge": 54
    },
    {
      "poNumber": "PO-1192",
      "year": 2024,
      "month": "September",
      "poType": "Standard",
      "invoiceDate": "2024-09-27",
      "country": "France",
      "customer": "Huawei",
      "poAge": 70
    },
    {
      "poNumber": "PO-1193",
      "year": 2023,
      "month": "November",
      "poType": "Urgent",
      "invoiceDate": "2023-11-02",
      "country": "Germany",
      "customer": "Huawei",
      "poAge": 58
    },
    {
      "poNumber": "PO-1194",
      "year": 2023,
      "month": "December",
      "poType": "Urgent",
      "invoiceDate": "2023-12-26",
      "country": "Brazil",
      "customer": "ZTE",
      "poAge": 72
    },
    {
      "poNumber": "PO-1195",
      "year": 2024,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2024-07-25",
      "country": "France",
      "customer": "ZTE",
      "poAge": 91
    },
    {
      "poNumber": "PO-1196",
      "year": 2024,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2024-07-16",
      "country": "UK",
      "customer": "Samsung Networks",
      "poAge": 52
    },
    {
      "poNumber": "PO-1197",
      "year": 2023,
      "month": "February",
      "poType": "Urgent",
      "invoiceDate": "2023-02-14",
      "country": "India",
      "customer": "Juniper Networks",
      "poAge": 46
    },
    {
      "poNumber": "PO-1198",
      "year": 2024,
      "month": "September",
      "poType": "Urgent",
      "invoiceDate": "2024-09-15",
      "country": "Australia",
      "customer": "Motorola Solutions",
      "poAge": 23
    },
    {
      "poNumber": "PO-1199",
      "year": 2024,
      "month": "December",
      "poType": "Regular",
      "invoiceDate": "2024-12-20",
      "country": "Germany",
      "customer": "Ciena Corporation",
      "poAge": 96
    },
    {
      "poNumber": "PO-1200",
      "year": 2023,
      "month": "August",
      "poType": "Regular",
      "invoiceDate": "2023-08-07",
      "country": "Australia",
      "customer": "Broadcom Inc.",
      "poAge": 77
    },
    {
      "poNumber": "PO-1201",
      "year": 2023,
      "month": "June",
      "poType": "Standard",
      "invoiceDate": "2023-06-25",
      "country": "Canada",
      "customer": "Samsung Networks",
      "poAge": 60
    },
    {
      "poNumber": "PO-1202",
      "year": 2024,
      "month": "October",
      "poType": "Regular",
      "invoiceDate": "2024-10-13",
      "country": "Australia",
      "customer": "Alcatel-Lucent",
      "poAge": 7
    },
    {
      "poNumber": "PO-1203",
      "year": 2024,
      "month": "December",
      "poType": "Urgent",
      "invoiceDate": "2024-12-13",
      "country": "Germany",
      "customer": "Qualcomm",
      "poAge": 34
    },
    {
      "poNumber": "PO-1204",
      "year": 2024,
      "month": "November",
      "poType": "Regular",
      "invoiceDate": "2024-11-11",
      "country": "France",
      "customer": "Arista Networks",
      "poAge": 61
    },
    {
      "poNumber": "PO-1205",
      "year": 2023,
      "month": "August",
      "poType": "Regular",
      "invoiceDate": "2023-08-05",
      "country": "UK",
      "customer": "Juniper Networks",
      "poAge": 36
    },
    {
      "poNumber": "PO-1206",
      "year": 2024,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2024-07-01",
      "country": "France",
      "customer": "Arista Networks",
      "poAge": 93
    },
    {
      "poNumber": "PO-1207",
      "year": 2024,
      "month": "December",
      "poType": "Regular",
      "invoiceDate": "2024-12-10",
      "country": "India",
      "customer": "Nokia",
      "poAge": 100
    },
    {
      "poNumber": "PO-1208",
      "year": 2023,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2023-06-13",
      "country": "UK",
      "customer": "Ciena Corporation",
      "poAge": 24
    },
    {
      "poNumber": "PO-1209",
      "year": 2023,
      "month": "June",
      "poType": "Standard",
      "invoiceDate": "2023-06-07",
      "country": "France",
      "customer": "Broadcom Inc.",
      "poAge": 120
    },
    {
      "poNumber": "PO-1210",
      "year": 2024,
      "month": "November",
      "poType": "Standard",
      "invoiceDate": "2024-11-07",
      "country": "Australia",
      "customer": "ZTE",
      "poAge": 110
    },
    {
      "poNumber": "PO-1211",
      "year": 2023,
      "month": "June",
      "poType": "Urgent",
      "invoiceDate": "2023-06-16",
      "country": "UK",
      "customer": "Qualcomm",
      "poAge": 69
    },
    {
      "poNumber": "PO-1212",
      "year": 2023,
      "month": "March",
      "poType": "Urgent",
      "invoiceDate": "2023-03-27",
      "country": "Brazil",
      "customer": "ZTE",
      "poAge": 52
    },
    {
      "poNumber": "PO-1213",
      "year": 2024,
      "month": "March",
      "poType": "Standard",
      "invoiceDate": "2024-03-09",
      "country": "Australia",
      "customer": "Motorola Solutions",
      "poAge": 76
    },
    {
      "poNumber": "PO-1214",
      "year": 2024,
      "month": "November",
      "poType": "Regular",
      "invoiceDate": "2024-11-28",
      "country": "China",
      "customer": "Samsung Networks",
      "poAge": 56
    },
    {
      "poNumber": "PO-1215",
      "year": 2024,
      "month": "September",
      "poType": "Regular",
      "invoiceDate": "2024-09-22",
      "country": "China",
      "customer": "Nokia",
      "poAge": 65
    },
    {
      "poNumber": "PO-1216",
      "year": 2024,
      "month": "February",
      "poType": "Regular",
      "invoiceDate": "2024-02-27",
      "country": "Brazil",
      "customer": "Samsung Networks",
      "poAge": 154
    },
    {
      "poNumber": "PO-1217",
      "year": 2024,
      "month": "July",
      "poType": "Regular",
      "invoiceDate": "2024-07-04",
      "country": "Germany",
      "customer": "Juniper Networks",
      "poAge": 145
    },
    {
      "poNumber": "PO-1218",
      "year": 2023,
      "month": "November",
      "poType": "Regular",
      "invoiceDate": "2023-11-27",
      "country": "India",
      "customer": "Nokia",
      "poAge": 178
    },
    {
      "poNumber": "PO-1219",
      "year": 2023,
      "month": "August",
      "poType": "Regular",
      "invoiceDate": "2023-08-07",
      "country": "China",
      "customer": "Arista Networks",
      "poAge": 197
    },
    {
      "poNumber": "PO-1220",
      "year": 2024,
      "month": "March",
      "poType": "Regular",
      "invoiceDate": "2024-03-10",
      "country": "Germany",
      "customer": "Juniper Networks",
      "poAge": 102
    },
    {
      "poNumber": "PO-1221",
      "year": 2024,
      "month": "April",
      "poType": "Regular",
      "invoiceDate": "2024-04-09",
      "country": "Brazil",
      "customer": "Juniper Networks",
      "poAge": 100
    },
    {
      "poNumber": "PO-1222",
      "year": 2023,
      "month": "July",
      "poType": "Urgent",
      "invoiceDate": "2023-07-14",
      "country": "France",
      "customer": "Cisco Systems",
      "poAge": 62
    },
    {
      "poNumber": "PO-1223",
      "year": 2023,
      "month": "December",
      "poType": "Regular",
      "invoiceDate": "2023-12-03",
      "country": "USA",
      "customer": "Huawei",
      "poAge": 63
    },
    {
      "poNumber": "PO-1224",
      "year": 2024,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2024-01-24",
      "country": "China",
      "customer": "NEC Corporation",
      "poAge": 107
    },
    {
      "poNumber": "PO-1225",
      "year": 2024,
      "month": "October",
      "poType": "Standard",
      "invoiceDate": "2024-10-09",
      "country": "Australia",
      "customer": "Nokia",
      "poAge": 41
    },
    {
      "poNumber": "PO-1226",
      "year": 2024,
      "month": "September",
      "poType": "Standard",
      "invoiceDate": "2024-09-01",
      "country": "UK",
      "customer": "ZTE",
      "poAge": 67
    },
    {
      "poNumber": "PO-1227",
      "year": 2024,
      "month": "August",
      "poType": "Urgent",
      "invoiceDate": "2024-08-04",
      "country": "Brazil",
      "customer": "Fujitsu",
      "poAge": 65
    },
    {
      "poNumber": "PO-1228",
      "year": 2023,
      "month": "November",
      "poType": "Regular",
      "invoiceDate": "2023-11-23",
      "country": "China",
      "customer": "Juniper Networks",
      "poAge": 81
    },
    {
      "poNumber": "PO-1229",
      "year": 2024,
      "month": "February",
      "poType": "Urgent",
      "invoiceDate": "2024-02-11",
      "country": "UK",
      "customer": "Fujitsu",
      "poAge": 87
    },
    {
      "poNumber": "PO-1230",
      "year": 2024,
      "month": "May",
      "poType": "Regular",
      "invoiceDate": "2024-05-22",
      "country": "UK",
      "customer": "Samsung Networks",
      "poAge": 32
    },
    {
      "poNumber": "PO-1231",
      "year": 2023,
      "month": "August",
      "poType": "Regular",
      "invoiceDate": "2023-08-22",
      "country": "Brazil",
      "customer": "Motorola Solutions",
      "poAge": 58
    },
    {
      "poNumber": "PO-1232",
      "year": 2023,
      "month": "February",
      "poType": "Standard",
      "invoiceDate": "2023-02-04",
      "country": "France",
      "customer": "Ericsson",
      "poAge": 109
    },
    {
      "poNumber": "PO-1233",
      "year": 2024,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2024-01-17",
      "country": "Germany",
      "customer": "Ciena Corporation",
      "poAge": 27
    },
    {
      "poNumber": "PO-1234",
      "year": 2024,
      "month": "October",
      "poType": "Urgent",
      "invoiceDate": "2024-10-20",
      "country": "UK",
      "customer": "Alcatel-Lucent",
      "poAge": 55
    },
    {
      "poNumber": "PO-1235",
      "year": 2023,
      "month": "November",
      "poType": "Urgent",
      "invoiceDate": "2023-11-19",
      "country": "USA",
      "customer": "Huawei",
      "poAge": 67
    },
    {
      "poNumber": "PO-1236",
      "year": 2024,
      "month": "December",
      "poType": "Standard",
      "invoiceDate": "2024-12-20",
      "country": "China",
      "customer": "Nokia",
      "poAge": 195
    },
    {
      "poNumber": "PO-1237",
      "year": 2024,
      "month": "October",
      "poType": "Regular",
      "invoiceDate": "2024-10-19",
      "country": "Brazil",
      "customer": "Huawei",
      "poAge": 188
    },
    {
      "poNumber": "PO-1238",
      "year": 2023,
      "month": "June",
      "poType": "Regular",
      "invoiceDate": "2023-06-05",
      "country": "India",
      "customer": "Ericsson",
      "poAge": 35
    },
    {
      "poNumber": "PO-1239",
      "year": 2023,
      "month": "November",
      "poType": "Urgent",
      "invoiceDate": "2023-11-19",
      "country": "Japan",
      "customer": "Samsung Networks",
      "poAge": 101
    },
    {
      "poNumber": "PO-1240",
      "year": 2024,
      "month": "December",
      "poType": "Urgent",
      "invoiceDate": "2024-12-10",
      "country": "Canada",
      "customer": "Ciena Corporation",
      "poAge": 100
    },
    {
      "poNumber": "PO-1241",
      "year": 2024,
      "month": "December",
      "poType": "Urgent",
      "invoiceDate": "2024-12-23",
      "country": "Japan",
      "customer": "Huawei",
      "poAge": 194
    },
    {
      "poNumber": "PO-1242",
      "year": 2024,
      "month": "May",
      "poType": "Urgent",
      "invoiceDate": "2024-05-13",
      "country": "France",
      "customer": "Huawei",
      "poAge": 150
    },
    {
      "poNumber": "PO-1243",
      "year": 2023,
      "month": "August",
      "poType": "Urgent",
      "invoiceDate": "2023-08-03",
      "country": "Canada",
      "customer": "Alcatel-Lucent",
      "poAge": 9
    },
    {
      "poNumber": "PO-1244",
      "year": 2023,
      "month": "May",
      "poType": "Standard",
      "invoiceDate": "2023-05-22",
      "country": "India",
      "customer": "Huawei",
      "poAge": 158
    },
    {
      "poNumber": "PO-1245",
      "year": 2024,
      "month": "January",
      "poType": "Standard",
      "invoiceDate": "2024-01-13",
      "country": "USA",
      "customer": "Arista",
      "poAge": 100
    },
    {
      "poNumber": "PO-1246",
      "year": 2023,
      "month": "September",
      "poType": "Standard",
      "invoiceDate": "2023-09-20",
      "country": "China",
      "customer": "Cisco Systems",
      "poAge": 40
    },
    {
      "poNumber": "PO-1247",
      "year": 2023,
      "month": "April",
      "poType": "Urgent",
      "invoiceDate": "2023-04-11",
      "country": "France",
      "customer": "NEC Corporation",
      "poAge": 65
    },
    {
      "poNumber": "PO-1248",
      "year": 2023,
      "month": "January",
      "poType": "Urgent",
      "invoiceDate": "2023-01-08",
      "country": "Germany",
      "customer": "Huawei",
      "poAge": 56
    },
    {
      "poNumber": "PO-1249",
      "year": 2024,
      "month": "February",
      "poType": "Regular",
      "invoiceDate": "2024-02-23",
      "country": "China",
      "customer": "Juniper Networks",
      "poAge": 115
    },
    {
      "poNumber": "PO-1250",
      "year": 2023,
      "month": "March",
      "poType": "Standard",
      "invoiceDate": "2023-03-24",
      "country": "Australia",
      "customer": "Ericsson",
      "poAge": 65
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    setCurrentPage(1);
  };

  const getFilteredData = () => {
    let data = [...poData];

    if (filterFromCard === "age-30-90") data = data.filter(po => po.poAge >= 30 && po.poAge <= 90);
    if (filterFromCard === "age-less-30") data = data.filter(po => po.poAge < 30);
    if (filterFromCard === "age-over-90") data = data.filter(po => po.poAge > 90);

    if (filters.country) data = data.filter(po => po.country === filters.country);
    if (filters.customer) data = data.filter(po => po.customer === filters.customer);
    if (filters.poType) data = data.filter(po => po.poType === filters.poType);

    if (filters.poAge === "less-30") data = data.filter(po => po.poAge < 30);
    if (filters.poAge === "30-90") data = data.filter(po => po.poAge >= 30 && po.poAge <= 90);
    if (filters.poAge === "greater-90") data = data.filter(po => po.poAge > 90);

    return data;
  };

  const filteredData = getFilteredData();
  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleBackClick = () => {
    if (typeof onBack === "function") {
      onBack(); // If a prop function is provided, call it
    } else if (location.state?.from) {
      navigate(location.state.from); // Go back to the originating route (StatCard or dashboard)
    } else {
      navigate(-1); // Fallback to browser history
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    setFilters(prev => ({ ...prev, poAge: userFilters.poAge || prev.poAge }));
  }, [userFilters]);

  return (
    <div className="p-6 bg-slate-800 rounded-xl text-white">
      <button
        onClick={handleBackClick}
        className="text-slate-300 bg-slate-700 hover:bg-slate-600 p-2 rounded-md mb-4"
      >
        &larr; Back
      </button>

      <FilterBar onFilterChange={handleFilterChange} showPOAgeFilter={true} filters={filters} />

      <div className="table-container">
        <h2 className="text-xl font-semibold mb-4">PO Details Table ({filterFromCard})</h2>

        {filteredData.length === 0 ? (
          <div className="text-center text-slate-300 py-10">No matching PO records found.</div>
        ) : (
          <>
            <div className="overflow-auto rounded-lg border border-slate-700">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-slate-700 text-slate-300">
                  <tr>
                    <th className="px-4 py-2">PO Number</th>
                    <th>Year</th>
                    <th>Month</th>
                    <th>PO Type</th>
                    <th>Invoice Date</th>
                    <th>Country</th>
                    <th>Customer</th>
                    <th>PO Age</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((po, index) => (
                    <tr
                      key={index}
                      className={`border-t border-slate-700 hover:bg-slate-500 ${
                        po.poAge >= 180
                          ? "bg-red-600 text-white"
                          : po.poAge >= 120
                          ? "bg-orange-400 text-white"
                          : po.poAge >= 60
                          ? "bg-orange-200 text-black"
                          : "bg-slate-800 text-white"
                      }`}
                    >
                      <td className="px-4 py-2">{po.poNumber}</td>
                      <td>{po.year}</td>
                      <td>{po.month}</td>
                      <td>{po.poType}</td>
                      <td>{po.invoiceDate}</td>
                      <td>{po.country}</td>
                      <td>{po.customer}</td>
                      <td className="text-center">{po.poAge}</td>
                      <td>
                        <button
                          onClick={() => setSelectedPO(po)}
                          className="bg-blue-600 hover:bg-blue-500 text-white px-1.5 py-1 text-xs rounded-md transition-all"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center items-center mt-4">
              <button
                onClick={() => goToPage(currentPage - 1)}
                className="text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md"
                disabled={currentPage === 1}
              >
                &lt;&lt; Prev
              </button>
              <span className="mx-4 text-slate-300">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => goToPage(currentPage + 1)}
                className="text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md"
                disabled={currentPage === totalPages}
              >
                Next &gt;&gt;
              </button>
            </div>
          </>
        )}
      </div>

      {/* Drill-Down Panel */}
      {selectedPO && (
        <div className="details-container mt-8 bg-slate-700 p-6 rounded-lg border border-slate-600">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">PO Details: {selectedPO.poNumber}</h3>
            <button
              onClick={() => setSelectedPO(null)}
              className="text-red-400 hover:text-red-300 font-bold"
            >
              Close ✕
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Customer:</strong> {selectedPO.customer}</p>
            <p><strong>PO Type:</strong> {selectedPO.poType}</p>
            <p><strong>Invoice Date:</strong> {selectedPO.invoiceDate}</p>
            <p><strong>Country:</strong> {selectedPO.country}</p>
            <p><strong>PO Age:</strong> {selectedPO.poAge} days</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PODetailTable;
